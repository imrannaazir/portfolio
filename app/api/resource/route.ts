import { ResourceValidataion } from "@lib/ZodValidation"
import { db } from "@lib/db"
import { NextResponse } from "next/server"
import { z } from "zod"

export const GET = async (req: Request) => {
  try {
    const fetchResources = await db?.resources?.findMany()

    if (fetchResources) {
      return NextResponse.json({ data: fetchResources, status: 200 })
    }

    return new Response("No data present", { status: 404 })
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 })
  }
}

export const POST = async (req: Request) => {
  try {
    const body = await req.json()
    const { image, redirectUrl, resourceName } =
      ResourceValidataion?.parse(body)

    //  checking already an image or redirectUrl exist in db or not

    const resourceExist = await db?.resources?.findFirst({
      where: {
        image,
        redirectUrl,
      },
    })

    if (resourceExist) {
      return new Response("Resource Already Exists!", { status: 409 })
    }

    const createResource = await db?.resources?.create({
      data: {
        image,
        redirectUrl,
        resourceName,
      },
    })

    return NextResponse.json({ data: createResource, status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response("Invalid data", { status: 400 })
    }
    return new Response("Internal Server Error", { status: 500 })
  }
}
