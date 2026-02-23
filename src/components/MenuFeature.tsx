"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneCall, Globe, QrCode, Send, Plus, Minus, CheckCircle2 } from "lucide-react";

export default function MenuFeature() {
    const t = useTranslations("MenuFeature");

    const [cart, setCart] = useState<{ id: number, name: string, price: number, qty: number }[]>([
        { id: 1, name: "Truffle Burger", price: 15, qty: 1 }
    ]);
    const [orderSent, setOrderSent] = useState(false);

    const updateQty = (id: number, delta: number) => {
        setCart(prev => prev.map(item => {
            if (item.id === id) {
                const newQty = Math.max(0, item.qty + delta);
                return { ...item, qty: newQty };
            }
            return item;
        }).filter(item => item.qty > 0));
    };

    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    const handleOrder = async () => {
        // Simulate sending order to WhatsApp via mock API
        setOrderSent(true);
        try {
            await fetch('/api/mock-order', {
                method: 'POST',
                body: JSON.stringify({ cart, total }),
            });
        } catch (e) {
            console.error(e);
        }
        setTimeout(() => setOrderSent(false), 4000);
    };

    return (
        <section id="menu-demo" className="py-24 bg-foreground/5 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("title")}</h2>
                    <div className="w-24 h-1 bg-electric-secondary mx-auto rounded-full shadow-neon" />
                </motion.div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Mock UI */}
                    <div className="relative mx-auto w-full max-w-[340px] h-[680px] bg-navy-900 rounded-[40px] border-[8px] border-foreground/10 shadow-2xl overflow-hidden glass-card">
                        {/* Phone Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-foreground/10 rounded-b-xl z-20" />

                        <div className="h-full w-full overflow-y-auto p-4 pt-8 custom-scrollbar relative">

                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-bold text-xl text-white">Gourmet Burger</h3>
                                <QrCode className="text-electric-blue w-6 h-6" />
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-2 mb-6">
                                <button className="flex-1 flex items-center justify-center gap-2 bg-green-500/20 text-green-400 py-2 rounded-xl text-sm font-semibold hover:bg-green-500/30 transition-colors">
                                    <PhoneCall className="w-4 h-4" /> {t("call")}
                                </button>
                                <button className="flex-1 flex items-center justify-center gap-2 bg-electric-blue/20 text-electric-blue py-2 rounded-xl text-sm font-semibold hover:bg-electric-blue/30 transition-colors">
                                    <Globe className="w-4 h-4" /> {t("website")}
                                </button>
                            </div>

                            {/* Menu Item */}
                            <div className="bg-white/5 rounded-2xl p-4 mb-4 border border-white/10 relative overflow-hidden group">
                                <div className="absolute top-4 right-4 bg-electric-blue text-navy-900 text-xs font-bold px-2 py-1 rounded-md animate-pulse">
                                    ${cart.find(c => c.id === 1)?.price || 15}
                                </div>
                                <h4 className="font-bold text-lg text-white mb-1">Truffle Burger</h4>
                                <p className="text-xs text-white/60 mb-4">Wagyu beef, truffle mayo, cheddar, brioche.</p>

                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold text-electric-secondary">Order</span>
                                    <div className="flex items-center gap-3 bg-black/40 rounded-full px-2 py-1">
                                        <button onClick={() => updateQty(1, -1)} className="p-1 hover:text-electric-blue"><Minus className="w-4 h-4" /></button>
                                        <span className="w-4 text-center text-sm">{cart.find(c => c.id === 1)?.qty || 0}</span>
                                        <button onClick={() => updateQty(1, 1)} className="p-1 hover:text-electric-blue"><Plus className="w-4 h-4" /></button>
                                    </div>
                                </div>
                            </div>

                            {/* Cart Total & Order */}
                            <div className="mt-8 pt-4 border-t border-white/10">
                                <div className="flex justify-between items-center mb-4 text-white font-bold">
                                    <span>Total</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>

                                <button
                                    onClick={handleOrder}
                                    disabled={total === 0 || orderSent}
                                    className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(34,197,94,0.4)] disabled:opacity-50 disabled:shadow-none"
                                >
                                    {orderSent ? (
                                        <><CheckCircle2 className="w-5 h-5" /> Sent!</>
                                    ) : (
                                        <><Send className="w-5 h-5" /> {t("orderNow")}</>
                                    )}
                                </button>
                            </div>

                        </div>
                    </div>

                    {/* Explanation Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-bold mb-6">Revolutionize Dine-In & Takeout</h3>
                        <ul className="space-y-4 mb-8 text-lg text-foreground/80">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-electric-blue shrink-0 mt-1" />
                                <span>QR-code menus instantly accessible on any smartphone.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-electric-blue shrink-0 mt-1" />
                                <span>Live price updates without reprinting physical menus.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-electric-blue shrink-0 mt-1" />
                                <span>Direct WhatsApp ordering integration to cut middleman fees.</span>
                            </li>
                        </ul>

                        <AnimatePresence>
                            {orderSent && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 flex items-center gap-3 text-green-500"
                                >
                                    <CheckCircle2 className="w-6 h-6 shrink-0" />
                                    <p className="text-sm font-medium">{t("simulated")}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
