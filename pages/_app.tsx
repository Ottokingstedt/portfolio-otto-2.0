import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from "next/router";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import NoSsr from '@/components/no-ssr';
import { useState } from 'react';

const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string;

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-roboto'
});

// Temporary construction flag
const IS_UNDER_CONSTRUCTION = true;

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [showConstruction, setShowConstruction] = useState(IS_UNDER_CONSTRUCTION);

  return (
    <main className={`${roboto.variable}`}>
      {showConstruction && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-100 flex flex-col items-center justify-center z-50 text-white">
          <h1 className="text-4xl font-bold mb-4">Under Construction</h1>
          <p className="text-lg mb-6">Our website is currently being improved. Please check back soon!</p>
          {/* <button 
            onClick={() => setShowConstruction(false)} 
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded"
          >
            Dismiss
          </button> */}
        </div>
      )}
      <NoSsr>
        {/* <Header /> */}
        <GoogleReCaptchaProvider
          reCaptchaKey={siteKey ?? "NOT DEFINED"}
          scriptProps={{
            async: false,
            defer: false,
            appendTo: "head",
            nonce: undefined,
          }}
        >
          {/* <AnimatePresence mode='wait' initial={false}>
            <Component key={router.asPath} {...pageProps} />
          </AnimatePresence> */}
        </GoogleReCaptchaProvider>
        <Footer />
      </NoSsr>
    </main>
  );
}
