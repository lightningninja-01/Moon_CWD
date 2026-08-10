import React from 'react';
import { motion } from 'framer-motion';
import Container from '../UI/Container';
import { PURIFICATION_STEPS } from '../../constants';

/**
 * Purification Section Timeline.
 * Simple, minimal, and clear sequence detailing how our water is sourced,
 * filtered (RO, UV), remineralized, and quality tested.
 */
export default function WaterProcess() {
  return (
    <section className="bg-background py-20 md:py-24 lg:py-32 border-b border-border" id="purification-timeline">
      <Container>
        <div className="space-y-12 md:space-y-20">
          {/* Header */}
          <div className="text-center max-w-[620px] mx-auto space-y-4">
            <span className="font-inter text-xs font-bold tracking-[0.25em] uppercase text-secondary">
              Systematic Quality
            </span>
            <h2 className="font-manrope text-3xl md:text-section font-light text-heading">
              The Purification Flow
            </h2>
            <p className="font-inter text-muted text-base leading-relaxed">
              Every drop is filtered through a rigorous 5-stage protective cycle to lock in purity and natural mineral benefits.
            </p>
          </div>

          {/* Timeline Layout */}
          <div className="relative">
            {/* Desktop Horizontal Connecting Line */}
            <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[1px] bg-border z-0" />

            {/* Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-12 lg:gap-8 relative z-10">
              {PURIFICATION_STEPS.map((step, idx) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="flex flex-col items-center text-center space-y-5 group"
                >
                  {/* Step Bubble */}
                  <div className="w-[104px] h-[104px] rounded-full bg-white border border-border flex flex-col items-center justify-center font-manrope text-primary shadow-soft group-hover:border-secondary transition-all duration-300 relative z-10">
                    <span className="text-[10px] font-bold text-secondary tracking-widest uppercase mb-0.5">
                      Stage
                    </span>
                    <span className="text-xl font-light">0{step.id}</span>
                  </div>

                  {/* Title & Subtitle & Description */}
                  <div className="space-y-2 max-w-[240px] px-2">
                    <h3 className="font-manrope text-lg font-bold text-heading group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <span className="block font-inter text-[11px] font-bold tracking-widest uppercase text-secondary">
                      {step.subtitle}
                    </span>
                    <p className="font-inter text-sm text-body leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
