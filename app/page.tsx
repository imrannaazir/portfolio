import Container from "@components/container/Container";
import About from "@components/pages/Home/About";
import Aim from "@components/pages/Home/Aim";
import Experiences from "@components/pages/Home/Experiences";
import Hero from "@components/pages/Home/Hero";
import OurModel from "@components/pages/Home/OurModel";
import Projects from "@components/pages/Home/projects/Projects";
import Review from "@components/pages/Home/Review";
import Skills from "@components/pages/Home/Skills";
import VirtualReality from "@components/pages/Home/VirtualReality";
import { experiences } from "@constants/experience";
import { skills } from "@constants/skills";
import dynamic from "next/dynamic";


const page = async () => {
  const Calendly = dynamic(() => import("@components/pages/Home/Calendly"));

  return (
    <Container className="relative">
      <Hero />
      <VirtualReality />
      <OurModel />
      <Aim />
      <Projects />
      <Skills skills={skills} />
      <Review />
      <Experiences experiences={experiences} />
      <About />
      <Calendly />
    </Container>
  );
};

export default page;
