"use client";
import { FC } from "react";
import HoverButton from "@components/ui/button/HoverButton";
import HeadingShortner from "@components/global/HeadingShortner";
import MotionWrapper from "@components/animation/MotionWrapper";
import MapProjects from "./MapProjects";
import { shallow } from "zustand/shallow";
import { useNavigation } from "@hooks/useNavigation";
import { useRouter } from "next/navigation";
import { projectdetails, ProjectsType } from "@constants/project";
import { TProject } from "@types";
type TProjectProps = {
  projects: TProject[];
};
const Projects: FC<TProjectProps> = ({ projects }) => {
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

  const limit = 4;

  return (
    <section className="mt-16">
      <HeadingShortner
        title="Projects I’ve done"
        description="I build Web Applications that bring positive results to businesses. Check out a few of my projects."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-3">
        {projects?.map((data: TProject, index: number) => {
          return limit == index + 1 ? null : (
            <MapProjects key={data?._id} index={index} {...data} />
          );
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
