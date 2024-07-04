"use client";
import MotionWrapper from "@components/animation/MotionWrapper";
import { TSkill } from "@types";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { AimData } from "@constants/Aim";
import { AnimationType } from "@components/animation/Motion";
import Container from "@components/container/Container";
import HeadingShortner from "@components/global/HeadingShortner";

const Skills = ({ skills }: { skills: TSkill[] }) => {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  const scaleTranslate = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);
  return (
    <Container className="my-20">
      <HeadingShortner
        title="Skills & Expertise"
        description="Here are the technologies and tools I specialize in to create impactful web applications."
      />

      <motion.section
        id="service"
        style={{ opacity: scrollYProgress, translateY: scaleTranslate }}
        ref={ref}
        className="  serviceBG bg-slate-600/20 ring-1 ring-blue-400/20 rounded-2xl  backdrop-blur-sm mt-16"
      >
        <div className="grid items-center grid-cols-5 gap-6 p-5 font-medium text-center text-white services lg:m-6">
          {skills?.map((data, index) => {
            const { _id, title, image } = data;
            return (
              <motion.div
                key={_id}
                variants={AnimationType("up", "spring", index * 0.5, 0.4)}
                className="px-5 py-8 text-center feature cardBg rounded-2xl hover:border hover:border-white transition-colors duration-200 border-[1.5px] border-white/25 cursor-pointer"
              >
                <span className="flex justify-center items-center mb-4">
                  <Image
                    src={image?.url as string}
                    alt="image-Not"
                    width={32}
                    height={32}
                  />
                </span>
                <h1 className="text-sm font-bold">{title}</h1>
              </motion.div>
            );
          })}
        </div>
      </motion.section>
    </Container>
  );
};

export default MotionWrapper(Skills, "");
