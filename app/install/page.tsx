import Image from 'next/image'

export const metadata = {
  title: 'Installation steps - Flipit',
  description: 'Flipit: Uncover Currency Charm!',
  image: 'https://flipit-eta.vercel.app/logo.png',
}

export default async function Install() {
  return (
    <div className="flex py-6 px-6 justify-start items-center flex-col md:w-6/12 mx-auto">
      <section className="mx-auto">
        <h1 className="font-bold font-heading leading-tighter md:text-5xl text-4xl tracking-tighter flex flex-col justify-between ">
          <a target="_blank" href="https://flipit.bgdn.one/">
            <span className="flex gap-4">
              FlipIt{' '}
              <Image
                className="animate-reverse-spin"
                alt="icon"
                src="/logoTransparent.png"
                width={48}
                height={48}
                priority={true}
              />
            </span>
          </a>
          <span>Installation Steps</span>{' '}
        </h1>

        <div className="mx-auto mt-10 flex flex-col gap-10">
          <span>
            FlipIt is a web application, but it can be installed on your device
            from browsers. The way to install th app is different from browsers:
          </span>
          <div>
            <h2 className="font-bold font-heading leading-tighter md:text-3xl text-2xl tracking-tighter mb-2">
              Chrome on Android
            </h2>
            <ol>
              <li>
                Go to:{' '}
                <a className="text-blue-500" href="https://flipit.bgdn.one/">
                  https://flipit.bgdn.one/
                </a>{' '}
                on Chrome
              </li>
              <li>
                Tap <strong>Install</strong> or{' '}
                <strong>Add to Home Screen</strong> (if not shown, please tap
                the more icon on Chrome and tap{' '}
                <strong>Add to Home Screen</strong>)
              </li>
            </ol>
            <p>
              reference:{' '}
              <a
                className="text-blue-500"
                target="_blank"
                href="https://support.google.com/chrome/answer/9658361?co=GENIE.Platform%3DAndroid&amp;oco=1"
              >
                source link
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-bold font-heading leading-tighter md:text-3xl text-2xl tracking-tighter mb-2">
              Safari on iOS
            </h2>
            <ol>
              <li>
                Go to:{' '}
                <a className="text-blue-500" href="https://flipit.bgdn.one/">
                  https://flipit.bgdn.one/
                </a>{' '}
                on Safari
              </li>
              <li>Tap the share icon in the menu bar</li>
              <li>
                Scroll down the list of options, then tap{' '}
                <strong>Add to Home Screen</strong>
              </li>
            </ol>
            <p>
              reference:{' '}
              <a
                className="text-blue-500"
                target="_blank"
                href="https://support.apple.com/guide/iphone/bookmark-favorite-webpages-iph42ab2f3a7/ios"
              >
                source link
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-bold font-heading leading-tighter md:text-3xl text-2xl tracking-tighter mb-2">
              Chrome on Windows, Mac, Linux
            </h2>
            <ol>
              <li>
                Go to:{' '}
                <a href="https://flipit.bgdn.one/">https://flipit.bgdn.one/</a>{' '}
                on Chrome
              </li>
              <li>
                At the top right of the address bar, click the install icon
              </li>
            </ol>
            <p>
              reference:{' '}
              <a
                className="text-blue-500"
                target="_blank"
                href="https://support.google.com/chrome/answer/9658361?co=GENIE.Platform%3DDesktop&amp;oco=1"
              >
                source link
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-bold font-heading leading-tighter md:text-3xl text-2xl tracking-tighter mb-2">
              Edge on Windows
            </h2>
            <ol>
              <li>
                Go to:{' '}
                <a href="https://flipit.bgdn.one/">https://flipit.bgdn.one/</a>{' '}
                on Edge
              </li>
              <li>
                At the top right of the address bar, click the app available
                icon
              </li>
            </ol>
            <p>
              reference:{' '}
              <a
                className="text-blue-500"
                target="_blank"
                href="https://learn.microsoft.com/microsoft-edge/progressive-web-apps-chromium/ux"
              >
                source link
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
