import backend from "../../assets/services/backend.png";
import banking from "../../assets/services/banking.png";
import blockchain from "../../assets/services/blockchain.png";
import fund from "../../assets/services/fund.png";
import emails from "../../assets/services/emails.png";
import management from "../../assets/services/management.png";
import metaverse from "../../assets/services/metaverse.png";
import cms from "../../assets/services/cms.png";
import app from "../../assets/services/app.png";

const ServiceCards = () => {
  const serviceData = [
    {
      label: "Web/app developerment",
      image: app,
    },
    {
      label: "Website/custom cms",
      image: cms,
    },
    {
      label: "Lifetime business emails",
      image: emails,
    },
    {
      label: "Banking and payment",
      image: banking,
    },
    {
      label: "Backend (dashboards)",
      image: backend,
    },
    {
      label: "Management softwares",
      image: management,
    },
    {
      label: "Fundraising on blockchain",
      image: fund,
    },
    {
      label: "Blockchain development",
      image: blockchain,
    },
    {
      label: "Metaverse",
      image: metaverse,
    },
  ];

  return (
    <div className="flex flex-wrap gap-10 mb-40 justify-center">
      {serviceData.map((data, index) => (
        <div
          key={index}
          className="bg-gray-400 bg-opacity-50 rounded-box border-2 border-gray-400 p-3 space-y-4 cursor-default flex items-center justify-center flex-col"
        >
          <img
            src={data.image}
            alt=""
            className="w-[24.5rem] object-contain h-48"
          />

          <p className="uppercase text-white text-xl font-semibold text-center">
            {data.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;
