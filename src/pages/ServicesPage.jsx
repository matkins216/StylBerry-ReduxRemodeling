import React from 'react'
import ServicesHero from '../components/ServicesHero'
import Services from '../components/Services'
import ReactGA from 'react-ga4'
import { Helmet } from 'react-helmet'

const ServicesPage = () => {
  return (
     <>
      <Helmet>
        <title>Redux Remodeling - Denver Area Remodeling Services</title>
        <meta
          name="description"
          content="Redux Remodeling is your premier kitchen, bathroom, and basement remodeling contractor in the Greater Denver Metro."
        />
        <meta
          name="keywords"
          content="Denver home remodeling, home remodeling denver, kitchen remodeling, bathroom remodeling, basement finishing and remodeling, remodel, front range home remodeling, Denver, Arvada "
        />
      </Helmet>
      <ServicesHero />
      <Services />
     </>
  )
}

export default ServicesPage