import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hoverbtn = () => {
  // initializations
  const yellowRef = useRef(null);
  const greenRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false); // Correct placement of useState
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: "power3.out" },
    });

    const yellow = yellowRef.current;
    const green = greenRef.current;

    if (isHovered) {
      tl.to(yellow, {
        y: -85,
        duration: 0.1,
      });
      tl.to(green, {
        y: -138,
        duration: 0.1,
      });
    } else {
      tl.to(yellow, {
        y: 0,
        duration: 0.1,
      });
      tl.to(green, {
        y: 0,
        duration: 0.3,
      });
    }
  }, [isHovered]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}  // Event handler to set hover state
      onMouseLeave={() => setIsHovered(false)} // Event handler to reset hover state
      className="circle w-full h-full px-4 py-4 ml-[22rem] cursor-pointer rounded-xl mr-8 relative overflow-hidden bg-[#051517] bg-img bg-center flex  items-center justify-center text-zinc-200 text-1xl "
    >
      <h1 className="z-[50]">Send it</h1>

      <div
        ref={yellowRef}
        className="absolute top-[5.5vw] transition-all duration-500 ease-out "
      >
        <div className="w-[8rem] h-[5rem] z-[40] rounded-xl bg-[#f9f971ea] bg-img "></div>
      </div>
      <div
        ref={greenRef}
        className="absolute top-[9vw] transition-all duration-500 ease-out"
      >
        <div className="w-[8rem] h-[5rem] z-[30] rounded-xl bg-[#104d54] bg-img "></div>
      </div>
    </div>
  );
};

export default Hoverbtn;
