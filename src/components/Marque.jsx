import React from 'react'
import { motion } from "framer-motion"

function Marque() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full py-20  rounded-tl-3xl rounded-tr-3xl bg-[#004043]'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap py-1 leading-tight'>
          <motion.h1 intial ={{x:"0"}} animate={{x: "-100%"}} transition={{ease:"linear", repeat: Infinity,duration:10 }} className='text-[20vw] uppercase leading-none pr-20 font-bold font-["Founders Grotesk X-Cond"] pt-10 -mb[7vw]'>we are ochi</motion.h1>
          <motion.h1 intial ={{x:"0"}} animate={{x: "-100%"}} transition={{ease:"linear", repeat: Infinity,duration:10 }} className='text-[20vw] uppercase leading-none pr-20 font-bold font-["Founders Grotesk X-Cond"] pt-10 -mb[7vw]'>we are ochi</motion.h1>
          <motion.h1 intial ={{x:"0"}} animate={{x: "-100%"}} transition={{ease:"linear", repeat: Infinity,duration:10 }} className='text-[20vw] uppercase leading-none pr-20 font-bold font-["Founders Grotesk X-Cond"] pt-10 -mb[7vw]'>we are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marque