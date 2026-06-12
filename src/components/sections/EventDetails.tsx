"use client";

import { motion } from "framer-motion";

const details = [
  {
    icon: "📅",
    label: "Date",
    value: "28th June, 2026",
    sub: "Sunday",
  },
  {
    icon: "📍",
    label: "Venue",
    value: "Bwebajja Gardens",
    sub: "Entebbe Road, Kampala",
  },
  {
    icon: "🕐",
    label: "Time",
    value: "From 11:00 AM",
    sub: "Guests arrival",
  },
];

export default function EventDetails() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background glow effects */}
      <motion.div
        className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, var(--gold), transparent 70%)" }}
        animate={{ x: [-50, 50, -50], y: [-20, 20, -20] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, var(--gold), transparent 70%)" }}
        animate={{ x: [50, -50, 50], y: [20, -20, 20] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div
        className="max-w-3xl mx-auto relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-center text-4xl md:text-6xl mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0, y: 40, rotateX: -20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="shimmer-text">Okwanjula</span>
        </motion.h2>

        <motion.p
          className="text-center text-xl text-[var(--gold)]/60 italic mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Introduction Ceremony
        </motion.p>

        {/* Invitation card with 3D perspective */}
        <motion.div
          className="relative mx-auto max-w-md rounded-2xl overflow-hidden shadow-2xl mb-20"
          initial={{ opacity: 0, scale: 0.8, rotateY: -15, rotateX: 10 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, type: "spring", stiffness: 60 }}
          whileHover={{ rotateY: 5, rotateX: -3, scale: 1.02 }}
          style={{ perspective: 1200, transformStyle: "preserve-3d" }}
        >
          <div
            className="p-10 md:p-14 text-center relative"
            style={{
              background: "linear-gradient(135deg, #141414 0%, #1a1a1a 50%, #0f0f0f 100%)",
              border: "1px solid rgba(201,168,76,0.3)",
            }}
          >
            {/* Animated border glow */}
            <motion.div
              className="absolute inset-0 rounded-2xl opacity-30"
              style={{
                background: "conic-gradient(from 0deg, var(--gold), transparent, var(--gold), transparent, var(--gold))",
                padding: "1px",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

            <p className="text-[var(--gold)] text-sm tracking-[0.4em] uppercase mb-8">
              Together with our families
            </p>

            <motion.h3
              className="text-5xl text-white mb-3"
              style={{ fontFamily: "'Great Vibes', cursive", textShadow: "0 0 20px rgba(201,168,76,0.2)" }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Mr Abdul Rahman
            </motion.h3>

            <div className="flex items-center justify-center gap-4 my-4">
              <motion.div
                className="h-[1px] w-14 bg-[var(--gold)]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
              <motion.span
                className="text-[var(--gold)] text-xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                AND
              </motion.span>
              <motion.div
                className="h-[1px] w-14 bg-[var(--gold)]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </div>

            <motion.h3
              className="text-5xl text-white mb-8"
              style={{ fontFamily: "'Great Vibes', cursive", textShadow: "0 0 20px rgba(201,168,76,0.2)" }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Mrs Bushrah
            </motion.h3>

            <p className="text-white/60 italic text-sm mb-2">
              Tusanyuse okubayita ku mukolo gwaffe ogw&apos;okwanjula
            </p>
            <p className="text-white/80 text-base mb-8">
              Invite you to our Introduction Ceremony
            </p>

            <motion.div
              className="inline-block px-8 py-3 border border-[var(--gold)] rounded-full"
              whileHover={{ boxShadow: "0 0 20px rgba(201,168,76,0.4)" }}
              animate={{ boxShadow: ["0 0 10px rgba(201,168,76,0.2)", "0 0 25px rgba(201,168,76,0.4)", "0 0 10px rgba(201,168,76,0.2)"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <p className="text-[var(--gold)] font-semibold tracking-wider text-sm">
                BE THERE OR NO WHERE
              </p>
            </motion.div>

            <p className="text-[var(--gold)]/70 text-lg italic mt-6">
              Mwebale (Thank you)
            </p>
          </div>
        </motion.div>

        {/* Detail cards — 3D animated */}
        <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {details.map((d, i) => (
            <motion.div
              key={d.label}
              className="text-center p-8 rounded-2xl relative overflow-hidden"
              style={{
                background: "rgba(20,20,20,0.9)",
                border: "1px solid rgba(201,168,76,0.15)",
                backdropFilter: "blur(10px)",
              }}
              initial={{ opacity: 0, y: 50, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 * i, type: "spring" }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 20px 60px rgba(201,168,76,0.15)",
                borderColor: "rgba(201,168,76,0.4)",
              }}
            >
              <motion.span
                className="text-4xl mb-4 block"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              >
                {d.icon}
              </motion.span>
              <p className="text-xs text-[var(--gold)] tracking-[0.3em] uppercase mb-2">{d.label}</p>
              <p
                className="text-xl text-white font-semibold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {d.value}
              </p>
              <p className="text-sm text-white/50 mt-1">{d.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Map link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.a
            href="https://maps.google.com/?q=Bwebajja+Gardens+Kampala"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-black font-semibold text-lg transition-all"
            style={{
              background: "linear-gradient(135deg, var(--gold-light), var(--gold), var(--gold-dark))",
              boxShadow: "0 4px 20px rgba(201,168,76,0.3)",
            }}
            whileHover={{ scale: 1.05, boxShadow: "0 8px 40px rgba(201,168,76,0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span>📍</span>
            <span className="tracking-wide">View Location on Map</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
