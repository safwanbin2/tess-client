import React from "react";
import erp_solution from "../../assets/past_works/erp_solution.png";
import flwrp from "../../assets/past_works/flwrp.png";
import fortuna from "../../assets/past_works/fortuna.png";
import o_coin from "../../assets/past_works/o_coin.png";
import rnd_energy from "../../assets/past_works/rnd_energy.png";

const PastWorks = () => {
  return (
    <div className="pt-24 w-full min-h-screen flex justify-center items-center">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 text-white gap-10 justify-center items-center">
        {/* first row */}
        <div className="bg-gray-600 bg-opacity-50 rounded-box p-4">
          <img src={erp_solution} alt="" />
        </div>
        <div className="bg-gray-600 bg-opacity-50 rounded-box p-4">
          <img src={flwrp} alt="" />
        </div>
        {/* second row */}
        <div className="space-y-8">
          <h1 className="text-5xl md:text-9xl font-semibold leading-[3.5rem] md:leading-[7rem] tracking-wider">
            past <br className="hidden md:block" /> works
          </h1>
          <p className="text-gray-400 text-lg">
            A showcase of transformative projects and solutions <br /> delivered
            to our clients, highlighting our <br /> dedication to excellence.
          </p>
        </div>
        <div className="bg-gray-600 bg-opacity-50 rounded-box p-4">
          <img src={fortuna} alt="" />
        </div>
        {/* third row */}
        <div className="bg-gray-600 bg-opacity-50 rounded-box p-4">
          <img src={o_coin} alt="" />
        </div>
        <div className="bg-gray-600 bg-opacity-50 rounded-box p-4">
          <img src={rnd_energy} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PastWorks;
