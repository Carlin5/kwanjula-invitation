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
    <section className="py-20 px-4">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-center text-3xl md:text-5xl mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="shimmer-text">Okwanjula</span>
        </motion.h2>

        <motion.p
          className="text-center text-lg text-[var(--brown-light)] italic mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Introduction Ceremony
        </motion.p>

        {/* Invitation card replica */}
        <motion.div
          className="relative mx-auto max-w-md rounded-2xl overflow-hidden shadow-2xl mb-16"
          initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ perspective: 1000 }}
        >
          <div
            className="p-8 md:p-12 text-center"
            style={{
              background: "linear-gradient(135deg, #faf3e0 0%, #f0e4c8 50%, #faf3e0 100%)",
              borderImage: "linear-gradient(var(--gold-light), var(--gold-dark)) 1",
              border: "2px solid",
            }}
          >
            <p className="text-[var(--gold)] text-sm tracking-[0.3em] uppercase mb-6">
              Together with our families
            </p>

            <h3
              className="text-4xl text-[var(--brown)] mb-2"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              Mr Abdul Rahman
            </h3>

            <div className="flex items-center justify-center gap-3 my-3">
              <div className="h-[1px] w-12 bg-[var(--gold)]" />
              <span
                className="text-[var(--gold)] text-xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                AND
              </span>
              <div className="h-[1px] w-12 bg-[var(--gold)]" />
            </div>

            <h3
              className="text-4xl text-[var(--brown)] mb-6"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              Mrs Bushrah
            </h3>

            <p className="text-[var(--brown-light)] italic text-sm mb-1">
              Tusanyuse okubayita ku mukolo gwaffe ogw&apos;okwanjula
            </p>
            <p className="text-[var(--brown)] text-base mb-6">
              Invite you to our Introduction Ceremony
            </p>

            <div className="inline-block px-6 py-2 border border-[var(--gold)] rounded-full mb-4">
              <p className="text-[var(--gold-dark)] font-semibold tracking-wide">
                BE THERE OR NO WHERE
              </p>
            </div>

            <p
              className="text-[var(--gold)] text-lg italic"
            >
              Mwebale (Thank you)
            </p>
          </div>
        </motion.div>

        {/* Detail cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {details.map((d, i) => (
            <motion.div
              key={d.label}
              className="text-center p-6 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(10px)",
                border: "1px solid var(--gold-light)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 * i }}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(201,168,76,0.2)" }}
            >
              <span className="text-3xl mb-3 block">{d.icon}</span>
              <p className="text-xs text-[var(--gold)] tracking-[0.2em] uppercase mb-1">{d.label}</p>
              <p
                className="text-xl text-[var(--brown)] font-semibold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {d.value}
              </p>
              <p className="text-sm text-[var(--brown-light)] mt-1">{d.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Map link */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a
            href="https://maps.google.com/?q=Bwebajja+Gardens+Kampala"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white transition-all hover:scale-105 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, var(--gold-dark), var(--gold))",
            }}
          >
            <span>📍</span>
            <span className="font-semibold tracking-wide">View Location on Map</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
