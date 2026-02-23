"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import Image from "next/image";
import ParticleCanvas from "./ParticleCanvas";

export default function Hero() {
    const t = useTranslations("Hero");

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Layer */}
            <ParticleCanvas />

            {/* Main Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-blue/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
                {/* Animated Logo */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0, filter: "brightness(0.5)" }}
                    animate={{ scale: 1, opacity: 1, filter: "brightness(1) drop-shadow(0 0 30px rgba(0,212,255,0.6))" }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="mb-8 relative w-48 h-48 md:w-64 md:h-64 animate-float"
                >
                    <Image
                        src="/logo.png"
                        alt="ASN Technology Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
                >
                    <span className="text-electric-blue text-glow">
                        {t("headlineHighlight")}
                    </span>
                    <br className="hidden md:block" />
                    {t("headlineRest")}
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg md:text-2xl text-foreground/80 max-w-2xl mb-10"
                >
                    {t("subheadline")}
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-6 items-center justify-center"
                >
                    <Link
                        href="#contact"
                        className="px-8 py-4 bg-electric-blue text-navy-900 font-bold rounded-full text-lg shadow-neon hover:shadow-neon-strong hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                    >
                        {t("startProject")}
                    </Link>
                    <Link
                        href="#portfolio"
                        className="px-8 py-4 bg-transparent border-2 border-glass-borderDark text-foreground font-bold rounded-full text-lg hover:border-electric-blue hover:text-electric-blue hover:bg-glass-dark transition-all duration-300 w-full sm:w-auto"
                    >
                        {t("viewWork")}
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
