import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface CarouselItem {
  id: number;
  content: string;
}

const items: CarouselItem[] = [
  { id: 1, content: "/images/likvidum.webp" },
  { id: 2, content: "/images/omstartslån.webp" },
  // Add more items as needed
];

const Carousel: React.FC = () => {
  // Duplicate items to create an infinite loop effect
  const duplicatedItems = [...items, ...items, ...items, ...items, ...items];

  return (
    <div className='w-full h-[500px] overflow-hidden '>
<AnimatePresence>
      <motion.div
        className=" flex flex-col-2 inset-0 "
        initial={{ y: 0, x: 0 }} // Initial position
        style={{ height: 'fit-content'  }} // Adjust height to accommodate all items
        animate={{
            position: "absolute",
            display: "flex",
            top: '-50%',

          y: `-${duplicatedItems.length / 8 * 500}px`, // Move the carousel upwards to reveal the next set of items
          x: `-${duplicatedItems.length / 4 * 250}px`, // Move the carousel diagonally
          transition: {
            ease: 'linear',
            duration: duplicatedItems.length * 4.5, // Adjust duration based on the number of items
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0
          }
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div key={index} className=" flex-none top-0" style={{ width: '500px', height: '500px', margin: '30px', marginLeft: '-75px', rotate: '-22deg',  }}>
            <Image src={item.content} alt={`Item ${item.id}`} width={500} height={500} />
          </div>
        ))}
      </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Carousel;
