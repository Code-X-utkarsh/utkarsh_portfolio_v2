"use client";

import { motion } from "framer-motion";
import KineticType from "./KineticType";
import LottieAnimation from "./LottieAnimation";
import developerThinking from "@/lottie/developer_thinking.json";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-24">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* LEFT — TEXT */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-center md:text-left"
                    >
                        <KineticType />

                        <p className="mt-6 text-lg md:text-xl text-[var(--color-text-secondary)] max-w-xl">
                            Software Engineer with strong full-stack and backend expertise,
                            building scalable, production-grade systems and AI-driven
                            applications with real-world impact.
                        </p>

                        <div className="mt-10 flex gap-6 justify-center md:justify-start">
                            <a
                                href="#projects"
                                className="px-6 py-3 rounded-md bg-[var(--color-accent)] text-black font-medium shadow-lg hover:opacity-90 transition"
                            >
                                View Work
                            </a>

                            <a
                                href="#contact"
                                className="px-6 py-3 rounded-md border border-white/20 hover:bg-white/5 transition"
                            >
                                Contact
                            </a>
                        </div>
                    </motion.div>

                    {/* RIGHT — LOTTIE */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="hidden md:block"
                    >
                        <LottieAnimation
                            animationData={developerThinking}
                            className="max-w-md mx-auto opacity-95"
                        />
                    </motion.div>

                </div>
            </div>

            {/* Scroll cue */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm text-[var(--color-text-secondary)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                Scroll
            </motion.div>
        </section>
    );
}
