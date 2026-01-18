"use client";

import { motion } from "framer-motion";

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.18,
        },
    },
};

const itemVariants = {
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

const experiences = [
    {
        role: "Software Engineer Intern",
        company: "Blends (Startup)",
        period: "2024",
        description:
            "Worked at an early-stage startup to build a complete mobile application from the ground up.",
        highlights: [
            "Developed cross-platform features using FlutterFlow, Flutter, and Dart",
            "Integrated backend services using Python-based REST APIs",
            "Implemented user authentication, secure login flows, and session management",
            "Built features for QR code generation, PDF creation, downloads, and in-app file handling",
        ],
    },
    {
        role: "Full Stack Developer Intern",
        company: "Teltronics",
        period: "2024",
        description:
            "Worked on a full-stack Employee Management System used for internal operations.",
        highlights: [
            "Built frontend screens using HTML, CSS, JavaScript, and React",
            "Developed backend services with Node.js and RESTful APIs",
            "Designed and managed MongoDB collections for employee data and access control",
            "Implemented features such as employee profiles, authentication, and workflow tracking",
        ],
    },
    {
        role: "Software Engineer Intern",
        company: " CDSIMER",
        period: "2023 - 2024",
        description:
            "Worked on a research-focused mobile application used to collect and evaluate user data for SLD Screening. ",
        highlights: [
            "Built application interfaces using FlutterFlow, Flutter, and Dart",
            "Integrated backend logic using Python and JavaScript",
            "Used Firebase for real-time data storage and synchronization",
        ],
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
            className="relative py-32 px-6 bg-[var(--color-bg-soft)]"
        >
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-sm uppercase tracking-widest text-[var(--color-text-secondary)]">
                        Experience
                    </p>

                    <h2 className="mt-4 text-4xl md:text-5xl font-semibold">
                        Where I’ve worked
                        <br />
                        and what I’ve built
                    </h2>
                </motion.div>

                {/* Timeline */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="relative mt-20 pl-6"
                >
                    {/* Vertical line */}
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="relative mb-16"
                        >
                            {/* Dot */}
                            <div className="
                absolute -left-[7px] top-2
                w-3 h-3 rounded-full
                bg-[var(--color-accent)]
              " />

                            <div className="ml-6">
                                <div className="flex flex-wrap items-center gap-3">
                                    <h3 className="text-xl font-semibold">
                                        {exp.role}
                                    </h3>
                                    <span className="text-sm text-[var(--color-text-secondary)]">
                    @ {exp.company}
                  </span>
                                </div>

                                <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                                    {exp.period}
                                </p>

                                <p className="mt-4 text-[var(--color-text-secondary)] max-w-3xl">
                                    {exp.description}
                                </p>

                                <ul className="mt-4 space-y-2">
                                    {exp.highlights.map((item) => (
                                        <li
                                            key={item}
                                            className="text-sm text-[var(--color-text-secondary)] flex gap-2"
                                        >
                                            <span className="text-[var(--color-accent)]">▹</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
