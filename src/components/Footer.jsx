import {
     AtSignIcon,
     EarthIcon,
     FacebookIcon,
     HeadsetIcon,
     LinkedinIcon,
     TwitterIcon,
} from 'lucide-react'

const socialLinks = [
     {
          name: 'LinkedIn',
          link: '/',
          icon: <LinkedinIcon />,
     },
     {
          name: 'X',
          link: '/',
          icon: <TwitterIcon />,
     },
     {
          name: 'Facebook',
          link: '/',
          icon: <FacebookIcon />,
     },
     {
          name: 'Website',
          link: '/',
          icon: <EarthIcon />,
     },
]

const description =
     'StylBerry offers websites designed to grow the online presence of beauty and body professionals'
const Footer = () => {
     return (
          <footer className="relative z-50 font-poppins  bg-black text-white">
               <div className="px-4 py-12 flex flex-col items-center">
                    {/* app logo */}
                    <div>
                         <a href="/" className="flex justify-center items-center gap-5 ">
                              <img
                                   src="https://i.imgur.com/r9NyYFL.png"
                                   className="md:size-1/5"
                                   alt="Logo"
                              />
                         </a>
                    </div>

                    {/* social links */}
                    <div className="mt-8 justify-center">
                        
                    </div>

                    {/* email */}
                    <div className=" mt-6 mb-2 flex gap-2 items-center">
                         <a href="http://www.homeadvisor.com/rated.ReduxRemodelingLLC.134508613.html" style={{ display: 'block', margin: '0 auto' }}>
                              <img height='100px' alt="Redux Remodeling, LLC is a HomeAdvisor Screened & Approved Pro" style={{ display: 'block' }} src="http://www.homeadvisor.com/images/sp-badges/soap-solid-border.png?sp=134508613&key=65b66875c101b3d9b73257744670ce82" />
                         </a>

                    </div>


               </div>

               {/* about author or app/copyrights */}

          </footer>
     )
}

export default Footer