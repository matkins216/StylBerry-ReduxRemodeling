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
        "template_4j8y1sr",
        form.current,
        "MpCw9oGLgxFCxfB5w"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="flex flex-col md:flex-row p-10 font-poppins ">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-10 p-6 bg-lightpink/20 items-center py-10 rounded-2xl pb-16 shadow-2xl"
      >
        <p className="text-xl font-bold text-purple  p-2">Let's Connect</p>
        <input
          className="form-input p-1 shadow-xl"
          type="text"
          placeholder="Name"
          name="from_name"
        />
        <input
          className="form-input p-1 shadow-xl"
          type="text"
          placeholder="Email"
          name="reply_to"
        />
        <input
          className="form-input p-1 shadow-xl"
          type="text"
          placeholder="Phone"
          name="user_phone"
        />
        <input
          className="form-input p-1 shadow-xl"
          type="url"
          placeholder="Current"
          name="message"
        />

        <Link
          to="https://calendar.app.google/DwsFzMqrtMQqDCVm8"
          className="bg-purple flex  px-6 py-2 rounded-full text-white font-bold hover:bg-lightpink "
        >
          Book Your Consultation
        </Link>
      </form>
    </div>
  );
};

export default ContactForm;
