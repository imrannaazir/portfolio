import React from "react";
import me from "../../assets/images/bannerme.png";
import DividerWhite from "./DividerWhite";
const About = () => {
  return (
    <div
      id="about"
      className=" bg-base-200 flex items-center flex-col justify-center gap-24 z-10  "
    >
      <h1 className="text-neutral text-4xl font-bold text-center">About Me</h1>
      <div className="grid lg:grid-cols-2 justify-items-center gap-16 px-[10%]">
        <div className="bg-secondary rounded-3xl">
          <img
            className="w-[500px] rounded-3xl -rotate-6 bg-primary "
            src={me}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4 w-full">
          {/* html progress */}
          <div>
            <p className="flex justify-between">
              <span>html</span>
              <span>90%</span>
            </p>
            <progress
              class="progress progress-primary w-full"
              value="90"
              max="100"
            ></progress>
          </div>
          {/* css progress */}
          <div>
            <p className="flex justify-between">
              <span>css</span>
              <span>85%</span>
            </p>
            <progress
              class="progress progress-primary w-full"
              value="85"
              max="100"
            ></progress>
          </div>
          {/* html progress */}
          <div>
            <p className="flex justify-between">
              <span>JavaScript</span>
              <span>70%</span>
            </p>
            <progress
              class="progress progress-primary w-full"
              value="70"
              max="100"
            ></progress>
          </div>
          {/* html progress */}
          <div>
            <p className="flex justify-between">
              <span>React JS</span>
              <span>75%</span>
            </p>
            <progress
              class="progress progress-primary w-full"
              value="75"
              max="100"
            ></progress>
          </div>
          {/* html progress */}
          <div>
            <p className="flex justify-between">
              <span>express JS</span>
              <span>50%</span>
            </p>
            <progress
              class="progress progress-primary w-full"
              value="50"
              max="100"
            ></progress>
          </div>
          {/* html progress */}
          <div>
            <p className="flex justify-between">
              <span> MongoDB</span>
              <span>55%</span>
            </p>
            <progress
              class="progress progress-primary w-full"
              value="55"
              max="100"
            ></progress>
          </div>
        </div>
      </div>
      <DividerWhite />
    </div>
  );
};

export default About;
