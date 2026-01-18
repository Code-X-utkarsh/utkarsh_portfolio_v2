import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function HomePage() {
    return (
        <main className="relative overflow-hidden">
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Skills />
            <Contact />
        </main>
    );
}
