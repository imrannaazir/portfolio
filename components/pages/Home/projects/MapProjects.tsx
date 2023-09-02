import { motion } from 'framer-motion'
import Image from 'next/image'
import { AnimationType } from '@components/animation/Motion'
import { FC } from 'react'
import image1 from '../../../../public/projects/image1.webp'
import HoverButton from '@components/ui/button/HoverButton'

interface MapProjectsProps {
    index: number
}

const MapProjects: FC<MapProjectsProps> = ({ index }) => {
    return <motion.div variants={AnimationType("up", "spring", index * 0.5, 0.75)} key={index} className="m-4 rounded-[10px] transition-colors duration-200 shadow bg-opacity-60 bg-clip-padding hover:ring-1 hover:ring-blue-400 bg-slate-600/20 ring-1 ring-blue-400/20">
        <div className="p-2">
            <Image
                alt='project-image'
                src={image1}
            />
        </div>
        <div className="flex items-center justify-between px-2 py-3">
            <p className='text-sm font-bold text-center text-white'>
                E-school Website
            </p>

            <HoverButton labelclassName='text-sm font-medium antialiased' label='View Project' className='bg-slate-500 rounded-[6px]' />
        </div>
    </motion.div>
}

export default MapProjects