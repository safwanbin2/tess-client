import React from "react";

const BuildingBetterThings = () => {
  return (
    <>
      <div className="pt-24 w-full min-h-screen flex justify-center items-center">
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <h1 className="text-white text-4xl md:text-8xl leading-[2.8rem] md:leading-[7rem]">
            finest <br /> solutions <br /> architects
          </h1>
          <div className="space-y-8 md:pt-52">
            <h2 className="font-medium md:text-3xl tracking-wider text-gray-200">
              Established in 2019, “TESS” intends to provide innovative and
              groundbreaking tech solutions. Through diligent research and
              development, we ensure that our consultations remain continuously
              informed about the latest industry trends.
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              Our team embraces a culture of continuous learning, and fostering
              an environment where our ideas consistently push the boundaries of
              innovation. Additionally, our agile development methodology
              champions flexibility, seamlessly integrating with our
              customer-centric approach. This empowers us to truly understand
              our clients' perspectives and stay one step ahead of their
              evolving needs. Moreover, our plug and play business model enables
              us to cater to clients across various industries with diverse
              requirements. We can readily adapt and provide tailored solutions
              to meet the unique demands of each client we serve.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuildingBetterThings;
