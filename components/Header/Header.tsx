'use client'
import Container from "@components/container/Container";
import Link from 'next/link'
import dynamic from "next/dynamic";
import Navigation from "./Navigation";
import { FC, useCallback, useState } from "react";
import HoverButton from "@components/ui/button/HoverButton";
import MobieButton from "./mobile/MobieButton";
import Logo from "./Logo";



const Header: FC = () => {

    const [isOpen, setOpen] = useState(false)

    const handleClick = useCallback(() => {
        setOpen((prev) => !prev)
    }, [])

    // some dynamic imports 
    const MiniNavbar = dynamic(() => import('./mobile/MiniNavbar'))

    return (
        <header className="w-full h-[72px] flex items-center justify-between sticky top-0 z-[40]  bg-white/10 backdrop-blur-[10px]">
            <Container className="flex items-center justify-between  w-full h-full">
                <Logo />
                {/* Navigation panel */}
                <Navigation />
                {/* Hire Me button */}
                <Link target='_blank' rel="noreferer" href="mailto:nayangit000@gmail.com" className="lg:inline-block hidden" >
                    <HoverButton label="Hire Me" />
                </Link>

                <div className="inline-block lg:hidden">
                    <MobieButton handleClick={handleClick} />
                </div>

                <MiniNavbar isOpen={isOpen} handleClick={handleClick} />
            </Container>
        </header>
    )
}

export default Header