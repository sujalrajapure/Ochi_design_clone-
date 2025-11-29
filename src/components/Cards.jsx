import React from 'react'


function Cards() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1s" className='w-full h-screen mt-5 bg-zinc-100 flex items-center px-32 gap-5'>
        <div className="cardcontainer h-[50vh] w-1/2">
  <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex flex-col items-center justify-center">
    <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" />
    {/* Button inside card & properly positioned */}
    <button className="absolute px-5 py-1 rounded-full border-2 text-white left-5 bottom-5">
      &copy;2019-2022
    </button>
  </div>
</div>
        <div className='cardcontainer flex gap-5 w-1/2 h-[50vh]'>
            <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#192826]'>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"/>
                <button className='absolute text-sm px-5 py-1 rounded-full border-2 left-5 bottom-5'>RATING 5.0 ON CLUTCH</button>
        </div>
            <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#192826]'>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"/>
                <button className='absolute text-sm px-5 py-1 rounded-full border-2 left-5 bottom-5'>BUSINESS BOOTCAMP ALUMINI</button>
            </div>

        </div>
    </div>
  )
}

export default Cards