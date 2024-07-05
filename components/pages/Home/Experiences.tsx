"use client";
import MotionWrapper from "@components/animation/MotionWrapper";
import HeadingShortner from "@components/global/HeadingShortner";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BsBriefcase } from "react-icons/bs";
import { TExperience } from "@types";
import moment from "moment";

const Experiences = ({ experiences }: { experiences: TExperience[] }) => {
  return (
    <div className="my-10">
      <HeadingShortner
        title="Professional Experience"
        description="Discover my journey and the projects I've contributed to, showcasing my skills and dedication to delivering high-quality web solutions."
      />

      <div className="bg-slate-600 bg-opacity-20 ring-1 ring-blue-400 rounded-2xl backdrop-blur-sm p-6 my-10">
        <VerticalTimeline>
          {experiences.map((experience, index) => {
            const startDate = moment(experience?.start_date).format(
              "MMMM  YYYY"
            );
            const endDate = experience?.isWorking
              ? "Present"
              : moment(experience?.end_date).format("MMMM  YYYY");
            return (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background:
                    index % 2 !== 0 ? "rgb(168 85 247)" : "rgb(37 99 235)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: `7px solid ${
                    index % 2 !== 0 ? "rgb(168 85 247)" : "rgb(37 99 235)"
                  }`,
                }}
                date={`${startDate} - ${endDate}`}
                iconStyle={{
                  background:
                    index % 2 !== 0 ? "rgb(168 85 247)" : "rgb(37 99 235)",
                  color: "#fff",
                }}
                icon={<BsBriefcase />}
              >
                <h3 className="text-lg font-semibold mb-2">
                  {experience.title}
                </h3>
                <h4 className="text-base mb-1">{experience.location}</h4>
                <p className="text-sm text-gray-300 mb-2">
                  Typescript, Javascript, ReactJs, NodeJs
                </p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default MotionWrapper(Experiences, "");
