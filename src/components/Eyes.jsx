import React, { useEffect, useState, useRef } from 'react';
import { motion } from "framer-motion"

function Eyes() {
  const [rotate, setRotate] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Function to stop video and return to Eyes section
  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className='eyes w-full h-screen overflow-hidden flex items-center justify-center'>
      {!isPlaying ? (
        <div data-scroll data-scroll-speed="-.7"
          className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")] flex items-center justify-center'
          onClick={() => setIsPlaying(true)}
        >
          <div className='absolute flex gap-10'>
            {[...Array(2)].map((_, index) => (
              <div key={index} className='w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100'>
                <div className='relative w-2/3 h-2/3 rounded-full flex items-center justify-center bg-zinc-900'>
                  <h1 className='text text-white text-2xl flex justify-center'>PLAY</h1>
                  <div
                    style={{ transform: `rotate(${rotate}deg)`, transformOrigin: 'center' }}
                    className='line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full rounded-full'
                  >
                    <div className='w-6 h-6 rounded-full bg-zinc-100'></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className='relative w-full h-full' onClick={handleVideoClick}>
          <video 
            ref={videoRef}
            autoPlay
            className='w-full h-full object-cover'
            controlsList="nodownload nofullscreen noremoteplayback"
            onContextMenu={(e) => e.preventDefault()} // Disable right-click
            onPlay={(e) => e.target.controls = false} // Hide default controls
            onEnded={() => setIsPlaying(false)} // Return to Eyes section when video ends
          >
            <source src="https://ochi.design/wp-content/uploads/2022/05/Main-HQ-1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
}

export default Eyes;
