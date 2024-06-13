import React from "react";
import { Link } from "react-router-dom";

const AboutSite = () => {
  return (
    <div className="flex flex-col justify-center text-center px-5 py-10 md:p-16 font-rale gap-20 w-full">
      <h2 className="text-7xl font-semibold">About Redux</h2>
      <div className="flex flex-col justify-center mx-5 gap-8 md:gap-10 items-center">
        <img
          src="https://i.imgur.com/4lVcpeb.jpg"
          alt=""
          className="flex md:size-2/4"
          loading="lazy"
        />

        <p className="text-lg md:text-xl md:w-3/4">
          At Redux Remodeling, we are dedicated to turning your Denver home into
          the sanctuary you've always imagined. Our expertise lies in
          meticulously crafted bathroom remodels, where we transform ordinary
          washrooms into spa-like retreats, setting the stage for relaxation and
          tranquility. We're not just about aesthetics; functionality is at the
          forefront of our bathroom designs, ensuring a seamless blend of
          comfort and style.
          <br />
          <br />
          Delve into the depths of your home with our basement remodels. We see
          the untapped potential in every Denver basement, converting them into
          vibrant living spaces, entertainment areas, or cozy retreats. Our
          basement finishing touches are tailored to your vision, creating a
          flow that complements the overall essence of your home.
          <br />
          <br />
          When it comes to expanding your living space, our home additions are
          unmatched. We carefully integrate new rooms to your existing
          structure, maintaining architectural integrity and enhancing your
          home's value. From sunrooms to extra bedrooms, our home additions in
          Denver are designed to meet your evolving lifestyle needs.
          <br />
          <br />
          Our kitchen remodels are where your culinary dreams come to life. We
          combine functionality with finesse to create Denver kitchens that are
          a chef's delight. Whether it's modernizing with new countertops and
          cabinets or a complete overhaul for a fresh, updated look, our kitchen
          transformations are where quality meets innovation.
          <br />
          <br />
          Redux Remodeling stands as a pillar of craftsmanship and customer
          satisfaction in Denver. With clear communication and integrity, we
          ensure your remodeling experience is as enjoyable as the final result.
          For those in Denver and surrounding areas looking for a transformative
          home remodeling experience that includes bathroom remodels, basement
          finishes, home additions, or kitchen revamps, look no further than
          Redux Remodeling. Let's collaborate to make your home a place you're
          proud to belong. Contact us for a free consultation and discover the
          endless possibilities with Redux Remodeling.
        </p>

        <Link
          to="/contact"
          className="bg-black flex  px-6 py-2 rounded-2xl text-white font-bold hover:bg-white hover:text-black hover:outline"
        >
          Book a Free Consultation
        </Link>
      </div>

      <div className="flex flex-col justify-center mx-5 gap-8 md:gap-10 items-center  ">
        <h3 className="text-2xl md:text-4xl font-medium">
          Why Choose Redux Remodeling for Your Home Renovation Needs?
        </h3>
        <p className="text-lg md:text-xl md:w-3/4">
          At Redux Remodeling, we distinguish ourselves from the typical
          renovation companies in Denver through our unwavering dedication to
          craftsmanship, customer satisfaction, and distinctive design. Our
          passion lies in curating beautiful and functional spaces that are a
          true reflection of your individuality and way of life.
          <br />
          <br />
          We understand that transparency and communication are the cornerstones
          of a successful partnership and a seamless remodeling experience. It
          is our promise to engage you in a collaborative process, ensuring
          clarity and involvement at every phase of your project. Our team
          approaches each task with the utmost respect for your home, committing
          to maintain a clean and organized work environment.
          <br />
          <br />
          Our commitment to delivering exceptional quality at a fair price is
          evident in the enduring beauty and functionality of our work. Redux
          Remodeling is not merely a contractor; we are architects of dreams,
          dedicated to converting your vision into a living space that you will
          cherish for years.
          <br />
          <br />
          If you are seeking a residential remodeling company in Denver or the
          surrounding areas, capable of transforming your home into the epitome
          of your aspirations, Redux Remodeling is your ultimate destination. We
          take great pride in being the builders of dreams, eagerly awaiting the
          opportunity to facilitate the creation of your beloved home.
          <br />
          <br />
          Contact us today to initiate a dialogue about your renovation
          aspirations. We are eager to hear from you and embark on the journey
          of bringing your dream home to life.
        </p>
        <Link
          to="/contact"
          className="bg-black flex  px-6 py-2 rounded-2xl text-white font-bold hover:bg-white hover:text-black hover:outline"
        >
          Book a Free Consultation
        </Link>
      </div>
      <div className="flex flex-col md:flex-row w-full py-10 md:p-16 gap-10 justify-center items-center">
        <div className="flex-col md:w-128 h-3/5 rounded-2xl shadow-2xl gap-10 flex p-5 md:p-16 w-96 ">
          <p className="flex text-lg font-medium text-center">
            “Amazing job on our bathroom. Thorough and timely. I would recommend
            this company to my friends and family. Couldn’t be more delighted
            with the project manager he understood what we wanted done and made
            our vision come to life. Impressed with the professionalism
            throughout the process, working in our home.”
          </p>
          <div className="flex flex-row justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#eef520"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#eef520"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#eef520"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#eef520"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#eef520"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </div>
        </div>
        <div className="flex-col md:w-128 h-3/5 rounded-2xl shadow-2xl gap-10 flex p-5 md:p-16 w-96 ">
          <p className="flex text-lg font-medium text-center">
            “We are very happy with the remodel that Alex and his team did for
            us. They were professional, efficient, and they created a beautiful
            new space for our family. If you are considering hiring his company
            you will not be disappointed. Throughout the process they were super
            communicative and they finished the project on time. We are
            definitely going to hire him again for our next project.”
          </p>
          <div className="flex flex-row justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#eef520"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#eef520"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#eef520"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#eef520"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#eef520"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSite;
