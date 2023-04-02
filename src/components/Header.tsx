import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='container mx-auto sticky top-0 p-5 flex flex-row justify-between items-center z-20'>
        <motion.div
          initial={{
            x: -500,
            opacity:0,
          }}
          animate={{
            x:0,
            opacity:1,
          }}
          transition={{
             duration:1,
          }}
        >
            <SocialIcon url='https://www.linkedin.com/in/nishant-choudhary-9533751a5/' fgColor='gray' bgColor='transparent' />
            <SocialIcon url='https://www.behance.net/nishantchoudhary' fgColor='gray' bgColor='transparent' />
            <SocialIcon url='https://www.youtube.com' fgColor='gray' bgColor='transparent' />
            <SocialIcon url='https://www.instagram.com/nishanxc/' fgColor='gray' bgColor='transparent' />
            <SocialIcon url='https://github.com/blacurrant' fgColor='gray' bgColor='transparent' />
        </motion.div>
        {/* <motion.div 
          className='flex flex-row gap-2 items-center cursor-pointer'
          initial={{
            x: 500,
            opacity:0,
          }}
          animate={{
            x:0,
            opacity:1,
          }}
          transition={{
             duration:1,
          }}
        >
            <SocialIcon network='email' fgColor='gray' bgColor='transparent' />
            <h3 className='uppercase text-xl hidden md:inline-flex text-gray-400'>Find me here!</h3>
        </motion.div> */}
    </header>
  )
}