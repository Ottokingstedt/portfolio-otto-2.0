import React from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import ScrollToTopButton from "./ScrollToTopButton"
interface LayoutBlockProps {
  className?: string;
  children: React.ReactNode
}


export default function LayoutBlock({ children, className, ...customMeta  }: LayoutBlockProps){
  const router = useRouter();

  const meta = {
    title: "Otto Kingstedt - Developer and Designer",
    description: "My biggest passion is help to your development of website. Get in touch with me to know more.",
    image: '/avatar.png',
    type: 'website',
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content="{meta.description}" name="description"/>
        <meta 
          property="og:url"
          content={`https://ottokingstedt.com${router.asPath}`}
        />
        <link 
        rel='canonical'
        href={`https://ottokingstedt.com${router.asPath}`} 
       />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Otto Kingstedt" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <ScrollToTopButton />
      <main className={`w-full z-0 dark:bg-zinc-900 p-0 ${className}`}>
          {children}
      </main>
    </div>
  )
}

