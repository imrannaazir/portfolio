"use client";
import HeadingShortner from "@components/global/HeadingShortner";
import MotionWrapper from "@components/animation/MotionWrapper";
import MapProjects from "@components/pages/Home/projects/MapProjects";
import Container from "@components/container/Container";
import { TProject } from "@types";
import { projectdetails } from "@constants/project";

const Projects = () => {
  return (
    <Container className="my-20">
      <HeadingShortner
        title="Projects I’ve done"
        description="I build Web Applications that bring positive results to businesses. Check out a few of my projects."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-3">
        {projectdetails?.map((data: TProject, index: number) => {
          return <MapProjects key={index} index={index} {...data} />;
        })}
      </div>
    </Container>
  );
};

export default MotionWrapper(Projects, "");
