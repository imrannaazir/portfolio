'use client'
import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'
import HoverButton from '@components/ui/button/HoverButton'
import Image from 'next/image'
import { FC } from 'react'
import { AimData } from '@constants/Aim'
import { AnimationType } from '@components/animation/Motion'
import MotionWrapper from '@components/animation/MotionWrapper'
import { useNavigation } from '@hooks/useNavigation'


interface AimProps {

}

const Aim: FC<AimProps> = ({ }) => {

  const ref = useRef<HTMLElement>(null)
  const { setIsOpen } = useNavigation(state => ({
    setIsOpen: state.setIsOpen
  }))


  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1 1']
  })
  const scaleTranslate = useTransform(scrollYProgress, [0, 1], ['20%', '0%'])


  return <motion.section id='service' style={{ opacity: scrollYProgress, translateY: scaleTranslate }
  } ref={ref} className='grid-cols-2 serviceBG bg-slate-600/20 ring-1 ring-blue-400/20 rounded-2xl lg:grid backdrop-blur-sm mt-16'>

    <div className="grid items-center grid-cols-2 gap-6 p-5 font-medium text-center text-white services lg:m-6">
      {AimData?.map((data, index) => {
        const { id, heading, img } = data
        return (
          <motion.div key={id} variants={AnimationType("up", "spring", 0, 0.4)}
            className="px-5 py-8 text-center feature cardBg rounded-2xl hover:border hover:border-white transition-colors duration-200 border-[1.5px] border-white/25 cursor-pointer">
            <span className='flex justify-center items-center mb-4'>
              <Image
                src={img}
                alt='image-Not'
                className='w-[5rem] h-[5rem]'
              />
            </span>
            <h1 className="text-sm font-bold">{heading}</h1>
          </motion.div>
        )
      })}
    </div>

    {/* div 2nd here  */}
    <div className="flex flex-col items-center justify-center p-5 pb-8 space-y-6 text-center md:items-start lg:text-left">
      <h1 className="text-3xl font-bold text-white lg:text-4xl title"> Let&apos;s develop a meaningful <span className="mt-0 text-transparent md:mt-5 bg-clip-text bg-gradient-to-r from-red-600 to-purple-500">web application</span> </h1>
      <p className="text-white/70">Whether you need a corporate website with an integrated booking system, a simple landing page to collect leads, or even a complete restaurant management system, I can pull it off for you. Starting from subtle &quot;wow&quot; animations to complex development, me and my team have what it takes to help you stand out from the crowd.<span className="block font-bold">Seriously, what are you waiting for?</span></p>
      <HoverButton onClick={setIsOpen} label="Let' Get Started" className='bg-white/80 text-base hover:text-white text-black' />
    </div>

  </motion.section>
}

export default MotionWrapper(Aim, '')
