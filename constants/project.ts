import walkwise from "../public/projects/walkwise.jpeg"
import dallie from "../public/projects/dallie.jpeg"
import disney from "../public/projects/disney.jpeg"
import movix from "../public/projects/movix.jpeg"
import youtube from "../public/projects/youtube.jpeg"
import airbnb from "../public/projects/airbnb.png"
import admin from "../public/projects/admin.png"
import store from "../public/projects/store.png"
import humanAI from "../public/projects/ai_saas.jpg"

export type ProjectsType = {
  id: number
  image: any
  site_url: string
  projectName: string
}

export const projectdetails: ProjectsType[] = [
    {
    id: 7345643,
    image: humanAI,
    projectName: "Human AI Saas",
    site_url: "https://human-ai-intelligence.vercel.app",
  },
   {
    id: 34535745,
    image: store,
    projectName: "Ecommerce Store",
    site_url: "https://nextjs-ecommerce-store-theta.vercel.app/",
  },
   {
    id: 5774434,
    image: admin,
    projectName: "Scalable Admin panel",
    site_url: "https://nextjs-ecommerce-admin-panel.vercel.app/",
  },
   {
    id: 45894586847,
    image: airbnb,
    projectName: "Airbnb clone",
    site_url: "https://airbnb-rent-clone.vercel.app/",
  },
  {
    id: 5735564384569,
    image: walkwise,
    projectName: "Ecommerce Shoe",
    site_url: "https://walkwise-walkwise-000024.netlify.app/",
  },
  {
    id: 97898589678,
    image: dallie,
    projectName: "Dallie-2 Open Ai",
    site_url: "https://dallie-2-openai-stable-diffusion.netlify.app/",
  },
  {
    id: 8378745736,
    image: movix,
    projectName: "Movix website",
    site_url: "https://movix-clone-hosting-6a9c7.web.app/",
  },
  {
    id: 94587845756,
    image: youtube,
    projectName: "Youtube clone",
    site_url: "https://clone-372007.web.app/",
  },
  {
    id: 906789568856,
    image: disney,
    projectName: "Disney + clone",
    site_url: "https://disneypluse.firebaseapp.com/",
  }
]
