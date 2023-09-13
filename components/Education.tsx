import {useRef} from 'react'
import { useScroll, motion, AnimatePresence } from 'framer-motion'
import Lilcon from './Lilcon'

interface DetailsProps {
    type: string,
    time: string, 
    place: string, 
    info: string,
}

const Details = ({type, place, info, time}: DetailsProps) => {
    const ref = useRef(null);
    return <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between'>
        <Lilcon reference={ref} />
        <div>
            <h3 className='capitalize font-bold md:text-2xl text-lg dark:text-white'>{type}</h3>
            <span className=' capitalize font-medium text-gray-500 dark:text-gray-400'>
                {time} | {place}
            </span>
            <p className='font-medium w-full dark:text-white'>
                {info}
            </p>
        </div>
    </li>
}

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-[10vh]'>
        <h2 className='font-bold md:text-8xl text-6xl mb-32 w-full text-center dark:text-white'>
            Education
        </h2>
        <div ref={ref} className='w-[75%] mx-auto relative'>

            <AnimatePresence>
                <motion.div 
                style={{scaleY: scrollYProgress}}
                className='absolute left-8 top-0 w-[4px] h-full bg-black origin-top dark:bg-white' />
            </AnimatePresence>

            <ul className='w-full flex flex-col items-start justify-between ml-4'>
               <Details 
               type="Medieinstitutet"
               time="Sep 2021 to 2023 May" // Replace with the actual year
               place="Stockholm, Sweden"
               info="Web Development (Front-end & Back-end) including E-commerce"
               />
               <Details 
                type="Rochester Institute of Technology & National Technical Institute for the Deaf"
                time="Jan 2017 to May 2019" // Replace with the actual year
                place="Calle Pintor Salvador, Abril 6, 460006 Valencia, Spain"
                info="Graphic Design in Design and Imaging Technology"
               
               />
          
            </ul>
        </div>
    </div>
  )
}

export default Education