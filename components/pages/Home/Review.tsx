"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Marquee from "@components/animation/Marquee";
import HeadingShortner from "@components/global/HeadingShortner";
import { FC } from "react";
import { clientReview } from "@constants/review";

interface ReviewProps {}

const Review: FC<ReviewProps> = ({}) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 .8", "1 1"],
  });

  const scaleTranslate = useTransform(scrollYProgress, [0.2, 1], ["20%", "0%"]);

  return (
    <motion.section
      style={{ opacity: scrollYProgress, translateY: scaleTranslate }}
      ref={ref}
      className="my-8 lg:my-20 "
    >
      <HeadingShortner
        title="Client Testimonials"
        description=" Hear what clients and collaborators have to say about my work and the positive impact it has had on their projects."
      />
      {/* marquee effect here  */}
      <div className="mt-8">
        <Marquee data={clientReview} direction="reverse" />
      </div>

      <div className="mt-8">
        <Marquee data={clientReview} direction="normal" />
      </div>
    </motion.section>
  );
};

export default Review;
