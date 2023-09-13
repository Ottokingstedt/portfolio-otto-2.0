"use client"
import React, {useState} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SocialIcon } from 'react-social-icons';
import { motion, easeOut, easeIn, AnimatePresence  } from 'framer-motion';
import UseThemeProvider from './libs/UseThemeProvider';
import Logo from './Logo';
//import {FiExternalLink} from 'react-icons/fi';
import {MoonIcon, SunIcon} from './libs/themeIcon'

interface IconBaseProps{
  className?: string
}

interface CustomLinkProps {
  href: string;
  title: string;
  className?: string;
  toggle?: () => void;
};




const CustomLink: React.FC<CustomLinkProps> = ({href, title, className}) => {
  const router = useRouter();
  return(
    <Link href={href} className={`relative ${className}`}>
      {title}
      <span className={`w-0 bg-dark !hidden
      absolute left-0 -bottom-0.5 m-0
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? 'w-full' : 'w-0'}`}>
      </span>
    </Link>
  )
}

const CustomMobileLink: React.FC<CustomLinkProps> = ({ href, title, className, toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    if (toggle) {
      toggle(); 
    }
    router.push(href); 
  }

  return (
    <button className={`${className} relative group text-white dark:text-black`} onClick={handleClick}>
      {title}
      <span className={`h-[1px] inline-block w-0 bg-dark 
      absolute left-0 -bottom-0.5 overflow-hidden m-0
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? 'w-full' : 'w-0'}`}>
      </span>
    </button>
  )
}

export default function Header(){

const[mode, setMode] = UseThemeProvider();
const [isOpen, setIsOpen] = useState(false);

const handleClick = () =>{
  setIsOpen(!isOpen)
}

 
  return (
    <header className='px-8 py-8 flex w-full items-center justify-between z-20 lg:py-4 overflow-hidden' onClick={handleClick}>

      <button  className='fixed z-40 flex-col jusify-center items-center lg:hidden'>
        <span className={`bg-black dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-black dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-black dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>

  <motion.div 
    initial={{
      x: -500,
      opacity: 0, 
      scale: 0.5,
    }}
    animate={{
      x: 0,
      opacity: 1,
      scale: 1,
    }}
    transition={{
      duration: 1.5,
    }}

    className='items-center justify-between w-full hidden lg:flex'
    > 
    <nav className='flex items-center justify-center z-10'>
    <CustomLink href='/' title="Home" className='mr-4 text-gray-300 cursor-poitner hover:text-black dark:hover:text-gray-500'/>
    <CustomLink href='/project' title="Projects" className='mr-4 text-gray-300 cursor-poitner hover:text-black dark:hover:text-gray-500'/>
    <CustomLink href='about' title="About" className='mr-4 text-gray-300 cursor-poitner hover:text-black dark:hover:text-gray-500'/>
    <Link href="/CV_otto_english.pdf" className='flex mr-4 text-gray-300 cursor-pointer border-transparent hover:text-black dark:hover:text-gray-500' target={"_blank"} download={true}>Resume<div className={"w-4 ml-2"}>&#128279;</div>
    </Link>
    </nav>
    
    <nav className="flex items-center justify-center flex-wrap">
      <SocialIcon
      network='email'
      fgColor='currentColor'
      bgColor='transparent'
      className='text-gray-500 hover:text-[#000000] cursor-pointer dark:hover:text-gray-200'
      url='mailto:otto.kingstedt@gmail.com'
      />
        <SocialIcon url="https://www.linkedin.com/in/otto-kingstedt"
      fgColor='currentColor'
      bgColor='transparent'
      className='text-gray-500 hover:text-[#000000] dark:hover:text-gray-200'
      />
      <SocialIcon url="https://github.com/ottokingstedt"
            fgColor='currentColor'
            bgColor='transparent'
            className='text-gray-500 hover:text-[#000000] dark:hover:text-gray-200'      
      />
   <button 
            onClick={() => { if(typeof setMode === "function") { setMode(mode === "light" ? "dark" : "light")}
          }}
            className={`ml-3 items-center justify-center rounded-full p-[4px] first-letter
            ${mode === "light" ? "bg-black text-white" : "bg-white text-black"}`}
            >
            {
                mode === "dark" ?
                <SunIcon className={"fill-black"}/> :
                <MoonIcon className={""} />
            }
        </button>
        </nav>
  </motion.div>

  <AnimatePresence>
  {
    isOpen ?
<motion.div
  initial={{width:"0vw",  x: "-200%", y:"-50%"}}
  animate={{width:"50vw", x:"-80%" }}
  exit={{ width: '0vw', x:"-200%"}}
  transition={{duration: 0.5, 
    originX: 1,
    ease: [easeOut, easeIn]
  }}
    className='min-w-[70vw] h-full flex flex-col items-center justify-center fixed z-30 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-zinc-500 dark:bg-zinc-950   lg:hidden'
    > 
    <nav className='flex items-center flex-col flex-warp mt-5'>
    <CustomMobileLink href='/' title="Home" className='mt-4 text-white dark:text-white' toggle={handleClick}/>
    <CustomMobileLink href='/project' title="Projects" className='mt-4 text-white dark:text-white' toggle={handleClick}/>
    <CustomMobileLink href='about' title="About" className='mt-4 text-white dark:text-white' toggle={handleClick}/>
    <Link href="/CV_otto_english.pdf" className='flex mt-4 text-white dark:text-white' target={"_blank"} download={true}>Resume<div className={"w-4 mt-1 ml-2"}>&#128279;</div>
    </Link>
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
         <button 
            onClick={() => { if(typeof setMode === "function") { setMode(mode === "light" ? "dark" : "light")}
          }}
            className={`w-[35px] ml-3 items-center justify-center rounded-full p-[4px] first-letter
            ${mode === "light" ? "text-white" : "bg-white"}`}
            >
            {
                mode === "dark" ?
                <SunIcon className={"fill-black"}/> :
                <MoonIcon className={""} />
            }
        </button>

        </nav>
</motion.div>

    : null
  }
</AnimatePresence>

    <motion.div
      initial={{
        x: -500,
        opacity: 0, 
        scale: 0.5,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className='absolute items-center left-[50%] translate-x-[-50%]'
    >
              <Logo/>
    </motion.div>
    
    </header>
  
  )
}

