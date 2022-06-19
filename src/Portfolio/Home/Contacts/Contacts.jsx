import React from "react";
import "../../../css/contacts.css";
import SocialSend from "./SocialSend";
import EmailForm from "./EmailForm";

const Contacts = () => {
  return (
    <div id="contacts">
      <div className="">
        <h1 className="text-secondary text-4xl font-bold text-center">
          Contacts
        </h1>
        {/* contact  me */}
        <div className="flex justify-center gap-16 my-16">
          {/* chat with me */}
          <SocialSend />
          {/* send email email */}
          <EmailForm />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
