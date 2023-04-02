import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

function BgCircles({}: Props) {
  return (
    <motion.div initial={{ opacity: 1 }} animate={{ scale: [0,2], opacity:[0,0.2,0.5,0.7,1], }} transition={{ duration: 3}} className='relative flex justify-center items-center'>
        <div className='absolute border border-gray-200 opacity-25 rounded-full w-[200px] h-[200px]' />
        <div className='absolute border border-gray-200 opacity-25 rounded-full w-[300px] h-[300px]' />
        <div className='absolute border border-gray-200 opacity-25 rounded-full w-[450px] h-[450px] animate-pulse' />
        <div className='absolute border border-gray-200 opacity-20 rounded-full w-[700px] h-[700px]' />
        <div className='absolute border border-gray-200 opacity-20 rounded-full w-[1100px] h-[1100px] animate-pulse' />
        <div className='absolute border border-gray-200 opacity-20 rounded-full w-[1700px] h-[1700px] animate-pulse' />
    </motion.div>
  )
}

export default BgCircles