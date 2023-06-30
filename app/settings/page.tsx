import { DefaultCurrency } from '@/components/defaultCurrency'
import { InstallIcon } from '@/components/icons'
import { LinkToHome } from '@/components/linkToHome'
import Link from 'next/link'

export default async function Settings() {
  return (
    <div className="flex py-6 px-6 justify-start md:justify-center items-center h-full flex-col p-2 md:w-6/12 mx-auto md:-mt-6">
      <h3 className="text-gray-900 max-w-2xl text-xl dark:text-white sm:text-2xl pb-10">
        Set default currency
      </h3>
      <DefaultCurrency />
      <div className="mt-10 flex justify-center py-4 px-6 rounded-lg border border-slate-300 dark:border-slate-600 cursor-pointer">
        <Link href={`/install`} className="flex gap-2">
          <InstallIcon /> How to install
        </Link>
      </div>
      <LinkToHome />
    </div>
  )
}
