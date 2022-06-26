import React, { useEffect, useState } from "react";
import DividerWhite from "../DividerWhite";
import Project from "./Project";
// import Tab from "./Tab";

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
        <h1 className="text-secondary text-4xl font-bold text-center">
          Portfolio
        </h1>
        <div className="my-24">
          {/* <Tab /> */}
          <div className="grid lg:grid-cols-3 gap-12 px-[15%] 4">
            {projects.map((project) => (
              <Project project={project} />
            ))}
          </div>
        </div>
      </div>

      <DividerWhite />
    </div>
  );
};

export default Portfolio;
