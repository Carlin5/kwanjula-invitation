"use client";

import { motion } from "framer-motion";
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
    <section className="py-20 px-4">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl md:text-4xl mb-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Counting Down To Our Day
        </motion.h2>
        <p className="text-[var(--brown-light)] italic mb-10">
          Every moment brings us closer together
        </p>

        <div className="grid grid-cols-4 gap-3 md:gap-6">
          {units.map((u, i) => (
            <motion.div
              key={u.label}
              className="relative p-4 md:p-6 rounded-xl"
              style={{
                background: "linear-gradient(135deg, var(--brown) 0%, var(--brown-light) 100%)",
                boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <motion.span
                className="block text-3xl md:text-5xl font-bold text-[var(--gold-light)]"
                style={{ fontFamily: "'Playfair Display', serif" }}
                key={u.value}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {String(u.value).padStart(2, "0")}
              </motion.span>
              <span className="text-xs md:text-sm text-white/70 tracking-wider uppercase mt-1 block">
                {u.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
