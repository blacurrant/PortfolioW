import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import Header from '@/components/Header';
import { Hero } from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid';

export default function Home() {
  return (
      <div className='bg-black text-white h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-slate-300/10 scrollbar-thumb-white/70 z-0'>
        <Head>
          <title>Create Next App</title>
        </Head>
        
        {/* Header */}
        < Header />

        {/* Hero */}
        <section id='hero' className='snap-start'>
          <Hero />
        </section>

        {/* about */}
        <section id='about' className='snap-center'>
          <About/>
        </section>

        {/* skills */}
        <section id='skills' className='snap-center'>
          <Skills />
        </section>

        {/* project */}
        <section id='projects' className='snap-start'>
          <Projects />
        </section>

        <section id='contact' className='snap-start'>
          <Contact/>
        </section>   

        <Link href="#hero">
          <footer className='sticky bottom-5 w-full'>
            <div className='flex items-center justify-end mx-5'>
              <ArrowUpCircleIcon className='w-16 h-16 rounded-full filter grayscale hover:grayscale-0 cursor-pointer' />
            </div>
          </footer>
        </Link>

      </div>
  )
}
