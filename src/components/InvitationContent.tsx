"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import HeroSection from "./sections/HeroSection";
import CoupleSection from "./sections/CoupleSection";
import EventDetails from "./sections/EventDetails";
import Countdown from "./sections/Countdown";
import Gallery from "./sections/Gallery";
import VideoSection from "./sections/VideoSection";
import RSVPSection from "./sections/RSVPSection";
import Footer from "./sections/Footer";

export default function InvitationContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  return (
    <motion.div
      ref={containerRef}
      className="relative bg-[var(--black)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      {/* Animated progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-50 origin-left"
        style={{
          scaleX: scrollYProgress,
          background: "linear-gradient(90deg, var(--gold-dark), var(--gold-light), var(--gold))",
          boxShadow: "0 0 10px var(--gold), 0 0 20px var(--gold-dark)",
        }}
      />

      <HeroSection />

      <AnimatedDivider />

      <CoupleSection />

      <AnimatedDivider />

      <EventDetails />

      <AnimatedDivider />

      <Countdown />

      <AnimatedDivider />

      <Gallery />

      <AnimatedDivider />

      <VideoSection />

      <AnimatedDivider />

      <RSVPSection />

      <Footer />
    </motion.div>
  );
}

function AnimatedDivider() {
  return (
    <motion.div
      className="relative py-12 flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)",
        }}
        animate={{ scale: [0.8, 1.2, 0.8], rotate: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      <div className="flex items-center gap-4 z-10">
        <motion.div
          className="h-[1px] w-16 md:w-24"
          style={{ background: "linear-gradient(90deg, transparent, var(--gold))" }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          className="w-3 h-3 rotate-45 border border-[var(--gold)]"
          animate={{ rotate: [45, 225, 405] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="h-[1px] w-16 md:w-24"
          style={{ background: "linear-gradient(270deg, transparent, var(--gold))" }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </motion.div>
  );
}
