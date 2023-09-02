import { cn } from '@lib/utils'
import { FC } from 'react'
import { BiSolidQuoteAltLeft } from 'react-icons/bi'
import type { ReviewType } from '../../constants/review'

interface MarqueeProps {
    data: ReviewType[],
    direction: string,
    className?: string,
}

const Marquee: FC<MarqueeProps> = ({ data, direction, className }) => {



    return <div className={cn('overflow-x-hidden w-full h-fit flex flex-row relative box-border', className)}>
        {/* overlay here  */}
        <div className="w-full h-full absolute overlay" />
        <div className={`marquee ${direction === 'reverse' ? 'reverse_direction' : 'normal_direction'}`}>
            {data?.map((elem, index) => {
                const { id, para, name } = elem
                return (
                    <div key={id + 65} className='mx-2 grid grid-cols-4 w-[400px] items-center bg-slate-700/30 px-2 rounded-[8px]'>
                        <div className="relative w-full h-full pr-3 py-2 overflow-hidden">
                            <span className='bg-slate-300 flex justify-center items-center w-full h-full rounded-[8px]'>
                                <BiSolidQuoteAltLeft size={50} color="gray" />
                            </span>
                            <strong className='bg-black top-[4.3rem] text-white font-thin text-xs absolute inset-0 w-fit h-fit px-2 rounded-[6px]  py-1'>{name}</strong>
                        </div>
                        <div className="col-span-3">
                            <p className="text-sm text-white/90 antialiased font-thin">{para}</p>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className={`marquee mr-[4rem] ${direction === 'reverse' ? 'reverse_direction' : 'normal_direction'}`} aria-hidden='true'>
            {data?.map((elem, index) => {
                const { id, para, name } = elem
                return (
                    <div key={id + 343} className='mx-2 grid grid-cols-4 w-[400px] items-center bg-slate-700/30 px-2 rounded-[8px]'>
                        <div className="relative w-full h-full pr-3 py-2 overflow-hidden">
                            <span className='bg-slate-300 flex justify-center items-center w-full h-full rounded-[8px]'>
                                <BiSolidQuoteAltLeft size={50} color="gray" />
                            </span>
                            <strong className='bg-black top-[4.3rem] text-white font-thin text-xs absolute inset-0 w-fit h-fit px-2 rounded-[6px]  py-1'>{name}</strong>
                        </div>
                        <div className="col-span-3">
                            <p className="text-sm text-white/90 antialiased font-thin">{para}</p>
                        </div>
                    </div>
                )
            })}
        </div>


    </div>
}

export default Marquee