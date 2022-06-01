import React from "react";
import Divider from "./Divider";
import Service from "./Service";

const Services = () => {
  return (
    <div id="services">
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-neutral text-4xl font-bold text-center">
          Services
        </h1>
        <div className="flex justify-center gap-10 my-16">
          <Service />
          <Service />
          <Service />
          <Service />
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default Services;
