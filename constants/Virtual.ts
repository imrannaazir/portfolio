import triangle from "../public/illustration/triangle.webp"
import ball from "../public/illustration/square.webp"
import square from "../public/illustration/ball.webp"

interface VirtualDataType {
  id: number
  image: any
  css: {
    top?: string
    left?: string
    right?: string
  }
}

export const VirtualData: VirtualDataType[] = [
  { id: 3464, image: square, css: { top: "600px", right: "90px" } },
  { id: 4356673, image: ball, css: { top: "1250px", left: "90px" } },
  { id: 4563456, image: triangle, css: { top: "3800px", right: "500px" } },
]