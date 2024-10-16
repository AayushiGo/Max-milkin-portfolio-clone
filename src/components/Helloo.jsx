import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Helloo = () => {
  const helloRef = useRef(null);
  

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const helloLetters = helloRef.current.children;
   

    gsap.set(helloLetters, { y: 500 });

    // Animate the letters
    gsap.to(helloLetters, {
      y: 0,
      stagger: 0.09,
      scrollTrigger: {
        trigger: helloRef.current,
        start: "top 80%",
        end: "top 10%",
        scrub: true,
        
      },
    });
  }, []);

  return (
    <div
      ref={helloRef}
      className="flex  text-[32vw] absolute text-zinc-700 z-[1]   "
    >
      <h1>H</h1>
      <h1>E</h1>
      <h1>L</h1>
      <h1>L</h1>
      <h1>O</h1>
      <h1>O</h1>
      <h1>O</h1>
      <h1>O</h1>
      <h1>O</h1>
      <div
            
            className="bg-red-500 w-[24vw] h-[27vw] bg-cover absolute top-[15%]  left-[35%] bg-[url('https://max-milkin.com.ua/img/me.jpg')] bg-center  "
          ></div>
    </div>
  );
};

export default Helloo;

