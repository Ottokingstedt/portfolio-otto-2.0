'use client'
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SocialIcon } from 'react-social-icons';
import { motion, AnimatePresence, easeIn, easeOut } from 'framer-motion';
import Logo from './Logo';

interface CustomLinkProps {
  href: string;
  title: string;
  className?: string;
  toggle?: () => void;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, title, className }) => {
  const router = useRouter();
  return (
    <Link href={href}  className={`relative ${className}`}>
        {title}
        <span className={`w-0 bg-dark hidden absolute left-0 -bottom-0.5 transition-[width] duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}></span>
    </Link>
  );
};

const CustomMobileLink: React.FC<CustomLinkProps> = ({ href, title, className, toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    if (toggle) {
      toggle();
    }
    router.push(href);
  };

  return (
    <button className={`${className} relative group`} onClick={handleClick}>
      {title}
      <span className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 transition-[width] duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}></span>
    </button>
  );
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`py-8 flex w-full items-center justify-between z-50 lg:py-4 fixed transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className='max-w-screen-xl w-full m-auto px-10 pt-2 flex justify-end items-end'>
        {/* Mobile responsive / hamburger */}
        <button onClick={handleClick} className='fixed z-40 flex-col justify-center items-center lg:hidden'>
          <span className={`bg-black dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
          <span className={`bg-black dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`bg-black dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
        </button>

        <div className='items-center justify-between w-full hidden lg:flex'>
          <nav className='flex items-center justify-center z-10'>
            <Logo />
          </nav>

          <nav className="flex items-center justify-center flex-wrap">
            <CustomLink href='/about' title="Om mig" className='mr-4 cursor-pointer dark:text-gray-100 hover:underline dark:hover:text-gray-500' />
            <CustomLink href='/offret' title="Offretförfrågan" className='mr-4 cursor-pointer dark:text-gray-100 hover:underline dark:hover:text-gray-500' />
            <CustomLink href='/service' title="Tjänster" className='mr-4 cursor-pointer dark:text-gray-100 hover:underline dark:hover:text-gray-500' />
          </nav>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ width: "0vw", x: "-200%", y: "-50%" }}
              animate={{ width: "50vw", x: "-80%" }}
              exit={{ width: '0vw', x: "-200%" }}
              transition={{ duration: 0.5, originX: 1, ease: [easeOut, easeIn] }}
              className='min-w-[70vw] h-full flex flex-col items-center justify-center fixed z-30 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-zinc-950 lg:hidden'
            >
              <nav className='text-black flex items-center flex-col flex-wrap'>
                <CustomMobileLink href='/' title="Home" className='mt-4 text-black' toggle={handleClick} />
                <CustomMobileLink href='/about' title="Om mig" className='mt-4 cursor-pointer dark:text-gray-100 hover:underline dark:hover:text-gray-500' toggle={handleClick} />
                <CustomMobileLink href='/offret' title="Offretförfrågan" className='mt-4 cursor-pointer dark:text-gray-100 hover:underline dark:hover:text-gray-500' toggle={handleClick} />
                <CustomMobileLink href='/service' title="Tjänster" className='mt-4 cursor-pointer dark:text-gray-100 hover:underline dark:hover:text-gray-500' toggle={handleClick} />
              </nav>

              <nav className="flex items-center mt-10">
                <SocialIcon
                  network='email'
                  fgColor='currentColor'
                  bgColor='transparent'
                  className='text-white'
                />
                <SocialIcon url="https://www.linkedin.com/in/otto-kingstedt"
                  fgColor='currentColor'
                  bgColor='transparent'
                  className='text-white'
                />
                <SocialIcon url="https://github.com/ottokingstedt"
                  fgColor='currentColor'
                  bgColor='transparent'
                  className='text-white'
                />
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
