import { SocialValidation } from "@lib/ZodValidation"
import { db } from "@lib/db"
import { NextResponse } from "next/server"
import { z } from "zod"

export const GET = async (req: Request) => {
  try {
    const socialData = await db?.socialUrls?.findMany()

    if (socialData) {
      return NextResponse.json({ data: socialData, status: 200 })
    }

    return new Response("No data present", { status: 404 })
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 })
  }
}

export const POST = async (req: Request) => {
  try {
    const body = await req.json()
    const { github, linkedin, facebook, instagram, slack, twitter, youtube } =
      SocialValidation.parse(body)

    //  checking already an image or projectLink exist in db or not

    const socialExist = await db?.socialUrls?.findFirst({
      where: {
        github,
        linkedin,
      },
    })

    if (socialExist) {
      return new Response("Member Already Exists!", { status: 409 })
    }

    const createSocial = await db?.socialUrls?.create({
      data: { github, linkedin, facebook, instagram, slack, twitter, youtube },
    })

    return NextResponse.json({ data: createSocial, status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response("Invalid data", { status: 400 })
    }
    return new Response("Internal Server Error", { status: 500 })
  }
}
