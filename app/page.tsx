import { Converter } from '@/components/converter'
import { createClient } from '@supabase/supabase-js'
import { Toaster } from 'react-hot-toast'
import CurrencyAPI from '@everapi/currencyapi-js'

export const revalidate = 0
export const dynamic = 'force-dynamic'

type Currency = {
  id: number
  value: string
  created_at: string
}

export type CurrencyOption = {
  value: string
  label: string
  EUR: number
  USD: number
  GEL: number
  RUB: number
}

const getCurrencySymbol = (currency: string) => {
  switch (currency) {
    case 'USD':
      return '$'
    case 'EUR':
      return '€'
    case 'GEL':
      return '₾'
    case 'RUB':
      return '₽'
    default:
      return '$'
  }
}

const formatCurrency = (currencyData: Currency) => {
  const value = JSON.parse(currencyData.value)

  const selectOptions: CurrencyOption[] = value.map((c: any) => {
    const cur: any = Object.values(c.data).find((i: any) => i.value === 1)
    return {
      value: cur.code,
      label: `${cur.code} ${getCurrencySymbol(cur.code)}`,
      EUR: c.data['EUR'].value,
      USD: c.data['USD'].value,
      GEL: c.data['GEL'].value,
      RUB: c.data['RUB'].value,
    }
  })

  return selectOptions
}

export default async function Home() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
  )

  const { data = [] } = await supabase
    .from('currencies')
    .select('*')
    .order('created_at', { ascending: false })

  let lastCurrency = data && data.length && data[0]

  const timeNow = +new Date()
  const timeDiff = timeNow - +new Date(lastCurrency.created_at)
  const timeDiffInHours = timeDiff / (1000 * 60 * 60)

  // REFETCH EVERY 12 HOURS
  if (!data || data.length === 0 || timeDiffInHours > 12) {
    const freshCurrencies = await Promise.all([
      new CurrencyAPI(process.env.CURRENCYAPI_KEY)?.latest({
        base_currency: 'USD',
        currencies: 'USD,EUR,GEL,RUB',
      }),
      new CurrencyAPI(process.env.CURRENCYAPI_KEY)?.latest({
        base_currency: 'EUR',
        currencies: 'USD,EUR,GEL,RUB',
      }),
      new CurrencyAPI(process.env.CURRENCYAPI_KEY)?.latest({
        base_currency: 'GEL',
        currencies: 'USD,EUR,GEL,RUB',
      }),
      new CurrencyAPI(process.env.CURRENCYAPI_KEY)?.latest({
        base_currency: 'RUB',
        currencies: 'USD,EUR,GEL,RUB',
      }),
    ])

    await supabase.from('currencies').insert({
      value: JSON.stringify(freshCurrencies),
    })

    lastCurrency = { value: JSON.stringify(freshCurrencies) }
  }

  return (
    <div className="flex py-6 px-6 justify-start md:justify-center items-center h-full flex-col p-2 md:w-6/12 mx-auto">
      <Toaster />
      <Converter options={formatCurrency(lastCurrency)} />

      {/* <h3 className="mt-0 mb-2 text-3xl font-semibold leading-tight">Flipit</h3>
      <h3 className="mt-0 mb-5 text-xl font-semibold leading-tight">
        🚧 Under constuction 🚧
      </h3>
      <Image
        className="animate-reverse-spin"
        alt="icon"
        src="/logoTransparent.png"
        width={75}
        height={75}
        priority={true}
      /> */}
    </div>
  )
}
