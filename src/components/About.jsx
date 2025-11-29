import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full py-25 px-20 rounded-tl-3xl bg-[#CDEA68] rounded-tr-3xl'>
        <h1 className='text-zinc-900 text-[4vw] tracking-tighter leading-[3.5vw] font-["Neue Montereal"]'>
            Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
        <div className='w-full flex gap-5 mt-20 border-t-[1px] border-[#a1b562]'>
            <div className='w-1/2'>
            <h1 className='text-6xl mt-10 text-black'>Our approach</h1>
            <button className='flex gap-10 items-center px-5 py-4 mt-5 bg-zinc-900 rounded-full text-white'> Read More
                <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
            </button>
            </div>
            <img className='w-1/2 h-[60vh] mt-18 rounded-2xl ' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" />
        </div>
    </div>
  )
}

export default About