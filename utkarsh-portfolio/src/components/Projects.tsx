"use client";

import { motion } from "framer-motion";

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

const projects = [
    {
        title: "KAWACHH — Health Data Management Platform",
        description:
            "A scalable platform built to monitor, manage, and visualize large-scale public health data with real-time updates.",
        impact:
            "Winner — Smart India Hackathon 2024. Designed for reliability, scalability, and ease of use.",
        tech: ["Backend Systems", "Data Handling", "Dashboards", "Healthcare"],
    },
    {
        title: "CausalAI-Repurpose",
        description:
            "A structured software system for processing and analyzing biological datasets with a focus on modularity and interpretability.",
        impact:
            "Improved evaluation workflows and achieved measurable performance gains over baseline models.",
        tech: ["Python", "Data Pipelines", "AI Systems", "GNNs"],
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="relative py-32 px-6"
        >
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >


                    <h2 className="mt-4 text-4xl md:text-5xl font-semibold">
                        Projects
                    </h2>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mt-16 grid md:grid-cols-2 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -6 }}
                            className="
                group relative rounded-2xl
                border border-white/10
                bg-[var(--color-bg-soft)]
                p-8
                transition
              "
                        >
                            {/* Glow on hover */}
                            <div className="
                absolute inset-0 rounded-2xl
                opacity-0 group-hover:opacity-100
                transition
                bg-gradient-to-br
                from-[var(--color-accent)]/10
                to-transparent
              " />

                            <div className="relative z-10">
                                <h3 className="text-xl font-semibold">
                                    {project.title}
                                </h3>

                                <p className="mt-4 text-[var(--color-text-secondary)]">
                                    {project.description}
                                </p>

                                <p className="mt-4 text-sm text-[var(--color-text-secondary)]">
                                    <span className="text-white font-medium">Impact:</span>{" "}
                                    {project.impact}
                                </p>

                                {/* Tech Stack */}
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {project.tech.map((item) => (
                                        <span
                                            key={item}
                                            className="
                        text-xs px-3 py-1 rounded-full
                        border border-white/10
                        text-[var(--color-text-secondary)]
                        group-hover:text-white
                        transition
                      "
                                        >
                      {item}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
