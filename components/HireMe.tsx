import React from 'react'
import { Circular } from './Circular'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className='] z-0 flex items-center justify-center'>
        <div className='sm:w-40 w-30 h-auto flex items-center justify-center relative'>
            <Circular className={"fill-dark animate-spin-slow dark:fill-white"} />

            <Link href="mailto:otto.kingstedt@gmail.com" className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
               bg-black text-center text-white text-[12px] shadow-md border-solid border-dark  w-[65px] h-[65px] rounded-full font-semibold hover:bg-slate-50 dark:hover:bg-black hover:text-black dark:hover:text-white dark:bg-white dark:text-black'>
                Hire Me
            </Link>

        </div>
    </div>
  )
}

export default HireMe