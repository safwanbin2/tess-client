import React from "react";
import { Link } from "react-router-dom";

const Expertise = () => {
  return (
    <div className="py-20 md:py-40 w-full min-h-screen flex justify-center items-center">
      <div className="w-11/12 mx-auto text-white space-y-10">
        <h3 className="text-blue-600 md:w-5/12 text-sm">
          Our Expertise as Solutions Architects
        </h3>
        <p className="text-gray-400 md:w-5/12 text-lg">
          We provide strategic guidance, reduce complexity in technology
          integration, and ensure that the implemented solutions not only solve
          existing problems but are also scalable and sustainable for future
          growth and innovation.
        </p>
        <h1 className="text-white text-3xl md:text-8xl leading-[2.5rem] md:leading-[7rem] text-wrap">
          custom development <span className="text-gray-700 font-light">/</span>{" "}
          blockchain solutions
          <span className="text-gray-700 font-light">/</span> <br /> uxui{" "}
          <span className="text-gray-700 font-light">/</span> branding digital{" "}
          <br /> strategies
        </h1>
        <div className="inline-block">
          <Link to="/services" className="p-btn">
            <span>Full List of Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
