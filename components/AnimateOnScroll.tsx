"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, ReactNode } from "react";

type AnimationType = "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight" | "scale" | "blur" | "slideUp";

interface AnimateOnScrollProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    animation?: AnimationType;
    once?: boolean;
    threshold?: number;
}

const animations: Record<AnimationType, Variants> = {
    fadeUp: {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    },
    fadeDown: {
        hidden: { opacity: 0, y: -40 },
        visible: { opacity: 1, y: 0 },
    },
    fadeLeft: {
        hidden: { opacity: 0, x: 60 },
        visible: { opacity: 1, x: 0 },
    },
    fadeRight: {
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0 },
    },
    scale: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    },
    blur: {
        hidden: { opacity: 0, filter: "blur(10px)" },
        visible: { opacity: 1, filter: "blur(0px)" },
    },
    slideUp: {
        hidden: { opacity: 0, y: 80 },
        visible: { opacity: 1, y: 0 },
    },
};

export default function AnimateOnScroll({
    children,
    className = "",
    delay = 0,
    duration = 0.6,
    animation = "fadeUp",
    once = true,
    threshold = 0.1,
}: AnimateOnScrollProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once, amount: threshold });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={animations[animation]}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1], // Smooth cubic-bezier easing
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Staggered container for child animations
interface StaggerContainerProps {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
    once?: boolean;
}

export function StaggerContainer({
    children,
    className = "",
    staggerDelay = 0.1,
    once = true,
}: StaggerContainerProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once, amount: 0.1 });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Child component for staggered animations
interface StaggerItemProps {
    children: ReactNode;
    className?: string;
    animation?: AnimationType;
    duration?: number;
}

export function StaggerItem({
    children,
    className = "",
    animation = "fadeUp",
    duration = 0.5,
}: StaggerItemProps) {
    return (
        <motion.div
            variants={animations[animation]}
            transition={{
                duration,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
