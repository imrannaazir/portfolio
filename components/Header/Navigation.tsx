'use client'
import { FC } from "react";
import { navigation } from "@constants/navigation";
import { cn } from "@lib/utils";
import Image from "next/image";
import { useRouter } from "next-nprogress-bar";
import { useNavigation } from "@hooks/useNavigation";


const Navigation: FC = () => {
    const router = useRouter()
    const { path, setpath } = useNavigation(state => ({
        path: state?.path,
        setpath: state?.setpath,
    }))

    const handleNavigation = (href: string) => {
        setpath(href)
        router.push(href)
    }


    return (
        <div className="rounded-[8px] border border-white/20 cardBg hidden lg:inline-block">
            <div className="p-1 flex items-center justify-center flex-row">
                {navigation?.map(data => {
                    const { id, label, svg, href } = data
                    return (
                        <span onClick={() => handleNavigation(href)} key={id} className={cn('flex  flex-row items-center justify-center gap-1.5 px-4 py-1.5 rounded-[8px] transition-colors duration-200 hover:bg-gray-500/20  cursor-pointer text-white font-medium', { 'bg-blue-600 hover:bg-blue-600': path === href })}>
                            <Image src={svg} alt="navigation-image" className="w-7 invert" width={10} height={10} />
                            {label}
                        </span>
                    )
                })}
            </div>
        </div>
    )
}

export default Navigation