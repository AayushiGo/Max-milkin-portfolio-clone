import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { FaArrowUp } from "react-icons/fa";

// Reusable AnimatedWord Component
const AnimatedWord = ({ word, onHover }) => {
  const wordRef = useRef(null);
  const nextRef = useRef(null);

  const handleMouseEnter = () => {
    const letters = Array.from(wordRef.current.children);
    const next = nextRef.current.children;

    onHover(word); // Notify parent component about the hovered word

    // Animate the letters upwards
    gsap.to(letters, {
      y: -165, // Adjust this value as needed
      stagger: 0.03,
      duration: 0.4,
    });

    // Animate the arrow upwards
    gsap.to(next, {
      y: -250, // Adjust this value as needed
      stagger: 0.03,
      duration: 0.4,
    });
  };

  const handleMouseLeave = () => {
    const letters = Array.from(wordRef.current.children);
    const next = nextRef.current.children;

    onHover(null); // Reset hovered word when the mouse leaves

    // Animate letters back to their original position
    gsap.to(letters, {
      y: 0,
      stagger: 0.03,
      duration: 0.4,
    });

    // Animate arrow back to original position
    gsap.to(next, {
      y: 0,
      stagger: 0.03,
      duration: 0.4,
    });
  };

  return (
    <div
      className="h-40 mt-10 overflow-hidden cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={wordRef} className="flex w-full text-[10rem] text-zinc-700">
        {word.split("").map((letter, index) => (
          <h1 className={letter === "z" ? "opacity-0" : ""} key={index}>
            {letter}
          </h1>
        ))}
      </div>
      <div
        ref={nextRef}
        className="flex w-full items-center text-[10rem] text-zinc-700 relative"
      >
        {word.split("").map((letter, index) => (
          <h1 className={letter === "z" ? "opacity-0" : ""} key={index}>
            {letter}
          </h1>
        ))}
        <i className="text-[4rem] ml-12 rotate-45">
          <FaArrowUp />
        </i>
      </div>
    </div>
  );
};

// Works Component to Render Multiple Words
const Works = () => {
  const words = [
    "SOULFULzSYMBOLS",
    "MOSAICzOFzCULTURES",
    "EMTzPROMO",
    "CYBERFAM",
    "VLADzTRITOCHKI",
  ]; // Add more words here

  const [hoveredWord, setHoveredWord] = useState(null);
  const [isVisible, setIsVisible] = useState(false); // State to control visibility
  const [mouseY, setMouseY] = useState(0);

  const handleHover = (word) => {
    setHoveredWord(word); // Set the hovered word
  };

  const enterd = () => {
    setIsVisible(true); // Make visible on mouse enter
  };

  const leave = () => {
    setIsVisible(false); // Make invisible on mouse leave
  };

  const handleMouseMove = (e) => {
    setMouseY(e.clientY - 100);
  };

  return (
    <div className="w-full min-h-screen bg-white bg-img px-10 py-10 font-mm-fonts relative">
      <h1 className="text-[4.5vw] text-zinc-700 ">RECENT WORKS</h1>
      <svg
        className="absolute top-12 -left-7 -rotate-6"
        xmlns="http://www.w3.org/2000/svg"
        width="356"
        height="70"
        viewBox="0 0 356 134"
        fill="none"
      >
        <path
          d="M17.2578 111.548C58.0588 116.457 99.6204 115.273 140.645 114.595C192.218 113.742 239.567 109.583 287.509 89.6846C306.304 81.8837 327.501 73.0038 340.914 56.8889C362.416 31.0542 333.19 17.9037 310.896 13.6093C275.037 6.70212 235.632 7.68544 199.337 9.129C159.353 10.7193 121.189 17.5801 83.2076 30.0967C64.5166 36.2563 44.8404 42.7618 27.4728 52.2294C20.2418 56.1712 8.96721 63.3542 7.93878 72.8387C6.10874 89.7156 30.3694 100.978 43.1538 104.021C58.6278 107.706 74.9913 108.196 90.7345 109.756C120.907 112.746 150.963 116.256 180.878 121.226C192.325 123.128 203.974 126.064 215.645 126.064"
          stroke="#F9F971"
          strokeOpacity="0.917647"
          strokeWidth="15"
          strokeLinecap="round"
        ></path>
      </svg>

      <div
        onMouseEnter={enterd}
        onMouseLeave={leave}
        onMouseMove={handleMouseMove}
        className="w-full h-full bg-white bg-img px-5 border-t-2 border-zinc-300 mt-10 relative"
      >
        {words.map((word, index) => (
          <AnimatedWord key={index} word={word} onHover={handleHover} />
        ))}

        {/* Image that appears on mouse enter */}
        <div
          className={`box w-[23rem] h-[23rem] rounded-[1rem] bg-white bg-img absolute left-[70%] transition-all duration-700 ease-in-out overflow-hidden ${
            isVisible ? "visible" : "invisible"
          }`}
          style={{
            top: `${mouseY}px`, // This updates the box's Y position based on mouse movement
          }}
        >
          {hoveredWord === "SOULFULzSYMBOLS" && (
            <img
              className="w-full h-full object-cover"
              src="https://max-milkin.com.ua/img/work/1.jpg"
              alt="Soulful Symbols"
            />
          )}
          {hoveredWord === "MOSAICzOFzCULTURES" && (
            <img
              className="w-full h-full object-cover"
              src="https://max-milkin.com.ua/img/work/2.jpg"
              alt="Mosaic Cultures"
            />
          )}
          {hoveredWord === "EMTzPROMO" && (
            <img
              className="w-full h-full object-cover"
              src="https://max-milkin.com.ua/img/work/3.jpg"
              alt="Emt Promo"
            />
          )}
          {hoveredWord === "CYBERFAM" && (
            <img
              className="w-full h-full object-cover"
              src="https://max-milkin.com.ua/img/work/4.jpg"
              alt="Cyberfam"
            />
          )}
          {hoveredWord === "VLADzTRITOCHKI" && (
            <img
              className="w-full h-full object-cover"
              src="https://max-milkin.com.ua/img/work/5.jpg"
              alt="Vlad"
            />
          )}
        </div>
      </div>

      {/* nedd design section */}
    </div>
  );
};

export default Works;
