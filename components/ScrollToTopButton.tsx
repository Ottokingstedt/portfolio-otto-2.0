import React, {useEffect} from 'react'
import {motion, Variants, useScroll, useAnimationControls} from 'framer-motion'
import {FaArrowUp} from 'react-icons/fa'

interface ScrollToOptions {
  left?: number;
  top?: number;
  behavior?: "auto" | "smooth";
}

const isScroll = () => typeof window !== 'undefined'; 


const ScrolltoTopContainer: Variants = {
  hide: { opacity: 0, y: 100},
  show: { opacity: 1, y: 0}
}

function scrollToTop() {
  if (!isScroll()) return;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


const ScrollToTopButton = () => {
  const { scrollYProgress } = useScroll();
  const controls = useAnimationControls();

  useEffect(() => {
    return scrollYProgress.on('change', (latestValue) => {
        if (latestValue > 0.5) {
            controls.start('show');
        } else {
            controls.start('hide');
        }
    });
  });

  return (
    <>
    <motion.button
    className='fixed bottom-0 right-0 p-3 m-3 rounded-full bg-black text-white'
    variants={ScrolltoTopContainer}
    initial="hide"
    transition={{duration: 0.5}}
    animate={controls}
    onClick={scrollToTop}
    >
    <FaArrowUp/>

    </motion.button>
    </>
  )
}

export default ScrollToTopButton