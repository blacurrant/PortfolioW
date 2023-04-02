import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

function BgCircles({}: Props) {
  return (
    <motion.div initial={{ opacity: 1 }} whileInView={{ scale:[1,3], opacity:0.5 }} transition={{ duration: 10}} viewport={{once:true}} className='relative flex justify-center items-center'>
        <div className='absolute border border-black opacity-25 rounded-full w-[200px] h-[200px]' />
        <div className='absolute border border-black opacity-25 rounded-full w-[300px] h-[300px]' />
        <div className='absolute border border-black opacity-25 rounded-full w-[450px] h-[450px] animate-pulse' />
        <div className='absolute border border-black opacity-20 rounded-full w-[700px] h-[700px]' />
        <div className='absolute border border-black opacity-20 rounded-full w-[1100px] h-[1100px] animate-pulse' />
        <div className='absolute border border-black opacity-20 rounded-full w-[1700px] h-[1700px] animate-pulse' />
    </motion.div>
  )
}

export default BgCircles