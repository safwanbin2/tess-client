import bac from "../../assets/clients/bac.png";
import glo from "../../assets/clients/glo.png";
import logitech from "../../assets/clients/logitech.png";
import one from "../../assets/clients/one.png";
import pathdao from "../../assets/clients/pathdao.png";
import philips from "../../assets/clients/philips.png";
import popsical from "../../assets/clients/popsical.png";
import samsung from "../../assets/clients/samsung.png";

const PreviousClients = () => {
  return (
    <div className="py-40 w-full min-h-screen flex justify-center items-center">
      <div className="w-11/12 mx-auto grid grid-cols-5 items-end gap-10">
        <div className="text-white space-y-10 col-span-2">
          <h3 className="text-blue-600 text-sm">Partnership</h3>
          <h1 className="text-white text-8xl leading-[7rem]">
            previous <br /> clienteles
          </h1>
          <p className="text-gray-400 text-lg">
            Our portfolio spans various sectors, showcasing our versatility and
            dedication to excellence in technology and creative execution.
          </p>
        </div>
        <div className="col-span-3 grid grid-cols-4 gap-10 client-logos">
          <img src={one} alt="" />
          <img src={glo} alt="" />
          <img src={popsical} alt="" />
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
