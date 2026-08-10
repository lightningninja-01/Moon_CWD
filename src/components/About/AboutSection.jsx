import React from 'react';
import { motion } from 'framer-motion';
import Container from '../UI/Container';

/**
 * About Section on the Home Page.
 * Styled with an editorial layout, utilizing generous whitespace and elegant font weights.
 */
export default function AboutSection() {
  return (
    <section className="bg-white py-20 md:py-24 lg:py-32 border-b border-border" id="about">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          {/* Section Label */}
          <div className="lg:col-span-4">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="font-inter text-xs font-bold tracking-[0.25em] uppercase text-secondary block"
            >
              The Origin Story
            </motion.span>
          </div>

          {/* Core Content */}
          <div className="lg:col-span-8 space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-manrope text-4xl md:text-section font-light text-heading leading-tight"
            >
              Inspired by Nature.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-5 md:space-y-6 text-[#46566B] font-inter text-base md:text-para max-w-[640px] leading-relaxed"
            >
              <p>
                We believe water should be experienced as nature intended: untouched, serene, and perfectly balanced. 
                Moon rises from high-altitude alpine aquifers, filtering naturally through layers of glacial sandstone over decades. 
                This slow geological journey infuses the water with a light, neutral pH and a balanced mineral profile.
              </p>
              <p className="text-muted text-base">
                Our bottling process respects this origin. By utilizing minimal intervention and carbon-neutral packaging, 
                we preserve the crisp character of the spring. Each bottle of Moon is a testament to natural purity—illuminated, 
                clean, and simple.
              </p>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
