import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import emailjs from '@emailjs/browser';


function Contact() {

  const [emailsent, setEmailSent] = useState(false);

  const sendEmail = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_ilcmezh', 'template_215dtbn', e.target, '-1Ii9YNjc0xB-Apv4')
      .then((result) => {
          console.log(result.text);
          if (result.text == 'OK') {
            setEmailSent(true);
          }
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();

  }


  return (
    <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:2}}
      viewport={{once:true}}
      className='mx-auto relative flex flex-col justify-evenly items-center h-screen bg-gray-200 text-center overflow-hidden lg:text-left'>
        <h1 className='uppercase text-2xl text-black tracking-[20px] z-20'>Contact</h1>
        <div className='flex flex-col text-xl lg:bg-gray-500/20 px-10 py-10 rounded-sm items-center gap-5 z-10'>
            <h1 className='uppercase text-4xl my-10'>Let us get to business</h1>
            <div className='flex gap-5 items-center justify-center '>
              <PhoneIcon className='text-white w-7 h-7 animate-pulse' />
              <p className='text-2xl'> +919417801998</p>
            </div>
            <div className='flex gap-5 items-center justify-center '>
              <EnvelopeIcon className='text-white w-7 h-7 animate-pulse' />
              <p className='text-2xl'> nishantchoudhary1403@gmail.com</p>
            </div>
            <form onSubmit={sendEmail} className='flex flex-col w-fit mx-auto gap-2 mt-10'>
              <div className='flex gap-2'>
                  <input type='text' className='contactInput' placeholder='FirstName...' name='name' />
                  <input type='email' className='contactInput' placeholder='Mail...' name='mail' />
              </div>
              <input type='text' className='contactInput' placeholder='Subject...' name='subject' />
              <textarea className='contactInput' placeholder='Message...' name='message'/>
              <button className='bg-white text-black text-xl font-bold px-10 py-5 rounded-md border-b border-black hover:bg-white/70' type='submit' value="Send">Submit</button>
              {emailsent? <h1 className='text-2xl text-center bg-black/50'>Sent!</h1>: null}
            </form>
        </div>
        <div className='absolute w-screen mt-20 h-[700px] skew-y-12 bg-black z-0' />
    </motion.div>
  )
}

export default Contact