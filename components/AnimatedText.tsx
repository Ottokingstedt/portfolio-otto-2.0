import React from 'react'
import {motion, AnimatePresence} from "framer-motion"


type AnimatedProps = {
    text: string;
    className?: string;
  };

const quote = {
    intial:{
        opacity: 0,
    },
    animate:{
        opacity: 1,
        tranition:{
            delay: 4,
        }
    }
}

const singelWord = {
    intial:{
        opacity: 0,
        y: 70,
    },
    animate:{
        opacity: 1,
        y:0,
        tranition:{
            delay: 4,
        }
    }
}

const AnimatedText: React.FC<AnimatedProps> = ({text, className=''}) => {
  return (
    <div className='w-full mx-auto oy-2 flex items-center justify-center text-center
    overflow-hidden sm:py-0'>
        <AnimatePresence>
        <motion.p className={`text-sm inline-block w-full text-black font-bold capitalize dark:text-white md:text-base  ${className}`}
        variants={quote}
        initial='intial'
        animate='animate'
        transition={{duration: 1.5}}
        >
            {
                text.split(" ").map((word, index) => 
                <motion.span key={word+'-'+index} className='inline-block'
                variants={singelWord}
             >
                    {word}&nbsp;
                </motion.span>)
            }
        </motion.p>
        </AnimatePresence>
    </div>
  )
}

export default AnimatedText