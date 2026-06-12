"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CoupleSection() {
  return (
    <section className="py-24 px-4 max-w-4xl mx-auto relative">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(201,168,76,0.15), transparent 70%)" }}
        />
      </div>

      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-4xl md:text-6xl mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring" }}
        >
          <span className="shimmer-text">Tusanyuse Okubayita</span>
        </motion.h2>
        <motion.p
          className="text-lg text-[var(--gold)]/70 italic max-w-md mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Together with our families, we invite you to our Introduction Ceremony
        </motion.p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Groom — 3D card */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, x: -100, rotateY: -30 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, type: "spring", stiffness: 60 }}
        >
          <motion.div
            className="relative w-52 h-52 md:w-64 md:h-64 mx-auto mb-6 rounded-full overflow-hidden"
            style={{
              border: "3px solid var(--gold)",
              boxShadow: "0 0 30px rgba(201,168,76,0.3), 0 0 60px rgba(201,168,76,0.1)",
            }}
            whileHover={{ scale: 1.08, boxShadow: "0 0 50px rgba(201,168,76,0.5)" }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/images/abdulrahman-suit.jpg"
              alt="Mr Abdul Rahman"
              fill
              className="object-cover object-top"
            />
            {/* Rotating gold ring */}
            <motion.div
              className="absolute inset-[-4px] rounded-full border-2 border-dashed border-[var(--gold)]/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
          <motion.h3
            className="text-3xl md:text-4xl text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Mr Abdul Rahman
          </motion.h3>
          <motion.p
            className="text-[var(--gold)] text-sm tracking-[0.3em] uppercase mt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            The Groom
          </motion.p>
        </motion.div>

        {/* Bride — 3D card */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, x: 100, rotateY: 30 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, type: "spring", stiffness: 60 }}
        >
          <motion.div
            className="relative w-52 h-52 md:w-64 md:h-64 mx-auto mb-6 rounded-full overflow-hidden"
            style={{
              border: "3px solid var(--gold)",
              boxShadow: "0 0 30px rgba(201,168,76,0.3), 0 0 60px rgba(201,168,76,0.1)",
            }}
            whileHover={{ scale: 1.08, boxShadow: "0 0 50px rgba(201,168,76,0.5)" }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/images/bushrah-abaya.jpg"
              alt="Mrs Bushrah"
              fill
              className="object-cover object-top"
            />
            {/* Rotating gold ring */}
            <motion.div
              className="absolute inset-[-4px] rounded-full border-2 border-dashed border-[var(--gold)]/30"
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
          <motion.h3
            className="text-3xl md:text-4xl text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Mrs Bushrah
          </motion.h3>
          <motion.p
            className="text-[var(--gold)] text-sm tracking-[0.3em] uppercase mt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            The Bride
          </motion.p>
        </motion.div>
      </div>

      {/* Quote with glowing border */}
      <motion.div
        className="mt-20 text-center relative z-10"
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div
          className="p-8 rounded-2xl max-w-lg mx-auto"
          style={{
            background: "rgba(20,20,20,0.8)",
            border: "1px solid rgba(201,168,76,0.2)",
            boxShadow: "0 0 40px rgba(201,168,76,0.05)",
          }}
        >
          <p className="text-xl italic text-white/80 leading-relaxed">
            Two souls, one journey. We joyfully invite you to witness the beginning
            of our forever.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
