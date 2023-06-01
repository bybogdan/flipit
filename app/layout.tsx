import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Flipit',
  description: 'Flipit: Uncover Currency Charm!',
  image: 'https://flipit-eta.vercel.app/logo.png',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />

        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta
          name="application-name"
          content="Flipit: Uncover Currency Charm!"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        <meta
          name="apple-mobile-web-app-title"
          content="Flipit: Uncover Currency Charm!"
        />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        {/* apple-touch-icon */}
        <link
          rel="apple-touch-icon"
          href="touch-icons/apple-touch-icon-iphone-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="touch-icons/apple-touch-icon-ipad-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="touch-icons/apple-touch-icon-iphone-retina-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="touch-icons/apple-touch-icon-ipad-retina-152x152.png"
        />
        {/* apple-touch-icon */}

        {/* apple-touch-startup-image */}
        <link
          rel="apple-touch-startup-image"
          href="images/splash/launch-640x1136.png"
          media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        ></link>
        <link
          rel="apple-touch-startup-image"
          href="images/splash/launch-750x1334.png"
          media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        ></link>
        <link
          rel="apple-touch-startup-image"
          href="images/splash/launch-1242x2208.png"
          media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        ></link>
        <link
          rel="apple-touch-startup-image"
          href="images/splash/launch-1125x2436.png"
          media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        ></link>
        <link
          rel="apple-touch-startup-image"
          href="images/splash/launch-1536x2048.png"
          media="(min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)"
        ></link>
        <link
          rel="apple-touch-startup-image"
          href="images/splash/launch-1668x2224.png"
          media="(min-device-width: 834px) and (max-device-width: 834px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)"
        ></link>
        <link
          rel="apple-touch-startup-image"
          href="images/splash/launch-2048x2732.png"
          media="(min-device-width: 1024px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)"
        ></link>
        {/* apple-touch-startup-image */}

        <meta
          name="theme-color"
          content="#ffffff"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#000000"
          media="(prefers-color-scheme: dark)"
        />

        <meta
          property="og:image"
          content="https://flipit-eta.vercel.app/logo.png"
        />
        <meta property="og:title" content="Flipit: Uncover Currency Charm!" />
        <meta
          property="og:description"
          content="Convenient way to take notes"
        />
        <meta property="og:url" content="https://flipit-eta.vercel.app/" />
        <meta content="website" property="og:type" />
        <meta
          content="Flipit: Uncover Currency Charm!"
          property="og:image:alt"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
