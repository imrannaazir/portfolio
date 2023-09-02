'use client'
import { VirtualData } from '@constants/Virtual'
import { cn } from '@lib/utils'
import { useScroll, useTransform, motion } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { FC } from 'react'

interface VirtualRealityProps {

}

const VirtualReality: FC<VirtualRealityProps> = ({ }) => {

    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '1 1']
    })
    const scaleTranslate = useTransform(scrollYProgress, [0, 1], ['0deg', '650deg'])

    return <>
        {VirtualData?.map(data => {
            const { id, css, image } = data
            return (
                <motion.div style={{ rotate: scaleTranslate, ...css }} key={id} className='xl:block hidden absolute'>
                    <Image src={image} alt='image_not' />
                </motion.div>
            )
        })}
    </>
}

export default VirtualReality