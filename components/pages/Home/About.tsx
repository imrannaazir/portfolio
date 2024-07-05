"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { FC } from "react";
import HumanImage from "../../../public/about/about.webp";
import { socialData } from "@constants/social";
import Link from "next/link";

const About: FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", ".4 1"],
  });
  const scaleTranslate = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);

  return (
    <motion.section
      style={{ opacity: scrollYProgress, translateY: scaleTranslate }}
      ref={ref}
      className="my-8 lg:my-16 backdrop-blur-[10px]"
      id="about"
    >
      <div className="bg-opacity-0 rounded-2xl bg-slate-600/20 ring-1 ring-blue-400/20 aboutMe">
        <div className="px-1 mx-auto max-w-7xl sm:px-8">
          <div className="items-center py-6 lg:flex ">
            <div className="flex-1 mx-5 font-sans text-white lg:mb-0 aboutText">
              <h1 className="my-5 text-3xl font-bold lg:5xl">About Me</h1>
              <p className="font-light leading-relaxed tracking-wide opacity-75">
                This is Imran Naazir Emon, a MERN Stack Developer from{" "}
                <span>Bangladesh</span>. I&apos;ve self-taught all the tech
                stacks I use, such as React JS, Redux, Next.js, and Tailwind
                CSS. ✌<br />
                <br />
                I consider myself fortunate to be able to develop and optimize
                web applications for a living. My deep interest in the web
                platform and SaaS products drives me to create results-driven
                digital solutions for my clients while becoming part of
                meaningful businesses along the way.
                <br />
                <br />
                I&apos;ve developed over 50 websites and worked closely with the
                founders of various startups. In addition, I&apos;ve committed
                my time to three startups full-time, assisting them in hiring
                and managing their technical teams. I am excited to become a
                part of your journey.
                <br />
                <br />
                Recently, I developed a digital marketing platform called The
                Run Digital. We help entrepreneurs define and achieve their web
                goals through our web-based solutions. We are driven by key
                performance indicators (KPIs) to ensure success.
              </p>

              <div className="flex my-5 space-x-4 align-middle">
                {socialData?.map((data, index) => {
                  const { Icon, id, redirectUrl } = data;
                  return (
                    <Link target="_blank" key={id} href={redirectUrl}>
                      <Icon size={25} />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* image div here  */}
            <div className="text-center aboutText">
              <Image
                src={HumanImage}
                alt="image-not-available"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
