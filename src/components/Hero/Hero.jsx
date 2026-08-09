import React from 'react';
import { motion } from 'framer-motion';
import Container from '../UI/Container';
import Button from '../UI/Button';
import moonSvg from '../../assets/images/moon.svg';
import logoPng from '../../assets/images/logo.png';

/**
 * Hero Component.
 * - Full-bleed responsive background layout featuring the clean moon.svg landscape.
 * - Content exactly centered vertically and horizontally.
 * - Text content aligned perfectly to sit in the sky opening of the mountains.
 */
export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center bg-white overflow-hidden select-none">
      
      {/* Full-bleed Background SVG (Clean mountain landscape artwork only) */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
        <img
          src={moonSvg}
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 45%' }}
          alt=""
          aria-hidden="true"
        />
        {/* Soft Grid Blueprint overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e8f0f8_1px,transparent_1px),linear-gradient(to_bottom,#e8f0f8_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.20]" />
      </div>

      {/* Centered Content Container */}
      <Container className="relative z-10 flex items-center justify-center w-full h-full pointer-events-none">
        <div className="text-center max-w-[640px] px-6 flex flex-col items-center pointer-events-auto mt-16 md:mt-20">
          
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="font-inter text-xs font-bold tracking-[0.3em] uppercase text-secondary block mb-4 md:mb-5"
          >
            Pure Glacial Water
          </motion.span>
          
          {/* Approved Moon Logo (Contains both Moon Wordmark and Tagline) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="w-[240px] md:w-[300px] lg:w-[340px] mb-6 md:mb-8 select-none"
          >
            <img
              src={logoPng}
              alt="Moon - Illuminating Pure Hydration"
              className="w-full h-auto object-contain"
            />
          </motion.div>

          {/* Description Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="font-inter text-[#46566B] text-para leading-relaxed max-w-[500px] mb-8 md:mb-10 text-sm md:text-base font-normal"
          >
            Crafted for everyday refreshment, filtered by alpine geology, and preserved in premium, sustainable glass. Every sip reflects our commitment to purity.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
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
