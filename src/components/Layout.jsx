import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import StickyButton from '../components/StickyButton'


const Layout = () => {
  return (
    <>
    <Navbar/>

    <Outlet/>
    <StickyButton />
    <Footer/>
    </>
  )
}

export default Layout