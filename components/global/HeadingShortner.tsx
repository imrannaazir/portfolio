import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'
import { FC } from 'react'

interface HeadingShortnerProps {
    title: string,
    description: string,
}

const HeadingShortner: FC<HeadingShortnerProps> = ({ title, description }) => {


    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '3 1']
    })
    const scaleTranslate = useTransform(scrollYProgress, [0, 1], ['20%', '0%'])


    return <motion.div style={{ opacity: scrollYProgress, translateY: scaleTranslate }
    } ref={ref} className="flex flex-col justify-center text-center">
        <h1 className="py-2 text-4xl font-bold text-purple-500 md:text-5xl opacity-90">{title}</h1>
        <p dangerouslySetInnerHTML={{ __html: description }} className="py-4 text-white opacity-75" />
    </motion.div>
}

export default HeadingShortner