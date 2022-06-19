import React from "react";

const EmailForm = () => {
  return (
    <form className="flex flex-col justify-center w-[450px]  gap-6" action="">
      <h3 className="text-xl">Get In Touch</h3>
      {/* your email */}
      <label className="relative">
        <input
          className="border-2 h-16 pl-4 rounded-xl border-primary w-[450px] text-box"
          type="text"
          name="email"
          id=""
          autoComplete="off"
          placeholder=" "
        />
        <span
          animate={{ duration: 0.2 }}
          className="absolute top-4 left-4 input-text px-1"
        >
          Your Email
        </span>
      </label>
      {/* Subject */}
      <label className="relative">
        <input
          className="border-2 h-16 pl-4 rounded-xl border-primary w-[450px] text-box"
          type="text"
          name="email"
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
          className="border-2 h-44 pl-4 rounded-xl border-primary w-[450px] text-box"
          type="text"
          name="email"
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

      <button className="h-16 border-2 text-secondary border-secondary w-40 rounded-xl">
        Send Message
      </button>
    </form>
  );
};

export default EmailForm;
