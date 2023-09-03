import Container from '@components/container/Container'
import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { resourceData } from '@constants/resource'


const page: FC = () => {
    return <Container>
        <h1 className="text-2xl font-bold text-center text-white lg:text-3xl mt-14">Bookmarkable Resources</h1>
        <div className="grid gap-8 mt-8 lg:grid-cols-3 mb-20 ">
            {resourceData?.map((data, index) => {
                const { id, image, redirectUrl, resourceName } = data
                return (
                    <Link key={id} href={redirectUrl} >
                        <div className="flex flex-col justify-between p-4 space-y-4 rounded-[10px] bg-white/10 h-full ">
                            <h2 className="text-xl font-bold text-white text-center lg:text-start">{resourceName}</h2>
                            <span className=' lazy-load-image-background blur lazy-load-image-loaded'>
                                <Image
                                    src={image}
                                    alt='resource-image'
                                    sizes='100%'
                                    loading='lazy'
                                    className='rounded-xl w-full h-full'
                                />
                            </span>
                        </div>
                    </Link>
                )
            })}
        </div>
    </Container>
}

export default page