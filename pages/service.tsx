import React from 'react'
import { useRef } from 'react';
import { useScroll, motion } from 'framer-motion';
import LayoutBlock from '@/components/LayoutBlock';
import Head from 'next/head';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import TableContent from '@/components/TableContent';
const service = () => {
    const ref = useRef!(null);
    const {scrollYProgress} = useScroll!(
        {
            target: ref,
            offset: ["start", "end"]
        }
    )
  return (
    <>
    <Head>
        <title>
            Service
        </title>
        <meta name='description' content='Service'></meta>
    </Head>
    <ScrollToTopButton/>
    <motion.div style={{scaleX: scrollYProgress}} className="fixed left-0 top-0  w-full h-[4px] bg-[#005B88] origin-left z-50" />
        <LayoutBlock className='pt-32 px-20 pb-0'>
         <div className=' m-auto max-w-[1280px] flex justify-between px-10'>
            <article className='w-full max-w-[780px]'>
         <h2 className="text-2xl font-bold mb-4" id="Designmallar">Designmallar</h2>
<p className='mb-4'>Färdiga designmallar som du enkelt kan fylla på med eget innehåll. 
    Dessa mallar är utformade för att vara både praktiska och estetiskt tilltalande. 
    De är lättanvända och flexibla, vilket gör att de kan anpassas efter dina specifika behov. 
    Jag bygger upp en WordPress-sida med en färdigplanerad struktur som gör det enkelt för dig att anpassa sidan efter ditt företags behov. 
    Mallarna kan anpassas för olika typer av projekt och företag, oavsett storlek och bransch. Du får en professionell och funktionell webbplats 
    utan att behöva investera tid och resurser i att utveckla en från grunden.</p>

<h2 className="text-2xl font-bold mb-4" id="Strategisk-webbdesign-och-UX/UI">Strategisk webbdesign och UX/UI</h2>
<p className=' mb-4'>
Du får en strategiskt planerad webbsida med en helt egen design och optimerad användarupplevelse (UX) och användargränssnitt (UI). Jag hjälper dig genom hela processen, från idé till lansering. Först arbetar vi tillsammans för att förstå dina mål och visioner för webbplatsen. Därefter skapar jag designprototyper i Figma för att visualisera hur sidan kommer att se ut och fungera. Dessa prototyper testas noggrant för att säkerställa att de uppfyller alla krav och förväntningar. Jag erbjuder också idéer och designförslag för att optimera användarupplevelsen och maximera webbplatsens effektivitet. När designen är godkänd, implementerar jag den och förbereder allt för en smidig lansering. UX/UI-design säkerställer att din webbplats inte bara ser bra ut utan också är intuitiv och enkel att använda.
</p>

<h2 className="text-2xl font-bold mb-4" id="Marknadsföring-och-grafisk-design">Marknadsföring och grafisk design</h2>
<p className='mb-4'>Jag erbjuder omfattande marknadsföringstjänster som hjälper dig att nå din målgrupp och växa ditt företag. Jag skapar och hanterar kampanjer på plattformar som TikTok, Meta (Facebook och Instagram) och Google. Dessutom erbjuder jag stöd för annonsutveckling och optimering för att säkerställa att dina annonser presterar på bästa sätt. Min grafiska designtjänst innefattar skapande av visuella material för marknadsföring, inklusive banners, sociala medier-inlägg och annat marknadsföringsmaterial som du behöver för att attrahera och engagera din målgrupp.</p>

<h2 className="text-2xl font-bold mb-4" id="Support-och-underhåll">Support och underhåll</h2>
<p className='mb-4'>Fokusera på det du gör bäst och låt mig ta hand om din webbsida genom att regelbundet se över, uppdatera och administrera den. Jag erbjuder en omfattande supporttjänst som inkluderar allt från säkerhetsuppdateringar och prestandaoptimering till innehållshantering och teknisk support. Jag kan hjälpa dig med SEO (sökmotoroptimering) för att förbättra din webbplats synlighet på Google, e-posthantering för att säkerställa att din kommunikation fungerar smidigt, och Google Analytics för att spåra och analysera din webbplats trafik och prestanda. Dessutom inkluderar supporttjänsten underhåll av marknadsföringskampanjer och grafiskt material för att säkerställa att ditt marknadsföringsinnehåll alltid är aktuellt och effektivt. Genom att låta mig sköta den tekniska delen av din webbnärvaro kan du fokusera på att driva och utveckla ditt företag.
</p>
</article>
<TableContent/>
         </div>
        </LayoutBlock>
    </>  )
}

export default service