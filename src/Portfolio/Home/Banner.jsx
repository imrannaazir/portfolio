import React from "react";
import me from "../../assets/images/bannerme.png";
import Divider from "./Divider";
import TagsCloud from "./TagsCloud";

const Banner = () => {
  return (
    <div className=" relative" id="banner">
      <div className="h-full lg:flex bg-base-100 ">
        <div className=" flex-1 flex items-center justify-center flex-col">
          <div>
            <TagsCloud />
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
