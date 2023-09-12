import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import Link from 'next/link';
const MotionLink = motion(Link);



const Logo = () => {
  return (
    <div className='flex items-center rounded-full justify-center mt-2 dark:border dark:border-white dark:rounded-full'>
    <MotionLink href='/'
    whileHover={{
        scale:1.2,
        transition:{
            duration:1, 
        }}}>
<Image 
src="/Otto_logo-01.png"
width={30}
height={30}
alt="Otto's logo"
/>
</MotionLink>
</div>
)
}

export default Logo