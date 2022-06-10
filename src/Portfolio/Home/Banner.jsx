import React from "react";
import me from "../../assets/images/bannerme.png";

const Banner = () => {
  return (
    <div className="max-h-screen" id="banner">
      <div className="h-full lg:flex bg-base-100 ">
        <div className=" flex-1 flex items-center justify-center flex-col">
          <div>
            <h3 className="text-2xl">Hello!</h3>
            <h1 className="text-4xl text-primary">I'm Emon</h1>
          </div>
        </div>
        <div className=" relative">
          <img className="h-full -mb-3 lg:mb-0 " src={me} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
