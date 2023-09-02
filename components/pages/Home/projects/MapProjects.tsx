import { motion } from 'framer-motion'
import Image from 'next/image'
import { AnimationType } from '@components/animation/Motion'
import { FC } from 'react'
import HoverButton from '@components/ui/button/HoverButton'
import Link from 'next/link'

interface MapProjectsProps {
    index: number,
    id: string,
    image: string,
    projectLink: string,
    projectName: string,
    isFetched: boolean
}

const MapProjects: FC<MapProjectsProps> = ({ index, id, image, projectLink, projectName, isFetched }) => {
    console.log(id)

    return (<motion.div variants={AnimationType("up", "spring", index * 0.5, 0.75)} className="m-4 rounded-[10px] transition-colors duration-200 shadow bg-opacity-60 bg-clip-padding hover:ring-1 hover:ring-blue-400 bg-slate-600/20 ring-1 ring-blue-400/20">
        <div className="p-2">
            <Image
                alt='project-image'
                src={image}
                width={10}
                height={10}
                className='w-full h-full'
                sizes='100vw'
            />
        </div>
        <div className="flex items-center justify-between px-2 py-3">
            <p className='text-sm font-bold text-center text-white'>
                {projectName}
            </p>

            <Link target='_blank' href={projectLink}>
                <HoverButton labelclassName='text-sm font-medium antialiased' label='View Project' className='bg-slate-500 rounded-[6px]' />
            </Link>
        </div>
    </motion.div>)
}

export default MapProjects