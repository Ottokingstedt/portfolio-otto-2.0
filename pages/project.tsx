import {useRef, useEffect, useState} from 'react'
import LayoutBlock from '@/components/LayoutBlock'
import AnimatedText from '@/components/AnimatedText'
import Image from 'next/image'
import { StaticImageData } from 'next/image';
import { useScroll, motion, AnimatePresence } from 'framer-motion';
import project1 from '../public/images/code.webp'
import { FaWordpress, FaPaintBrush, FaCode } from "react-icons/fa";
import { GrOptimize } from "react-icons/gr";
import Carousel from '@/components/Carousel';
import { SlScreenDesktop } from "react-icons/sl";
import { FaMapSigns } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import Profile from '../public/images/otto_skriver_kod.webp'
import Link from 'next/link';

interface freatureProjectProps {
    title: string, 
    img: StaticImageData,
}




const FramerImg = motion(Image)

const FeaturedProject = ({title, img}: freatureProjectProps) => {
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollRef.current) {
                const top = scrollRef.current.getBoundingClientRect().top;
                const bottom = scrollRef.current.getBoundingClientRect().bottom;
                const windowHeight = window.innerHeight;
                if (top < windowHeight && bottom > 0) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  
    return (
        <div ref={scrollRef} style={{ overflow: "scroll", height: "500px" }}>
            <AnimatePresence>
                {isVisible && (
                    <motion.article
                        className='w-full flex items-center justify-between relative border border-black rounded-md shadow-2xl
                        dark:border-white md:rounded-br-2xl flex-col md:flex-row'
                        initial={{
                            opacity: 0,
                            x: 50 // Slide in from the right
                        }}
                        animate={{
                            opacity: 1,
                            x: 0 // Slide to its original position
                        }}
                        transition={{
                            duration: 1 // Animation duration
                        }}
                    >
                        <div className='w-full cursor-pointer overflow-x-hidden rounded-md overflow-hidden'>
                            <FramerImg src={img} alt={title} className='w-full h-full' priority />
                        </div>
                    </motion.article>
                )}
            </AnimatePresence>
        </div>
    );
};


const Projects = ({}) => {
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollRef.current) {
                const top = scrollRef.current.getBoundingClientRect().top;
                const bottom = scrollRef.current.getBoundingClientRect().bottom;
                const windowHeight = window.innerHeight;
                if (top < windowHeight && bottom > 0) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  return (
    <div  className='w-[full] relative'>
    <main className='w-full mb-16 flex flex-col  max-w-screen-xl m-auto items-center justify-center'>
        <LayoutBlock className='pt-16 px-8 grid grid-cols-2 gap-10'>
            <div>
            <AnimatedText className='lg:text-4xl mb-5 text-left lg:leading-[54px]' text="Sök du designer, SEO och webbutvecklare? "/>
            <p className='text-gray-500'>
            Min erfarenhet av att  arbetar som utvecklare, marknadsföre och grafisk design, vilket betyder att jag kan bygga skräddarsydda webbplatser utan att behöva koda dem från grunden. Istället använder jag avancerade byggverktyg för att leverera professionella och effektiva lösningar som passar dina behov.
            </p>
            <div className='flex mt-4 items-center'>
            <FaCode />
            <p className='ml-4 font-semibold'>Jag kodar om det behövs</p>
            </div>
            <div className='flex mt-4 items-center'>
            <FaPaintBrush />
            <p className='ml-4 font-semibold'>Jag design i Adobe plattform och Figma</p>
            </div>
            <div className='flex mt-4 items-center'>
            <FaWordpress />
            <p className='ml-4 font-semibold'>Jag utveckla i WordPress och Element</p>
            </div>
            <div className='flex mt-4 items-center'>
            <GrOptimize />
            <p className='ml-4 font-semibold'>SEO optimera din hemsida </p>
            </div>
            </div>
           
            <div className='flex gap-x-0' >
            <div className="absolute inset-0 z-auto after:absolute after:right-0 after:top-0 after:w-2/4 after:h-2/4 after:bg-gradient-to-l after:from-white  after:filter after:blur-3 after:overflow-hidden"/>
                <div className=' -z-10'

                  >
                    <FeaturedProject
                    title="Code"
                    img={project1}
                    />
                </div>

            </div>
        </LayoutBlock>

    </main>
    <div className=' pt-36 w-[full] mx-auto relative '>
            <h2 className=' font-bold text-4xl text-center mb-10 pb-10'>
            Hur kan en webbsida se ut?
            </h2>
    <div className='w-full h-[600px] overflow-hidden z-40 relative '>
            <div>
               <Carousel />
            </div>
    </div>
    <div className=' mx-auto max-w-screen-xl px-8 overflow-hidden pt-32 items-center pb-10 z-50'>
        <h2 className='font-bold text-4xl text-center mb-10' id="Såhär-hjälper-jag-dig">
        Såhär hjälper jag dig
        </h2>
        <p className='text-center text-gray-500'>
        Jag använder ett strukturerat arbetssätt för att säkerställa en professionell leverans av din nya webbplats. För dig med en begränsad budget är designmallar ett optimalt val, medan du som behöver avancerade funktioner och en mer skräddarsydd lösning kan dra nytta av strategisk webbdesign.        </p>
        <section className=' grid grid-cols-3  gap-20 pt-20 z-30'>

<div ref={scrollRef} style={{ overflow: "scroll", height: "400px" }} >
        <AnimatePresence>
        {isVisible && (
                <motion.div className='block'
                initial={{
                    opacity: 0,
                    y: 50 // Slide in from the right
                }}
                animate={{
                    opacity: 1,
                    y: 0 // Slide to its original position
                }}
                transition={{
                    duration: 1, // Animation duration
                    delay: 0

                }}
                >
                <SlScreenDesktop className='h-10 w-10 mt-10'  />
                    <h3 className=' text-lg font-bold mt-2'>
                    Designmallar            
                    </h3>
                    <p className='text-gray-500'>
                    Färdiga designmallar som du enkelt fyller på med eget innehåll. Praktiska och stilrena och lätta att anpassa efter dina behov.
                    </p>
                    <Link href="/service/#Designmallar" passHref>
                    <button className='bg-black cursor-pointer hover:bg-gray-600 text-white font-bold py-2 px-4 rounded text-[16px] mt-8'>Läs mer om Designmallar</button>
                    </Link>
                </motion.div>
                 )}
        </AnimatePresence>
       
    </div>
    <div ref={scrollRef}>
        <AnimatePresence>
        {isVisible && (
                <motion.div className='block'
                initial={{
                    opacity: 0,
                    y: 50 // Slide in from the right
                }}
                animate={{
                    opacity: 1,
                    y: 0 // Slide to its original position
                }}
                transition={{
                    duration: 1,
                    delay: 0.5
                }}
                >
                <FaMapSigns className='h-10 w-10 mt-10'  />
                    <h3 className=' text-lg font-bold mt-2'>
                    Strategisk webbdesign och UX/UI            
                    </h3>
                    <p className='text-gray-500'>
                    Du får en strategiskt planerad webbsida med en helt egen design och jag hjälper dig från idé till lansering.</p>
                    <Link href="/service/#Strategisk-webbdesign-och-UX/UI" passHref>
                    <button className='bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded text-[16px] mt-8'>Läs mer om Strategiskt</button>
                    </Link>
                </motion.div>
        )}
        </AnimatePresence>
    </div>

    <div ref={scrollRef}>
        <AnimatePresence>
        {isVisible && (                   
                        <motion.div className='block'
                        initial={{
                            opacity: 0,
                            y: 50 // Slide in from the right
                        }}
                        animate={{
                            opacity: 1,
                            y: 0 // Slide to its original position
                        }}
                        transition={{
                            duration: 1,
                            delay: 1.0
                        }}
                >
                <BiSupport className='h-10 w-10 mt-10'  />
                    <h3 className=' text-lg font-bold mt-2'>
                    Support och Underhåll        
                    </h3>
                    <p className='text-gray-500'>
                    Fokusera på det du gör bäst och låt mig rå om din webbsida genom att regelbundet se över, uppdatera och administrera den.</p>
                    <Link href="/service/#Support-och-underhåll" passHref>
                    <button className='bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded text-[16px] mt-8'>Läs mer om Support och Underhåll</button>
                    </Link>
                </motion.div>
                     )}
        </AnimatePresence>
        </div>

        </section>
    </div>
    </div>
    <section className=' mx-auto max-w-screen-xl z-100'>
        <div className='grid grid-cols-rep gap-0 '>
        <div>
            <Image src={Profile} alt="Otto is coding" height={600} width={600} className='p-10' />
        </div>
        <div className='px-8 text-left flex flex-col items-center justify-center h-full'>
            <h2 className='font-bold text-2xl text-center mb-5  '>Offertförfrågan och Målgruppsinformation</h2>
            <p className='text-gray-500'>
            Jag arbetar med webbprojekt och söker offerter för tjänstepaket som omfattar design, utveckling och underhåll av webbplatser. Projektet riktar sig till en bred publik, inklusive både privatpersoner och företag, med målet att skapa en användarvänlig och engagerande webbplats.
            </p>
            <button className='bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded text-[16px] mt-8'>Se Offertförfrågan</button>
        </div>
        </div>
    </section>
    </div>
    )
}

export default Projects