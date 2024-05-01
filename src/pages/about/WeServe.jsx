import map_tess from "../../assets/map_tess.png";

const WeServe = () => {
  return (
    <>
      <div className="pt-24 w-full min-h-screen flex justify-center items-center">
        <div className="w-11/12 mx-auto text-white grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          <div>
            <div className="col-span-1 space-y-5">
              <h1 className="text-3xl md:text-4xl font-semibold leading-[2.8rem] tracking-wider">
                We Serve Clients Worldwide.
              </h1>
              <p className="text-gray-300">
                TESS is committed to expanding its global reach, with a
                steadfast focus on delivering professional services to clients
                across the world. As our business continues to flourish at an
                unprecedented pace, we strive to leave no corner untouched,
                making a positive impact for everyone, everywhere!
              </p>
            </div>
          </div>
          <div className="col-span-2">
            <img src={map_tess} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default WeServe;
