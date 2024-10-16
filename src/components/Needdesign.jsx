import React from "react";
import Hoverbtn from "./Hoverbtn";


const Needdesign = () => {
  return (
    <>
    <div className="w-[95%] h-[90vh] bg-white bg-img  mt-40  px-10 py-5 text-center rounded-lg ">
      <h1 className="text-[15rem] text-zinc-700 uppercase border-t-2 border-zinc-300 relative font-mm-fonts ">
        Let's create a website
        <svg
          className="absolute top-20 left-[26%] -rotate-2"
          xmlns="http://www.w3.org/2000/svg"
          width="356"
          height="150"
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
      </h1>
      <div className="text-left ml-10 w-32 flex flex-col gap-5 ">
        <input
          className="font-aeonik-regular border-b-2   border-zinc-300 text-[1.2rem] w-[30rem] h-[3rem] bg-transparent "
          type="text"
          placeholder=" Your Name"
          required
        />
        <input
          className="font-aeonik-regular border-b-2   border-zinc-300 text-[1.2rem] w-[30rem] h-[3rem] bg-transparent "
          type="text"
          placeholder=" Your Email"
          required
        />
        <input
          className="font-aeonik-regular border-b-2   border-zinc-300 text-[1.2rem] w-[30rem] h-[3rem] bg-transparent "
          type="tel"
          placeholder=" Your Message"
          required
        />

        <Hoverbtn></Hoverbtn>
      </div>
    </div>
    
    </>
  );
};

export default Needdesign;
