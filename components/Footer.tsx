import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='md:w-full border-t-2 border-solid border-dark 
    font-medium text-lg md:mb-10 md:mt-20 px-12 dark:text-white !overflow-y-hidden '>
    <div className='sm:flex sm:items-center md:mt-6 mt-2 mb-1 justify-normal sm:justify-between text-center text-sm font-light md:text-lg overflow-x-hidden'>
      <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
      <div>
      <Link href='/' target={"_blank"}>Created with ❤️ using React, NextJS, ThreeJS & Tailwind CSS.
      </Link>
      </div>
    </div>
    </footer>
  )
}

export default Footer