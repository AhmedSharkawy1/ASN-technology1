"use client";

import { motion } from "framer-motion";

export default function StrategicFunnel() {
    return (
        <section className="py-24 overflow-hidden relative border-t border-glass-borderDark">
            <div className="container mx-auto px-4 lg:flex items-center justify-between gap-16">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/2 mb-12 lg:mb-0"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Strategic Growth Engine</h2>
                    <div className="w-24 h-1 bg-green-500 rounded-full shadow-neon mb-8" />
                    <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                        Our multi-stage funnel approach ensures continuous discovery, engagement, conversion, and retention—powered by AI and WhatsApp automation.
                    </p>
                    <ul className="space-y-6">
                        <li className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-electric-blue/20 text-electric-blue flex items-center justify-center font-bold shrink-0 mt-1">1</div>
                            <div>
                                <h4 className="font-bold text-lg">Discovery & AI Content</h4>
                                <p className="text-foreground/70">Attract audiences with stunning visuals and data-driven targeted content.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-electric-secondary/20 text-electric-secondary flex items-center justify-center font-bold shrink-0 mt-1">2</div>
                            <div>
                                <h4 className="font-bold text-lg">Interactive Experience</h4>
                                <p className="text-foreground/70">Engage users with smooth Next.js 14 websites and interactive electronic menus.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center font-bold shrink-0 mt-1">3</div>
                            <div>
                                <h4 className="font-bold text-lg">WhatsApp Conversion</h4>
                                <p className="text-foreground/70">Seamlessly close sales with direct automated WhatsApp messaging loops.</p>
                            </div>
                        </li>
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="lg:w-1/2 relative flex justify-center perspective-[1000px]"
                >
                    {/* Decorative Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-electric-blue/10 blur-[100px] rounded-full" />

                    <svg viewBox="0 0 400 500" className="w-full max-w-md drop-shadow-[0_0_30px_rgba(0,212,255,0.3)]">
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#008CFF" stopOpacity="0.2" />
                            </linearGradient>
                            <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#008CFF" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#22C55E" stopOpacity="0.2" />
                            </linearGradient>
                            <linearGradient id="grad3" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#22C55E" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#22C55E" stopOpacity="0.1" />
                            </linearGradient>
                        </defs>

                        {/* Stage 1 */}
                        <motion.path
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            d="M 50 50 L 350 50 L 300 150 L 100 150 Z"
                            fill="url(#grad1)" stroke="#00D4FF" strokeWidth="2"
                        />
                        <text x="200" y="110" fill="white" fontSize="24" fontWeight="bold" textAnchor="middle" className="drop-shadow-md">AWARENESS</text>

                        {/* Stage 2 */}
                        <motion.path
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                            d="M 100 160 L 300 160 L 250 280 L 150 280 Z"
                            fill="url(#grad2)" stroke="#008CFF" strokeWidth="2"
                        />
                        <text x="200" y="230" fill="white" fontSize="24" fontWeight="bold" textAnchor="middle" className="drop-shadow-md">ENGAGEMENT</text>

                        {/* Stage 3 */}
                        <motion.path
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
                            d="M 150 290 L 250 290 L 220 400 L 180 400 Z"
                            fill="url(#grad3)" stroke="#22C55E" strokeWidth="2"
                        />
                        <text x="200" y="355" fill="white" fontSize="20" fontWeight="bold" textAnchor="middle" className="drop-shadow-md">CONVERSION</text>

                        {/* Data Flow Particles/Arrows */}
                        <motion.circle
                            cx="200" cy="50" r="4" fill="#FFF"
                            animate={{ cy: [50, 400], opacity: [1, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.circle
                            cx="180" cy="50" r="3" fill="#FFF"
                            animate={{ cy: [50, 350], opacity: [1, 0] }}
                            transition={{ duration: 2.2, repeat: Infinity, ease: "linear", delay: 0.5 }}
                        />
                        <motion.circle
                            cx="220" cy="50" r="5" fill="#FFF"
                            animate={{ cy: [50, 380], opacity: [1, 0] }}
                            transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: 1 }}
                        />
                    </svg>
                </motion.div>

            </div>
        </section>
    );
}
