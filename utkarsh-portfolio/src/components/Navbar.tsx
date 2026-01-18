"use client";

import { motion } from "framer-motion";

const links = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    return (
        <motion.header
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50"
        >
            <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between backdrop-blur-md bg-black/30 border-b border-white/10">
                {/* Logo / Name */}
                <a
                    href="#"
                    className="text-lg font-semibold tracking-tight"
                >
                    Utkarsh Priye<span className="text-[var(--color-accent)]">.</span>
                </a>

                {/* Links */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-[var(--color-text-secondary)] hover:text-white transition"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <a
                    href="#contact"
                    className="text-sm px-4 py-2 rounded-md bg-[var(--color-accent)] text-black font-medium hover:opacity-90 transition"
                >
                    Hire Me
                </a>
            </nav>
        </motion.header>
    );
}
