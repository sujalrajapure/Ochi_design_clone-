import { motion, useAnimation } from 'framer-motion';
import React, { useState } from 'react';

function Featured() {
    const controls = useAnimation();
    const [activeIndex, setActiveIndex] = useState(null);

    const handleHover = (index) => {
        setActiveIndex(index);
        controls.start({ 
            opacity: 1, 
            y: "0%",
            transition: { duration: index === 0 ? 1.5 : 0.5 } // Longer duration for FYDE
        });
    };

    const handleHoverEnd = () => {
        setActiveIndex(null);
        controls.start({ opacity: 0, y: "20%", transition: { duration: 0.5 } }); // Smooth fade-out
    };

    return (
        <div data-scroll
        data-scroll-section
        data-scroll-speed="-.1"
        className='w-full py-25 mb-[-10] bg-zinc-100 relative'>
            <div className='w-full px-5'>
                <h1 className='text-6xl px-10 tracking-tighter text-black font-["Neue Montereal"]'>Featured Projects</h1>
                <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20 w-full'></div>
            </div>
            
            {/* Animated Text */}
            <motion.h1 
                className='absolute text-[#CDEA68] overflow-hidden left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none font-semibold font-["Founders Grotesk X-Cond"] tracking-tighter text-6xl'
                initial={{ opacity: 0, y: "20%" }} 
                animate={controls}
            >
                {activeIndex === 0 ? "FYDE" : activeIndex === 1 ? "VISE" : ""}
            </motion.h1>

            <div className='px-20'>
                <div className='cards w-full flex gap-5 mt-10'>
                    {/* First Card - FYDE */}
                    <motion.div 
                        onHoverStart={() => handleHover(0)} 
                        onHoverEnd={handleHoverEnd}
                        className='cardcontainer w-1/2 h-[75vh] relative'>
                        <div className='card w-full h-full rounded-xl overflow-hidden'>
                            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png" alt='FYDE'/>
                        </div>    
                    </motion.div>

                    {/* Second Card - VISE */}
                    <motion.div 
                        onHoverStart={() => handleHover(1)} 
                        onHoverEnd={handleHoverEnd}
                        className='cardcontainer w-1/2 h-[75vh] relative'>
                        <div className='card w-full h-full rounded-xl overflow-hidden'>
                            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt='VISE'/>
                        </div>    
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Featured;
