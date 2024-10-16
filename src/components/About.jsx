import React from "react";

const About = () => {
  return (
    <div className="w-full min-h-screen relative bg-img z-[50]  bg-white   font-aeonik-regular px-20 py-14 ">
      <div className="flex items-start  justify-between">
        <h1 className="w-[47%] text-2xl text-zinc-800 leading-7">
          My name is Max, and I'm a front-end developer, who creates websites
          with a special focus on animations and user interaction.
          <br />
          I'm ready to bring your ideas to life and add a touch of originality
          to the online space.
        </h1>
        <h2 className="text-[1.1rem] text-zinc-800 leading-6  ">
          Let's make your <br /> project special!
        </h2>
      </div>

      <h1 className="font-mm-fonts text-4xl text-zinc-700 absolute right-20 top-54 group cursor-pointer">
        MORE ABOUT ME
        <div className="black w-full h-[4px] -mt-1 bg-zinc-700"></div>
        {/* White line (animated on hover) */}
        <div className="white w-full h-[4px] absolute left-[-100%] -mt-[4px] bg-[url('./assets/noisybackground.png')] bg-white  transition-all duration-500 ease-out group-hover:left-0"></div>
      </h1>

      <div className=" circle w-32 h-32 absolute top-[20vw] left-[30vw]  rounded-full right-7 bg-black bg-img "></div>
      <div className=" circle w-12 h-12 absolute top-[26vw] left-[25vw]  rounded-full right-7 bg-black bg-img "></div>

    </div>
  );
};

export default About;
