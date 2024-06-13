import React from "react";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <div className="flex flex-col h-auto py-10 md:flex-row justify-evenly md:w-full md:self-center drop-shadow-2xl font-poppins  gap-10">
      <div className="flex flex-col whitespace-normal gap-10 md:w-1/3 md:h-auto items-center p-5 md:p-16 justify-center">
        <h3 className="text-3xl font-medium text-center mx-5 ">
          The StylBerry Story
        </h3>
        <p className=" flex text-wrap md:text-xl mx-5 text-center w-fit">
          StylBerry was founded in order to serve small businesses at an
          affordable price point. After spending years consulting with a large
          international agency, it was obvious that properly designed websites
          play a large role in the ability for businesses to scale.
          Unfortunately, small business owners face the shocking price points of
          large agencies or the loss of time and income building it themselves.
          <br /> <br />
          StylBerry is the solution
        </p>
        <Link
          to="https://calendar.app.google/DwsFzMqrtMQqDCVm8"
          className="bg-purple flex  px-6 py-2 rounded-xl text-white font-medium transform transition duration-500 hover:bg-lightpink hover:text-white"
        >
          Get Started
        </Link>
      </div>

      <div className="flex bg-purple/30 absolute md:top-40 left-0 w-full h-96 skew-y-12 -z-10 " />
      
    </div>
  );
};

export default AboutHero;
