// 'use client'

import Image from 'next/image'
// import { useState } from 'react'
// import Select from 'react-select'

// const getCurrencySymbol = (currency: string) => {
//   switch (currency) {
//     case 'USD':
//       return '$'
//     case 'EUR':
//       return '€'
//     case 'GEL':
//       return '₾'
//     case 'RUB':
//       return '₽'
//     default:
//       return '$'
//   }
// }

// const currenciesOptions = [
//   { value: 'USD', label: 'USD $', USD: 1, EUR: 1.07, GEL: 0.38, RUB: 0.012 },
//   { value: 'EUR', label: 'EUR €', USD: 0.93, EUR: 1, GEL: 0.36, RUB: 0.011 },
//   { value: 'GEL', label: 'GEL ₾', USD: 2.6, EUR: 2.79, GEL: 1, RUB: 0.03 },
//   { value: 'RUB', label: 'RUB ₽', USD: 83.74, EUR: 89.99, GEL: 32.22, RUB: 1 },
// ]

export default function Home() {
  // const [amount, setAmount] = useState(1)
  // const [currency, setCurrency] = useState('USD')

  // const others = currenciesOptions.filter((c) => c.value !== currency)

  return (
    <div className="flex justify-center items-center h-full flex-col p-2 md:w-6/12 mx-auto">
      {/* <div className="flex gap-2 mb-10 w-full">
        <input
          className={`form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700`}
          placeholder="Amount"
          inputMode="decimal"
          type="number"
          value={amount}
          onChange={(e) =>
            e.target.value === ''
              ? setAmount(0)
              : setAmount(parseFloat(e.target.value))
          }
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
      <div className="flex flex-col w-full gap-4">
        {amount === 0
          ? null
          : others.map((c) => {
              return (
                <div key={c.label} className="">
                  <div className="flex justify-between gap-2 text-xl">
                    <p>
                      {(Number(c[currency as keyof typeof c]) * amount).toFixed(
                        2
                      )}
                    </p>
                    <p>{c.label}</p>
                  </div>
                </div>
              )
            })}
      </div> */}
      <h3 className="mt-0 mb-2 text-3xl font-semibold leading-tight">Flipit</h3>
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
      />
    </div>
  )
}
