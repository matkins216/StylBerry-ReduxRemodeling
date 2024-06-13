import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("send works");
    emailjs
      .sendForm(
        "service_n83f2gn",
        "template_7ha9ol3",
        form.current,
        "MpCw9oGLgxFCxfB5w"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="flex flex-col md:flex-row p-10 font-rale items-center justify-center gap-10 ">
      <div className="flex flex-col whitespace-normal gap-10 md:w-1/3 md:min-h-[600px] rounded-2xl items-center p-5 md:p-16 w-fit mx-5 justify-center bg-white">
        <h3 className="text-3xl font-bold text-center text-black mx-5 ">
          Begin Your Denver Remodeling Experience with Redux Remodeling

        </h3>
        <p className=" flex text-wrap text-lg font-medium md:text-lg mx-5 text-center text-black  w-fit">
          Embark on the path to a remarkable renovation in Denver with Redux Remodeling. We stand as your premier partner in home transformations, leading the way from the initial concept to the final flourish. Our expertise extends across a spectrum of projects, from crafting a serene, spa-like bathroom to enlivening your space with a dynamic basement finish in Aurora, CO, or undertaking an all-encompassing home renovation in Denver.
          <br /><br />
          We invite you to reach out to us for an obligation-free consultation. Our dedicated team of professionals is poised to assist you in navigating the remodeling process, ensuring a seamless and satisfying journey. Contact Redux Remodeling today and take the first step towards realizing the potential of your home.



        </p>
        
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-10 p-6 bg-white items-center py-10 rounded-2xl pb-16 shadow-2xl"
      >
        <p className="text-xl font-bold text-black  p-2">Contact Us</p>
        <input
          className="form-input p-1 shadow-xl outline outline-1 outline-offset-1"
          type="text"
          placeholder="Name"
          name="from_name"
        />
        <input
          className="form-input p-1 shadow-xl outline outline-1 outline-offset-1"
          type="text"
          placeholder="Email"
          name="reply_to"
        />
        <input
          className="form-input p-1 shadow-xl outline outline-1 outline-offset-1"
          type="text"
          placeholder="Phone"
          name="user_phone"
        />
       <textarea className="form-input p-1 shadow-xl outline outline-1 outline-offset-1" rows={5} placeholder="Message"></textarea>

        <button className="bg-black flex  px-6 py-2 rounded-full text-white font-bold hover:bg-white hover:text-black hover:outline outline-1  " type="submit">
          Book Your Free Consultation
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
