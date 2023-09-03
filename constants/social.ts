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
    id: 685685967,
    redirectUrl: "https://github.com/Nayanchandrakar",
    Icon: AiFillGithub,
  },
  {
    id: 96968568,
    redirectUrl:
      "https://instagram.com/nayan_since_2003?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==",
    Icon: AiOutlineInstagram,
  },
  {
    id: 34567934678,
    redirectUrl: "https://twitter.com/Nayan88888?t=7ve6j4OKmKz0_Mj2_tQyLw&s=09",
    Icon: BsTwitter,
  },
  {
    id: 698508560,
    redirectUrl: "https://www.linkedin.com/in/nayan-chandrakar-3899b522b/",
    Icon: BiLogoLinkedin,
  },
]
