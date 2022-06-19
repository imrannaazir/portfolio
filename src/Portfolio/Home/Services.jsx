import React from "react";
import Divider from "./Divider";
import Service from "./Service";
import {
  faRunning,
  faLaptopCode,
  faLightbulb,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const services = [
    {
      font: faPaperPlane,
      title: "Fast",
      description:
        "Fast load times and lag free interaction, my highest priority.",
    },
    {
      font: faLaptopCode,
      title: "Responsive",
      description: "My layouts will work on any device, big, medium or small.",
    },
    {
      font: faLightbulb,
      title: "Intuitive",
      description: "Strong preference for easy to use, intuitive UX/UI. ",
    },
    {
      font: faRunning,
      title: "Dynamic",
      description:
        "Websites don't have to be static, I love making pages come to life.",
    },
  ];
  return (
    <div id="services">
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-secondary text-4xl font-bold text-center">
          Services
        </h1>
        <div className="flex justify-center flex-wrap gap-10 my-16">
          {services.map((service, i) => (
            <Service key={i} service={service} />
          ))}
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default Services;
