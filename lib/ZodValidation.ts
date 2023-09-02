import { z } from "zod"

export const ProjectValidation = z.object({
  projectName: z
    .string()
    .min(2, "Minimum 2 characters required")
    .max(20, "Maximum 20 characters can be passed"),
  image: z.string(),
  projectLink: z.string(),
})

export const ResourceValidataion = z.object({
  resourceName: z
    .string()
    .min(2, "Minimum 2 characters required")
    .max(15, "Maximum 15 characters can be passed"),
  image: z.string(),
  redirectUrl: z.string(),
})
