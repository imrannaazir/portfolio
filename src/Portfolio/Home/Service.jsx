import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Service = ({ service: { font, title, description } }) => {
  return (
    <div className="group flex flex-col justify-center items-center w-[250px] bg-base-200 px-8 py-8 text-center gap-4 rounded-md ">
      <div className="relative">
        <div class=" bg-base-300 mask mask-hexagon group-hover:rotate-90 group-hover:bg-primary duration-500 transform h-24 w-24 "></div>
        <FontAwesomeIcon
          className=" absolute left-0 right-0 my-auto bottom-0 top-0 h-[40px] mx-auto w-[40px]  text-4xl text-secondary group-hover:text-base-100 transform duration-500 "
          icon={font}
        />
      </div>

      <h3 className="text-2xl font-semibold text-primary">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Service;
