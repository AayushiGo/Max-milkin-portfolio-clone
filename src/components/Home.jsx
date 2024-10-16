import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import About from "./About";
import Works from "./Works";
import Hello from "./Helloo";
import Needdesign from "./Needdesign";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // Add state for hover
  const yellowRef = useRef(null); // Create refs
  const greenRef = useRef(null);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: "power3.out" },
    });

    // Access yellow and green refs
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

  // Toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
      smoothTouch: true,
      touchMultiplier: 1.5,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="w-full min-h-screen relative bg-img px-4 py-5 overflow-hidden ">
      {/* Navbar */}
      <div className="w-full h-20 flex justify-between font-mm-fonts fixed z-[999]">
        <div className="logo w-fit h-12 flex gap-[2px] justify-center items-center cursor-pointer group">
          <h1 className="text-[2.8vw] text-zinc-700">MAX</h1>
          <div className="circle w-2 h-2 bg-zinc-700 rounded-full mb-3 overflow-hidden max-w-0 max-h-0 opacity-0 transition-all duration-500 ease-in-out group-hover:max-w-[0.5rem] group-hover:max-h-[0.5rem] group-hover:opacity-100"></div>
          <h1 className="text-[2.8vw] text-zinc-700">MILKIN</h1>

          <div
            className={`w-[36rem] h-[16rem] bg-[#051517] bg-img bg-center rounded-[1rem] left-[70%] z-30 absolute transition-all ease-out duration-[1.5s] px-6 py-20 ${
              isOpen ? "-top-7" : "-top-[500%]"
            }`}
            style={{ boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.7)" }}
          >
            <div className="flex gap-5">
              <h1 className="text-zinc-200 text-[4rem] tracking-wide relative">
                HOME
                <svg
                  className="absolute -left-[10.5rem] top-9"
                  xmlns="http://www.w3.org/2000/svg"
                  width="415"
                  height="18"
                  viewBox="0 0 415 75"
                  fill="none"
                >
                  <path
                    d="M8 38.9999C44.859 37.5823 81.5002 32.1679 118.111 27.9999C194.416 19.3129 271.33 12.0252 348.111 9.44439C365.834 8.84864 385.741 7.0205 403.556 8.99994C418.361 10.645 374.891 17.1415 360.444 20.7777C324.879 29.7297 289.516 39.5152 254 48.6666C238.574 52.6414 223.078 56.1094 207.556 59.6666C204.955 60.2626 202.341 60.815 199.778 61.5555C195.064 62.9171 198.84 62.7968 201.556 62.8888C228.03 63.7863 254.624 62.9015 281.111 62.9999C284.275 63.0117 308.305 60.084 306 66.9999"
                    stroke="#F9F971"
                    stroke-opacity="0.917647"
                    stroke-width="15"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </h1>
              <h1 className="text-zinc-200 text-[4rem] tracking-wide">ABOUT</h1>
              <h1 className="text-zinc-200 text-[4rem] tracking-wide">WORK</h1>
            </div>

            <div className="social">
              <h5 className="text-zinc-400">Socials</h5>
              <li className="flex gap-5">
                <a className="text-1xl text-zinc-100">Linkedin</a>
                <a className="text-1xl text-zinc-100">Telegram</a>
                <h2 className="text-1xl text-zinc-100">WhatsApp</h2>
                <h2 className="text-1xl text-zinc-100">Instagram</h2>
              </li>
            </div>
          </div>
          <div
            className={`w-[28rem] h-[16rem] bg-[#051517] bg-img bg-center rounded-[1rem] left-[70%] z-20 absolute transition-all ease-out duration-[1.5s] ${
              isOpen ? "top-20" : "-top-[500%]"
            }`}
          >
            <div className="social flex px-5 py-32 flex-col items-end">
              <h1 className="text-1xl text-white mt-10">
                Located in Dusseldorf
              </h1>
              <h1 className="text-white">{time.toLocaleDateString()}</h1>
              <h1 className="text-white">{time.toLocaleTimeString()}</h1>
            </div>
          </div>
        </div>

        <div
          onClick={toggleMenu}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="circle w-16 h-16 z-50 cursor-pointer rounded-full mr-8 relative overflow-hidden bg-[#051517] bg-img bg-center flex flex-col items-center justify-center"
        >
          <div
            className={`h-1 w-6 z-50 bg-slate-300 mb-1 transition-transform duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-1" : ""
            }`}
          ></div>
          <div
            className={`h-1 w-6 z-50 bg-slate-300 transition-transform duration-300 ease-in-out ${
              isOpen ? "-rotate-45 -translate-y-1" : ""
            }`}
          ></div>
          <div
            ref={yellowRef}
            className="absolute top-[5.5vw] transition-all duration-500 ease-out"
          >
            <div className="w-16 h-16 bg-[#f9f971ea] bg-img rounded-full"></div>
          </div>
          <div
            ref={greenRef}
            className="absolute top-[9vw] transition-all duration-500 ease-out"
          >
            <div className="w-16 h-16 bg-[#104d54] bg-img rounded-full"></div>
          </div>
        </div>
      </div>
      {/* Heading */}
      <div className="w-full mt-20 ml-[2vw] leading-[20vw] font-mm-fonts">
        <h1 className="text-[20vw] text-zinc-700">
          FRONTEND DEVELOPER & FREELANCER
        </h1>
      </div>

      {/* Circle */}
      <div className="w-96 h-96 rounded-full absolute top-[15%] -right-44 z-[60] bg-zinc-800 bg-img bg-center"></div>

      {/* Second page */}
      <div className="w-full h-[75vh] bg-img bg-white mt-[18vw] flex justify-center tracking-[1vw] font-mm-fonts">
        <Hello />
      </div>

      {/* Third page */}
      <About />
      <Works />
      <Needdesign />
    </div>
  );
};

export default Home;
