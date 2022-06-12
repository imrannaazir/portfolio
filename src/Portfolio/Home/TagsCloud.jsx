import React from "react";
import {
  Cloud,
  renderSimpleIcon,
  fetchSimpleIcons,
  SimpleIcon,
} from "react-icon-cloud";
const useIcons = (slugs) => {
  const [icons, setIcons] = React.useState();
  React.useEffect(() => {
    fetchSimpleIcons(slugs).then(setIcons);
  }, [slugs]);

  console.log(icons);
  if (icons) {
    return Object.values(icons.simpleIcons).map((icon) =>
      renderSimpleIcon({
        icon,
        size: 42,
        aProps: {
          onClick: (e) => e.preventDefault(),
        },
      })
    );
  }

  return <a>Loading</a>;
};

const slugs = [
  "amazonaws",
  "android",
  "androidstudio",
  "antdesign",
  "typescript",
  "vercel",
  "visualstudiocode",
];

const TagsCloud = () => {
  const icons = useIcons(slugs);
  return (
    <div>
      <Cloud>{icons}</Cloud>
    </div>
  );
};

export default TagsCloud;
