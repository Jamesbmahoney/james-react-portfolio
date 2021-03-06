import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#800040]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#a6a6a6]">
          James Mahoney
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#800040]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#a6a6a6] py-4 max-w-[700px]">
          I'm a full stack developer specializing in MERN Stack development and
          creating exceptional digital experiences in both the front and back
          end. Currently, I am focused on building responsive full-stack web
          applications.
        </p>
        <div>
          <button className="text-white  group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#800040]">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />              
            </span>            
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
