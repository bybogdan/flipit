import { DefaultCurrency } from '@/components/defaultCurrency'
import { BackIcon } from '@/components/icons'
import Link from 'next/link'

export default async function Settings() {
  return (
    <div className="flex py-6 px-6 justify-start md:justify-center items-center h-full flex-col p-2 md:w-6/12 mx-auto md:-mt-6">
      <h3 className="text-gray-900 max-w-2xl text-xl dark:text-white sm:text-2xl pb-10">
        Set default currency
      </h3>
      <DefaultCurrency />
      <div className="mt-10 flex justify-center py-2 px-6 rounded-lg border border-slate-300 dark:border-slate-600">
        <Link
          href="/"
          className="flex text-gray-900 text-xl dark:text-white gap-2 items-center"
        >
          <BackIcon /> Go to home
        </Link>
      </div>
    </div>
  )
}
