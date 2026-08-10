import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../UI/Container';
import ProductCard from '../UI/ProductCard';
import { PRODUCTS } from '../../constants';

/**
 * Product Showcase Section for the Home page.
 * Displays a list of available product formats using modular ProductCard.
 */
export default function ProductShowcase() {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-20 md:py-24 lg:py-32 border-b border-border" id="products-showcase">
      <Container>
        <div className="space-y-10 md:space-y-16">
          {/* Header */}
          <div className="text-center max-w-[620px] mx-auto space-y-4">
            <span className="font-inter text-xs font-bold tracking-[0.25em] uppercase text-secondary">
              Product Portfolio
            </span>
            <h2 className="font-manrope text-3xl md:text-section font-light text-heading">
              Our Vessels
            </h2>
            <p className="font-inter text-muted text-base leading-relaxed">
              Designed with architectural restraint. Available in a curated range of sizes to suit any domestic, professional, or commercial setting.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="h-full"
              >
                <ProductCard
                  product={product}
                  onClick={() => navigate('/products')}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
