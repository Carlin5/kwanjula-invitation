"use client";

import { motion } from "framer-motion";

interface EnvelopeScreenProps {
  opened: boolean;
  onOpen: () => void;
}

export default function EnvelopeScreen({ opened, onOpen }: EnvelopeScreenProps) {
  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center"
      style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)" }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.8 }}
    >
      {/* Stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      {/* Title above envelope */}
      <motion.div
        className="text-center mb-8 z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <p className="text-[var(--gold-light)] text-lg tracking-[0.3em] uppercase mb-2">
          You are invited
        </p>
        <h1
          className="text-4xl md:text-5xl text-white"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Abdul Rahman & Bushrah
        </h1>
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
        <div className="envelope-body">
          <div className="envelope-side-left" />
          <div className="envelope-side-right" />
          <div className="envelope-inner-flap" />

          {/* Letter card */}
          <motion.div
            className="letter-card"
            animate={opened ? { y: -120, opacity: 0 } : { y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          >
            <div className="text-center p-4">
              <p className="text-[var(--gold)] text-xs tracking-widest uppercase">Kwanjula</p>
              <p
                className="text-xl text-[var(--brown)] mt-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                28 June 2026
              </p>
            </div>
          </motion.div>

          {/* Flap */}
          <div className={`envelope-flap ${opened ? "open" : ""}`} />

          {/* Wax seal */}
          {!opened && (
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 z-20 pulse-glow"
              style={{ bottom: "-20px" }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="wax-seal">
                <span className="wax-seal-letter">A&B</span>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Tap instruction */}
      {!opened && (
        <motion.p
          className="text-[var(--gold-light)] text-sm mt-12 z-10 tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Tap the seal to open
        </motion.p>
      )}

      {/* Opening animation particles */}
      {opened && (
        <div className="absolute inset-0 pointer-events-none z-30">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: `hsl(${40 + Math.random() * 20}, 80%, ${50 + Math.random() * 30}%)`,
                left: "50%",
                top: "50%",
              }}
              initial={{ scale: 0, x: 0, y: 0 }}
              animate={{
                scale: [0, 1, 0],
                x: (Math.random() - 0.5) * 400,
                y: (Math.random() - 0.5) * 400,
              }}
              transition={{ duration: 1.2, delay: i * 0.05, ease: "easeOut" }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}
