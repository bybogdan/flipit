'use client'

import { CurrencyOption } from '@/app/page'
import { useEffect, useRef, useState } from 'react'
import { toast } from 'react-hot-toast'
import Select from 'react-select'
import { SettingIcon } from './icons'
import Link from 'next/link'
import { LC_CURRENCY } from '@/lib/utils'
import { Skeleton } from './ui/skeleton'

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

export const Converter = ({ options }: { options: CurrencyOption[] }) => {
  const [isLoaded, setIsLoaded] = useState(false)
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
    const currency = localStorage.getItem(LC_CURRENCY) || 'USD'
    setCurrency(currency)
    setIsLoaded(true)
    inputRef?.current?.focus()
  }, [])

  return (
    <div className="w-full flex flex-col items-end">
      <Link href="/settings">
        <SettingIcon />
      </Link>

      <div className="flex gap-2 my-10 w-full">
        <input
          className={`form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700`}
          placeholder="Amount"
          ref={inputRef}
          inputMode="decimal"
          type="string"
          value={amount}
          disabled={!isLoaded}
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
          options={options}
          value={{
            value: currency,
            label: isLoaded ? `${currency} ${getCurrencySymbol(currency)}` : '',
          }}
          onChange={(val) => (val?.value ? setCurrency(val.value) : null)}
          isSearchable={false}
          isDisabled={!isLoaded}
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
                {isLoaded ? <p>{label}</p> : <Skeleton className="w-12" />}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
