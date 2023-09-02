import home from "../public/header/home.svg"
import copy from "../public/header/copy.svg"
import info from "../public/header/info.svg"
import resource from "../public/header/resource.svg"
import service from "../public/header/service.svg"

type navigationType = {
  id: number
  label: string
  svg: any
  href: string
}

export const navigation: navigationType[] = [
  { id: 34545, label: "Home", svg: home, href: "/" },
  { id: 43634, label: "Service", svg: service, href: "/#service" },
  { id: 34784, label: "Portfolio", svg: copy, href: "/portfolio" },
  { id: 67867, label: "About Me", svg: info, href: "/#about" },
  { id: 45435, label: "Resources", svg: resource, href: "/resources" },
]
