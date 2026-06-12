"use client";

import { motion } from "framer-motion";

const videos = [
  { src: "/videos/couple-video-1.mp4", poster: "/images/couple-hero.jpg" },
  { src: "/videos/couple-video-3.mp4", poster: "/images/couple-2.jpg" },
  { src: "/videos/couple-video-2.mp4", poster: "/images/couple-3.jpg" },
  { src: "/videos/couple-video-4.mp4", poster: "/images/bushrah-abaya.jpg" },
  { src: "/videos/couple-video-5.mp4", poster: "/images/couple-5.jpg" },
  { src: "/videos/couple-video-6.mp4", poster: "/images/abdulrahman-suit.jpg" },
  { src: "/videos/couple-video-7.mp4", poster: "/images/bushrah-solo-1.jpg" },
  { src: "/videos/couple-video-8.mp4", poster: "/images/bushrah-pink.jpg" },
];

export default function VideoSection() {
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
          Our Story
        </motion.h2>
        <p className="text-center text-[var(--brown-light)] italic mb-12">
          Watch our journey unfold
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {videos.map((v, i) => (
            <motion.div
              key={v.src}
              className="video-container"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              <video
                className="w-full rounded-xl"
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
