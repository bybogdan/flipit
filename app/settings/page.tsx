import { DefaultCurrency } from '@/components/defaultCurrency'
import { LinkToHome } from '@/components/linkToHome'

export default async function Settings() {
  return (
    <div className="flex py-6 px-6 justify-start md:justify-center items-center h-full flex-col p-2 md:w-6/12 mx-auto md:-mt-6">
      <h3 className="text-gray-900 max-w-2xl text-xl dark:text-white sm:text-2xl pb-10">
        Set default currency
      </h3>
      <DefaultCurrency />
      <LinkToHome />
    </div>
  )
}
