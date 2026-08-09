import React from 'react';
import { motion } from 'framer-motion';
import Container from '../UI/Container';
import Button from '../UI/Button';
import moonHomeSvg from '../../assets/images/moon_home.svg';

/**
 * Hero Component.
 * - Full-bleed viewport layout using clean moon_home.svg (moon_home_clean_fade2.svg) as background.
 * - Aspect ratio preserved, no distortion, no mockup elements.
 * - Centered React content overlays (eyebrow, paragraph, buttons) with visually hidden logo elements for accessibility/SEO.
 */
export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center bg-white overflow-hidden select-none">
      
      {/* Background/Artwork Layer (Preserving original proportions, centered at bottom) */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden flex items-end justify-center">
        <img
          src={moonHomeSvg}
          className="w-full max-w-[500px] md:max-w-[750px] lg:max-w-[850px] h-auto md:h-[92%] object-contain object-bottom"
          alt=""
          aria-hidden="true"
        />
        {/* Soft Grid Blueprint overlay on top of the background image */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e8f0f8_1px,transparent_1px),linear-gradient(to_bottom,#e8f0f8_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.15]" />
      </div>

      {/* Centered Content Container */}
      <Container className="relative z-10 flex items-start justify-center md:items-center w-full h-full pointer-events-none">
        <div className="text-center max-w-[600px] px-6 flex flex-col items-center pointer-events-auto mt-28 md:mt-24">
          
          {/* Accessibility & SEO Headings (Visually hidden, screen-reader only to avoid duplicate branding) */}
          <div className="sr-only">
            <h1>moon</h1>
            <h2>illuminating pure hydration</h2>
          </div>
          
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="font-inter text-xs font-bold tracking-[0.3em] uppercase text-secondary block mb-4 md:mb-5"
          >
            Pure Glacial Water
          </motion.span>

          {/* Description Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="font-inter text-[#46566B] text-para leading-relaxed max-w-[500px] mb-8 md:mb-10 text-sm md:text-base font-normal"
          >
            Crafted for everyday refreshment, filtered by alpine geology, and preserved in premium, sustainable glass. Every sip reflects our commitment to purity.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
            className="flex flex-row gap-4 justify-center items-center w-full sm:w-auto"
          >
            <Button to="/products" variant="primary" className="h-[46px] px-8 text-xs tracking-widest">
              Explore Products
            </Button>
            <Button to="/contact" variant="secondary" className="h-[46px] px-8 text-xs tracking-widest bg-white/80 hover:bg-white transition-all backdrop-blur-[2px]">
              Contact Us
            </Button>
          </motion.div>
          
        </div>
      </Container>
      
    </section>
  );
}
