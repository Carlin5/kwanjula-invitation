"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
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

  const bgGradient = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [
      "linear-gradient(180deg, #faf3e0 0%, #f5e6c8 100%)",
      "linear-gradient(180deg, #f5e6c8 0%, #fff8f0 100%)",
      "linear-gradient(180deg, #fff8f0 0%, #f0e4c8 100%)",
      "linear-gradient(180deg, #f0e4c8 0%, #1a1a2e 100%)",
    ]
  );

  return (
    <motion.div
      ref={containerRef}
      className="relative"
      style={{ background: bgGradient }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
        style={{
          scaleX: scrollYProgress,
          background: "linear-gradient(90deg, var(--gold-dark), var(--gold-light), var(--gold))",
        }}
      />

      <HeroSection />

      <SectionDivider icon="♦" />

      <CoupleSection />

      <SectionDivider icon="✦" />

      <EventDetails />

      <SectionDivider icon="◈" />

      <Countdown />

      <SectionDivider icon="❋" />

      <Gallery />

      <SectionDivider icon="♦" />

      <VideoSection />

      <SectionDivider icon="✦" />

      <RSVPSection />

      <Footer />
    </motion.div>
  );
}

function SectionDivider({ icon }: { icon: string }) {
  return (
    <motion.div
      className="flex items-center justify-center py-8 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="gold-divider flex-1 max-w-[100px]" />
      <span className="mx-4 text-[var(--gold)] text-xl">{icon}</span>
      <div className="gold-divider flex-1 max-w-[100px]" />
    </motion.div>
  );
}

function GoldOrnament() {
  return null;
}
