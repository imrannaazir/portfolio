'use client'
import { FC } from 'react'
import { ModalData } from '../../../constants/OurModal'
import Image from 'next/image'
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion'
import { AnimationType } from '@components/animation/Motion';
import MotionWrapper from '@components/animation/MotionWrapper';



const OurModel: FC = () => {

  return <div
    className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20 mx-1'>
    {ModalData?.map((data, index) => {
      const { id, img, para, title } = data
      return (
        <motion.div
          key={id}
          variants={AnimationType("right", "spring", 0, 1)}
          className="">
          <Tilt perspective={300} className="flex flex-col items-center justify-center py-8 space-y-1 backdrop-blur-sm rounded-2xl custom_animation  bg-slate-600/20 ring-1 ring-blue-400/20 cursor-pointer parallax_effect">

            <Image
              src={img}
              alt='No-image'
              className='w-[8rem] h-[8rem]'
              width={10}
              height={10}
              sizes='100'
            />
            <h1 className="text-xl font-bold text-white lg:text-2xl">{title}</h1>
            <p dangerouslySetInnerHTML={{ __html: para }} className="px-2 text-sm text-center text-white font-thin" />
          </Tilt>
        </motion.div>
      )
    })}
  </div>
}

export default MotionWrapper(OurModel)
