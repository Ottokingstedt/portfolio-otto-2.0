'use client'
import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import HireMe from '@/components/HireMe'

const Footer = () => {
  return (
      <footer className="bg-white dark:bg-gray-900 px-10">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <Link href="/" className="flex items-center">
                  <Logo />
              </Link>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 sm:gap-6 md:grid-cols-3 sm:grid-cols-1">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Sidor</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <Link href="/about" className="hover:underline">Om mig</Link>
                      </li>
                      <li>
                          <Link href="https://tailwindcss.com/" className="hover:underline">Tjänser</Link>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Följa och connecta</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <Link href="https://github.com/Ottokingstedt" className="hover:underline ">Github</Link>
                      </li>
                      <li>
                          <Link href="https://www.linkedin.com/in/otto-kingstedt/" className="hover:underline">Linkedin</Link>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Integritetspolicy</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <Link href="/privatPolicy" className="hover:underline">Integritetspolicy</Link>
                      </li>
                  </ul>
                  <div className=' relative right-4 hidden md:block'>
                  <HireMe />
                  </div>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div className='mt-10 flex items-center justify-center text-center text-sm font-light'>
    <span>{new Date().getFullYear()} &copy; All Rights Reserved | Otto</span>
    </div>
    </div>
    </footer>
  )
}

export default Footer