import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* <div className="flex text-white h-8 bg-black font-rale w-full">
                    <div className="flex flex-row items-center justify-between m-4 md:mx-10 text-sm w-full font-medium">
                         <p className="flex">
                              New Client Special
                         </p>
                         <p className="flex">
                              Subscribe & Save!!!
                         </p>
                    </div>
               </div> */}

      <div className="bg-white flex p-4 top-0 sticky z-50 w-full font-rale drop-shadow-xl ">
        <div className="container mx-auto w-full flex justify-between items-center">
          <div className="text-black text-2xl font-bold flex-row items-center start flex md:gap-2">
            <img
              src="https://i.imgur.com/ha9azoh.png"
              alt=""
              className=" w-[32px] h-[32px]"
            />

            <p>Redux Remodeling</p>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Navigation button"
              className="text-black focus:outline outline-1 -none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
          <div
            className={`md:flex md:gap-4 font-rale md:items-center ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <Link
              aria-label="Home Button"
              className="block text-center px-6 py-2 text-white rounded-2xl md:mt-0 md:ml-4 transform transition duration-500 hover:outline outline-1  bg-black hover:bg-white hover:text-black"
              to="/"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            <Link
              aria-label="About Button"
              className="block text-center px-6 py-2 text-white rounded-2xl md:mt-0 md:ml-4 transform transition duration-500 hover:outline outline-1  bg-black hover:bg-white hover:text-black"
              to="/about"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              aria-label="Services Button"
              className="block text-center px-6 py-2 text-white rounded-2xl md:mt-0 md:ml-4 transform transition duration-500 hover:outline outline-1  bg-black hover:bg-white hover:text-black"
              to="/services"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              aria-label="Gallery Button"
              className="block text-center px-6 py-2 text-white rounded-2xl md:mt-0 md:ml-4 transform transition duration-500 hover:outline outline-1  bg-black hover:bg-white hover:text-black"
              to="/gallery"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link
              aria-label="Contact Button"
              className="block text-center px-6 py-2 text-white rounded-2xl md:mt-0 md:ml-4 transform transition duration-500 hover:outline outline-1  bg-black hover:bg-white hover:text-black"
              to="/contact"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
