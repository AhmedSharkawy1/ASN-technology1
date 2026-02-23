"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
    const t = useTranslations("Portfolio");

    const projects = [
        { title: "Pizza Pasta", url: "https://pizza-pasta1.vercel.app/", img: "/hero-static.png" },
        { title: "Atiab", url: "https://atiab.vercel.app/", img: "/hero-static.png" },
        { title: "Babelhara", url: "https://babelhara.vercel.app/", img: "/hero-static.png" },
        { title: "Ezz Elsham", url: "https://ezz-elsham.vercel.app/", img: "/hero-static.png" },
        { title: "Retage EG", url: "https://retage-eg.com/", img: "/hero-static.png" },
    ];

    return (
        <section id="portfolio" className="py-24 relative z-10">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("title")}</h2>
                    <div className="w-24 h-1 bg-electric-blue mx-auto rounded-full shadow-neon" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 masonry-like">
                    {projects.map((project, idx) => (
                        <motion.a
                            key={idx}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="block group relative overflow-hidden rounded-2xl glass-card border border-glass-borderLight dark:border-glass-borderDark h-[300px]"
                        >
                            {/* Fallback pattern for portfolio images if hero-static.png isn't available yet */}
                            <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-900 z-0">
                                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                            </div>

                            <Image
                                src={project.img}
                                alt={project.title}
                                fill
                                className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 z-0 mix-blend-overlay"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />

                            <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex justify-between items-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-electric-blue text-sm font-semibold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">Live Project</p>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-electric-blue flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 text-navy-900 shadow-neon">
                                    <ExternalLink className="w-5 h-5" />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
