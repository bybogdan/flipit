'use client'

import { CurrencyOption } from '@/app/page'
import { useEffect, useRef, useState } from 'react'
import { toast } from 'react-hot-toast'
import Select from 'react-select'

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

const currenciesOptions = [
  { value: 'USD', label: 'USD $', USD: 1, EUR: 1.07, GEL: 0.38, RUB: 0.012 },
  { value: 'EUR', label: 'EUR €', USD: 0.93, EUR: 1, GEL: 0.36, RUB: 0.011 },
  { value: 'GEL', label: 'GEL ₾', USD: 2.6, EUR: 2.79, GEL: 1, RUB: 0.03 },
  { value: 'RUB', label: 'RUB ₽', USD: 83.74, EUR: 89.99, GEL: 32.22, RUB: 1 },
]

export const Converter = ({ options }: { options: CurrencyOption[] }) => {
  const [amount, setAmount] = useState<number | ''>('')
  const [currency, setCurrency] = useState('USD')

  const current = options.find((c) => c.value === currency)
  const mapOptionsToShow = new Map(Object.entries(current || {}))
  mapOptionsToShow.delete('value')
  mapOptionsToShow.delete('label')
  mapOptionsToShow.delete(currency)
  const others = Array.from(mapOptionsToShow)

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef?.current?.focus()
  }, [])

  return (
    <>
      <div className="flex gap-2 mb-10 w-full">
        <input
          className={`form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700`}
          placeholder="Amount"
          ref={inputRef}
          inputMode="decimal"
          type="string"
          value={amount}
          onChange={(e) => {
            if (e.target.value === '') {
              setAmount('')
              return
            }

            if (Number.isNaN(+e.target.value)) {
              toast.error(
                `Are you nuts?
                Use only the integers [0-9]`
              )

              setAmount('')
              return
            }

            setAmount(parseFloat(e.target.value))
          }}
        />
        <Select
          className="my-react-select-container"
          classNamePrefix="my-react-select"
          options={currenciesOptions}
          value={{
            value: currency,
            label: `${currency} ${getCurrencySymbol(currency)}`,
          }}
          onChange={(val) => (val?.value ? setCurrency(val.value) : null)}
          isSearchable={false}
        />
      </div>
      <div className="flex flex-col w-full gap-6">
        {others.map(([label, value]) => {
          return (
            <div
              key={label}
              className="relative w-full rounded-lg border p-4 border-slate-300 dark:border-slate-600"
            >
              <div className="flex justify-between gap-2 text-xl">
                <p>{(Number(value) * +amount).toFixed(2)}</p>
                <p>{label}</p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
