import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from "next/router"

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-roboto'
})

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
  return (
  // <ThemeProvider defaultTheme='light' attribute='class'>
    <main className={`${roboto.variable} font-sans dark:bg-zinc-900 h-[100%] overflow-hidden`}>
    <Header/>
    <AnimatePresence mode='wait'>
  <Component key={router.asPath} {...pageProps} />
  </AnimatePresence>
  <Footer />
    </main>
  //</ThemeProvider>
  );
}
