import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="pt-24 w-full min-h-screen flex justify-center items-center">
        <div className="w-11/12 mx-auto flex justify-center items-center flex-col text-white gap-8">
          <h1 className="text-5xl font-semibold leading-[3.5rem] text-center tracking-wider">
            INNOVATE FEARLESS. <br /> BUILD RELENTLESSLY.
          </h1>
          <p className="text-sm">
            We are solutions architects dedicated to empowering innovation.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
