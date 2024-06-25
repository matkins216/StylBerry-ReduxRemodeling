import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutHome from '../components/AboutHome'
import Footer from '../components/Footer'
import Line from '../components/Line'
import Testimonials from '../components/Testimonials'

const Home = () => {

     return (
          <div className=' bg-white h-full'>
               <Hero />
               <AboutHome />
               <Line />
               <Testimonials />
               
          </div>
     )
}

export default Home