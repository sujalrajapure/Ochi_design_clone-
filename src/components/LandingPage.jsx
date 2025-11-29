import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUpLong } from 'react-icons/fa6';

function LandingPage() {
  return (
    <div 
      data-scroll 
      data-scroll-section 
      data-scroll-speed="-.3" 
      className='w-full h-screen bg-zinc-100 pt-1 pb-16 mb-10' // Added padding-bottom and margin-bottom
    >
      {/* Text Section */}
      <div className='textstructure mt-52 px-20'>
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => (
          <div key={index} className='masker'>
            <div className='w-fit flex items-center'>
              {index === 1 && (
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "8vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className='mr-[1vw] w-[8vw] rounded-md h-[5vw] top-[0.6vw] relative bg-red-500'
                ></motion.div>
              )}
              <h1 className='flex text-black items-center tracking-tighter uppercase text-[6vw] h-full leading-[6vw] font-["Founders Grotesk X-Cond"] font-bold'>
                {item}
              </h1>  
            </div>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p key={index} className='text-md font-normal text-black tracking-tight leading-none'>{item}</p>
        ))}
        <div className='start flex items-center gap-5'>
          <div className='px-5 py-2 text-black border-[1px] border-zinc-600 font-light text-md rounded-full'>
            START THE PROJECT
          </div>
          <div className='w-10 h-10 text-black flex items-center justify-center border-[1px] border-zinc-500 rounded-full'>
            <span className='rotate-[45deg]'>
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
