import React from "react";

const Contacts = () => {
  return (
    <div id="contacts">
      <div className="min-h-screen">
        <h1 className="text-neutral text-4xl font-bold text-center">
          Contacts
        </h1>
        {/* contact  me */}
        <div className="flex justify-between mx-[10%]">
          {/* chat with me */}
          <div></div>
          {/* send email email */}
          <form
            className="flex flex-col justify-center w-[450px]  gap-6"
            action=""
          >
            <h3>Get In Touch</h3>
            <input
              className="border-2 h-16 pl-4 rounded-xl border-primary"
              type="text"
              placeholder="Your Email"
              name="email"
              id=""
            />
            <input
              className="border-2 h-16 pl-4 rounded-xl border-primary"
              type="text"
              placeholder="Your Email"
              name="subject"
              id=""
            />
            <textarea
              className="border-2 h-44 pt-4 pl-4 rounded-xl border-primary"
              type="text"
              placeholder="Your Email"
              name="message"
              id=""
            />
            <button className="h-16 border-2 text-secondary border-secondary w-40 rounded-xl">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
