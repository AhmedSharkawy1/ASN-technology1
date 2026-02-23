"use client";

import { useState, useEffect } from "react";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import LangToggle from "./LangToggle";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";

export default function Navigation() {
    const t = useTranslations("Navigation");
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-glass-borderLight dark:border-glass-borderDark" : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-12 h-12 overflow-hidden rounded-md transition-transform group-hover:scale-105">
                        <Image
                            src="/logo.png"
                            alt="ASN Technology Logo"
                            fill
                            className="object-contain"
                            sizes="48px"
                        />
                    </div>
                    <span className="font-bold text-xl tracking-tight hidden sm:block bg-clip-text text-transparent bg-gradient-to-r from-foreground to-electric-secondary">
                        ASN Technology
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    <LangToggle />
                    <ThemeToggle />
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                            href="#contact"
                            className="px-6 py-2.5 bg-electric-blue text-navy-900 font-bold rounded-full shadow-neon hover:shadow-neon-strong transition-all duration-300 group"
                        >
                            {t("startProject")}
                        </Link>
                    </motion.div>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center gap-4">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-foreground focus:outline-none glass-card"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-20 left-0 w-full bg-background border-b border-glass-borderLight dark:border-glass-borderDark shadow-xl md:hidden glass-card rounded-none rounded-b-[24px]"
                    >
                        <div className="flex flex-col items-center gap-6 p-8">
                            <LangToggle />
                            <Link
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="w-full text-center px-6 py-3 bg-electric-blue text-navy-900 font-bold rounded-full shadow-neon"
                            >
                                {t("startProject")}
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
