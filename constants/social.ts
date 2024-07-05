import { IconType } from "react-icons";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";

export interface SocialType {
  id: number;
  redirectUrl: string;
  Icon: IconType;
}

export const socialData: SocialType[] = [
  {
    id: 685685967,
    redirectUrl: "https://github.com/imrannaazir",
    Icon: AiFillGithub,
  },
  {
    id: 96968568,
    redirectUrl: "https://instagram.com/imrannaaziremon",
    Icon: AiOutlineInstagram,
  },
  {
    id: 34567934678,
    redirectUrl: "https://twitter.com/imrannaazirbd",
    Icon: BsTwitter,
  },
  {
    id: 698508560,
    redirectUrl: "https://www.linkedin.com/in/imrannaaziremon/",
    Icon: BiLogoLinkedin,
  },
];
