import React, { useState, useEffect } from 'react'
import {motion, useScroll, AnimatePresence} from 'framer-motion'

interface Lilconprops {
    reference?: any;
}

const Lilcon = ({reference}: Lilconprops) => {
    
    const {scrollYProgress} = useScroll(
        {

        target: reference,
        offset: ['center end', "center"]

       }
    )

  return (
<figure className='absolute left-0 stroke-black dark:stroke-white'>
    <svg className=''  width={75} height={75} viewBox='0 0 100 100'>
        <circle cx={45} cy={50} r={20} className=' stroke-orange-500 fill-none dark:stroke-none' />
        <AnimatePresence>
        <motion.circle
    cx={45}
    cy={50}
    r={20}
    className='stroke-[5px] fill-white dark:fill-zinc-950'
    style={{
      pathLength: scrollYProgress // Ensure pathLength is within the range [0, 1]
    }}
  />
        </AnimatePresence>
        <circle cx={45} cy={50} r={10} className=' fill-orange-500 dark:stroke-none' />
    </svg>
</figure>  )
}

export default Lilcon