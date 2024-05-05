import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="pb-20 w-full flex justify-center items-center bg-black bg-opacity-70">
      <div className="w-11/12 mx-auto text-white grid grid-cols-1 md:grid-cols-3 justify-center gap-10 md:gap-20">
        <div className="text-xs text-gray-300 space-y-2">
          <h2 className="text-xl text-white mb-5">TESS SDN BHD</h2>

          <p>The Dune @ Oasis Square</p>
          <p>Block A, A-05-08, 2, Jalan PJU 1A/7A, </p>
          <p>Ara Damansara, 47301 Petaling Jaya,</p>
          <p>Selangor, Malaysia.</p>
        </div>
        <div className="text-xs space-y-3 text-gray-300">
          <div>
            <Link className="hover:text-gray-50" to={"/about"}>
              About
            </Link>
          </div>
          <div>
            <Link className="hover:text-gray-50" to={"/services"}>
              Services
            </Link>
          </div>
          <div>
            <Link className="hover:text-gray-50" to={"/"}>
              Business intelligence
            </Link>
          </div>
          <div>
            <Link className="hover:text-gray-50" to={"/"}>
              Web 3.0
            </Link>
          </div>
          <div>
            <Link className="hover:text-gray-50" to={"/contact"}>
              Contact Us
            </Link>
          </div>
        </div>
        <div className="md:text-end flex flex-col justify-between text-xs text-gray-300">
          <div>
            <p className="tracking-widest">
              <a
                href="https://www.linkedin.com/company/tessinsights"
                target="_blank"
              >
                LinkedIn
              </a>{" "}
              |{" "}
              <a href="https://twitter.com/tessinsights" target="_blank">
                X
              </a>{" "}
              | <a href="https://instagram.com/tessinsights">Instagram</a>
            </p>
            <p className="text-gray-200 text-base">© all rights reserved.</p>
          </div>
          <div>
            <p>TESS SDN BHD</p>
            <p>1354299-P (201901044969)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
