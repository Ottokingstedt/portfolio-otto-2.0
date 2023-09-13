import {useRef} from 'react'
import Head from 'next/head'
import LayoutBlock from '@/components/LayoutBlock'
import AnimatedText from '@/components/AnimatedText'
import profileIMG from '../public/images/profile.jpg'
import Image from 'next/image'
import SphereCanvas from '@/components/models/Sphere'
import Experince from '@/components/Experince'
import { useScroll, motion } from 'framer-motion';
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import { technologies } from '@/constants'

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
            About Page
        </title>
        <meta name='description' content='Biography about Otto Kingstedt'></meta>
    </Head>
    <TransitionEffect />
    <ScrollToTopButton/>
    <div ref={ref} className='flex flex-col w-full items-center justify-center overflow-hidden'>
    <motion.div style={{scaleX: scrollYProgress}}
            className='fixed left-0 top-0  w-full h-[4px] bg-orange-500 origin-left z-10'/>
        <LayoutBlock className='pt-16 px-4'>
            <div className='grid w-full grid-cols-8 lg:gap-16 gap-8 px-4'>
                <div className='xl:col-span-4 lg:col-span-3 col-span-8 flex flex-col md:items-start md:justify-start justify-center items-center order-2 lg:order-1'>
                    <h2 className='mb-4 lg:text-[4rem] font-bold uppercase dark:text-white'>Biography</h2>
                    <p className='dark:text-white'>
                    Hello, I am Otto, a full-stack developer and designer. I became deaf after contracting meningitis as a child, but since childhood, I have successfully utilized a cochlear implant for spoken communication. I reside in Huddinge, near Stockholm.
                        </p>
                        <br />
                    <p className='dark:text-white'>I spent 4.5 years in the USA, studying at Gallaudet University and the National Technical Institute for the Deaf at RIT University in Rochester, NY, from 2017 to 2019. During this time, I earned an Associate Degree in Design and Imaging Technology, focusing on Graphic Design.</p>
                        <br />
                    <p className='pb-10 dark:text-white'>Upon returning home to Stockholm, I worked part-time as a freelancer for Amnis Systemutveckling from January to September 2020. During this period, I assisted them with designing and developing icons, graphical web elements, and user interface (UX) elements.
                    </p>
                    <p className='pb-10 dark:text-white'>Subsequently, I pursued studies at Medieinstitutet from September 2021 to May 2023, focusing on web development, including e-commerce. I worked part-time as a freelancer for RDA - Research Data Alliance from September 2021 to September 2023, assisting them with designing and developing icons.
                    </p>
                    <p className='pb-10 dark:text-white'>Regarding my disability (Deaf), I have thrived in diverse workplace environments. My colleagues are aware of my disability, and I proficiently communicate in both English and Swedish to foster cooperation. While I rarely use sign language, I embrace the advancements in accessible technologies for the hard of hearing and deaf communities. Platforms like Slack and Teams facilitate seamless group communication through transcriptions.
                    </p>
                    <p className='pb-10 dark:text-white'>On a personal note, I hold the world deaf record in the 3000m and half marathon. I have secured victories in various deaf championships.<br /> 
                    </p>
                </div>
                <div className='xl:col-span-4 lg:col-span-3 col-span-8 relative h-max rounded-2xl border-2 border-solid dark:border-white p-2 order-1 lg:order-2'>
                    <Image src={profileIMG} alt='Otto profile pics' className='w-full h-auto rounded-2xl' priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw '/>
                </div>
            </div>
            <h2 className='font-bold md:text-8xl text-6xl md:mt-44  w-full text-center dark:text-white'>Skills</h2>
            <div className='flex flex-row flex-wrap justify-center gap-10 mt-20'>
                {technologies.map((technology) => (
                <div className='w-32 h-32 md:mt-10' key={technology.name}>
                <SphereCanvas icon={`/texture/${technology.name}.png`}/>
                </div>
                ))} 
            </div>           
                <Experince />
            <Education />
        </LayoutBlock>
    </div>
    </>
  )
}

export default about