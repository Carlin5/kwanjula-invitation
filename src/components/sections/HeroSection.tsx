"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/couple-hero.jpg"
          alt="Abdul Rahman and Bushrah"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[var(--cream)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-lg mx-auto">
        <motion.p
          className="text-[var(--gold-light)] text-sm md:text-base tracking-[0.4em] uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Bismillah
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl text-white mb-4"
          style={{ fontFamily: "'Great Vibes', cursive" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Abdul Rahman
        </motion.h1>

        <motion.div
          className="flex items-center justify-center gap-4 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="h-[1px] w-16 bg-[var(--gold-light)]" />
          <span className="text-[var(--gold-light)] text-2xl">&</span>
          <div className="h-[1px] w-16 bg-[var(--gold-light)]" />
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl text-white mb-8"
          style={{ fontFamily: "'Great Vibes', cursive" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          Bushrah
        </motion.h1>

        <motion.p
          className="text-white/80 text-lg md:text-xl italic"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          &ldquo;And among His signs is that He created for you mates from among
          yourselves, that you may dwell in tranquility with them&rdquo;
        </motion.p>
        <motion.p
          className="text-[var(--gold-light)] text-sm mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          — Quran 30:21
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-[var(--gold-light)] flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-3 rounded-full bg-[var(--gold-light)]"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
