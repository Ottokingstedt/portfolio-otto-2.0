import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from "next/router"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import NoSsr from '@/components/no-ssr';
const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string;

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-roboto'
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <main className={`${roboto.variable}`}>
      <NoSsr>
      <Header />
      <GoogleReCaptchaProvider
        reCaptchaKey={siteKey ?? "NOT DEFINED"}
        scriptProps={{
          async: false,
          defer: false,
          appendTo: "head",
          nonce: undefined,
        }}
      >
        <AnimatePresence mode='wait' initial={false}>
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
      </GoogleReCaptchaProvider>
      <Footer />
      </NoSsr>
    </main>
  );
}
