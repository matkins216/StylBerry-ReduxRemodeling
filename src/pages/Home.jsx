import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutHome from '../components/AboutHome'
import Footer from '../components/Footer'
import Line from '../components/Line'
import Testimonials from '../components/Testimonials'
import { Helmet } from 'react-helmet'

const Home = () => {

     return (
          <div className=' bg-white h-full'>
               <Helmet>
                    <title>Redux Remodeling - Colorado Home Remodeling</title>
                    <meta name='description' content='Redux Remodeling is your premier kitchen, bathroom, and basement remodeling contractor on the Front Range.' />
                    <meta name='keywords' content='remodeling, kitchen, bathroom, basement, remodel, front range, Denver, Arvada ' />

               </Helmet>
             
               <Hero />
               <AboutHome />
               <Line />
               <Testimonials />
               
          </div>
     )
}

export default Home