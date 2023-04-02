import React from 'react';
import Image from 'next/image';
import vector from '../img/2.jpeg';
import { motion } from 'framer-motion';

type Props = {}

function About({}: Props) {
  return (
      <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:2}}
      viewport={{once:true}}
      className='container mx-auto relative flex flex-col justify-evenly items-center h-screen text-center lg:text-left'>
          <h1 className='mt-20 uppercase text-2xl text-white tracking-[20px]'>About</h1>
          <div className='flex flex-col items-center lg:flex-row'>
            <motion.div 
              initial={{x: -200}} whileInView={{x:0}} transition={{duration:1}}
              className='mt-10 md:mb-0 flex flex-shrink-0 justify-center items-center object-cove w-[300px] h-[400px] lg:w-[500px] lg:h-[600px]'>
                <Image src={vector} alt='' />
            </motion.div>
            <div className='flex flex-col px-0 lg:pl-10'>
                <h1 className='text-3xl ' >a little something about me</h1>
                <p className='text-base lg:text-lg mt-5'>With a background in computer science and some experience in the field,
                I bring a wealth of expertise to any project. My proficiency in HTML, CSS, and JavaScript,
                combined with my deep understanding of the React ecosystem, allows me to build high-performance,
                scalable web applications efficiently and reliably. I am well-versed in agile methodologies and work effectively in collaborative environments.
                As a self-starter, I stay up-to-date with the latest trends and best practices in web development and am always looking for ways to enhance user experiences.
                </p>
            </div>
          </div>
      </motion.div>
  )
}

export default About