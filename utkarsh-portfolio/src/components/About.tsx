"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import LottieAnimation from "./LottieAnimation";
import webDesigner from "@/lottie/web_designer.json";

export default function About() {
    const ref = useRef<HTMLDivElement>(null);

    // Scroll progress for this section
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 80%", "end 20%"],
    });

    // Subtle motion mapping
    const textY = useTransform(scrollYProgress, [0, 1], [40, 0]);
    const imageY = useTransform(scrollYProgress, [0, 1], [60, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

    return (
        <section id="about" ref={ref} className="relative py-32 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                {/* LEFT — VISUAL */}
                <motion.div style={{ y: imageY, opacity }} className="hidden md:block">
                    <LottieAnimation
                        animationData={webDesigner}
                        className="max-w-md mr-auto opacity-90"
                    />
                </motion.div>

                {/* RIGHT — TEXT with glassmorphism + hover animation */}
                <motion.div
                    style={{ y: textY, opacity }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="bg-white/5 backdrop-blur-md rounded-xl border border-white/20 shadow-lg p-8
                     transition duration-300 ease-in-out hover:border-white/40
                     hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                >
                    <p className="text-sm uppercase tracking-widest text-white/70">About</p>

                    <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-white">
                        Building reliable systems
                        <br />
                        with clarity and intent
                    </h2>

                    <div className="mt-8 space-y-6 text-lg text-white/80">
                        <p>
                            I’m a <span className="text-white">Software Engineer</span> with a strong
                            focus on full-stack and backend development, building scalable,
                            maintainable systems designed for real-world use.
                        </p>

                        <p>
                            My work spans modern web technologies, APIs, databases, and
                            AI-driven features. I enjoy working close to the core of systems —
                            designing clean architectures and ensuring reliability as products grow.
                        </p>

                        <p>
                            I value ownership, thoughtful problem-solving, and building things
                            that are simple to use and easy to extend.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
