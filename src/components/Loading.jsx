import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";  // Use useNavigate instead of useRef
import Mouse from "./Mouse";
import { gsap } from "gsap";

const Loading = () => {
  const loadRef = useRef(null);
  const upRef = useRef(null);
  const visitRef = useRef(null);
  const navigate = useNavigate();  // Initialize navigate with useNavigate

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: "power3.out" },
    });

    if (loadRef.current && upRef.current && visitRef.current) {
      const letters = loadRef.current.children;
      const up = upRef.current.children;

      tl.fromTo(
        letters,
        {
          
          y: "100%",
        },
        {
          y: 0,
          stagger: 0.05,
          delay: 0.2,
          duration: 0.4,
        }
      )

        .to(up, {
          y: -40,
          duration: 1,
          delay: 0.1,
        })
        .to(up, {
          y: -90,
          duration: 1,
          delay: 0.1,
        })
        .to(up, {
          y: -140,
          duration: 1,
          delay: 0.1,
        })

        .to(up, {
          y: -190,
          duration: 1,
          delay: 0.1,
        })

        .to(
          visitRef.current,
          { opacity: 1, y: -20, duration: 1, delay: 0.3 },
          "-=0.3"
        );
    }
  }, []);

  function reverseanim() {
    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: "power3.out" },
    });

    if (loadRef.current && upRef.current && visitRef.current) {
      const letters = loadRef.current.children;
      const up = upRef.current.children;

      tl.fromTo(
        letters,
        {
          y: 0,
        },
        {
          y: "100%",
          stagger: 0.05,
          delay: 0.2,
          duration: 0.4,
        }
      )

        .to(up, {
          y: -500,
          duration: 1,
        })

        .to(
          visitRef.current,
          { opacity: 0, y: -20, duration:0.2  }
        )

        .then(() => {
          navigate("/home");  // Use navigate correctly
        });
    }
  }

  return (
    <div className='w-full h-screen relative bg-img font-mm-fonts'>
      <Mouse className="z-10" />

      {/* LOADING text */}
      <div className="text-zinc-700 leading-[5rem] w-fit overflow-hidden flex-nowrap absolute top-[87%] left-[1%] text-[4.7vw]">
        <div ref={loadRef} className="flex">
          <h1>L</h1>
          <h1>O</h1>
          <h1>A</h1>
          <h1>D</h1>
          <h1>I</h1>
          <h1>N</h1>
          <h1>G</h1>
        </div>
      </div>

      {/* Numbers and MM animation */}
      <div className="absolute top-[45%] left-[50%] translate-x-[-45%] translate-y-[-50%]">
        <div className="text-zinc-700 text-[3vw] h-12 leading-[3rem] translate-y-10 overflow-hidden">
          <div ref={upRef}>
            <h1>00</h1>
            <h1>25</h1>
            <h1>64</h1>
            <h1>99</h1>
            <h1>MM</h1>
          </div>
        </div>
      </div>

      {/* VISIT WEBSITE button (starts hidden) */}
      <div
        ref={visitRef}
        className="absolute top-[50%] left-[46.5%] text-center opacity-0"
      >
        <h1 onClick={reverseanim} className="text-zinc-700 text-[2.2vw] mt-[5rem] cursor-pointer relative group">
          VISIT WEBSITE
          {/* Black line */}
          <div className="black w-full h-[3px] -mt-2 bg-zinc-700"></div>
          {/* White line (animated on hover) */}
          <div className="white w-full h-[3px] absolute left-[-100%] -mt-[3px] bg-[url('./assets/noisybackground.png')] bg-white  transition-all duration-500 ease-out group-hover:left-0"></div>
        </h1>
      </div>
    </div>
  );
};

export default Loading;
