"use client";

import { motion } from "framer-motion";

export default function RSVPSection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Animated rings */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[var(--gold)]/5"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-[var(--gold)]/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="max-w-md mx-auto text-center relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl md:text-6xl mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring" }}
        >
          <span className="shimmer-text">RSVP</span>
        </motion.h2>

        <motion.p
          className="text-white/50 italic mb-10 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Kindly confirm your attendance
        </motion.p>

        <motion.div
          className="p-10 rounded-3xl relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #141414, #1a1a1a, #0f0f0f)",
            border: "1px solid rgba(201,168,76,0.2)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(201,168,76,0.05)",
          }}
          initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
        >
          {/* Rotating border accent */}
          <motion.div
            className="absolute inset-0 rounded-3xl opacity-20"
            style={{
              background: "conic-gradient(from 0deg, transparent, var(--gold), transparent, var(--gold), transparent)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />

          <div className="relative z-10">
            <div className="mb-8">
              <p className="text-xs text-[var(--gold)] tracking-[0.3em] uppercase mb-3">Contact</p>
              <p
                className="text-3xl text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Juma Kagwe
              </p>
            </div>

            <div className="mb-10">
              <p className="text-xs text-[var(--gold)] tracking-[0.3em] uppercase mb-3">Phone</p>
              <a
                href="tel:+256753070502"
                className="text-2xl text-white hover:text-[var(--gold)] transition-colors duration-300"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                +256 753 070502
              </a>
            </div>

            {/* WhatsApp button — animated */}
            <motion.a
              href="https://wa.me/256753070502?text=Assalamu%20Alaikum!%20I%20would%20like%20to%20confirm%20my%20attendance%20for%20Abdul%20Rahman%20%26%20Bushrah%27s%20Introduction%20Ceremony%20on%2028th%20June%202026."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-lg"
              style={{
                background: "linear-gradient(135deg, #25D366, #128C7E)",
                boxShadow: "0 4px 20px rgba(37,211,102,0.3)",
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 40px rgba(37,211,102,0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              RSVP via WhatsApp
            </motion.a>

            {/* Direct call */}
            <div className="mt-4">
              <motion.a
                href="tel:+256753070502"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-[var(--gold)] border border-[var(--gold)]/40 transition-all"
                whileHover={{ scale: 1.05, borderColor: "rgba(201,168,76,0.8)", boxShadow: "0 0 20px rgba(201,168,76,0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span>📞</span>
                Call to RSVP
              </motion.a>
            </div>
          </div>
        </motion.div>

        <motion.p
          className="mt-10 text-sm text-white/40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          You are warmly welcome. We look forward to celebrating with you!
        </motion.p>
      </motion.div>
    </section>
  );
}
