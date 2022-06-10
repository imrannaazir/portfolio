import React, { useEffect, useState } from "react";
import DividerWhite from "../DividerWhite";
import Project from "./Project";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div id="portfolio" className="bg-base-200">
      <div className=" min-h-screen">
        <h1 className="text-neutral text-4xl font-bold text-center">
          Portfolio
        </h1>
        <div className="grid grid-cols-3 gap-12 px-[20%] my-24">
          {projects.map((project) => (
            <Project project={project} />
          ))}
        </div>
      </div>

      <DividerWhite />
    </div>
  );
};

export default Portfolio;
