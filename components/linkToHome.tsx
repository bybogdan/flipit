import Link from 'next/link'
import { BackIcon } from './icons'

export const LinkToHome = () => (
  <div className="mt-10 flex justify-center py-4 px-6 rounded-lg border border-slate-300 dark:border-slate-600 cursor-pointer">
    <Link
      href="/"
      className="flex text-gray-900 text-xl dark:text-white gap-2 items-center"
    >
      <BackIcon /> Go to home
    </Link>
  </div>
)
