import React from "react";
import me from "../../assets/images/bannerme.png";
import Divider from "./Divider";

const Banner = () => {
  return (
    <div id="banner">
      <div className="max-h-screen flex bg-base-100 ">
        <div className="flex-1 flex items-center justify-center flex-col">
          <div>
            <h3 className="text-2xl">Hello!</h3>
            <h1 className="text-4xl text-primary">I'm Emon</h1>
          </div>
        </div>
        <div className="pt-10 relative">
          <img className="w-[700px] z-20" src={me} alt="" />
          <div className="bg-primary opacity-50 h-[80%] w-[80%] absolute inset-28 rounded-full -z-10"></div>
        </div>
      </div>
      <div className="-mt-[62px]">
        <Divider />
      </div>
    </div>
  );
};

export default Banner;
