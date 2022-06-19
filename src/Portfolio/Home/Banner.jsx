import {
  faArrowDown,
  faArrowDownLong,
  faArrowRight,
  faArrowsDownToLine,
  faDownLeftAndUpRightToCenter,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import me from "../../assets/images/bannerme.png";
import Divider from "./Divider";
// import TagsCloud from "./TagsCloud";

const Banner = () => {
  return (
    <div className=" relative" id="banner">
      <div className="h-full lg:flex bg-base-100 ">
        <div className=" flex-1 flex items-center justify-center flex-col">
          <div>
            {/* <TagsCloud /> */}
            <h1 className="text-2xl">Hello👋</h1>
            <h1 className="text-primary text-4xl ">
              I'm Full Stack Developer!
            </h1>
            <a
              href="https://drive.google.com/drive/folders/1ZoBdYC4g830t8G1ayPG3IIt_SUMI2047"
              target="_blank"
              className="btn btn-ghost border-secondary text-secondary flex items-center gap-2 mt-4 "
            >
              Get Resume{" "}
              <svg
                className="fill-secondary w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                {" "}
                <path d="M480 352h-133.5l-45.25 45.25C289.2 409.3 273.1 416 256 416s-33.16-6.656-45.25-18.75L165.5 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456zM233.4 374.6C239.6 380.9 247.8 384 256 384s16.38-3.125 22.62-9.375l128-128c12.49-12.5 12.49-32.75 0-45.25c-12.5-12.5-32.76-12.5-45.25 0L288 274.8V32c0-17.67-14.33-32-32-32C238.3 0 224 14.33 224 32v242.8L150.6 201.4c-12.49-12.5-32.75-12.5-45.25 0c-12.49 12.5-12.49 32.75 0 45.25L233.4 374.6z" />
              </svg>
            </a>
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
