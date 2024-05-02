const InnovateBuild = () => {
  return (
    <>
      <div className="py-10 w-full min-h-[60vh] flex justify-center items-center">
        <div className="w-11/12 md:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-5">
          <div className="space-y-8">
            <h1 className="text-white text-3xl md:text-7xl leading-[2rem] md:leading-[5rem]">
              Innovate <br />{" "}
              <span className="text-violet-500">fearlessly</span>
            </h1>
            <p className="text-gray-400 md:w-9/12">
              Great innovation often come from stepping outside of our comfort
              zone, A mindset that promotes resilience, adaptibility, and the
              pursuit of groundbreaking solutions.
            </p>
          </div>
          <div className="md:pt-40 space-y-8">
            <h1 className="text-white text-3xl md:text-7xl leading-[2rem] md:leading-[5rem]">
              Build <br /> <span className="text-violet-500">relentlessly</span>
            </h1>
            <p className="text-gray-400 md:w-9/12">
              This reminds us of the importance of persistence, hard work, and a
              never give-up attitude. It implies a continuous and unyielding
              effort toward achieving a desired outcome
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InnovateBuild;
