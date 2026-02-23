"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
    const t = useTranslations("Testimonials");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const carouselRef = useRef<HTMLDivElement>(null);

    const testimonials = [
        {
            id: 1,
            quote: "ASN Technology completely transformed our digital presence. Our new website is stunning and the WhatsApp automation increased our leads by 300%.",
            author: "Ahmed Hassan",
            role: "CEO, Retage EG"
        },
        {
            id: 2,
            quote: "The interactive e-menu they built for our restaurant is brilliant. Customers love the seamless ordering experience, directly to our WhatsApp.",
            author: "Sarah Fathy",
            role: "Owner, Pizza Pasta"
        },
        {
            id: 3,
            quote: "Top-tier design and performance. Their team understands the modern digital landscape. The futuristic aesthetic perfectly matches our brand.",
            author: "Omar Youssef",
            role: "Marketing Director, Babelhara"
        }
    ];

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [isPaused, testimonials.length]);

    const handleNext = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowLeft") handlePrev();
        if (e.key === "ArrowRight") handleNext();
    };

    return (
        <section className="py-24 bg-electric-blue/5 relative">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("title")}</h2>
                <div className="w-24 h-1 bg-electric-blue mx-auto rounded-full shadow-neon mb-16" />

                <div
                    className="max-w-4xl mx-auto relative focus:outline-none"
                    ref={carouselRef}
                    tabIndex={0}
                    onKeyDown={handleKeyDown}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onFocus={() => setIsPaused(true)}
                    onBlur={() => setIsPaused(false)}
                    aria-roledescription="carousel"
                    aria-label="Client Testimonials"
                >
                    <div className="min-h-[250px] relative flex Items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50, filter: "blur(4px)" }}
                                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, x: -50, filter: "blur(4px)" }}
                                transition={{ duration: 0.5 }}
                                className="absolute w-full px-12"
                                role="group"
                                aria-roledescription="slide"
                            >
                                <Quote className="w-12 h-12 text-electric-blue/20 mx-auto mb-6 rotate-180" />
                                <p className="text-xl md:text-3xl font-medium leading-relaxed mb-8">
                                    &quot;{testimonials[currentIndex].quote}&quot;
                                </p>
                                <div>
                                    <div className="font-bold text-lg text-electric-blue">{testimonials[currentIndex].author}</div>
                                    <div className="text-sm opacity-70">{testimonials[currentIndex].role}</div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex justify-center gap-4 mt-12">
                        <button
                            onClick={handlePrev}
                            className="p-3 rounded-full glass-card hover:glass-card-hover hover:text-electric-blue"
                            aria-label="Previous Testimonial"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <div className="flex items-center gap-2">
                            {testimonials.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-electric-blue w-8 shadow-neon' : 'bg-foreground/20'}`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={handleNext}
                            className="p-3 rounded-full glass-card hover:glass-card-hover hover:text-electric-blue"
                            aria-label="Next Testimonial"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
