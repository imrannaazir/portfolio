import web from "../public/aim/webapp.webp";
import cms from "../public/aim/cms.webp";
import ecommerce from "../public/aim/ecommerce.webp";
import prototyping from "../public/aim/prototyping.webp";

type AimType = {
  img: any;
  heading: string;
  id: number;
};

export const AimData: AimType[] = [
  { id: 78444574, img: web, heading: "Web App" },
  { id: 5123747, img: cms, heading: "Headless CMS" },
  { id: 7435689, img: ecommerce, heading: "eCommerce" },
  { id: 45367848, img: prototyping, heading: "Prototyping" },
];
