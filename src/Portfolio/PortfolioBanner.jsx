import React from "react";
import me from "../assets/images/profile-photo.jpg";
import Typed from "react-typed";

const PortfolioBanner = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class=" lg:flex justify-start gap-10  pl-[10%] w-full ">
        <div className="relative group w-[384px]">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <div className=" relative flex justify-start ">
            <img src={me} class="max-w-sm rounded-full shadow-2xl  " alt="" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center lg:items-start mt-8 lg:mt-0">
          <p className="text-xl">HELLO 👋</p>
          <span className="text-2xl font-extrabold">
            {"I AM" + " "}
            <Typed
              strings={["EMON", "A FONT END DEVELOPER ", "A REACT DEVELOPER"]}
              typeSpeed={60}
              backSpeed={30}
              loop
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default PortfolioBanner;
