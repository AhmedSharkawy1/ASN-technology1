"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
    const whatsappNumber = "01092621367";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        "Hello ASN Technology, I would like to start a project with you."
    )}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 text-white rounded-full shadow-lg hover:shadow-neon hover:bg-green-400 transition-all duration-300 group flex items-center justify-center"
            aria-label="Contact us on WhatsApp"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
        >
            <MessageCircle className="w-8 h-8 group-hover:animate-pulse" />
            {/* Optional Ping Effect */}
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-green-400"></span>
            </span>
        </motion.a>
    );
}
