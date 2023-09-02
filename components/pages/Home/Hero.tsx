'use client'
import TextAnimation from '@components/animation/TextAnimation'
import Image from 'next/image'
import { FC, useState, useEffect } from 'react'
import HeroImage from '../../../public/home/hero.webp'
import { motion } from 'framer-motion'
import { Button } from '@components/ui/button/Button'
import HoverButton from '@components/ui/button/HoverButton'
import Link from 'next/link'
import { PopupWidget } from 'react-calendly'
import { useNavigation } from '@hooks/useNavigation'

interface HeroProps {

}

const Hero: FC<HeroProps> = ({ }) => {

    const [time, setTime] = useState(new Date());
    const { setIsOpen } = useNavigation(state => ({
        setIsOpen: state.setIsOpen
    }))


    useEffect(() => {
        const intervalId = setInterval(() => {
            updateTime();
        }, 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const updateTime = () => {
        const newTime = new Date();
        setTime(newTime);
    };

    const getQuote = (hours: number) => {
        if (hours === 7) {
            return { emoji: '😎', status: "Good morning! Start your day." };
        } else if (hours === 13) {
            return { emoji: '🍔', status: "College done! Lunchtime." };
        } else if (hours === 14) {
            return { emoji: '🧑‍💻', status: "Lunch break&apos;s over. Code time!" };
        } else if (hours === 20) {
            return { emoji: '🍴', status: " Dinner break!" };
        } else if (hours >= 21 || hours < 7) {
            return { emoji: '🧑‍💻', status: "I&apos;m currently coding!" };
        } else {
            return { emoji: '😃', status: "Enjoy your day!" };
        }
    };

    const currentHour = time.getHours();
    const quote = getQuote(currentHour);



    return <section className='grid grid-cols-1 lg:grid-cols-[67%_33%] gap-16 lg:gap-2 mt-8 '>
        {/* grid one */}
        <div className="flex flex-col justify-center items-center lg:items-start">

            <div className="inline-flex items-center justify-between px-1 py-1 pr-4 rounded-full bg-gray-700/60 bg-primary-25 w-fit">
                <span dangerouslySetInnerHTML={{ __html: quote?.emoji }} className="px-2 py-1 mr-3 font-medium rounded-full bg-slate-700 text-neutral-0" />
                <span dangerouslySetInnerHTML={{ __html: quote?.status }} className="font-[350] text-neutral-100 dark:text-neutral-0" />
            </div>


            <div className="relative h-fit w-full mt-8">
                <TextAnimation text='My Name Is Nayan & Im' classNameDiv='flex justify-center lg:justify-start items-center' delayTime={0} />
                <TextAnimation text='Your Web App Developer' classNameDiv='absolute inset-0 top-12 flex justify-center lg:justify-start items-center' delayTime={1} />
            </div>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 3, }}
                className="font-light mt-20 leading-relaxed text-center lg:text-left tracking-wider lg:pb-12 text-white/60 description lg:text-xl">To date, I&apos;ve developed <span className="font-bold">100+ websites</span>, interacted with<span className="font-bold">37 founders</span>, and worked with <span className="font-bold">3 startups</span>. It&apos;s time for you to speak up; let&apos;s get started!</motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 4, }}
                className="flex flex-row gap-3 justify-start mt-6 lg:mt-2 items-center">

                <Button onClick={setIsOpen} className='bg-slate-700 hover:bg-slate-900 px-4 text-base font-normal py-2 rounded-[10px]' variant="default">
                    <span className="pr-2 wave">👋</span>
                    Let&apos;s Talks
                </Button>

                <Link target='_blank' href="https://www.noblespiritz.org/" >
                    <HoverButton label='My Company' className='bg-gray-800 py-2' />
                </Link>


            </motion.div>

        </div>

        {/* grid two */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 100, transition: { delay: 2, duration: .4 } }} className="flex justify-center relative items-center overflow-hidden ">
            <motion.div initial={{ y: 500, opacity: 0 }}
                animate={{ y: 0, opacity: [10, 30, 60, 100], transition: { delay: 2, duration: .4, } }}
                className=""
            >
                <Image
                    src={HeroImage}
                    width={380}
                    height={380}
                    alt='hero_image'
                    sizes='100'
                />

            </motion.div>
        </motion.div>
    </section>
}

export default Hero