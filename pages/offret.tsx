import React from 'react'
import { useRef } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import ScrollToTopButton from '@/components/ScrollToTopButton';


  
function offret() {
    const ref = useRef!(null);
  return (
    <>
    <Head>
        <title>
            Offret
        </title>
        <meta name='description' content='Offretfrågan'></meta>
    </Head>
    <ScrollToTopButton/>
    <div className="bg-gray-100 text-gray-900 font-sans p-6 pt-32">
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Priser:</h1>
        <p className="text-lg mb-4">
            <strong>Timpris:</strong> 500 kr
        </p>
        <p className="mb-4">
            Jag arbetar ca 3-4 timmar per dag under veckodagar, och ibland även på helgen. Detta motsvarar ungefär 30 000 - 45 000 kr per månad med flexibilitet i tid.
        </p>

        <h2 className="text-2xl font-bold mb-4">Betalningsvillkor:</h2>
        <p className="mb-4">
            Fakturor kommer att skickas varannan vecka med en uppskattad summa på 15 000 - 22 500 kr per faktura. Betalning ska ske inom 15 dagar efter mottagandet av fakturan.
        </p>

        <h2 className="text-2xl font-bold mb-4">Ytterligare kostnader (om nödvändigt):</h2>
        <p className="mb-4">
            Förutom timpriserna kan det tillkomma kostnader för tredjepartstjänster:
        </p>

        <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">
                <strong>Domännamn:</strong> Kostnaden för ett domännamn kan variera mellan 32 kr och 100 kr per månad, beroende på värdet på domännamnet. <em>(Om ni redan har ett domännamn kan vi skippa detta).</em>
            </li>
            <li className="mb-2">
                <strong>Hosting:</strong> Jag rekommenderar att ni använder <a href="https://templ.io/sv/priser/" className="text-blue-600 hover:underline">Templ</a> för att hantera Wordpress. Kostnaden är 295 kr/månad (3540 kr per år) <em>(Om ni redan har annan hosting, t.ex. WP Engine eller Bluehost).</em>
            </li>
            <li className="mb-2">
                <strong>Tredjepartstjänster:</strong> Eventuella kostnader för tredjepartstjänster som är nödvändiga för projektet, såsom Cloudflare för förbättrad webbplatshastighet och säkerhet.
            </li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Övriga punkter i offerten:</h2>
        <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Jag kommer att bygga en hemsida på Wordpress med min egen plugin som kan överlåtas till er utan att sidorna blir låsta.</li>
            <li className="mb-2">Jag kommer att ansvara för att skapa en snygg layout och harmoniska färgkombinationer som passar era behov och önskemål.</li>
            <li className="mb-2">Jag kommer att samarbeta nära med ert projektteam för att säkerställa att era önskemål uppfylls.</li>
        </ul>

        <p className="text-lg">
            Om det är något mer ni skulle vilja inkludera eller om ni har några ytterligare frågor är ni välkomna att kontakta mig.
        </p>
    </div>
</div>
</>
)
}
export default offret