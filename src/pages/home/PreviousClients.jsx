import bac from "../../assets/clients/bac.png";
import glo from "../../assets/clients/glo.png";
import logitech from "../../assets/clients/logitech.png";
import one from "../../assets/clients/one.png";
import pathdao from "../../assets/clients/pathdao.png";
import philips from "../../assets/clients/philips.png";
import popsical from "../../assets/clients/popsical.png";
import samsung from "../../assets/clients/samsung.png";
import chatime from "../../assets/clients/chatime.png";

const PreviousClients = () => {
  return (
    <div className="pb-20 w-full flex justify-center items-center">
      <div className="w-11/12 md:w-10/12 mx-auto flex flex-col xl:flex-row  justify-between items-center gap-20">
        <div className="text-white space-y-6 col-span-2 xl:w-[30%]">
          <h3 className="text-blue-600 text-sm">Partnership</h3>
          <h1 className="text-white text-4xl md:text-8xl leading-[2.5rem] md:leading-[7rem] text-wrap">
            previous <br className="hidden md:block" /> clients
          </h1>
          <p className="text-gray-400 text-lg">
            Our portfolio spans various sectors, showcasing our versatility and
            dedication to excellence in technology and creative execution.
          </p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-3 client-logos gap-10 md:gap-y-6 xl:w-[60%] xl:-mr-24">
          <img src={popsical} alt="" />
          <img src={chatime} alt="" />
          <img src={one} alt="" />
          <img src={glo} alt="" />
          <img src={bac} alt="" />
          <img src={pathdao} alt="" />
          <img src={philips} alt="" />
          <img src={logitech} alt="" />
          <img src={samsung} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PreviousClients;
