"use client";

import { usePathname, useRouter } from "@/navigation";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";

export default function LangToggle() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const toggleLanguage = () => {
        const nextLocale = locale === "en" ? "ar" : "en";
        router.replace(pathname, { locale: nextLocale });
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleLanguage}
            className="px-4 py-2 font-medium text-sm rounded-full glass-card hover:glass-card-hover flex items-center justify-center gap-2"
            aria-label="Toggle Language"
        >
            <span className={locale === "en" ? "text-electric-blue" : "opacity-70"}>EN</span>
            <span className="opacity-40">|</span>
            <span className={locale === "ar" ? "text-electric-blue" : "opacity-70"}>AR</span>
        </motion.button>
    );
}
