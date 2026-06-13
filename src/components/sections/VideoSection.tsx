"use client";

import { motion } from "framer-motion";

const videos = [
  { src: "/videos/video-1.mp4", poster: "/images/couple-hero.jpg" },
  { src: "/videos/video-2.mp4", poster: "/images/gallery-2.jpg" },
  { src: "/videos/video-3.mp4", poster: "/images/gallery-6.jpg" },
];

export default function VideoSection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Cinematic ambient */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
        style={{ background: "radial-gradient(circle, var(--gold), transparent 60%)" }}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.div
        className="max-w-4xl mx-auto relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-center text-4xl md:text-6xl mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring" }}
        >
          <span className="shimmer-text">Our Story</span>
        </motion.h2>
        <motion.p
          className="text-center text-white/50 italic mb-14 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Watch our journey unfold
        </motion.p>

        <div className="space-y-8">
          {videos.map((v, i) => (
            <motion.div
              key={v.src}
              className="relative rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 10px 50px rgba(0,0,0,0.5), 0 0 30px rgba(201,168,76,0.05)",
                border: "1px solid rgba(201,168,76,0.15)",
              }}
              initial={{ opacity: 0, y: 60, scale: 0.95, rotateX: 5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.2, type: "spring", stiffness: 70 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 70px rgba(201,168,76,0.15), 0 0 50px rgba(201,168,76,0.1)",
              }}
            >
              <video
                className="w-full rounded-2xl"
                controls
                playsInline
                preload="metadata"
                poster={v.poster}
              >
                <source src={v.src} type="video/mp4" />
              </video>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
