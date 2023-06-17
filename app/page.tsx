import { Converter } from '@/components/converter'
import { Toaster } from 'react-hot-toast'

export default function Home() {
  return (
    <div className="flex py-10 justify-start md:justify-center items-center h-full flex-col p-2 md:w-6/12 mx-auto">
      <Toaster />
      <Converter />

      {/* <h3 className="mt-0 mb-2 text-3xl font-semibold leading-tight">Flipit</h3>
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
      /> */}
    </div>
  )
}
