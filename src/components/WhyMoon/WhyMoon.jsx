import React from 'react';
import { motion } from 'framer-motion';
import { Filter, Sparkles, Leaf } from 'lucide-react';
import Container from '../UI/Container';

/**
 * Why Moon Section.
 * Shows three value propositions (Purified, Mineral Balanced, Sustainably Packaged)
 * in premium outline-icon cards that lift 6px on hover.
 */
export default function WhyMoon() {
  const cards = [
    {
      icon: Filter,
      title: 'Purified',
      description: 'Undergoes advanced multi-barrier filtration, including reverse osmosis and micro-sterilization, removing impurities while maintaining chemical integrity.'
    },
    {
      icon: Sparkles,
      title: 'Mineral Balanced',
      description: 'Infused with trace electrolytes of calcium and magnesium, crafting a neutral 7.4 pH profile with a light, clean, and crisp taste.'
    },
    {
      icon: Leaf,
      title: 'Sustainably Packaged',
      description: 'Bottled in premium recyclable glass and carbon-conscious materials to protect our alpine aquifers and minimize our plastic footprint.'
    }
  ];

  return (
    <section className="bg-background py-20 md:py-24 lg:py-32 border-b border-border" id="why-moon">
      <Container>
        <div className="space-y-10 md:space-y-16">
          {/* Header */}
          <div className="text-center max-w-[620px] mx-auto space-y-4">
            <span className="font-inter text-xs font-bold tracking-[0.25em] uppercase text-secondary">
              Our Core Pillars
            </span>
            <h2 className="font-manrope text-3xl md:text-section font-light text-heading">
              Why Moon Water?
            </h2>
            <p className="font-inter text-muted text-base leading-relaxed">
              Every detail of our harvesting and bottling process is engineered to protect natural purity.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
            {cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: idx * 0.15 }}
                  className="bg-white border border-border rounded-[16px] p-6 sm:p-8 shadow-soft hover:shadow-soft-lg hover:-translate-y-[6px] transition-all duration-500 ease-out flex flex-col items-start space-y-6"
                >
                  {/* Outline Icon */}
                  <div className="p-3 bg-background rounded-xl border border-border/50 text-secondary">
                    <Icon size={24} className="stroke-[1.5]" />
                  </div>
                  
                  {/* Text Details */}
                  <div className="space-y-3">
                    <h3 className="font-manrope text-2xl font-semibold text-heading">
                      {card.title}
                    </h3>
                    <p className="font-inter text-body text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
