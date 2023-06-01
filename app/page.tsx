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
//   { value: 'USD', label: 'USD $' },
//   { value: 'EUR', label: 'EUR €' },
//   { value: 'GEL', label: 'GEL ₾' },
//   { value: 'RUB', label: 'RUB ₽' },
// ]

export default function Home() {
  // const [currency, setCurrency] = useState('USD')

  return (
    <div className="flex justify-center items-center h-full flex-col p-2">
      {/* <div className="md:w-6/12 flex gap-2">
        <input
          className={`form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700`}
          placeholder="Amount"
          inputMode="decimal"
          type="number"
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
