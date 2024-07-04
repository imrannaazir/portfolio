import Container from "@components/container/Container";
import About from "@components/pages/Home/About";
import Aim from "@components/pages/Home/Aim";
import Hero from "@components/pages/Home/Hero";
import OurModel from "@components/pages/Home/OurModel";
import Projects from "@components/pages/Home/projects/Projects";
import Review from "@components/pages/Home/Review";
import Skills from "@components/pages/Home/Skills";
import VirtualReality from "@components/pages/Home/VirtualReality";
import dynamic from "next/dynamic";

const baseUrl = process.env.NEXT_PUBLIC_DB_URL;
async function getData() {
  // projects
  const projectRes = await fetch(`${baseUrl}/projects`);
  if (!projectRes.ok) {
    throw new Error("Failed to fetch projects");
  }
  const projectsData = await projectRes.json();

  // experiences
  const experienceRes = await fetch(`${baseUrl}/experiences/all`);
  if (!experienceRes.ok) {
    throw new Error("Failed to fetch experiences");
  }
  const experienceData = await experienceRes.json();
  // skills
  const skillsRes = await fetch(`${baseUrl}/skills/get-all`);
  if (!skillsRes.ok) {
    throw new Error("Failed to fetch skills");
  }
  const skillsData = await skillsRes.json();
  return {
    projects: projectsData?.data,
    experience: experienceData?.data,
    skills: skillsData?.data,
  };
}

const page = async () => {
  const Calendly = dynamic(() => import("@components/pages/Home/Calendly"));

  const data = await getData();

  return (
    <Container className="relative">
      <Hero />
      <VirtualReality />
      <OurModel />
      <Aim />
      <Projects projects={data?.projects} />
      <Skills skills={data?.projects} />
      <Review />
      <About />
      <Calendly />
    </Container>
  );
};

export default page;
