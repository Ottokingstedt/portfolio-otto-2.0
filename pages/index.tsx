import Head from 'next/head'
import type { NextPage } from 'next'
import LayoutBlock from '@/components/LayoutBlock'
import HireMe from '@/components/HireMe'
import TransitionEffect from '@/components/TransitionEffect'
import NoSsr from '@/components/no-ssr'
import SpaceModel from '@/components/SpaceModel'
 const Home: NextPage = () => {
  return (
    <>
  <Head>
    <title>Otto Kingstedt</title>
    <meta name='descripton' content='Generated by create next App' />
  </Head>
  <TransitionEffect/>
<LayoutBlock className='pt-0 md:pt-16 sm:pt-8 lg:mt-0 mt-32'>
    <div className='relative flex flex-col justify-center items-center w-full lg:w-full lg:text-center'>
    <NoSsr>
    <SpaceModel className='w-[600px] h-[600px] md:h-[150vh] flex items-center justify-center absolute top-[-50vh] md:top-[-45vh] md:left-28' />
    </NoSsr>
    </div>
    <div className='md:w-full flex lg:flex-col items-end justify-end lg:!text-left'>
  <div className='md:text-3xl md:w-1/2 md:my-10 my-40 dark:text-white px-8 w-full'>
       <h1 className='md:text-6xl font-semibold text-2xl '>Meet Otto, a fullstack developer and designer rooted in the vibrant tech hub of <span className=' underline text-orange-500'>Stockholm.</span> </h1>
       <p className='md:text-3xl my-10 dark:text-white '>Throughout his professional odyssey, he has demonstrated an unshakable passion for crafting an extensive spectrum of services and groundbreaking solutions.
      <br />
      <br />His expertise extends seamlessly from the initial stages of product conceptualization and design, all the way to leveraging code to tackle real-world challenges.
      <br />
      </p>
    </div>
  </div>
      <HireMe />
</LayoutBlock>
</>
  )
}
export default Home
