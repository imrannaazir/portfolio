import React from "react";
import me from "../../assets/images/bannerme.png";
import Divider from "./Divider";

const Banner = () => {
  return (
    <div className=" relative" id="banner">
      <div className="h-full lg:flex bg-base-100 ">
        <div className=" flex-1 flex items-center justify-center flex-col">
          <div>
            <h3 className="text-2xl">Hello!</h3>
            <h1 className="text-4xl text-primary">I'm Emon</h1>
          </div>
        </div>
        <div className=" ">
          <img
            className="h-full  lg:mb-0 max-h-[700px] translate-y-3 md:translate-y-5 lg:translate-y-10 xl:translate-y-[62px] "
            src={me}
            alt=""
          />
        </div>
      </div>

      <Divider className="" />
    </div>
  );
};

export default Banner;
