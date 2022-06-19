import React, { useRef } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const EmailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yezc7j9",
        "template_e2fbzg9",
        form.current,
        "3wJk7FF4DSs9LSXN_"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          toast.success("Email successfully send!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col justify-center w-[450px]  gap-6 "
        action=""
      >
        <h3 className="text-xl">Get In Touch</h3>
        {/* your email */}
        <label className="relative bg-base-100">
          <input
            className="border-2 h-16 pl-4 rounded-xl border-base-300 w-[450px]  text-box bg-base-100"
            type="text"
            name="email"
            id=""
            autoComplete="off"
            placeholder=" "
          />
          <span
            animate={{ duration: 0.2 }}
            className="absolute top-4 left-4 input-text px-1  text-primary"
          >
            Your Email
          </span>
        </label>
        {/* Subject */}
        <label className="relative">
          <input
            className="border-2 h-16 pl-4 rounded-xl border-base-300 w-[450px]  text-box bg-base-100"
            type="text"
            name="subject"
            id=""
            autoComplete="off"
            placeholder=" "
          />
          <span
            animate={{ duration: 0.2 }}
            className="absolute top-4 left-4 input-text px-1"
          >
            Subject
          </span>
        </label>
        {/* your message */}
        <label className="relative">
          <textarea
            className="border-2 h-44 pl-4 rounded-xl border-base-300  w-[450px] text-box bg-base-100 pt-4"
            type="text"
            name="message"
            id=""
            autoComplete="off"
            placeholder=" "
          />
          <span
            animate={{ duration: 0.2 }}
            className="absolute top-4 left-4 input-text px-1"
          >
            Your Message
          </span>
        </label>

        <button className="h-16 text-secondary bg-base-300 w-40 rounded-xl">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
