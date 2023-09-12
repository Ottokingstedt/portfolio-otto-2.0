import React from 'react'
import { Circular } from './Circular'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className='lg:fixed lg:left-4 lg:bottom-[-40vh] z-0 lg:flex items-center justify-center  left-[70%] top-0 bottom-auto absolute'>
        <div className='sm:w-40 md:m-4 m-3 w-30 h-auto flex items-center justify-center relative'>
            <Circular className={"fill-dark animate-spin-slow dark:fill-white"} />

            <Link href="mailto:otto.kingstedt@gmail.com" className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
               bg-black text-white lg:text-sm  shadow-md border-solid border-dark lg:w-20 lg:h-20 w-12 h-12 text-[10px] rounded-full font-semibold hover:bg-slate-50 dark:hover:bg-black hover:text-black dark:hover:text-white dark:bg-white dark:text-black'>
                Hire Me
            </Link>

        </div>
    </div>
  )
}

export default HireMe