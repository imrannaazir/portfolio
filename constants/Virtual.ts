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
  { id: 834578456856, image: square, css: { top: "600px", right: "90px" } },
  { id: 934584568, image: ball, css: { top: "1250px", left: "90px" } },
  { id: 8345745689, image: triangle, css: { top: "3000px", right: "500px" } },
]
