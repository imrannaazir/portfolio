import walkwise from "../public/projects/walkwise.jpeg"
import dallie from "../public/projects/dallie.jpeg"
import disney from "../public/projects/disney.jpeg"
import movix from "../public/projects/movix.jpeg"
import youtube from "../public/projects/youtube.jpeg"

export type ProjectsType = {
  id: number
  image: any
  site_url: string
  projectName: string
}

export const projectdetails: ProjectsType[] = [
  {
    id: 4523452,
    image: walkwise,
    projectName: "Ecommerce Shoe",
    site_url: "https://walkwise-walkwise-000024.netlify.app/",
  },
  {
    id: 456737,
    image: dallie,
    projectName: "Dallie-2 Open Ai",
    site_url: "https://dallie-2-openai-stable-diffusion.netlify.app/",
  },
  {
    id: 56345,
    image: movix,
    projectName: "Movix website",
    site_url: "https://movix-clone-hosting-6a9c7.web.app/",
  },
  {
    id: 564533,
    image: youtube,
    projectName: "Youtube clone",
    site_url: "https://clone-372007.web.app/",
  },
  {
    id: 436456,
    image: disney,
    projectName: "Disney + clone",
    site_url: "https://disneypluse.firebaseapp.com/",
  },
]
