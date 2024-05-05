import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import mainlogo from "../../../assets/logo/main.png";
import { FaTelegramPlane } from "react-icons/fa";
import { MdClose, MdMoreHoriz } from "react-icons/md";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrollY is greater than 100
      if (window.scrollY > 50) {
        // If scrollY is greater than 100, set state to true
        setIsScroll(true);
      } else {
        // If scrollY is not greater than 100, set state to false
        setIsScroll(false);
      }
    };
    console.log(window.scrollY);
    // Add event listener for scroll event
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavLinks = (
    <>
      <li className="me-4 md:py-4  transition-all duration-300">
        <Link
          onClick={() => setNavbar(!navbar)}
          to={"/about"}
          className="flex flex-col justify-center items-center gap-[2px]"
        >
          <p className="font-semibold uppercase md:text-xl">About</p>
        </Link>
      </li>
      <li className="me-4 md:py-4  transition-all duration-300">
        <Link
          onClick={() => setNavbar(!navbar)}
          to={"/services"}
          className="flex flex-col justify-center items-center gap-[2px]"
        >
          <p className="font-semibold uppercase md:text-xl">Services</p>
        </Link>
      </li>
      <li className="me-4 md:py-4  transition-all duration-300">
        <Link
          onClick={() => setNavbar(!navbar)}
          to={"https://huruf.gg/"}
          target="_blank"
          className="flex flex-col justify-center items-center gap-[2px]"
        >
          <p className="font-semibold uppercase md:text-xl">
            Business Intelligence
          </p>
        </Link>
      </li>
      <li className="me-4 md:py-4  transition-all duration-300 text-gray-400">
        <Link
          onClick={() => setNavbar(!navbar)}
          to={"/"}
          aria-disabled
          className="flex flex-col justify-center items-center gap-[2px] cursor-default"
        >
          <p className="font-semibold uppercase md:text-xl">Web 3.0</p>
        </Link>
      </li>
      <li className="me-4 md:py-4  transition-all duration-300 ">
        <Link
          onClick={() => setNavbar(!navbar)}
          to={"/contact"}
          className="flex flex-col justify-center items-center gap-[2px]"
        >
          <p className="font-semibold uppercase md:text-xl">Contact Us</p>
        </Link>
      </li>
      <li className="me-4 md:py-4 transition-all duration-300 block md:hidden">
        <a
          href="https://t.me/tessinsightsbot"
          target="_blank"
          className="flex justify-end items-center gap-4 hover:text-blue-500"
        >
          <div className="text-end">
            <h3 className="text-lg">We are much closer</h3>
            <p className="text-xs text-gray-500">Chat with our Telegram Bot</p>
          </div>
          <div
            href="https://t.me/tessinsightsbot"
            target="_blank"
            className="bg-gray-600 p-3 transition-all duration-300 rounded-full"
          >
            <FaTelegramPlane className="text-xl" />
          </div>
        </a>
      </li>
    </>
  );

  return (
    <nav
      className={`${
        isScroll ? "bg-black bg-opacity-10 backdrop-blur-md" : "bg-transparent"
      } z-10 transition-all duration-500 w-full fixed top-0 left-0 py-0 md:py-3`}
    >
      <div
        className={`${
          navbar ? "bg-black bg-opacity-10 backdrop-blur-md shadow" : ""
        } py-2 md:py-0`}
      >
        <div className="justify-between w-11/12 mx-auto ">
          <div>
            <div className="flex items-center justify-between">
              <ul className="flex justify-center items-center space-x-4 md:space-x-8 md:space-y-0 tracking-wider">
                <li>
                  <Link
                    className="text-xl md:text-2xl uppercase font-bold"
                    to={"/"}
                  >
                    <img className="h-[40px]" src={mainlogo} alt="" />
                  </Link>
                </li>
              </ul>
              <div className="">
                <button
                  className="p-2 text-white rounded-md outline-none py-4 flex items-center gap-2"
                  onClick={() => setNavbar(!navbar)}
                >
                  menu
                  {navbar ? (
                    <p className="text-2xl rounded-3xl hover:bg-blue-600">
                      <MdClose className="text-xl" />
                    </p>
                  ) : (
                    <p className="hover:bg-blue-600 rounded-full">
                      <MdMoreHoriz className="text-2xl " />
                    </p>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-2 font-bold md:font-normal  ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul
                className={`flex-col items-end  space-y-4 md:space-y-2 flex  tracking-wider text-sm text-white`}
              >
                {NavLinks}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
