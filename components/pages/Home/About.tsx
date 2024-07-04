'use client'
import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { FC } from 'react'
import HumanImage from '../../../public/about/about.webp'
import { socialData } from '@constants/social'
import Link from 'next/link'


const About: FC = () => {

    const ref = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '.4 1']
    })
    const scaleTranslate = useTransform(scrollYProgress, [0, 1], ['20%', '0%'])




    return <motion.section style={{ opacity: scrollYProgress, translateY: scaleTranslate }
    } ref={ref} className='my-8 lg:my-16 backdrop-blur-[10px]' id='about'>
        <div className="bg-opacity-0 rounded-2xl bg-slate-600/20 ring-1 ring-blue-400/20 aboutMe">
            <div className="px-1 mx-auto max-w-7xl sm:px-8">
                <div className="items-center py-6 lg:flex ">
                    <div className="flex-1 mx-5 font-sans text-white lg:mb-0 aboutText">
                        <h1 className="my-5 text-3xl font-bold lg:5xl">About Me</h1>
                        <p className="font-light leading-relaxed tracking-wide opacity-75 ">This is Nayan chandrakar, a Web Application Developer from Raipur chhattisgarh.I learnt all the tech stacks from my self like Next Js , Tailwind css etc.! ✌<br /><br />I consider myself to be completely blessed as I get to inspect and build websites for a living. Of my intense interest in the Web Platform &amp; SaaS products, I plan to build results-driven digital products for my clients while becoming part of meaningful businesses along the way.<br /><br />I&apos;ve built numerous websites and worked closely with the founders of the companies. Besides, I&apos;ve also committed my time to 1 companies full-time to help them hire and manage their own technical team, and I am here today to become a part of your journey.<br /><br />Recently, I have developed a platfrom that is an digital marketing platform: The Run Digital, where we help entrepreneurs fix their web goals and help them achieve them with our web-based solutions. We are, after all, KPI-driven.</p>

                        <div className="flex my-5 space-x-4 align-middle">
                            {socialData?.map((data, index) => {
                                const { Icon, id, redirectUrl } = data
                                return (
                                    <Link target='_blank' key={id} href={redirectUrl}>
                                        <Icon size={25} />
                                    </Link>
                                )
                            })}
                        </div>
                    </div>

                    {/* image div here  */}
                    <div className="text-center aboutText">
                        <Image
                            src={HumanImage}
                            alt='image-not-available'
                            className='w-full h-full'
                        />
                    </div>
                </div>
            </div>
        </div>
    </motion.section>
}

export default About