import React from 'react'
import { motion } from 'framer-motion';
import {
    FaAngular,
    FaReact,
    FaWordpress,
    FaFigma,
    FaHtml5,
    FaCss3,
    FaPhp,
    FaNodeJs,
    FaGitAlt,
    FaDocker,
    FaBootstrap,

} from 'react-icons/fa'
import { 
    BiLogoTailwindCss,
    
 } from "react-icons/bi";

 import {
     SiAdobephotoshop,
     SiAdobeindesign,
     SiAdobeillustrator,
     SiJavascript,
     SiMysql,
     SiBlender


  } from "react-icons/si";


const slides = [
    {icon: <FaAngular />},
    {icon: <FaReact />},
    {icon: <FaNodeJs />},
    {icon: <FaFigma/>},
    {icon: <FaHtml5/>},
    {icon: <FaCss3/>},
    {icon: <SiJavascript/>},
    {icon: <FaPhp/>},
    {icon: <SiMysql/>},
    {icon: <FaWordpress/>},
    {icon: <BiLogoTailwindCss/>},
    {icon: <FaBootstrap/>},
    {icon: <FaDocker/>},
    {icon: <FaGitAlt/>},
    {icon: <SiAdobephotoshop/>},
    {icon: <SiAdobeindesign/>},
    {icon: <SiAdobeillustrator/>},
    {icon: <SiBlender/>},
] 

function SliderNumber() {
    const duplicatedSliders = [...slides, ...slides];
  return (
    <div className='relative w-full overflow-hidden  py-12 bg-white mx-auto" style={{ width: "50%" }} dark:bg-zinc-900'>
                    <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-white  before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-white  after:filter after:blur-3"></div>
        <motion.div 
        className='flex'
        animate= {{
            x: ['0%', '-100%'],
            transition: {
                ease: 'linear',
                duration: 15,
                repeat: Infinity,
            }
        }}
>
    {duplicatedSliders.map((slide, index) => (
            <div key={index} className='flex-shrink-0' style={{ width: `${100 / slides.length}%` }}>
                <div className='flex flex-col items-center justify-center h-full  text-md md:text-4xl dark:text-white'>
                    {slide.icon}                    
                </div>
            </div>
        )
    )}
</motion.div>
    </div>
  );
};

export default SliderNumber