import React from "react";
import { motion } from "framer-motion";
import { ContainerDelay } from "./Motion";

// Define the MotionWrapper HOC
const MotionWrapper = <P extends object>(
  Component: React.FC<P>,
  idnavigate?: string
) =>
  function HOC(props: P) {
    return (
      <motion.section
        variants={ContainerDelay()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {idnavigate && (
          <span className="" id={idnavigate}>
            &nbsp;
          </span>
        )}
        <Component {...props} />
      </motion.section>
    );
  };

export default MotionWrapper;
