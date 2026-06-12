"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface EnvelopeScreenProps {
  opened: boolean;
  onOpen: () => void;
}

function useStars(count: number) {
  return useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        w: Math.random() * 2.5 + 0.5,
        left: Math.random() * 100,
        top: Math.random() * 100,
        dur: Math.random() * 4 + 2,
        delay: Math.random() * 3,
      })),
    [count]
  );
}

function useParticles(count: number) {
  return useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        hue: 38 + Math.random() * 15,
        light: 55 + Math.random() * 25,
        x: (Math.random() - 0.5) * 500,
        y: (Math.random() - 0.5) * 500,
      })),
    [count]
  );
}

export default function EnvelopeScreen({ opened, onOpen }: EnvelopeScreenProps) {
  const stars = useStars(60);
  const particles = useParticles(25);

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center"
      style={{
        background:
          "radial-gradient(ellipse at 50% 30%, #1a1409 0%, #0d0d0d 40%, #000000 100%)",
      }}
      exit={{ opacity: 0, scale: 0.85 }}
      transition={{ duration: 0.8 }}
    >
      {/* Subtle gold dust / stars */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((s) => (
          <motion.div
            key={s.id}
            className="absolute rounded-full"
            style={{
              width: s.w,
              height: s.w,
              left: `${s.left}%`,
              top: `${s.top}%`,
              background: `radial-gradient(circle, rgba(201,168,76,0.9), rgba(201,168,76,0.2))`,
            }}
            animate={{ opacity: [0.1, 0.8, 0.1] }}
            transition={{
              duration: s.dur,
              repeat: Infinity,
              delay: s.delay,
            }}
          />
        ))}
      </div>

      {/* Decorative gold corner ornaments */}
      <div className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-[var(--gold)]/40 rounded-tl-sm" />
      <div className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-[var(--gold)]/40 rounded-tr-sm" />
      <div className="absolute bottom-6 left-6 w-16 h-16 border-b-2 border-l-2 border-[var(--gold)]/40 rounded-bl-sm" />
      <div className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-[var(--gold)]/40 rounded-br-sm" />

      {/* Title above envelope */}
      <motion.div
        className="text-center mb-10 z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <motion.p
          className="text-sm md:text-base tracking-[0.5em] uppercase mb-3"
          style={{ color: "var(--gold)" }}
          initial={{ letterSpacing: "0.2em" }}
          animate={{ letterSpacing: "0.5em" }}
          transition={{ delay: 0.5, duration: 1.5 }}
        >
          You are invited
        </motion.p>
        <h1
          className="text-5xl md:text-6xl"
          style={{
            fontFamily: "'Great Vibes', cursive",
            background:
              "linear-gradient(135deg, var(--gold-light), var(--gold), var(--gold-dark), var(--gold-light))",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "shimmer 4s linear infinite",
          }}
        >
          Abdul Rahman & Bushrah
        </h1>
        <motion.div
          className="flex items-center justify-center gap-4 mt-4"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-[var(--gold)]" />
          <span className="text-[var(--gold)] text-lg">✦</span>
          <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-[var(--gold)]" />
        </motion.div>
      </motion.div>

      {/* Envelope */}
      <motion.div
        className="envelope-wrapper z-10 cursor-pointer"
        onClick={!opened ? onOpen : undefined}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        whileHover={!opened ? { scale: 1.03 } : undefined}
        whileTap={!opened ? { scale: 0.98 } : undefined}
      >
        <div className="envelope-body" style={{
          background: "linear-gradient(135deg, #1a1409 0%, #2a1f0e 50%, #1a1409 100%)",
          border: "1px solid rgba(201,168,76,0.3)",
          boxShadow: "0 10px 60px rgba(0,0,0,0.6), 0 0 30px rgba(201,168,76,0.1)",
        }}>
          <div className="envelope-side-left" style={{ background: "linear-gradient(90deg, #1a1409, #231a0a)" }} />
          <div className="envelope-side-right" style={{ background: "linear-gradient(270deg, #1a1409, #231a0a)" }} />
          <div className="envelope-inner-flap" style={{ background: "linear-gradient(0deg, #1a1409, #2a1f0e)" }} />

          {/* Letter card */}
          <motion.div
            className="letter-card"
            style={{
              background: "linear-gradient(135deg, #0d0d0d, #1a1409)",
              border: "1px solid rgba(201,168,76,0.4)",
            }}
            animate={opened ? { y: -120, opacity: 0 } : { y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          >
            <div className="text-center p-4">
              <p className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase">Kwanjula</p>
              <p
                className="text-xl mt-1"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "var(--gold-light)",
                }}
              >
                28 June 2026
              </p>
            </div>
          </motion.div>

          {/* Flap */}
          <div
            className={`envelope-flap ${opened ? "open" : ""}`}
            style={{ background: "linear-gradient(180deg, #2a1f0e, #1a1409)" }}
          />

          {/* Wax seal */}
          {!opened && (
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 z-20"
              style={{ bottom: "-22px" }}
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div
                className="wax-seal"
                style={{
                  boxShadow:
                    "0 4px 20px rgba(201,168,76,0.4), 0 0 40px rgba(201,168,76,0.15), inset 0 -3px 6px rgba(0,0,0,0.3), inset 0 3px 6px rgba(255,200,200,0.2)",
                }}
              >
                <span className="wax-seal-letter">A&B</span>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Tap instruction */}
      {!opened && (
        <motion.p
          className="text-sm mt-14 z-10 tracking-[0.3em] uppercase"
          style={{ color: "var(--gold)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          Tap the seal to open
        </motion.p>
      )}

      {/* Opening animation particles — gold burst */}
      {opened && (
        <div className="absolute inset-0 pointer-events-none z-30">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: `hsl(${p.hue}, 80%, ${p.light}%)`,
                left: "50%",
                top: "50%",
                boxShadow: `0 0 6px hsl(${p.hue}, 80%, ${p.light}%)`,
              }}
              initial={{ scale: 0, x: 0, y: 0 }}
              animate={{
                scale: [0, 1.2, 0],
                x: p.x,
                y: p.y,
              }}
              transition={{
                duration: 1.2,
                delay: p.id * 0.04,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}
