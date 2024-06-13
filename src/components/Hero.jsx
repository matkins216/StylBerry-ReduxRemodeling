import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative flex h-screen w-screen items-center md:w-full md:self-center font-rale justify-center">
      <img
        src="https://i.imgur.com/PHLhtnh.jpg"
        alt="redux background"
        className="object-cover h-screen w-full top-0 left-0 "
      />
      <div className="flex bg-black/40 absolute left-0 w-full h-screen z-10 justify-center" />
      <div className="flex flex-col whitespace-normal gap-10 md:w-1/3 md:min-h-[600px] rounded-2xl items-center p-10 md:p-16 w-fit mx-5 justify-center bg-white absolute z-10">
        <h3 className="text-3xl font-bold text-center text-black mx-5 ">
          Denver Home Remodeling and Renovations

        </h3>
        <p className=" flex text-wrap text-lg font-medium md:text-xl mx-5 text-center text-black  w-fit">
          Redux Remodeling is your premier choice when it comes to top-notch home transformations in Denver, Boulder, and beyond.
          <br /><br />
           We specialize in creating bespoke living spaces that reflect your personal style and meet your functional needs. 
          <br /><br />

           From sleek bathroom remodels in Denver to complete kitchen overhauls and cozy basement finishings, our team is dedicated to delivering excellence in every project.


        </p>
        <Link
          to="https://calendar.app.google/DwsFzMqrtMQqDCVm8"
          className="bg-black flex  px-6 py-2 rounded-2xl text-white font-bold hover:bg-white hover:text-black hover:outline"
        >
          Book a Free Consultation
        </Link>
      </div>

     
    </div>
  );
};

export default Hero;
