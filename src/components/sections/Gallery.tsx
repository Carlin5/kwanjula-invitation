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
  { src: "/images/bushrah-solo-1.jpg", alt: "Bushrah — gold-embellished look" },
  { src: "/images/couple-5.jpg", alt: "Abdul Rahman & Bushrah outing" },
  { src: "/images/bushrah-solo-2.jpg", alt: "Bushrah — side profile" },
  { src: "/images/couple-1.jpg", alt: "Abdul Rahman & Bushrah — holding hands" },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="py-20 px-4">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-center text-3xl md:text-5xl mb-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="shimmer-text">Our Moments</span>
        </motion.h2>
        <p className="text-center text-[var(--brown-light)] italic mb-12">
          A glimpse into our love story
        </p>

        {/* Gallery grid */}
        <div className="gallery-grid">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              className="relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer group"
              style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.03, zIndex: 10 }}
              onClick={() => setSelected(i)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selected !== null && (
            <motion.div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                className="relative max-w-3xl w-full max-h-[85vh] aspect-[3/4]"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={photos[selected].src}
                  alt={photos[selected].alt}
                  fill
                  className="object-contain rounded-lg"
                  sizes="90vw"
                />

                {/* Navigation */}
                <button
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelected((selected - 1 + photos.length) % photos.length);
                  }}
                >
                  ‹
                </button>
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelected((selected + 1) % photos.length);
                  }}
                >
                  ›
                </button>

                {/* Close */}
                <button
                  className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                  onClick={() => setSelected(null)}
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
