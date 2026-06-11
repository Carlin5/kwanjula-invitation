"use client";

import { motion } from "framer-motion";

export default function VideoSection() {
  return (
    <section className="py-20 px-4">
      <motion.div
        className="max-w-3xl mx-auto"
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

        <div className="grid gap-8">
          <motion.div
            className="video-container"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <video
              className="w-full rounded-xl"
              controls
              playsInline
              preload="metadata"
              poster="/images/couple-1.jpg"
            >
              <source src="/videos/couple-video-1.mp4" type="video/mp4" />
            </video>
          </motion.div>

          <motion.div
            className="video-container"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <video
              className="w-full rounded-xl"
              controls
              playsInline
              preload="metadata"
              poster="/images/couple-3.jpg"
            >
              <source src="/videos/couple-video-2.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
