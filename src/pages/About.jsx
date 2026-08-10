import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Container from '../components/UI/Container';
import SEO from '../components/UI/SEO';

/**
 * About Page.
 * Editorial layout featuring the story of Moon Water.
 * Focuses on mineral profile, geological filtration, and glass sustainability.
 */
export default function About() {
  return (
    <>
      <SEO 
        title="Our Story" 
        description="Learn about the geological journey, mineral balance, and architectural restraint that defines Moon Water."
      />
      <Navbar />
      
      <main className="pt-28 sm:pt-32 pb-16 md:pb-24 bg-white">
        {/* Editorial Hero Header */}
        <section className="py-20 md:py-28 select-none">
          <Container>
            <div className="max-w-[800px] space-y-5 md:space-y-6">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-inter text-xs font-bold tracking-[0.25em] uppercase text-secondary block"
              >
                Philosophy
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-manrope text-4xl sm:text-5xl md:text-6xl font-light text-heading leading-tight"
              >
                Inspired by Nature.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-inter text-base md:text-para text-[#46566B] max-w-[620px] leading-relaxed"
              >
                We observe natural filtration cycles and package them with architectural restraint. No gimmicks, no neon branding, just pristine hydration.
              </motion.p>
            </div>
          </Container>
        </section>

        {/* Content Grid Sections */}
        <section className="py-16 border-t border-border">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start">
              <div className="md:col-span-4 space-y-4">
                <span className="font-manrope text-xs font-bold tracking-[0.2em] uppercase text-primary">01 / Source</span>
                <h2 className="font-manrope text-2xl font-bold text-heading">The Alpine Aquifer</h2>
              </div>
              <div className="md:col-span-8 text-[#46566B] font-inter text-base leading-relaxed space-y-6 max-w-[640px]">
                <p>
                  Moon is sourced from a single protected alpine aquifer, isolated deep below ancient sandstone layers. 
                  Precipitation falling on the peaks undergoes a slow, multi-decade filtration process, flowing downwards at 
                  extreme depths where it is shielded from modern contaminants.
                </p>
                <p className="text-muted">
                  By harvesting only what the spring naturally discharges, we protect the hydraulic pressure and ecology 
                  of the surrounding alpine valleys, ensuring a sustainable source of pure water for generations.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 border-t border-border">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start">
              <div className="md:col-span-4 space-y-4">
                <span className="font-manrope text-xs font-bold tracking-[0.2em] uppercase text-primary">02 / Minerals</span>
                <h2 className="font-manrope text-2xl font-bold text-heading">Balanced Chemistry</h2>
              </div>
              <div className="md:col-span-8 text-[#46566B] font-inter text-base leading-relaxed space-y-6 max-w-[640px]">
                <p>
                  As the water navigates sub-surface geological strata, it dissolves key trace minerals, resulting in an 
                  infusion of calcium, magnesium, silica, and potassium. This gives Moon its characteristic light feel and neutral pH of 7.4.
                </p>
                <p className="text-muted">
                  We do not believe in synthetic alkalizing or over-processing. We preserve this natural equilibrium 
                  exactly as it was created, validating the quality through rigorous laboratory checks on every batch.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 border-t border-border border-b">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start">
              <div className="md:col-span-4 space-y-4">
                <span className="font-manrope text-xs font-bold tracking-[0.2em] uppercase text-primary">03 / Packaging</span>
                <h2 className="font-manrope text-2xl font-bold text-heading">Premium Glass Vessels</h2>
              </div>
              <div className="md:col-span-8 text-[#46566B] font-inter text-base leading-relaxed space-y-6 max-w-[640px]">
                <p>
                  Glass is an inert material that does not leach taste or microplastics. Our vessels are manufactured from 
                  durable glass, designed to be 100% recyclable.
                </p>
                <p className="text-muted">
                  By opting out of single-use plastics across our core personal range, we take a stand for ecological longevity. 
                  It is a more demanding choice logistically, but one that respects both the water and the environment.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
