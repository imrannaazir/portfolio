import Container from '@components/container/Container'
import About from '@components/pages/Home/About'
import Aim from '@components/pages/Home/Aim'
import Calendly from '@components/pages/Home/Calendly'
import Hero from '@components/pages/Home/Hero'
import OurModel from '@components/pages/Home/OurModel'
import Projects from '@components/pages/Home/projects/Projects'
import Review from '@components/pages/Home/Review'
import VirtualReality from '@components/pages/Home/VirtualReality'
import { db } from '@lib/db'



const page = async () => {

  const fetchProjects = await db?.projects?.findMany()

  return (
    <Container className='relative'>
      <Hero />
      <VirtualReality />
      <OurModel />
      <Aim />
      <Projects />
      <Review />
      <About />
      <Calendly />
    </Container>)
}

export default page