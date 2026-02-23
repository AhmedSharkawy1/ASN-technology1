"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, MessageCircle } from "lucide-react";

export default function CTA() {
    const t = useTranslations("CTA");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            service: formData.get("service"),
        };

        try {
            // Post to mock-order/contact route
            await fetch('/api/mock-order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            setIsSuccess(true);
            (e.target as HTMLFormElement).reset();
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setIsSuccess(false), 5000);
        }
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-navy-900">
            {/* Glow Effects */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-electric-blue/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-electric-secondary/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="md:w-1/2"
                >
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                        {t("title")}<span className="text-electric-blue">.</span>
                    </h2>
                    <p className="text-xl text-white/70 mb-8 max-w-lg leading-relaxed">
                        Let&apos;s build a futuristic digital experience that elevates your brand and automates your sales.
                    </p>

                    <a
                        href="https://wa.me/01092621367?text=Hello%20ASN%20Technology"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 text-white font-bold rounded-full text-lg shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:bg-green-400 hover:scale-105 transition-all w-full sm:w-auto justify-center"
                    >
                        <MessageCircle className="w-6 h-6" /> Chat on WhatsApp
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="md:w-1/2 w-full"
                >
                    <form onSubmit={handleSubmit} className="p-8 md:p-12 glass-card border border-electric-blue/20 bg-navy-800/50 relative overflow-hidden group">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-electric-blue to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-white/80 mb-2">{t("name")}</label>
                                <input
                                    required
                                    name="name"
                                    type="text"
                                    className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-white/80 mb-2">{t("email")}</label>
                                <input
                                    required
                                    name="email"
                                    type="email"
                                    className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-white/80 mb-2">{t("service")}</label>
                                <select
                                    name="service"
                                    className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-all appearance-none"
                                >
                                    <option value="web">Website Design</option>
                                    <option value="marketing">Digital Marketing</option>
                                    <option value="emenu">Electronic Menu</option>
                                    <option value="automation">WhatsApp Automation</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-electric-blue text-navy-900 font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-neon hover:scale-[1.02] transition-all disabled:opacity-70 disabled:hover:scale-100"
                            >
                                {isSubmitting ? (
                                    <span className="w-6 h-6 border-2 border-navy-900 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <><Send className="w-5 h-5" /> {t("submit")}</>
                                )}
                            </button>
                        </div>

                        <AnimatePresence>
                            {isSuccess && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-x-8 bottom-8 bg-green-500/90 text-navy-900 font-bold p-4 rounded-xl flex items-center gap-3 backdrop-blur-md"
                                >
                                    <CheckCircle2 className="w-6 h-6" />
                                    Request sent successfully!
                                </motion.div>
                            )}
                        </AnimatePresence>

                    </form>
                </motion.div>

            </div>
        </section>
    );
}
