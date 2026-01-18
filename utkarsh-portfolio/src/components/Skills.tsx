"use client";

import { motion } from "framer-motion";

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: "easeOut",
        },
    },
};

const skillGroups = [
    {
        title: "Languages",
        skills: ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
    },
    {
        title: "Frontend",
        skills: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"],
    },
    {
        title: "Backend",
        skills: ["Node.js", "Express", "REST APIs", "MongoDB", "MySQL"],
    },
    {
        title: "AI / Data",
        skills: ["Machine Learning", "Data Pipelines", "Model Evaluation", "GNNs"],
    },
    {
        title: "Tools & Platforms",
        skills: ["Git", "Docker", "Linux", "Postman", "Vercel"],
    },
    {
        title: "Practices",
        skills: ["System Design", "Scalable Architecture", "Clean Code"],
    },
];

export default function Skills() {
    return (
        <section
            id="skills"
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
                    <p className="text-sm uppercase tracking-widest text-[var(--color-text-secondary)]">
                        Skills
                    </p>

                    <h2 className="mt-4 text-4xl md:text-5xl font-semibold">
                        Technologies & tools
                        <br />
                        I work with
                    </h2>
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {skillGroups.map((group) => (
                        <motion.div
                            key={group.title}
                            variants={itemVariants}
                            whileHover={{ y: -4 }}
                            className="
                group relative rounded-xl
                border border-white/10
                bg-[var(--color-bg-soft)]
                p-6
                transition
              "
                        >
                            {/* Hover glow */}
                            <div className="
                absolute inset-0 rounded-xl
                opacity-0 group-hover:opacity-100
                transition
                bg-gradient-to-br
                from-[var(--color-accent)]/10
                to-transparent
              " />

                            <div className="relative z-10">
                                <h3 className="text-lg font-semibold">
                                    {group.title}
                                </h3>

                                <ul className="mt-4 flex flex-wrap gap-2">
                                    {group.skills.map((skill) => (
                                        <li
                                            key={skill}
                                            className="
                        text-sm px-3 py-1 rounded-full
                        border border-white/10
                        text-[var(--color-text-secondary)]
                        group-hover:text-white
                        transition
                      "
                                        >
                                            {skill}
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
