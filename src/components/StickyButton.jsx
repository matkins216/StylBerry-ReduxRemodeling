import React from 'react'
import { ImPhone } from "react-icons/im";



const StickyButton = () => {
     const handleClick = () => {
          // Make a call to the phone number
          window.location.href = 'tel:+19709869975';
     };

  return (
       <div className='fixed bottom-4 right-4 bg-black text-white p-4 rounded-full shadow-lg cursor-pointer z-50'>
            <ImPhone onClick={handleClick} className='text-4xl decoration-white' />
    </div>
  )
}

export default StickyButton