"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
}

export default function GoldenParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated: Particle[] = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 6 + 2,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 10,
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            bottom: -20,
            background: `radial-gradient(circle, var(--gold-light), var(--gold))`,
            boxShadow: "0 0 6px var(--gold-light)",
          }}
          animate={{
            y: [0, -window.innerHeight - 50],
            opacity: [0, 1, 1, 0],
            x: [0, Math.sin(p.id) * 30],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
