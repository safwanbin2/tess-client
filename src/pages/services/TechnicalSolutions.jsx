import { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const TechnicalSolutions = () => {
  const [web2, setWeb2] = useState(false);
  const [mgmt, setMgmt] = useState(false);
  const [web3, setWeb3] = useState(false);
  const [aiml, setAiml] = useState(false);

  return (
    <>
      <div className="pt-24 w-full min-h-screen flex justify-center items-center">
        <div className="w-11/12 mx-auto text-white grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="col-span-1 space-y-5">
              <div className="space-y-8">
                <h1 className="text-4xl font-semibold leading-[2.8rem] tracking-wider">
                  TECHNOLOGICAL SOLUTIONS
                </h1>
                <h2 className="text-2xl font-semibold tracking-wider">
                  With a focus on innovation and cost-effectiveness.
                </h2>
              </div>
              <div className="h-[2px] bg-white w-full"></div>
              <p className="text-gray-300">
                We leverage on the latest technologies and prioritise streamline
                production processes. Additionally, we ensure effective project
                management and agile development methodologies so that projects
                are delivered on time and within budget.
              </p>
            </div>
          </div>
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
            <div>
              <button
                onClick={() => setWeb2((prev) => !prev)}
                className="bg-gray-400 bg-opacity-50 rounded-box border-2 border-gray-400 p-5 space-y-10 cursor-default"
              >
                <div className="flex justify-between">
                  <div className="space-y-3">
                    <h3 className="uppercase hidden md:block">Technology</h3>
                    <h2 className="text-base md:text-2xl font-semibold tracking-wider">
                      Web 2.0
                    </h2>
                  </div>
                  <div>
                    <div
                      className={`bg-violet-500 p-2 rounded-full transition-all duration-200 ${
                        web2 ? "rotate-45" : "-rotate-45"
                      }`}
                    >
                      <FaArrowCircleRight className="text-2xl" />
                    </div>
                  </div>
                </div>
                <div
                  className={`overflow-hidden transition-height duration-200 ${
                    web2 ? "h-20" : "h-0"
                  }`}
                >
                  <p className="text-sm text-start">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aperiam voluptate consectetur vero consequatur ex blanditiis
                    corporis facere neque dolor laborum!
                  </p>
                </div>
              </button>
            </div>
            <div>
              <button
                onClick={() => setMgmt((prev) => !prev)}
                className="bg-gray-400 bg-opacity-50 rounded-box border-2 border-gray-400 p-5 space-y-10 cursor-default"
              >
                <div className="flex justify-between">
                  <div className="space-y-3 text-start">
                    <h3 className="uppercase hidden md:block">Technology</h3>
                    <h2 className="text-base md:text-2xl font-semibold tracking-wider">
                      Mgmt Softwares
                    </h2>
                  </div>
                  <div>
                    <div
                      className={`bg-violet-500 p-2 rounded-full transition-all duration-200 ${
                        mgmt ? "rotate-45" : "-rotate-45"
                      }`}
                    >
                      <FaArrowCircleRight className="text-2xl" />
                    </div>
                  </div>
                </div>
                <div
                  className={`overflow-hidden transition-height duration-200 ${
                    mgmt ? "h-20" : "h-0"
                  }`}
                >
                  <p className="text-sm text-start">
                    Customer Relationship Management (CRM), Enterprise Resource
                    Planning (ERP), Project and Inventory Management Software,
                    and Point of Sale (POS), or other tools for IoT or IR 4.0
                    related.
                  </p>
                </div>
              </button>
            </div>
            <div>
              <button
                onClick={() => setWeb3((prev) => !prev)}
                className="bg-gray-400 bg-opacity-50 rounded-box border-2 border-gray-400 p-5 space-y-10 cursor-default"
              >
                <div className="flex justify-between">
                  <div className="space-y-3">
                    <h3 className="uppercase hidden md:block">Technology</h3>
                    <h2 className="text-base md:text-2xl font-semibold tracking-wider">
                      Web 3.0
                    </h2>
                  </div>
                  <div>
                    <div
                      className={`bg-violet-500 p-2 rounded-full transition-all duration-200 ${
                        web3 ? "rotate-45" : "-rotate-45"
                      }`}
                    >
                      <FaArrowCircleRight className="text-2xl" />
                    </div>
                  </div>
                </div>
                <div
                  className={`overflow-hidden transition-height duration-200 ${
                    web3 ? "h-20" : "h-0"
                  }`}
                >
                  <p className="text-sm text-start">
                    Blockchain-related, Metaverse/World, Wallets, Decentralized
                    Storage, Cryptocurrencies, Smart Contracts and dApps or any
                    technology on the blockchain, i.e: P2E games and others.
                  </p>
                </div>
              </button>
            </div>
            <div>
              <button
                onClick={() => setAiml((prev) => !prev)}
                className="bg-gray-400 bg-opacity-50 rounded-box border-2 border-gray-400 p-5 space-y-10 cursor-default"
              >
                <div className="flex justify-between">
                  <div className="space-y-3 text-start">
                    <h3 className="uppercase hidden md:block">Technology</h3>
                    <h2 className="text-base md:text-2xl font-semibold tracking-wider">
                      AI and ML
                    </h2>
                  </div>
                  <div>
                    <div
                      className={`bg-violet-500 p-2 rounded-full transition-all duration-200 ${
                        aiml ? "rotate-45" : "-rotate-45"
                      }`}
                    >
                      <FaArrowCircleRight className="text-2xl" />
                    </div>
                  </div>
                </div>
                <div
                  className={`overflow-hidden transition-height duration-200 ${
                    aiml ? "h-20" : "h-0"
                  }`}
                >
                  <p className="text-sm text-start">
                    Leverage on predictive analytics, natural language
                    processing, image and speech recognition, and recommendation
                    systems to gain valuable insights, automate repetitive
                    tasks, enhance customer experiences, and make informed
                    decisions.
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnicalSolutions;
