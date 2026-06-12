"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CoupleSection() {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2
          className="text-3xl md:text-5xl text-[var(--brown)] mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <span className="shimmer-text">Tusanyuse Okubayita</span>
        </h2>
        <p className="text-lg text-[var(--brown-light)] italic max-w-md mx-auto">
          Together with our families, we invite you to our Introduction Ceremony
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Groom */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[var(--gold)] shadow-lg">
            <Image
              src="/images/abdulrahman-suit.jpg"
              alt="Mr Abdul Rahman"
              fill
              className="object-cover object-top"
            />
          </div>
          <h3
            className="text-2xl md:text-3xl text-[var(--brown)]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Mr Abdul Rahman
          </h3>
          <p className="text-[var(--gold)] text-sm tracking-widest uppercase mt-1">The Groom</p>
        </motion.div>

        {/* Bride */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[var(--gold)] shadow-lg">
            <Image
              src="/images/bushrah-abaya.jpg"
              alt="Mrs Bushrah"
              fill
              className="object-cover object-top"
            />
          </div>
          <h3
            className="text-2xl md:text-3xl text-[var(--brown)]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Mrs Bushrah
          </h3>
          <p className="text-[var(--gold)] text-sm tracking-widest uppercase mt-1">The Bride</p>
        </motion.div>
      </div>

      {/* Quote */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <p className="text-xl italic text-[var(--brown-light)] max-w-lg mx-auto leading-relaxed">
          Two souls, one journey. We joyfully invite you to witness the beginning
          of our forever.
        </p>
      </motion.div>
    </section>
  );
}
