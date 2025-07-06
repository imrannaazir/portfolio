"use client";
import { FC } from "react";
import HoverButton from "@components/ui/button/HoverButton";
import HeadingShortner from "@components/global/HeadingShortner";
import MotionWrapper from "@components/animation/MotionWrapper";
import MapProjects from "./MapProjects";
import { shallow } from "zustand/shallow";
import { useNavigation } from "@hooks/useNavigation";
import { useRouter } from "next/navigation";
import { TProject } from "@types";
import { projectdetails } from "@constants/project";
const Projects = () => {
  const router = useRouter();
  const { setpath } = useNavigation(
    (state) => ({
      setpath: state?.setpath,
    }),
    shallow
  );

  const handleRedirect = () => {
    setpath("/portfolio"), router?.push("/portfolio");
  };

  return (
    <section id="portfolio" className="mt-16">
      <HeadingShortner
        title="Projects I’ve done"
        description="I build Web Applications that bring positive results to businesses. Check out a few of my projects."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-3">
        {projectdetails?.map((data: TProject, index: number) => {
          return <MapProjects key={data?.id} index={index} {...data} />;
        })}
      </div>
      <div className="text-center mt-6">
        <HoverButton
          onClick={handleRedirect}
          label="View More"
          className="bg-slate-800 py-3 px-6"
        />
      </div>
    </section>
  );
};

export default MotionWrapper(Projects, "");
