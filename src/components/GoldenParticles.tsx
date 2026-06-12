"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export default function GoldenParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated: Particle[] = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 10 + 8,
      delay: Math.random() * 12,
      opacity: Math.random() * 0.5 + 0.2,
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
            boxShadow: `0 0 ${p.size * 2}px var(--gold-light)`,
          }}
          animate={{
            y: [0, -(typeof window !== "undefined" ? window.innerHeight : 800) - 50],
            opacity: [0, p.opacity, p.opacity, 0],
            x: [0, Math.sin(p.id * 0.7) * 40],
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
