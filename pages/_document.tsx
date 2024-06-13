import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="sv">
      <Head />
      <body className='dark:bg-zinc-900'>
      <Script src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js" />
        <Script id="theme-switcher" strategy='beforeInteractive'>
          {
            `
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            } 
            `
          }

        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
