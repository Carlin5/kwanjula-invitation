"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(): TimeLeft {
  const eventDate = new Date("2026-06-28T11:00:00+03:00");
  const now = new Date();
  const diff = eventDate.getTime() - now.getTime();

  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Pulsing background ring */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[var(--gold)]/10"
        animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[var(--gold)]/10"
        animate={{ scale: [1.2, 0.8, 1.2], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <motion.div
        className="max-w-2xl mx-auto text-center relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl md:text-5xl mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring" }}
        >
          <span className="shimmer-text">Counting Down</span>
        </motion.h2>
        <motion.p
          className="text-white/50 italic mb-14 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Every moment brings us closer
        </motion.p>

        <div className="grid grid-cols-4 gap-3 md:gap-8">
          {units.map((u, i) => (
            <motion.div
              key={u.label}
              className="relative"
              initial={{ opacity: 0, y: 40, rotateX: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8, type: "spring" }}
            >
              <div
                className="p-4 md:p-8 rounded-2xl relative overflow-hidden"
                style={{
                  background: "linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 100%)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.4), 0 0 20px rgba(201,168,76,0.05)",
                }}
              >
                {/* Top shine */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent rounded-t-2xl" />

                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={u.value}
                    className="block text-4xl md:text-6xl font-bold"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      background: "linear-gradient(180deg, var(--gold-light), var(--gold))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                    initial={{ y: -20, opacity: 0, rotateX: -90 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    exit={{ y: 20, opacity: 0, rotateX: 90 }}
                    transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                  >
                    {String(u.value).padStart(2, "0")}
                  </motion.span>
                </AnimatePresence>

                <span className="text-xs md:text-sm text-white/40 tracking-[0.2em] uppercase mt-2 block">
                  {u.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
