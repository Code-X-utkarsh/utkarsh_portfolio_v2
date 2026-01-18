"use client";

export default function Contact() {
    return (
        <section
            id="contact"
            className="py-[var(--section-padding)] px-6 text-center"
        >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Let’s Build Something
            </h2>

            <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto mb-8">
                I’m open to full-time roles, internships, and collaborative projects.
                If you’re building something meaningful, I’d love to talk.
            </p>

            <a
                href="mailto:utkarshpriye@gmail.com"
                className="inline-block px-8 py-4 rounded-md bg-[var(--color-accent)] text-black font-medium shadow-lg hover:opacity-90 transition"
            >
                Contact Me
            </a>
        </section>
    );
}
