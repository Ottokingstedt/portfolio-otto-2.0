import {useRef} from 'react'
import { useScroll, motion } from 'framer-motion'
import Lilcon from './Lilcon'

interface DetailsProps {
    position: string,
    company: string, 
    companyLink: string, 
    time: number,
    address: string,
    work: string
}

const Details = ({position, company, companyLink, time, address, work}: DetailsProps) => {
    const ref = useRef(null);
    return <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <Lilcon reference={ref} />
        <div>
            <h3 className=' capitalize font-bold md:text-2xl dark:text-white text-[12px]'>{position}&nbsp;<a href={companyLink}
            target="_blank"
            className=' text-orange-600 capitalize'>
                
                @{company}</a></h3>
            <span className=' capitalize font-medium text-gray-500 dark:text-gray-300'>
                {time} | {address}
            </span>
            <p className='font-medium w-full dark:text-white'>
                {work}
            </p>
        </div>
    </li>
}

const Experince = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='md:mb-[10vh] mb-1 my-[25vh]'>
        <h2 className=' my-[10vh] font-bold md:text-8xl text-6xl  w-full text-center dark:text-white'>
            Experience
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative'>

            <motion.div 
            style={{scaleY: scrollYProgress}}
            className='absolute left-8 top-0 w-[4px] h-full bg-black origin-top dark:bg-white' />
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
               <Details 
               position="III Intern - Social Media & Wordpress developer"
               company="Overseas Interpreting"
               companyLink="https://overseasinterpreting.com/"
               time={2023} // Replace with the actual year
               address="Calle Pintor Salvador, Abril 6, 460006 Valencia, Spain"
               work="I designed and developed the website for Overseas Interpreting, 
               enhancing its SEO and complexity.This included seamlessly migrating the domain to WordPress
                and meticulously addressing intricate problem details through PHP solutions."
               />
               <Details 
                 position="LIA II Intern - Junior Full Stack developer"
                 company="Purply"
                 companyLink="https://www.purply.io/sv"
                 time={2023} // Replace with the actual year
                 address="THE WORKS Stadshagen 112 51 Stockholm"
                 work="the development of new front end in Angular for their SaaS solution.This project included the CMS solution."
               />
               <Details 
                position="LIA I Intern - Front-end & Back-end developer"
                company="Likvidum"
                companyLink="https://likvidum.se/"
                time={2022} // Replace with the actual year
                address="Arenavägen 27 121 77 Johanneshov, Stockholm"
                work="Create loan calculation with canvas.JS, glossary, search function with AXIOS and design layout for Likvidum's pages. Learn SEO techniques."
               />
            </ul>
        </div>
    </div>
  )
}

export default Experince