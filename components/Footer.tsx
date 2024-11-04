'use client'
import React from 'react'
import Link from 'next/link'
// import Logo from './Logo'
// import HireMe from '@/components/HireMe'

const Footer = () => {
  return (
    <footer>
    <div className="mx-auto max-w-screen-xl px-4 pb-7 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        {/* <div className="flex mx-2 justify-center sm:justify-start">
        <Logo />
        <h2 className='mx-2'>Otto Kingstedt</h2>
        </div> */}
  
        <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved | Otto Kingstedt&apos;s Portfolio Web</span>
        </p>
    
      </div>
      <div className='text-center'> 
      <ul className="text-gray-400 font-medium flex mx-4 mt-5 flex justify-center">
                        <li className="mx-2">
                            <Link href="https://github.com/Ottokingstedt" className="hover:underline ">Github</Link>
                        </li> |
                        <li className="mx-2">
                            <Link href="https://www.linkedin.com/in/otto-kingstedt/" className="hover:underline">Linkedin</Link>
                        </li>
               </ul>
               </div>
    </div>
  </footer>
  )

}

export default Footer