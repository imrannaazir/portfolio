import Container from "@components/container/Container";
import Link from 'next/link'
import Navigation from "./Navigation";
import { FC } from "react";
import HoverButton from "@components/ui/button/HoverButton";

interface HeaderProps {

}

const Header: FC<HeaderProps> = ({ }) => {
    return (
        <header className="w-full h-[72px] flex items-center justify-between sticky top-0 z-[40]  bg-white/10 backdrop-blur-[10px]">
            <Container className="flex items-center justify-between  w-full h-full">
                <span className="text-white font-semibold text-3xl ">Nayan</span>
                {/* Navigation panel */}
                <Navigation />
                {/* Hire Me button */}
                <Link target='_blank' rel="noreferer" href="mailto:nayangit000@gmail.com" >
                    <HoverButton label="Hire Me" />
                </Link>

            </Container>
        </header>
    )
}

export default Header