import React from "react";
import { Link } from "react-router-dom";

const AboutSite = () => {
  return (
    <>
      <h3 className="text-3xl font-medium text-center ">The Website</h3>
      <div className="flex flex-col md:flex-row py-10 justify-around md:w-screen md:px-20 md:self-center drop-shadow-2xl items-center font-poppins">
        {/* <div className="flex bg-purple/30 absolute md:top-0 left-0 w-full h-full -z-10 " /> */}

        <div className="flex flex-col m-auto md:w-96 ">
          <div className="flex flex-col md:flex-row h-auto self-center ">
            <div className="flex justify-center md:p-0 items-center w-fit ">
              <img
                src="https://i.imgur.com/dOvuIw6.png"
                alt="Website Graphic - Stylberry"
                className="object-fill self-center w-fit"
              />
            </div>
          </div>
          <div className="flex flex-col whitespace-normal gap-10 md:h-auto items-center px-5 justify-center">
            <h5 className="text-2xl font-medium">Hand-Coded</h5>

            <p className=" flex text-wrap md:text-xl mx-5 text-center h-auto w-fit">
              StylBerry websites are hand-coded to offer flexibility, speed, and
              increased conversion. Our sites are built with a business-first
              mindset in order to accomplish your #1 goal - Make Money!!
            </p>
            <Link
              to="https://calendar.app.google/DwsFzMqrtMQqDCVm8"
              className="bg-purple flex  px-6 py-2 rounded-xl text-white font-medium transform transition duration-500 hover:bg-lightpink hover:text-white"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="flex flex-col m-auto md:w-96 ">
          <div className="flex flex-col md:flex-row h-auto self-center ">
            <div className="flex justify-center md:p-0 items-center w-fit ">
              <img
                src="https://i.imgur.com/85PxreN.png"
                alt="Website Graphic - Stylberry"
                className="object-fill self-center w-fit"
              />
            </div>
          </div>
          <div className="flex flex-col whitespace-normal gap-10 md:h-auto items-center px-5 justify-center">
            <h5 className="text-2xl font-medium">Lifetime Updates</h5>
            <p className=" flex text-wrap md:text-xl mx-5 text-center h-auto w-fit">
                                Google changes its search algorithm from time to time, which affects what’s important for ranking. Web accessibility guidelines for screen readers also get updated. That's why we offer lifetime updates for your website, so it stays up-to-date and keeps up with the latest trends.
            </p>
            <Link
              to="https://calendar.app.google/DwsFzMqrtMQqDCVm8"
              className="bg-purple flex  px-6 py-2 rounded-xl text-white font-medium transform transition duration-500 hover:bg-lightpink hover:text-white"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="flex flex-col m-auto md:w-96">
          <div className="flex flex-col md:flex-row h-auto self-center m-auto ">
            <div className="flex justify-center md:p-0 items-center h-fit w-fit ">
              <img
                src="https://i.imgur.com/BaQ89Wl.png"
                alt="Website Graphic - Stylberry"
                className="object-fill self-center w-fit"
              />
            </div>
          </div>
          <div className="flex flex-col whitespace-normal gap-10 md:w-fit md:h-auto items-center px-5 justify-center">
            <h5 className="text-2xl font-medium">Old School Service</h5>

            <p className=" flex text-wrap md:text-xl mx-5 h-auto text-center w-fit">

              If you have any issues with your website, 
              I’m the sole developer and will prioritize restoring it to full functionality as quickly as possible. 
              Your website’s performance is my top priority.
            
            </p>
            <Link
              to="https://calendar.app.google/DwsFzMqrtMQqDCVm8"
              className="bg-purple flex  px-6 py-2 rounded-xl text-white font-medium transform transition duration-500 hover:bg-lightpink hover:text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSite;
