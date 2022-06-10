import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRunning } from "@fortawesome/free-solid-svg-icons";
const Service = () => {
  return (
    <div className="group flex flex-col justify-center items-center w-[250px] bg-base-200 px-8 py-8 text-center gap-4 rounded-md ">
      <div className="relative">
        <div class="bg-base-300 mask mask-hexagon group-hover:rotate-90 group-hover:bg-primary duration-500 transform h-24 w-24 relative"></div>
        <FontAwesomeIcon
          className="absolute inset-6 text-5xl text-neutral group-hover:text-base-100 transform duration-500 "
          icon={faRunning}
        />
      </div>

      <h3 className="text-lg">Hello</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  );
};

export default Service;
