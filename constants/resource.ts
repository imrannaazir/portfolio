import prisma from "../public/resource/prisma.png"
import nextjs from "../public/resource/nextjs.png"
import reactquery from "../public/resource/reactquery.png"
import shadcn from "../public/resource/shadcn.png"
import typescript from "../public/resource/typescript.png"

export type ResourceType = {
  id: number
  redirectUrl: string
  resourceName: string
  image: any
}

export const resourceData: ResourceType[] = [
  {
    id: 3475793763,
    redirectUrl: "https://nextjs.org/",
    image: nextjs,
    resourceName: "Next Js a fullstack react framework",
  },
  {
    id: 4323782,
    redirectUrl: "https://www.prisma.io/",
    image: prisma,
    resourceName: "Prisma orm for sql and nosql database",
  },
  {
    id: 9569856856,
    redirectUrl: "https://tanstack.com/query/v3/",
    image: reactquery,
    resourceName: "React Query a react library for data fetching",
  },
  {
    id: 23536734,
    redirectUrl: "https://ui.shadcn.com/",
    image: shadcn,
    resourceName: "Shadcn a new trending ui tailwindcss library",
  },
  {
    id: 89670679,
    redirectUrl: "https://www.typescriptlang.org/",
    image: typescript,
    resourceName: "Typescript documentation page for tyescript learning.",
  },
]
