"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 0.85]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Parallax background image with 3D scale */}
      <motion.div className="absolute inset-0" style={{ scale: imageScale, y: imageY }}>
        <Image
          src="/images/couple-hero.jpg"
          alt="Abdul Rahman and Bushrah"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Dark cinematic overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 40%, rgba(10,10,10,1) 95%)",
          opacity: overlayOpacity,
        }}
      />

      {/* Animated gold particles in hero */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[var(--gold)]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3,
            }}
            animate={{
              opacity: [0.1, 0.6, 0.1],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Main content with 3D entrance */}
      <motion.div
        className="relative z-10 text-center max-w-lg mx-auto"
        style={{ y: textY }}
      >
        <motion.p
          className="text-[var(--gold-light)] text-sm md:text-base tracking-[0.5em] uppercase mb-6"
          initial={{ opacity: 0, y: 30, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: 0.3, duration: 1, type: "spring" }}
        >
          Bismillahir Rahmanir Rahim
        </motion.p>

        <motion.h1
          className="text-6xl md:text-8xl text-white mb-2"
          style={{ fontFamily: "'Great Vibes', cursive", textShadow: "0 0 40px rgba(201,168,76,0.3)" }}
          initial={{ opacity: 0, scale: 0.3, rotateY: 180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ delay: 0.6, duration: 1.5, type: "spring", stiffness: 80 }}
        >
          Abdul Rahman
        </motion.h1>

        <motion.div
          className="flex items-center justify-center gap-6 my-4"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <motion.div
            className="h-[1px] w-20 bg-gradient-to-r from-transparent to-[var(--gold)]"
            animate={{ scaleX: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.span
            className="text-[var(--gold)] text-3xl"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            ✦
          </motion.span>
          <motion.div
            className="h-[1px] w-20 bg-gradient-to-l from-transparent to-[var(--gold)]"
            animate={{ scaleX: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl text-white mb-8"
          style={{ fontFamily: "'Great Vibes', cursive", textShadow: "0 0 40px rgba(201,168,76,0.3)" }}
          initial={{ opacity: 0, scale: 0.3, rotateY: -180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ delay: 1.0, duration: 1.5, type: "spring", stiffness: 80 }}
        >
          Bushrah
        </motion.h1>

        <motion.div
          className="mt-8 p-6 rounded-xl backdrop-blur-md"
          style={{
            background: "rgba(0,0,0,0.4)",
            border: "1px solid rgba(201,168,76,0.2)",
          }}
          initial={{ opacity: 0, y: 40, rotateX: 20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: 1.8, duration: 1 }}
        >
          <p
            className="text-white/90 text-lg md:text-xl italic leading-relaxed"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            &ldquo;And among His signs is that He created for you mates from among
            yourselves, that you may dwell in tranquility with them&rdquo;
          </p>
          <p className="text-[var(--gold)] text-sm mt-3 tracking-wider">
            — Quran 30:21
          </p>
        </motion.div>
      </motion.div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-[var(--gold)]/60 text-xs tracking-[0.3em] uppercase">Scroll</p>
          <motion.div
            className="w-5 h-8 rounded-full border border-[var(--gold)]/50 flex justify-center pt-2"
          >
            <motion.div
              className="w-1 h-2 rounded-full bg-[var(--gold)]"
              animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
