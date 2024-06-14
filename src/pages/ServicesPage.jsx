import React from 'react'
import ServicesHero from '../components/ServicesHero'
import Services from '../components/Services'
import ReactGA from 'react-ga4'

const ServicesPage = () => {
  ReactGA.send({
    hitType: 'pageview',
    page: "/services",
    title: "Services",
  })
  return (
     <>
      <ServicesHero />
      <Services />
     </>
  )
}

export default ServicesPage