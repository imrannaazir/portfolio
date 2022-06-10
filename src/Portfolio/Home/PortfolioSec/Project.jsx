import React from "react";
import { motion } from "framer-motion";
const Project = ({ project: { img } }) => {
  return (
    <div className="relative">
      <motion.img
        whileHover={{ scale: 1.1 }}
        className=" hover:blur-sm transform duration-500 relative "
        src={img}
        alt=""
      />
      <motion.div
        whileHover={{ opacity: 0.8, scale: 1.1 }}
        className="absolute bg-primary w-full inset-0 opacity-0 border border-secondary"
      >
        <h1 className="opacity-100">hello</h1>
      </motion.div>
    </div>
  );
};

export default Project;
