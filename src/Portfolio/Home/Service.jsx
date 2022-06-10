import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRunning } from "@fortawesome/free-solid-svg-icons";
const Service = () => {
  return (
    <div className="group flex flex-col justify-center items-center w-[250px] bg-base-200 px-8 py-8 text-center gap-4 rounded-md ">
      <div className="relative">
        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.3 },
            rotate: 90,
            backgroundColor: "#30A5BF",
          }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%",
          }}
          class="bg-base-300 group-hover:  mask mask-hexagon transform h-24 w-24 relative"
        ></motion.div>
        <FontAwesomeIcon
          className="absolute inset-6 text-5xl text-neutral"
          icon={faRunning}
        />
      </div>

      <h3 className="text-lg">Hello</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  );
};

export default Service;
