import React from 'react'
import LayoutBlock from './LayoutBlock'
import Link from 'next/link'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer className='md:w-full border-t-2 border-solid border-dark 
    font-medium text-lg mb-10 dark:text-white overflow-y-hidden'>
    <div className={'sm:flex sm:items-center justify-normal sm:justify-between text-center px-10 mt-5 text-sm font-light md:text-lg overflow-hidden'}>
      <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
      <div>
      <Link href='' target={"_blank"}>Created with ❤️ using React, NextJS, ThreeJS & Tailwind CSS.
      </Link>
      </div>
    </div>
    </footer>
  )
}

export default Footer