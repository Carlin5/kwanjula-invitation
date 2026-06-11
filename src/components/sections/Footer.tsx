"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      className="py-16 px-4 text-center"
      style={{
        background: "linear-gradient(180deg, transparent, var(--brown))",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="text-6xl mb-4"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ❤️
        </motion.div>

        <h3
          className="text-3xl md:text-4xl text-white mb-2"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Abdul Rahman & Bushrah
        </h3>

        <p className="text-white/60 text-sm tracking-widest uppercase mb-6">
          28th June, 2026 • Bwebajja Gardens
        </p>

        <div className="gold-divider mb-6" />

        <p className="text-white/70 italic text-lg mb-2">
          Mwebale (Thank you)
        </p>
        <p className="text-white/50 text-sm">
          We are grateful for your love and support
        </p>

        <div className="mt-8 text-white/30 text-xs">
          #AbdulRahmanAndBushrah2026
        </div>
      </motion.div>
    </footer>
  );
}
