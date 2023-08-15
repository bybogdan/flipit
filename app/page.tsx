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

const requiredCurrencies = ['USD', 'EUR', 'GEL', 'RUB']

const formatCurrency = (currencyData: Currency) => {
  const value = JSON.parse(currencyData.value)
  const currencyObj = value.data

  const selectOptions: CurrencyOption[] = requiredCurrencies.map((curCode) => {
    return {
      value: curCode,
      label: `${curCode} ${getCurrencySymbol(curCode)}`,
      EUR: currencyObj['EUR'].value / currencyObj[curCode].value,
      USD: currencyObj['USD'].value / currencyObj[curCode].value,
      GEL: currencyObj['GEL'].value / currencyObj[curCode].value,
      RUB: currencyObj['RUB'].value / currencyObj[curCode].value,
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
  const timeDiff = timeNow - +new Date(+lastCurrency?.created_at)
  const timeDiffInHours = timeDiff / (1000 * 60 * 60)

  // REFETCH EVERY 3 HOURS
  if (!lastCurrency || !data || data.length === 0 || timeDiffInHours > 3) {
    try {
      const freshCurrencies = await new CurrencyAPI(
        process.env.CURRENCYAPI_KEY
      )?.latest()

      const stringifiedTimeNow = timeNow.toString()

      await supabase.from('currencies').insert({
        value: JSON.stringify(freshCurrencies),
        created_at: stringifiedTimeNow,
      })

      // remove old data
      await supabase.from('currencies').delete().match({ id: lastCurrency?.id })

      lastCurrency = {
        value: JSON.stringify(freshCurrencies),
        created_at: stringifiedTimeNow,
      }
    } catch (error) {
      console.error('Limit is over', error)
    }
  }

  return (
    <div className="flex py-6 px-6 justify-start md:justify-center items-center h-full flex-col p-2 md:w-6/12 mx-auto md:-mt-6">
      <Toaster />
      <Converter options={formatCurrency(lastCurrency)} />
    </div>
  )
}
