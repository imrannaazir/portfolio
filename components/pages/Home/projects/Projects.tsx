'use client'
import { FC } from 'react'
import HoverButton from '@components/ui/button/HoverButton'
import HeadingShortner from '@components/global/HeadingShortner'
import MotionWrapper from '@components/animation/MotionWrapper'
import MapProjects from './MapProjects'
import { shallow } from 'zustand/shallow'
import { useNavigation } from '@hooks/useNavigation'
import { useRouter } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { ProjectsType } from '@types/types'


const Projects: FC = () => {
    const router = useRouter()
    const { setpath } = useNavigation(state => ({
        setpath: state?.setpath,
    }), shallow)

    const handleRedirect = () => {
        setpath('/portfolio'),
            router?.push('/portfolio')
    }

    const { isFetched, data: projects } = useQuery({
        queryFn: async () => {
            const res = await fetch('/api/projects', { cache: "no-store" })
            const project = await res.json()
            return project
        },
        queryKey: ['project-data'],
        retry: 3,
    })


    return <section className='mt-16'>
        <HeadingShortner
            title='Projects I’ve done'
            description='I build Web Applications that bring positive results to businesses. Check out a few of my projects.'
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 mt-3">
            {projects?.data?.map((data: ProjectsType, index: number) => {
                return (
                    <MapProjects key={data?.id} index={index} {...data} />
                )
            })}
        </div>
        <div className="text-center mt-6">
            <HoverButton onClick={handleRedirect} label='View More' className='bg-slate-800 py-3 px-6' />
        </div>
    </section>
}

export default MotionWrapper(Projects, '')