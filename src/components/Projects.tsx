import React from 'react';
import Image from 'next/image';
import dex from '../img/dex.png';
import travel from '../img/travel.png';
import portfolio from '../img/portfolio.png';
import { motion } from 'framer-motion';
import Link from 'next/link';


type Props = {}

function Projects({}: Props) {
  return (
    <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:2}}
      viewport={{once:true}}
      className='container mx-auto relative flex flex-col justify-evenly items-center h-screen text-center lg:text-left'>
        <h1 className='uppercase text-2xl text-white tracking-[20px]'>Projects</h1>
        <motion.div className='flex w-full object-cover gap-5 overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar scrollbar-track-slate-300/10 scrollbar-thumb-white'>
          <div className=' relative w-fit flex flex-col flex-shrink-0 items-center justify-center object-cover snap-center rounded-sm h-[700px]'>
            <Image className='opacity-70 hover:opacity-20 transition-all duration-200' src={travel} alt='' />
            <div className='absolute flex flex-col justify-center items-center text-center text-white bg-black/70 w-[400px] lg:w-[600px] p-5 lg:p-10 gap-3'>
              <h1 className='text-xl lg:text-4xl md:font-bold'>Project 1: Dream Advisor</h1>
              <span className='text-sm lg:text-xl'>Planning for a trip? DREAM ADVISOR got you covered, find all the Hotels,
                Restaurants and Local Attractions for wherever you are headed next in one click.
                Integrated multiple api's for easy access while being completely responsive.</span>
                <div className='flex gap-10'>
                  <Link href='https://delightful-kleicha-db970a.netlify.app/' ><button className='bg-white text-black text-md lg:text-xl font-bold px-5 py-2 lg:py-3 rounded-md border-b border-black animate-pulse'>Link</button></Link>
                  <Link href='https://github.com/blacurrant/inyourdreams'> <button className='bg-white text-black text-md lg:text-xl font-bold px-5 py-2 lg:py-3 rounded-md border-b border-black animate-pulse' >Github</button></Link>
                </div>
            </div>
          </div>
          <div className='relative w-fit flex flex-col flex-shrink-0 justify-center items-center snap-center rounded-sm h-[700px]'>
            <Image className='opacity-70 hover:opacity-20 transition-all duration-200' src={dex} alt='' />
            <div className='absolute flex flex-col justify-center items-center text-center text-white bg-black/70 w-[400px] lg:w-[600px] p-5 lg:p-10 gap-3'>
              <h1 className='text-xl lg:text-4xl md:font-bold'>Project 2: Dex</h1>
              <span className='text-sm lg:text-xl'>Planning for a trip? DREAM ADVISOR got you covered, find all the Hotels,
                Restaurants and Local Attractions for wherever you are headed next in one click.</span>
                <div className='flex gap-10'>
                  <Link href='https://strong-monstera-3b1957.netlify.app'> <button className='bg-white text-black text-md lg:text-xl font-bold px-5 py-2 lg:py-3 rounded-md border-b border-black'>Link</button> </Link>
                  <Link href='https://github.com/blacurrant/uEngage-dex'> <button className='bg-white text-black text-md lg:text-xl font-bold px-5 py-2 lg:py-3 rounded-md border-b border-black' >Github</button> </Link>
                </div>
            </div>
          </div>
          <div className='relative w-fit flex flex-col flex-shrink-0 justify-center items-center snap-center rounded-sm h-[700px]'>
            <Image className='opacity-70 hover:opacity-20 transition-all duration-200' src={portfolio} alt='' />
            <div className='absolute flex flex-col justify-center items-center text-center text-white bg-black/70 w-[400px] lg:w-[600px] p-5 lg:p-10 gap-3'>
              <h1 className='text-xl lg:text-4xl md:font-bold'>Project 3: Portfolio</h1>
              <span className='text-sm lg:text-xl'>Planning for a trip? DREAM ADVISOR got you covered, find all the Hotels,
                Restaurants and Local Attractions for wherever you are headed next in one click.</span>
                <div className='flex gap-10'>
                  <button className='bg-white text-black text-md lg:text-xl font-bold px-5 py-2 lg:py-3 rounded-md border-b border-black'>Link</button>
                  <button className='bg-white text-black text-md lg:text-xl font-bold px-5 py-2 lg:py-3 rounded-md border-b border-black' >Github</button>
                </div>
            </div>
          </div>
        </motion.div>
    </motion.div>
  )
}

export default Projects