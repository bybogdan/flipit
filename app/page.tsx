import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex justify-center items-center h-full flex-col">
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
