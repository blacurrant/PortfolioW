import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BgCircles from './BgCircles';

type Props = {}

export const Hero = (props: Props) => {

    const[text, count] = useTypewriter({
        words:["Hi, I am Nishant Choudhary", "frontEnd-for-day.tsx", "<GamesAtNight />"],
        loop: true,
        delaySpeed: 1000,
    });

  return (
    <div className='relative h-screen space-y-8 flex flex-col justify-center items-center text-center overflow-hidden snap-center '>        
        <div>
            <h2 className='text-xl font-500 uppercase tracking-[15px]'> frontEnd Developer</h2>
            <h1 className='my-10 text-5xl lg:text-7xl'>
                <span>{text}</span>
                <Cursor />
            </h1>
        </div>
        <div className='flex flex-col gap-10 z-20 sm:flex-row'>
            <Link href='#about'><button className='heroButton'>About</button></Link>
            <Link href='#skills'><button className='heroButton'>Skills</button></Link>
            <Link href='#projects'><button className='heroButton'>Projects</button></Link>
            <Link href='#contact'><button className='heroButton'>Contact</button></Link>
        </div>
        <BgCircles />
    </div>
  )
}