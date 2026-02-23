"use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Monitor, TrendingUp, Sparkles, MessageSquareHeart, SmartphoneNfc } from "lucide-react";

const TiltCard = ({ children }: { children: React.ReactNode }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotate, setRotate] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Max rotation 10 degrees
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        setRotate({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setRotate({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{
                rotateX: rotate.x,
                rotateY: rotate.y,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ transformStyle: "preserve-3d" }}
            className="h-full"
        >
            <div className="h-full p-8 glass-card glass-card-hover group relative overflow-hidden flex flex-col items-start gap-4" style={{ transform: "translateZ(30px)" }}>
                {/* Glow behind icon */}
                <div className="absolute top-8 left-8 w-16 h-16 bg-electric-blue/20 rounded-full blur-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                {children}
            </div>
        </motion.div>
    );
};

export default function Services() {
    const t = useTranslations("Services");

    const services = [
        {
            id: "webDesign",
            icon: <Monitor className="w-10 h-10 text-electric-blue group-hover:scale-110 transition-transform duration-300 relative z-10" />,
            title: t("webDesign.title"),
            desc: t("webDesign.desc"),
        },
        {
            id: "digitalMarketing",
            icon: <TrendingUp className="w-10 h-10 text-electric-blue group-hover:scale-110 transition-transform duration-300 relative z-10" />,
            title: t("digitalMarketing.title"),
            desc: t("digitalMarketing.desc"),
        },
        {
            id: "aiVideo",
            icon: <Sparkles className="w-10 h-10 text-electric-blue group-hover:scale-110 transition-transform duration-300 relative z-10" />,
            title: t("aiVideo.title"),
            desc: t("aiVideo.desc"),
        },
        {
            id: "whatsappAds",
            icon: <MessageSquareHeart className="w-10 h-10 text-electric-blue group-hover:scale-110 transition-transform duration-300 relative z-10" />,
            title: t("whatsappAds.title"),
            desc: t("whatsappAds.desc"),
        },
        {
            id: "eMenu",
            icon: <SmartphoneNfc className="w-10 h-10 text-electric-blue group-hover:scale-110 transition-transform duration-300 relative z-10" />,
            title: t("eMenu.title"),
            desc: t("eMenu.desc"),
        },
    ];

    return (
        <section id="services" className="py-24 relative z-10">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("title")}</h2>
                    <div className="w-24 h-1 bg-electric-blue mx-auto rounded-full shadow-neon" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[1000px]">
                    {services.map((service, idx) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <TiltCard>
                                {service.icon}
                                <h3 className="text-2xl font-bold mt-2 relative z-10">{service.title}</h3>
                                <p className="text-foreground/70 relative z-10 leading-relaxed">
                                    {service.desc}
                                </p>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
