"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-20 px-4 text-center relative overflow-hidden">
      {/* Gradient fade to deep black */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, transparent 0%, rgba(201,168,76,0.03) 50%, #000000 100%)",
        }}
      />

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="text-6xl mb-6"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ❤️
        </motion.div>

        <motion.h3
          className="text-4xl md:text-5xl text-white mb-3"
          style={{ fontFamily: "'Great Vibes', cursive", textShadow: "0 0 30px rgba(201,168,76,0.2)" }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Abdul Rahman & Bushrah
        </motion.h3>

        <motion.p
          className="text-white/40 text-sm tracking-[0.3em] uppercase mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          28th June, 2026 • Bwebajja Gardens
        </motion.p>

        <div className="gold-divider mb-8" />

        <motion.p
          className="text-[var(--gold)]/60 italic text-xl mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          Mwebale (Thank you)
        </motion.p>
        <p className="text-white/30 text-sm">
          We are grateful for your love and support
        </p>

        <motion.div
          className="mt-10 text-white/20 text-xs tracking-wider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          #AbdulRahmanAndBushrah2026
        </motion.div>
      </motion.div>
    </footer>
  );
}
