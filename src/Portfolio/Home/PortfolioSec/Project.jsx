import React from "react";
import { motion } from "framer-motion";
const Project = ({ project: { img } }) => {
  return (
    <div className="relative">
      <motion.img
        whileHover={{}}
        className=" hover:blur-sm transform duration-500 relative"
        src={img}
        alt=""
      />
      <motion.div
        initial={{ scale: 0.5 }}
        layout
        whileHover={{ rotate: 180, opacity: 0.8 }}
        className="absolute bg-primary w-full inset-0 opacity-0 border border-secondary"
      >
        <h1 className="opacity-100">hello</h1>
      </motion.div>
    </div>
  );
};

export default Project;
