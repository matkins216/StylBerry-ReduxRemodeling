import { FaInstagram } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative z-20 font-rale  bg-white text-black">
      <div className="px-4 py-12 flex flex-col items-center">
        {/* app logo */}
        <div>
          <a href="/" className="flex justify-center items-center gap-5 ">
            <img
              src="https://i.imgur.com/AzpqyBZ.png"
              className="md:size-1/5"
              alt="Logo"
              loading="lazy"
            />
          </a>
        </div>

        {/* social links */}
        <div className="mt-10 justify-center flex md:flex-row gap-4">
          <Link to="https://www.facebook.com/reduxremodeling">
            <ImFacebook2 className="text-4xl" />
          </Link>

          <Link to="https://www.instagram.com/reduxremodeling/">
            <FaInstagram className="text-4xl" />
          </Link>
        </div>

        {/* email */}
        <div className=" mt-10 mb-2 flex gap-2 items-center">
          <a
            href="https://www.homeadvisor.com/rated.ReduxRemodelingLLC.134508613.html"
            style={{ display: "block", margin: "0 auto" }}
          >
            <img
              height="100px"
              width="100px"
              alt="Redux Remodeling, LLC is a HomeAdvisor Screened & Approved Pro"
              style={{ display: "block" }}
              src="https://www.homeadvisor.com/images/sp-badges/soap-solid-border.png?sp=134508613&key=65b66875c101b3d9b73257744670ce82"
              loading="lazy"
            />
          </a>
        </div>
        <p className="text-sm">Site Built and Managed by <a className=" font-semibold" href="https://stylberry.com/">StylBerry</a></p>

      </div>

      {/* about author or app/copyrights */}
    </footer>
  );
};

export default Footer;
