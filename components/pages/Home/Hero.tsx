"use client";
import TextAnimation from "@components/animation/TextAnimation";
import Image from "next/image";
import { FC, useState, useEffect } from "react";
import HeroImage from "../../../public/home/hero.png";
import { motion } from "framer-motion";
import { Button } from "@components/ui/button/Button";
import HoverButton from "@components/ui/button/HoverButton";
import { useNavigation } from "@hooks/useNavigation";
import resume from "../../../public/about/about.webp";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  const [time, setTime] = useState(new Date());
  const { setIsOpen } = useNavigation((state) => ({
    setIsOpen: state.setIsOpen,
  }));

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateTime();
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const updateTime = () => {
    const newTime = new Date();
    setTime(newTime);
  };

  // download resume
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "../../../public/resume/resume.pdf"; // Path to your PDF file in the public directory
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getQuote = (hours: number) => {
    if (hours === 7) {
      return { emoji: "☀️", status: "Good morning! Time to start coding." };
    } else if (hours === 9) {
      return { emoji: "💻", status: "Let's dive into some serious coding!" };
    } else if (hours === 12) {
      return {
        emoji: "🍴",
        status: "Quick lunch break. Refuel for more coding!",
      };
    } else if (hours === 13) {
      return { emoji: "🧑‍💻", status: "Back to coding. Keep the momentum!" };
    } else if (hours === 15) {
      return { emoji: "☕", status: "Afternoon coffee and coding session." };
    } else if (hours === 18) {
      return { emoji: "🌇", status: "Evening coding grind." };
    } else if (hours === 20) {
      return { emoji: "🍴", status: "Dinner break. Relax and recharge." };
    } else if (hours === 21) {
      return { emoji: "🧑‍💻", status: "Late-night coding session begins!" };
    } else if (hours >= 22 || hours < 7) {
      return { emoji: "🌙", status: "Burning the midnight oil with code." };
    } else {
      return { emoji: "😃", status: "Keep up the great work coding!" };
    }
  };

  const currentHour = time.getHours();
  const quote = getQuote(currentHour);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[67%_33%] gap-16 lg:gap-2 mt-8 ">
      {/* grid one */}
      <div className="flex flex-col justify-center items-center lg:items-start">
        <div className="inline-flex items-center justify-between px-1 py-1 pr-4 rounded-full bg-gray-700/60 bg-primary-25 w-fit">
          <span
            dangerouslySetInnerHTML={{ __html: quote?.emoji }}
            className="px-2 py-1 mr-3 font-medium rounded-full bg-slate-700 text-neutral-0"
          />
          <span
            dangerouslySetInnerHTML={{ __html: quote?.status }}
            className="font-[350] text-neutral-100 dark:text-neutral-0"
          />
        </div>

        <div className="relative h-fit w-full mt-8">
          <TextAnimation
            text="I'm Imran N. Emon"
            classNameDiv="flex justify-center lg:justify-start items-center"
            delayTime={0}
          />
          <TextAnimation
            text="Your Web App Developer"
            classNameDiv="absolute inset-0 top-12 flex justify-center lg:justify-start items-center"
            delayTime={1}
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 3 }}
          className="font-light mt-20 leading-relaxed text-center lg:text-left tracking-wider lg:pb-12 text-white/60 description lg:text-xl"
        >
          {/*  To date, I&apos;ve developed{" "}
          <span className="font-bold">30+ websites</span>, interacted with{" "}
          <span className="font-bold">5 founders</span>, and worked with{" "}
          <span className="font-bold">1 startup</span>. It&apos;s time for you
          to speak up; let&apos;s get started! */}
          I break down complex user experience problems to create integrity
          focussed solutions that connect thousands of people
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 4 }}
          className="flex flex-row gap-3 justify-start mt-6 lg:mt-2 items-center"
        >
          <Button
            onClick={setIsOpen}
            className="bg-slate-700 hover:bg-slate-900 px-4 text-base font-normal py-2 rounded-[10px]"
            variant="default"
          >
            <span className="pr-2 wave">👋</span>
            Let&apos;s Talks
          </Button>
          {/* resume download button */}
          <button className="" onClick={handleDownload}>
            <HoverButton label="Download Resume" className="bg-gray-800 py-2" />
          </button>
        </motion.div>
      </div>

      {/* grid two */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100, transition: { delay: 2, duration: 0.4 } }}
        className="flex justify-center relative items-center overflow-hidden "
      >
        <motion.div
          initial={{ y: 500, opacity: 0 }}
          animate={{
            y: 0,
            opacity: [10, 30, 60, 100],
            transition: { delay: 2, duration: 0.4 },
          }}
          className=""
        >
          <Image
            className="rounded-3xl scale-110"
            src={HeroImage}
            width={380}
            height={380}
            alt="hero_image"
            sizes="100"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
