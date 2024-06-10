import {useRef} from 'react'
import SliderNumber from './SliderNumber';

const Experince = () => {
    const ref = useRef(null);
  return (
    <div className='max-w-screen-xl m-auto px-16 '>
        <h2 className=' mt-[120px] font-bold leading-[48px]  text-3xl  w-full text-center dark:text-white'>
        Hur ser mitt expertområde inom webbutveckling, plattformer och design ut?
        </h2>
        <div ref={ref} className='w-[100%] mx-auto relative'>
            <SliderNumber />
        </div>
    </div>
  )
}

export default Experince