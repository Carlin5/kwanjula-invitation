"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const photos = [
  { src: "/images/couple-hero.jpg", alt: "Abdul Rahman & Bushrah together" },
  { src: "/images/abdulrahman-suit.jpg", alt: "Abdul Rahman — dapper in black" },
  { src: "/images/bushrah-abaya.jpg", alt: "Bushrah — elegant navy abaya" },
  { src: "/images/couple-2.jpg", alt: "Abdul Rahman & Bushrah embrace" },
  { src: "/images/bushrah-pink.jpg", alt: "Bushrah — pink hijab portrait" },
  { src: "/images/couple-3.jpg", alt: "Abdul Rahman & Bushrah — tender moment" },
  { src: "/images/couple-5.jpg", alt: "Abdul Rahman & Bushrah outing" },
  { src: "/images/couple-1.jpg", alt: "Abdul Rahman & Bushrah — holding hands" },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, var(--gold), transparent 60%)" }}
        />
        <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, var(--gold), transparent 60%)" }}
        />
      </div>

      <motion.div
        className="max-w-5xl mx-auto relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-center text-4xl md:text-6xl mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="shimmer-text">Our Moments</span>
        </motion.h2>
        <motion.p
          className="text-center text-white/50 italic mb-14 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          A glimpse into our love story
        </motion.p>

        {/* Gallery grid with 3D effects */}
        <div className="gallery-grid">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer group"
              style={{
                boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
                border: "1px solid rgba(201,168,76,0.1)",
              }}
              initial={{ opacity: 0, y: 50, rotateY: i % 2 === 0 ? -10 : 10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, type: "spring" }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: -3,
                zIndex: 10,
                boxShadow: "0 20px 60px rgba(201,168,76,0.2)",
              }}
              onClick={() => setSelected(i)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                <p className="text-white text-sm text-center">{photo.alt}</p>
              </motion.div>
              {/* Gold border glow on hover */}
              <div className="absolute inset-0 rounded-2xl border border-[var(--gold)]/0 group-hover:border-[var(--gold)]/40 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Lightbox — cinematic */}
        <AnimatePresence>
          {selected !== null && (
            <motion.div
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                className="relative max-w-4xl w-full max-h-[85vh] aspect-[3/4]"
                initial={{ scale: 0.5, rotateY: 30, opacity: 0 }}
                animate={{ scale: 1, rotateY: 0, opacity: 1 }}
                exit={{ scale: 0.5, rotateY: -30, opacity: 0 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={photos[selected].src}
                  alt={photos[selected].alt}
                  fill
                  className="object-contain rounded-xl"
                  sizes="90vw"
                />

                {/* Navigation */}
                <button
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl transition-all hover:scale-110"
                  style={{ background: "rgba(201,168,76,0.3)", backdropFilter: "blur(4px)" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelected((selected - 1 + photos.length) % photos.length);
                  }}
                >
                  ‹
                </button>
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl transition-all hover:scale-110"
                  style={{ background: "rgba(201,168,76,0.3)", backdropFilter: "blur(4px)" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelected((selected + 1) % photos.length);
                  }}
                >
                  ›
                </button>

                {/* Close */}
                <button
                  className="absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center text-white text-xl"
                  style={{ background: "rgba(201,168,76,0.3)" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelected(null);
                  }}
                >
                  ×
                </button>

                {/* Caption */}
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <p className="text-white/80 text-sm">{photos[selected].alt}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
