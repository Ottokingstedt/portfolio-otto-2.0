import {useRef} from 'react'
import Head from 'next/head'
import LayoutBlock from '@/components/LayoutBlock'
import Image from 'next/image'
// import Experince from '@/components/Experince'
import { useScroll, motion } from 'framer-motion';
// import Education from '@/components/Education'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import OttoProfile from '../public/images/otto_profile.webp'
const about = () => {
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
            Om mig
        </title>
        <meta name='description' content='Biography about Otto Kingstedt'></meta>
    </Head>
    <ScrollToTopButton/>
    <div ref={ref} className='flex flex-col w-full items-center justify-center overflow-hidden'>
        <LayoutBlock className='pt-32 px-10 pb-32'>
            <div className='md:block lg:grid grid-cols-2 gap-6 max-w-screen-lg m-auto'>
                <div className=' flex flex-col md:items-start md:justify-start justify-center items-center order-1'>
                    <h2 className=' pb-10 md:text-6xl font-semibold text-2xl lg:leading-[75px] dark:text-white'>Vem är jag?</h2>
                    <p className=' leading-7'>Hej Jag är Otto, frilans webbutvecklare och grafiska designer. Jag blev döv efter att ha drabbats av hjärnhinneinflammation som barn, men sedan barndomen har jag framgångsrikt använt ett cochleaimplantat för talad kommunikation.

Jag tillbringade 4,5 år i USA, där jag studerade vid Gallaudet University och National Technical Institute for the Deaf vid RIT University i Rochester, NY, från 2017 till 2019. Under denna tid tog jag en Associate Degree i Design and Imaging Technology med fokus på grafisk design.

Trots min funktionsnedsättning (döv) har jag trivts i olika arbetsmiljöer. Mina kollegor är medvetna om min funktionsnedsättning, och jag kommunicerar flytande på både engelska och svenska för att underlätta samarbete. Även om jag sällan använder teckenspråk, uppskattar jag de framsteg som gjorts inom tillgängliga teknologier för hörselskadade och döva. Plattformar som Slack och Teams möjliggör smidig gruppkommunikation genom transkriptioner.

Jag är en elitlöpare och innehar världsrekordet för döva på 3000 meter och halvmaraton. Mina hobbies inkluderar att måla Warhammer-figurer och läsa fantasyböcker.

</p>
                </div>
                <div className='lg:mt-4'>
                <Image src={OttoProfile} height={450} width={450} alt="Otto profile" className=' md:mt-0 mt-10'/>
                </div>
            </div>
            {/* <div className='flex flex-row flex-wrap justify-center gap-10 mt-20'>
                {technologies.map((technology) => (
                <div className='w-32 h-32 md:mt-10' key={technology.name}>
                <SphereCanvas icon={`/texture/${technology.name}.png`}/>
                </div>
                ))} 
            </div>            */}
        </LayoutBlock>
    </div>
    </>
  )
}

export default about