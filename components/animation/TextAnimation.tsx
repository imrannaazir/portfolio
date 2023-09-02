'use client'
import React, { FC } from "react";
import { motion } from "framer-motion";
import { cn } from "@lib/utils";

interface TextAnimationProps {
    text: string
    classNameDiv?: string
    classNameSpan?: string
    delayTime?: number
}

const TextAnimation: FC<TextAnimationProps> = ({ text, classNameDiv, classNameSpan, delayTime }) => {
    const letters = Array.from(text);
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: delayTime || 0.04 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: -20,
            y: 10,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            className={cn("overflow-hidden flex h-fit", classNameDiv)}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {letters.map((letter, index) => {
                return (
                    <motion.span className={cn("text-3xl lg:text-5xl text-white font-bold", classNameSpan)} variants={child} key={index}>
                        {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                )
            })}
        </motion.div>
    );
};

export default TextAnimation;