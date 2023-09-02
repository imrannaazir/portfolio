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
    id: 2342,
    redirectUrl: "https://nextjs.org/",
    image: nextjs,
    resourceName: "Next Js a fullstack react framework",
  },
  {
    id: 457457,
    redirectUrl: "https://www.prisma.io/",
    image: prisma,
    resourceName: "Prisma orm for sql and nosql database",
  },
  {
    id: 34525,
    redirectUrl: "https://tanstack.com/query/v3/",
    image: reactquery,
    resourceName: "React Query a react library for data fetching",
  },
  {
    id: 785678,
    redirectUrl: "https://ui.shadcn.com/",
    image: shadcn,
    resourceName: "Shadcn a new trending ui tailwindcss library",
  },
  {
    id: 345257,
    redirectUrl: "https://www.typescriptlang.org/",
    image: typescript,
    resourceName: "Typescript documentation page for tyescript learning.",
  },
]
