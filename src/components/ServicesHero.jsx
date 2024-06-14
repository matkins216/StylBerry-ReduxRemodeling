import React from 'react'
import { Link } from 'react-router-dom'

const ServicesHero = () => {



  return (
    <div className="relative flex h-screen w-screen items-center md:w-full md:self-center font-rale justify-center">
      <img
        src="https://i.imgur.com/VgnCwHp.jpg?3"
        alt="redux background"
        className="object-cover h-full w-full top-0 left-0 "
      />
      <div className="flex bg-black/40 absolute left-0 w-full h-screen z-10 " />
      <div className="flex flex-col top-44 whitespace-normal gap-10 md:w-1/3 md:min-h-[600px] rounded-2xl items-center p-10 md:p-16 w-fit mx-5 justify-center bg-white absolute z-10">
        <h1 className="text-3xl font-bold text-center text-black mx-5 ">
          Your Denver Home Contractors

        </h1>
        <p className=" flex text-wrap text-xl font-medium md:text-xl mx-5 text-center text-black  w-fit">
          At Redux Remodeling, we are not just builders; we are craftsmen and creators, dedicated to elevating the essence of your home through our comprehensive remodeling services in Denver and beyond.


        </p>
        <Link
          to="/contact"
          className="bg-black flex  px-6 py-2 rounded-2xl text-white font-bold hover:bg-white hover:text-black hover:outline"
        >
          Book a Free Consultation
        </Link>
      </div>


    </div>
  )
}

export default ServicesHero