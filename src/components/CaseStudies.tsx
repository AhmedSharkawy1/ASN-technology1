"use client";

import { useTranslations } from "next-intl";
import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const AnimatedCounter = ({ value }: { value: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const springValue = useSpring(0, {
        stiffness: 50,
        damping: 20,
        mass: 1,
    });

    const displayValue = useTransform(springValue, (current) => Math.round(current).toString());

    useEffect(() => {
        if (isInView) {
            springValue.set(value);
        }
    }, [isInView, springValue, value]);

    return <motion.span ref={ref}>{displayValue}</motion.span>;
};

export default function CaseStudies() {
    const t = useTranslations("CaseStudies");

    return (
        <section id="case-studies" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 z-10 relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-electric-blue/5 border border-electric-blue/20 rounded-[40px] p-12 md:p-20 shadow-neon"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("title")}</h2>
                        <div className="w-24 h-1 bg-electric-secondary mx-auto rounded-full shadow-neon" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

                        <div className="p-8 glass-card">
                            <div className="text-5xl md:text-7xl font-bold text-electric-blue mb-4">
                                <AnimatedCounter value={150} />+
                            </div>
                            <p className="text-xl text-foreground font-semibold">{t("metrics.clients")}</p>
                        </div>

                        <div className="p-8 glass-card scale-105 border-electric-blue/50 shadow-neon">
                            <div className="text-5xl md:text-7xl font-bold text-white mb-4">
                                <AnimatedCounter value={320} />+
                            </div>
                            <p className="text-xl text-foreground font-semibold">{t("metrics.projects")}</p>
                        </div>

                        <div className="p-8 glass-card">
                            <div className="text-5xl md:text-7xl font-bold text-electric-secondary mb-4">
                                <AnimatedCounter value={450} />%
                            </div>
                            <p className="text-xl text-foreground font-semibold">{t("metrics.roi")}</p>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
