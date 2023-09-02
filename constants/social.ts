import { IconType } from "react-icons"
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai"
import { BsTwitter } from "react-icons/bs"
import { BiLogoLinkedin } from "react-icons/bi"

export interface SocialType {
  id: number
  redirectUrl: string
  Icon: IconType
}

export const socialData: SocialType[] = [
  {
    id: 57745,
    redirectUrl: "https://github.com/Nayanchandrakar",
    Icon: AiFillGithub,
  },
  {
    id: 45346,
    redirectUrl:
      "https://instagram.com/nayan_since_2003?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==",
    Icon: AiOutlineInstagram,
  },
  {
    id: 5435,
    redirectUrl: "https://twitter.com/Nayan88888?t=7ve6j4OKmKz0_Mj2_tQyLw&s=09",
    Icon: BsTwitter,
  },
  {
    id: 4534526,
    redirectUrl: "https://www.linkedin.com/in/nayan-chandrakar-3899b522b/",
    Icon: BiLogoLinkedin,
  },
]
