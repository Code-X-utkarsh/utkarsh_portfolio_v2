"use client";

import { motion } from "framer-motion";

const lines = [
    "Software Engineer",
    "Full-Stack & Backend",
    "AI-Driven Systems",
];

export default function KineticType() {
    return (
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            {lines.map((line, index) => (
                <motion.div
                    key={line}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: index * 0.25,
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                >
                    {index === 2 ? (
                        <span className="text-[var(--color-accent)]">{line}</span>
                    ) : (
                        <span>{line}</span>
                    )}
                </motion.div>
            ))}
        </h1>
    );
}
