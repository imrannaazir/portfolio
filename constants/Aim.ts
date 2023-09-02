import web from "../public/aim/webapp.webp"
import cms from "../public/aim/cms.webp"
import ecommerce from "../public/aim/ecommerce.webp"
import prototyping from "../public/aim/prototyping.webp"

type AimType = {
  img: any
  heading: string
  id: number
}

export const AimData: AimType[] = [
  { id: 45435, img: web, heading: "Web App" },
  { id: 78678, img: cms, heading: "Headless CMS" },
  { id: 4567457, img: ecommerce, heading: "eCommerce" },
  { id: 4567847, img: prototyping, heading: "Prototyping" },
]
