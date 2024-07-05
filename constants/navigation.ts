import home from "../public/header/home.svg";
import copy from "../public/header/copy.svg";
import info from "../public/header/info.svg";
import resource from "../public/header/resource.svg";
import service from "../public/header/service.svg";

type navigationType = {
  id: number;
  label: string;
  svg: any;
  href: string;
};

export const navigation: navigationType[] = [
  { id: 756237589, label: "Home", svg: home, href: "/" },
  { id: 895893787, label: "Service", svg: service, href: "/#service" },
  { id: 7878084646, label: "Portfolio", svg: copy, href: "/portfolio" },
  { id: 71547005, label: "About Me", svg: info, href: "/#about" },
  { id: 7867457478, label: "Blogs", svg: resource, href: "/blogs" },
];
