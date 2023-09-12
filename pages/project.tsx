import {useRef} from 'react'
import Head from 'next/head'
import LayoutBlock from '@/components/LayoutBlock'
import AnimatedText from '@/components/AnimatedText'
import TransitionEffect from '@/components/TransitionEffect'
import Link from 'next/link'
import Image from 'next/image'
import { StaticImageData } from 'next/image';
import { SocialIcon } from 'react-social-icons';
import { useScroll, motion } from 'framer-motion';
import ScrollToTopButton from '@/components/ScrollToTopButton'
import project1 from '../public/images/login_form_docker.png'
import project2 from '../public/images/Screenshot 2023-08-31 at 11.04.35.png'
import project3 from '../public/images/ecommerce.png'
import project4 from '../public/images/overseainter.png'
import project5 from '../public/images/wooecommerce.png'
import project6 from '../public/images/mystore.png'

interface freatureProjectProps {
    type: string,
    title: string, 
    summary: string,
    img: StaticImageData,
    link: string,
    github: string,
    programming: string,
}

interface ProjectProps {
    type: string,
    title: string, 
    img: StaticImageData,
    link: string,
    github: string,
    programming: string,
    linkDesc: string,
    summary:string,

}

const FramerImg = motion(Image)

const FeaturedProject = ({type, title, summary, img, link, github, programming}: freatureProjectProps) => {
    return(
        <article className='w-full flex items-center justify-between relative
        rounded-3xl border border-black border-solid shadow-2xl
        md:p-12 p-4 dark:border-white lg:p-8  md:rounded-br-2xl flex-col md:flex-row'>
          <Link href={link} target="_blank"
          className='md:w-1/2 w-full cursor-pointer overflow-x-hidden rounded-lg overflow-hidden'>

            <FramerImg src={img} alt={title} className='w-full h-auto' 
            whileHover={{scale:1.05}}
            transition={{duration:0.2}}
            priority
            />

          </Link>
            <div className='md:w-1/2 w-full flex flex-col items-start justify-between md:pl-6 pl-0 pt-0 md:pt-0 '>
                <span className='text-orange-500 font-medium md:text-xl dark:text-orange-400'>{type}</span>
                    <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left md:text-4xl text-[20px] font-bold dark:text-white'>{title}</h2>
                    </Link>
                    <h3 className='my-2 font-semibold md:text-base text-sm dark:text-white'>{programming}</h3>
                    <p className='my-2 font-medium md:text-base text-sm dark:text-white'>{summary}</p>
                    <div className='mt-2 flex items-center'>
                        
                        <SocialIcon href={github}  url="https://github.com/ottokingstedt"
            fgColor='currentColor'
            bgColor='transparent'
            style={{width:75, height:75}}
            className='text-gray-500 dark:hover:text-gray-200 mx-[-20px]'      
                />
                <Link href={link} target='_blank' className='flex  ml-4 rounded-lg bg-black text-white p-2 px-6 md:text-lg text-sm font-semibold dark:bg-slate-200 dark:text-black'>Visit Project</Link>
                    </div>
            </div>        
        </article>
    )
}

const Project = ({type, title, img, link, programming, summary, github, linkDesc}: ProjectProps) => {
    return (
    <article className='w-full flex flex-col  items-center justify-center
        rounded-2xl border border-solid border-black shadow-2xl
        md:p-6 relative p-4 dark:border-white '>
          <Link href={link} target="_blank"
          className='w-full cursor-pointer overflow-x-hidden rounded-lg overflow-hidden'>
            <FramerImg src={img} alt={title} className='w-full h-auto' 
            whileHover={{scale:1.05}}
            transition={{duration:0.2}} 
            priority/>
          </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-orange-500 font-medium md:text-xl'>{type}</span>
                    <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left md:text-3xl text-[16px] font-bold dark:text-white'>{title}</h2>
                    </Link>
                    <h3 className='my-2 font-semibold dark:text-white'>{programming}</h3>
                    <p className='my-2 font-medium md:text-base text-sm dark:text-white'>{summary}</p>
                    <div className='mt-2 flex items-center'>
                    <SocialIcon href={github}  url="https://github.com/ottokingstedt"
            fgColor='currentColor'
            bgColor='transparent'
            style={{width:75, height:75}}
            className='text-gray-500 dark:hover:text-gray-200 mx-[-20px]'      
                />
                <Link href={link} target='_blank' className='flex  ml-4 rounded-lg bg-black text-white p-2 px-6 md:text-lg text-sm font-semibold dark:bg-slate-200 dark:text-black'>Visit<span className='font-semibold'>&nbsp;{linkDesc}</span></Link>
                    </div>
            </div>        
        </article>
    )
}

const projects = () => {
    const ref = useRef!(null);
    const {scrollYProgress} = useScroll!(
        {
            target: ref,
            offset: ["start", "end"]
        }
    )
  return (
    <div ref={ref} className='w-[full] mx-auto relative'>

<motion.div style={{scaleX: scrollYProgress}}
        className='fixed left-0 top-0  w-full h-[4px] bg-orange-500 origin-left z-50' />
    <Head>
    <title>
        Project | Page
    </title>
    <meta name='description' content='Project description'></meta>
    </Head>  
    <ScrollToTopButton/>
    <TransitionEffect />
    <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <LayoutBlock className='pt-16 px-16'>
            <AnimatedText className='mb-16' text="Nurturing Novice Full Stack Developer: Where Imagination Fuels Code Mastery"/>

            <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 gap-x-0'>
                <div className='col-span-12'>
                    <FeaturedProject
                    title="Angular Dashborad Project"
                    img={project1}
                    summary="This project is a web application developed for use by the Purply organization. It is built using Angular, TypeScript, Docker, Highcharts, Strapi (a headless CMS), and Keycloak for authorization. The code is designed to be modular and well-organized, with a focus on using Angular Material components wherever possible.
                    "
                    link="/"
                    type="Featured Project"
                    github=''
                    programming='Angular, Docker, TypeScript, Strapi & SCSS'
                    
                    />
                </div>

                <div className='md:col-span-6 col-span-12'>
                    <Project
                        title="Overseas Interpreting Project"
                        img={project4}
                        summary="This intern project is for my customer, Overseas Interpreting, an organization that offers international sign interpreting services. It involves designing website accessibility for individuals with disabilities and is being built using PHP and WordPress."
                        link="https://github.com/Ottokingstedt/wordpress-frontend/tree/main/overseasInt"
                        type="Featured Project"
                        github=''
                        linkDesc='Github'
                        programming='PHP, Wordpress, GulpjS, JavaScript '
                        />                
                </div>

                <div className='md:col-span-6 col-span-12'>
                    <Project
                    title="E-Snabbhemkop"
                    img={project3}
                    link="https://github.com/Ottokingstedt/E-Snabbhemkop"
                    type="E-commerce Project"
                    linkDesc='Github'
                    github=''
                    programming='React, Redux, NodeJs, ExpressJS, Bootstrap & MonogDB '
                    summary='This school project is an e-commerce grocery, so it is designed to quickly deliver orders to customers within 24 hours. It is built using Redux, React, Node.js, Express.js, Bootstrap, and MongoDB.'
                    />     
                    </div>         
                <div className='md:col-span-6 col-span-12'>
                    <Project
                    title="E-commerce PHP"
                    img={project6}
                    link="https://github.com/Ottokingstedt/Mystore/tree/main/Mystore"
                    type="E-commerce PHP Project"
                    github=''
                    programming='PHP, JavaScript & MySQL'
                    linkDesc='Github'
                    summary=''
                    />               
                </div>
                <div className='md:col-span-6 col-span-12'>
                <Project
                    title="DevGrocery"
                    img={project5}
                    link="https://github.com/Ottokingstedt/devgrocery"
                    type="Wooecommerce Project"
                    github=''
                    programming='PHP, Wordpress, Wooecommerce, Bootstrap, MYSQL & JavaScript'
                    linkDesc='Github'
                    summary=''

                    />                 
                </div> 
            </div>
        </LayoutBlock>

    </main>
    </div>
    )
}

export default projects