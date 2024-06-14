import React from 'react'
import Gallery from '../components/Gallery'
import ReactGA from 'react-ga4'

const GalleryPage = () => {
  ReactGA.send({
    hitType: 'pageview',
    page: "/gallery",
    title: "Gallery",
  })
  return (
    <>
    <Gallery />
    </>
  )
}

export default GalleryPage