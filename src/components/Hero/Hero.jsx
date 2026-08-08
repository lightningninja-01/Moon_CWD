import React from 'react';
import { motion } from 'framer-motion';
import Container from '../UI/Container';
import Button from '../UI/Button';
import moonSvg from '../../assets/images/moon.svg';

/**
 * Hero Component.
 * - Full viewport, minimal styling.
 * - Background elements (faint moon circle, faint mountain outlines, river textures) rendered as sharp SVGs.
 * - Right Column: Displays the premium moon.svg symbol with a gentle celestial floating motion.
 */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white pt-24 pb-16 overflow-hidden select-none">
      
      {/* Background Vector Artwork */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        {/* Soft Grid Blueprint overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e8f0f8_1px,transparent_1px),linear-gradient(to_bottom,#e8f0f8_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.25]" />
        
        {/* Very Faint Moon Circle */}
        <svg className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[80%] max-w-[650px] aspect-square text-[#A8BED7]/10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
        </svg>

        {/* Very Soft River Textures & Mountain Silhouettes */}
        <svg className="absolute bottom-0 left-0 w-full h-[35%] text-border" viewBox="0 0 1440 250" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          {/* Mountains */}
          <path d="M0,250 L0,180 C200,160 350,220 600,190 C850,160 1100,210 1440,175 L1440,250 Z" fill="#F8FBFD" className="opacity-70" />
          <path d="M0,250 L0,210 C300,195 500,230 800,205 C1100,180 1300,220 1440,200 L1440,250 Z" fill="#F0F5FA" />
          
          {/* River / Waves */}
          <path d="M0,225 C250,210 400,235 700,220 C1000,205 1200,230 1440,215" stroke="#A8BED7" strokeWidth="1" className="opacity-20" />
          <path d="M0,235 C300,225 550,245 850,230 C1150,215 1300,238 1440,230" stroke="#A8BED7" strokeWidth="0.75" className="opacity-15" />
        </svg>
      </div>

      {/* Main Hero Content */}
      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center h-full">
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-8 text-left mt-8 lg:mt-0">
          <div className="space-y-4">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-inter text-xs font-bold tracking-[0.3em] uppercase text-secondary block"
            >
              Pure Glacial Water
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-manrope text-5xl md:text-[72px] font-light text-primary lowercase leading-none select-none tracking-normal"
            >
              moon
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-manrope text-lg md:text-2xl font-light text-secondary tracking-wide uppercase"
            >
              illuminating pure hydration
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-inter text-[#46566B] text-para leading-relaxed max-w-[500px]"
          >
            Crafted for everyday refreshment, filtered by alpine geology, and preserved in premium, sustainable glass. Every sip reflects our commitment to purity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button to="/products" variant="primary" className="w-full sm:w-auto">
              Explore Products
            </Button>
            <Button to="/contact" variant="secondary" className="w-full sm:w-auto">
              Contact Us
            </Button>
          </motion.div>
        </div>

        {/* Right Column: Moon Symbol Showcase */}
        <div className="lg:col-span-5 flex items-center justify-center min-h-[320px] md:min-h-[420px]">
          {/* Framer Motion Wrapper for Moon Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              opacity: { duration: 1.2 },
              scale: { duration: 1.2 }
            }}
            className="relative w-full max-w-[280px] md:max-w-[320px] lg:max-w-[360px] aspect-square flex items-center justify-center select-none"
            aria-hidden="true"
          >
            <img
              src={moonSvg}
              className="w-full h-full object-contain drop-shadow-[0_12px_28px_rgba(10,35,74,0.03)]"
              alt="Moon Symbol"
            />
            
            {/* Left Soft White Gradient Mask */}
            <div 
              className="absolute left-[-2px] bottom-[-2px] w-[35%] h-[50%] pointer-events-none z-10"
              style={{
                background: 'linear-gradient(to top right, #ffffff 15%, rgba(255, 255, 255, 0.8) 45%, transparent 80%)'
              }}
            />

            {/* Right Soft White Gradient Mask */}
            <div 
              className="absolute right-[-2px] bottom-[-2px] w-[35%] h-[50%] pointer-events-none z-10"
              style={{
                background: 'linear-gradient(to top left, #ffffff 15%, rgba(255, 255, 255, 0.8) 45%, transparent 80%)'
              }}
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
