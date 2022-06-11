import React from "react";
import TagCloud from "TagCloud";

const TagsCloud = () => {
  const container = ".tagcloud";
  const texts = [
    "3D",
    "TagCloud",
    "JavaScript",
    "CSS3",
    "Animation",
    "Interactive",
    "Mouse",
    "Rolling",
    "Sphere",
    "6KB",
    "v2.x",
  ];
  const options = {};

  return TagCloud(container, texts, options);
};

export default TagsCloud;
