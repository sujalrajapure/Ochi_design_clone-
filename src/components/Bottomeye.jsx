import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

function Bottomeye() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" className="eyes w-full h-screen overflow-hidden bg-[#CDEA68] flex items-center justify-center relative">
      
      {/* Text Container */}
      <div className="textstructure text-center relative z-10">
        {["READY", "TO START", "THE PROJECT?"].map((item, index) => (
          <div key={index} className="masker">
            <h1 className="text font-bold text-9xl mb-5 tracking-tighter text-black font-['Founders Grotesk X-Cond']">
              {item}
            </h1>
          </div>
        ))}
        <button className="text mt-20 mb-20 border-t-2 border-b-2 bg-black border-black py-2 px-5 items-center justify-center rounded-2xl">START THE PROJECT</button>
      </div>

      {/* Eyes (Circles) Positioned Over the Text in the Center */}
      <div data-scroll data-scroll-section data-scroll-speed=".1" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-10 z-20">
        {[...Array(2)].map((_, index) => (
          <div
            key={index}
            className="w-[10vw] h-[10vw] flex items-center justify-center rounded-full bg-zinc-100"
          >
            <div  className="relative w-2/3 h-2/3 rounded-full flex items-center justify-center bg-zinc-900">
              <div
                style={{
                  transform: `rotate(${rotate}deg)`,
                  transformOrigin: "center",
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full rounded-full"
              >
                <div className="w-6 h-6 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
 
  );
}

export default Bottomeye;
