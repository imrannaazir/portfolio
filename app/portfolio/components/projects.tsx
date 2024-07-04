"use client";
import { FC } from "react";
import HeadingShortner from "@components/global/HeadingShortner";
import MotionWrapper from "@components/animation/MotionWrapper";
import MapProjects from "@components/pages/Home/projects/MapProjects";
import Container from "@components/container/Container";
import Head from "next/head";
import { TProject } from "@types";

const baseUrl = process.env.NEXT_PUBLIC_DB_URL;
async function getData() {
  const projectRes = await fetch(`${baseUrl}/projects`);

  if (!projectRes.ok) {
    throw new Error("Failed to fetch projects");
  }

  const projectsData = await projectRes.json();
  return projectsData;
}

const page = ({ projects }: { projects: TProject[] }) => {
  return (
    <Container className="my-20">
      <HeadingShortner
        title="Projects I’ve done"
        description="I build Web Applications that bring positive results to businesses. Check out a few of my projects."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-3">
        {projects?.map((data: TProject, index: number) => {
          return <MapProjects key={data?._id} index={index} {...data} />;
        })}
      </div>
    </Container>
  );
};

export default MotionWrapper(page, "");
