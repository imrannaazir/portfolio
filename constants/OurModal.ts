import Bussiness from "../public/ourmodal/bussiness.svg"
import Idea from "../public/ourmodal/idea.svg"
import Design from "../public/ourmodal/design.svg"

type ModalDataType = {
  id: number
  title: string
  img: any
  para: string
}

export const ModalData: ModalDataType[] = [
  {
    id: 34534,
    img: Design,
    title: "Design-First",
    para: "I take a design-first approach in web app development. It shouldn&apos;t only be about excellent performance designs should matter too If you take a design good then better.",
  },
  {
    id: 34534,
    img: Bussiness,
    title: "Business-minded",
    para: "Business-savvy developers are hard to find nowadays. How can I deliver great outcomes if I don't understand your KPIs and why you require a certain functionality in your web app?",
  },
  {
    id: 34534,
    img: Idea,
    title: "Idea into Reality",
    para: "Whether you have a concrete business plan, proof of concept or you're just starting out. I can help you with wireframing, developing MVPs, or a complete web solution.",
  },
]
