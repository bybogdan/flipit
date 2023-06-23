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

const mock = [
  {
    value: 'USD',
    label: 'USD $',
    EUR: 0.909801,
    USD: 1,
    GEL: 2.615004,
    RUB: 83.650098,
  },
  {
    value: 'EUR',
    label: 'EUR €',
    EUR: 1,
    USD: 1.099141,
    GEL: 2.874259,
    RUB: 91.943253,
  },
  {
    value: 'GEL',
    label: 'GEL ₾',
    EUR: 0.347916,
    USD: 0.382409,
    GEL: 1,
    RUB: 31.988511,
  },
  {
    value: 'RUB',
    label: 'RUB ₽',
    EUR: 0.010876,
    USD: 0.011955,
    GEL: 0.031261,
    RUB: 1,
  },
]

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

  return selectOptions ?? mock
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
    <div className="flex py-6 px-6 justify-start md:justify-center items-center h-full flex-col p-2 md:w-6/12 mx-auto md:-mt-6">
      <Toaster />
      <Converter options={formatCurrency(lastCurrency)} />
    </div>
  )
}
