import React from 'react'
import ContactForm from '../components/ContactForm'
import { ReactGA } from 'react-ga4'

const ContactPage = () => {
  ReactGA.send({
    hitType: 'pageview',
    page: "/contact",
    title: "Contact",
  })
  return (
       <div className=' bg-white h-full'>

            <ContactForm />

     </div>
  )
}

export default ContactPage