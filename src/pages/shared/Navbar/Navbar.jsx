import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import mainlogo from "../../../assets/logo/main.png";

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
          to={"/about"}
          className="flex flex-col justify-center items-center gap-[2px]"
        >
          <p className="font-semibold uppercase">About</p>
        </Link>
      </li>
      <li className="me-4 md:py-4  transition-all duration-300">
        <Link
          to={"/services"}
          className="flex flex-col justify-center items-center gap-[2px]"
        >
          <p className="font-semibold uppercase">Services</p>
        </Link>
      </li>
      <li className="me-4 md:py-4  transition-all duration-300">
        <Link
          to={"/"}
          className="flex flex-col justify-center items-center gap-[2px]"
        >
          <p className="font-semibold uppercase">Business Intelligence</p>
        </Link>
      </li>
      <li className="me-4 md:py-4  transition-all duration-300 text-gray-400">
        <Link
          to={"/"}
          aria-disabled
          className="flex flex-col justify-center items-center gap-[2px] cursor-default"
        >
          <p className="font-semibold uppercase">Web 3.0</p>
        </Link>
      </li>
      <li className="me-4 md:py-4  transition-all duration-300 ">
        <Link
          to={"/contact"}
          className="flex flex-col justify-center items-center gap-[2px]"
        >
          <p className="font-semibold uppercase">Contact Us</p>
        </Link>
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
        <div className="justify-between w-11/12 mx-auto md:items-center md:flex">
          <div>
            <div className="flex items-center justify-between md:block">
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
              <div className="md:hidden">
                <button
                  className="p-2 text-white rounded-md outline-none py-4"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-2 font-bold md:font-normal md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul
                className={`flex-col items-start justify-start md:flex-row md:items-center md:justify-center space-y-4 flex md:space-x-8 md:space-y-0 tracking-wider text-sm text-white`}
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
