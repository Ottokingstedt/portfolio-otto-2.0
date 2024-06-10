import React from 'react'
import { motion } from 'framer-motion';
import Head from 'next/head';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const privatPolicy = () => {
  return (
    <>
    <Head>
    <title>
    Integritetspolicy
    </title>
    <meta name='description' content='Integritetspolicy'></meta>
</Head>
<ScrollToTopButton/>
<div className="bg-gray-100 text-gray-900 font-sans p-6 pt-32">
<div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
    <h1 className="text-3xl font-bold mb-4">Integritetspolicy</h1>
    <p className="text-lg mb-4">
    Vi värnar om din integritet och samlar inte in några personliga data på vår hemsida. Vi använder inte kakor (cookies).  Endast <a href="https://support.google.com/a/answer/1217728?hl=sv" className='text-blue-600 hover:underline'>reCAPTCHA</a> används för att skydda sidan mot spam och bot-attacker. <br/> <br/>Din integritet är viktig för oss, och vi säkerställer att dina besök på vår webbplats är anonyma och säkra.
    </p>
</div>
</div>
</>
)
}

export default privatPolicy