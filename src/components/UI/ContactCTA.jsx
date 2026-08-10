import React from 'react';
import { motion } from 'framer-motion';
import Container from './Container';
import Button from './Button';

/**
 * Reusable Contact Call-To-Action component.
 * Minimalist design with generous vertical whitespace and centered typography.
 */
export default function ContactCTA() {
  return (
    <section className="bg-white py-20 md:py-28 lg:py-36 text-center border-b border-border select-none">
      <Container>
        <div className="max-w-[680px] mx-auto space-y-6 md:space-y-8">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-inter text-xs font-bold tracking-[0.3em] uppercase text-secondary block"
          >
            Inquiries & Distribution
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-manrope text-3xl md:text-5xl font-light text-heading leading-tight"
          >
            Illuminating pure hydration in your space.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-inter text-[#46566B] text-base md:text-para leading-relaxed"
          >
            Every bottle of Moon reflects our dedication to natural quality and architectural restraint. Connect with our distribution partners or request curated samples for your workspace, studio, or hospitality setting.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-4"
          >
            <Button to="/contact" variant="primary">
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
