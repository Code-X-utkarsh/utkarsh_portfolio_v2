import "./globals.css";
import "../styles/theme.css";

import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import PixelBackground from "@/components/PixelBackground";


const inter = localFont({
    src: "../../public/fonts/Inter-Variable.ttf",
    variable: "--font-secondary",
    display: "swap",
});

const satoshi = localFont({
    src: "../../public/fonts/Satoshi-Variable.ttf",
    variable: "--font-primary",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Utkarsh Priye — AI/ML Engineer",
    description:
        "AI/ML Engineer & Full-Stack Developer building intelligent, scalable, real-world systems.",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} ${satoshi.variable}`}>
        <body>
        <PixelBackground />
        <div className="noise" />
        <Navbar />
        {children}
        </body>
        </html>
    );
}
