import React from 'react'
import AboutHero from '../components/AboutHero'
import AboutSite from '../components/AboutSite'
import ReactGA from 'react-ga4'

const AboutPage = () => {
  ReactGA.send({
    hitType: 'pageview',
    page: "/about",
    title: "About",
  })
  return (
     <>
     <AboutHero />
     <AboutSite />
     </>
  )
}

export default AboutPage