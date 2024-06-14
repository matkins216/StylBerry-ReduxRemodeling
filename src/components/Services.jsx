import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="flex flex-col justify-center text-center px-5 py-10 md:p-16 font-rale gap-20 w-full">
      <h3 className="text-7xl font-semibold">Services</h3>
      <div className="flex flex-col justify-center mx-5 gap-8 md:gap-10 items-center">
        <img
          src="https://i.imgur.com/4lVcpeb.jpg"
          alt=""
          className="flex md:size-2/4"
          loading="lazy"
        />
        <h2 className="text-2xl md:text-4xl font-medium">
          Basement Remodeling and Renovations
        </h2>
        <p className="text-lg md:text-xl md:w-3/4">
          Your basement holds untapped potential to add valuable living space to
          your home. At Redux Remodeling, we specialize in transforming
          basements from dark and unused spaces to vibrant and functional
          extensions of your living area. Whether it's a complete basement
          remodel or a specific renovation project, our team is equipped to
          handle all aspects of basement finishing. We ensure every detail is
          covered, from the initial design to the final touches, creating a
          space that is both practical and inviting.
        </p>
      </div>

      <div className="flex flex-col justify-center mx-5 gap-8 md:gap-10 items-center  ">
        <h2 className="text-2xl md:text-4xl font-medium">
          Bathroom Remodeling and Renovations
        </h2>
        <p className="text-lg md:text-xl md:w-3/4">
          A bathroom remodel with Redux Remodeling goes beyond the surface. We
          delve into every detail to create a sanctuary that aligns with your
          vision. Our Denver bathroom remodel expertise includes the demolition
          and disposal of old materials, full-scale plumbing and electrical
          work, and the installation of custom carpentry and cabinetry. We
          meticulously install tile and flooring, replace showers and bathtubs,
          and provide ventilation and lighting solutions that enhance both the
          functionality and aesthetics of your bathroom. Our countertop and
          vanity installations are executed with precision, culminating in a
          space that exudes comfort and luxury.
        </p>
      </div>

      <div className="flex flex-col justify-center mx-5 gap-8 md:gap-10 items-center">
        <img
          src="https://i.imgur.com/j1aNsIK.jpg"
          alt=""
          className="flex md:size-2/4"
          loading="lazy"
        />
        <h2 className="text-2xl md:text-4xl font-medium">
          Kitchen Remodeling and Renovations
        </h2>
        <p className="text-lg md:text-xl md:w-3/4">
          The kitchen is the heart of your home, and at Redux Remodeling, we
          understand the importance of a kitchen space that is not only
          beautiful but also highly functional. Our Denver kitchen renovations
          go beyond mere aesthetics; we focus on space planning, cabinet design,
          and appliance integration to ensure your kitchen is a joy to cook and
          gather in. From custom cabinet refacing in Denver to the selection of
          countertops, backsplashes, flooring, and smart home solutions, we
          handle every aspect of your kitchen remodel. Our skilled Denver
          remodelers pay close attention to lighting, electrical upgrades,
          plumbing, and ventilation systems, ensuring every kitchen we remodel
          is a masterpiece of form and function.
        </p>
      </div>

      <div className="flex flex-col justify-center mx-5 gap-8 md:gap-10 items-center ">
        <h2 className="text-2xl md:text-4xl font-medium">
          Beyond the Kitchen and Bath: Other Home Remodeling Services
        </h2>
        <p className="text-lg md:text-xl md:w-3/4">
          Our expertise doesn't end with basements, bathrooms, and kitchens.
          Redux Remodeling offers a full spectrum of home remodeling services to
          encompass all aspects of your home. Our seasoned Denver home
          contractors are adept at executing renovations and remodels that
          elevate your living experience. Whether it's a new addition, a custom
          build-out, or a complete home transformation, our project management
          skills guarantee a seamless transition from the old to the new.
        </p>
      </div>

      <div className="flex flex-col justify-center mx-5 gap-8 md:gap-10 items-center">
        <img
          src="https://i.imgur.com/Meii9kX.jpg"
          alt=""
          className="flex md:size-2/4"
          loading="lazy"
        />
        <h2 className="text-2xl md:text-4xl font-medium">
          Free Consultations: Your Vision, Our Mission
        </h2>
        <p className="text-lg md:text-xl md:w-3/4">
          At Redux Remodeling, we believe in starting every project with a clear
          understanding of your goals and aspirations. That's why we offer free
          consultations to discuss your home remodeling or renovation project.
          Our Denver remodelers are attentive listeners and creative thinkers,
          ready to translate your ideas into a tangible, beautifully remodeled
          space.
          <br />
          <br />
          When you choose Redux Remodeling, you're not just getting a
          contractor; you're partnering with a team of dedicated Denver home
          contractors who are committed to quality, integrity, and customer
          satisfaction. Let us take your home renovations from concept to
          completion with the excellence and professionalism that have become
          our hallmark.
          <br />
          <br />
          Contact Us today to schedule your free consultation and take the first
          step towards making your dream home a reality.
        </p>
        <Link
          to="/contact"
          className="bg-black flex  px-6 py-2 rounded-2xl text-white font-bold hover:bg-lightpink"
        >
          Book a Free Consultation
        </Link>
      </div>
    </div>
  );
};

export default Services;
