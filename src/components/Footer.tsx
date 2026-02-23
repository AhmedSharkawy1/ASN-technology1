"use client";

import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import LangToggle from "./LangToggle";

export default function Footer() {
    const t = useTranslations("Footer");

    return (
        <footer className="bg-navy-900 border-t border-glass-borderDark pt-16 pb-8 text-foreground/80 relative overflow-hidden">
            {/* Background glow effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-electric-secondary/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div className="col-span-1 md:col-span-1 lg:col-span-1 pr-4">
                        <h3 className="font-bold text-2xl tracking-tight text-white mb-4">ASN Technology</h3>
                        <p className="text-sm opacity-80 mb-6 leading-relaxed">
                            We build visually stunning, high-conversion websites and digital solutions that empower your business for the future.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 glass-card hover:glass-card-hover text-white hover:text-electric-blue transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 glass-card hover:glass-card-hover text-white hover:text-electric-blue transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 glass-card hover:glass-card-hover text-white hover:text-electric-blue transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 glass-card hover:glass-card-hover text-white hover:text-electric-blue transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Services</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="#services" className="hover:text-electric-blue transition-colors">Website Design</Link></li>
                            <li><Link href="#services" className="hover:text-electric-blue transition-colors">Digital Marketing</Link></li>
                            <li><Link href="#services" className="hover:text-electric-blue transition-colors">AI Video & Content</Link></li>
                            <li><Link href="#services" className="hover:text-electric-blue transition-colors">WhatsApp Automation</Link></li>
                            <li><Link href="#menu-demo" className="hover:text-electric-blue transition-colors">Electronic Menus</Link></li>
                        </ul>
                    </div>

                    {/* Sitemap */}
                    <div>
                        <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Sitemap</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/" className="hover:text-electric-blue transition-colors">Home</Link></li>
                            <li><Link href="#portfolio" className="hover:text-electric-blue transition-colors">Portfolio</Link></li>
                            <li><Link href="#case-studies" className="hover:text-electric-blue transition-colors">Case Studies</Link></li>
                            <li><Link href="#contact" className="hover:text-electric-blue transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-electric-blue shrink-0" />
                                <span className="opacity-80">Global Tech Hub, Digital City 4200, Web Space</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-electric-blue shrink-0" />
                                <span className="opacity-80">+010 9262 1367</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-electric-blue shrink-0" />
                                <span className="opacity-80">hello@asn-technology.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-glass-borderDark pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm opacity-60">
                        &copy; {new Date().getFullYear()} {t("rights")}
                    </p>
                    <div className="flex items-center gap-4">
                        <span className="text-sm opacity-60">Preferences:</span>
                        <LangToggle />
                    </div>
                </div>
            </div>
        </footer>
    );
}
