import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Info, ShieldCheck } from 'lucide-react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Container from '../components/UI/Container';
import ProductCard from '../components/UI/ProductCard';
import Button from '../components/UI/Button';
import SEO from '../components/UI/SEO';
import { PRODUCTS } from '../constants';
import moon1L from '../assets/images/Moon 1L.png';

/**
 * Products Page.
 * Displays our 4 sizes in an elegant grid.
 * When clicked, a modal details the mineral content, container composition, and origin aquifer.
 */
export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <SEO 
        title="Our Vessels" 
        description="Explore the Moon product range, from our personal 500ml glass bottle to our high-capacity 20L Jar. Read technical specifications and packaging details."
      />
      <Navbar />

      <main className="pt-32 pb-24 bg-white">
        {/* Page Hero */}
        <section className="py-16 md:py-24 select-none">
          <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Text Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="font-inter text-xs font-bold tracking-[0.25em] uppercase text-secondary block">
                Vessels & Specifications
              </span>
              <h1 className="font-manrope text-4xl md:text-5xl font-light text-heading leading-tight">
                Curated Formats
              </h1>
              <p className="font-inter text-para text-[#46566B] leading-relaxed">
                Moon is bottled in high-durability, lead-free glass and eco-conscious containers. 
                Choose the size that fits your environment, and select a vessel below to view its technical analysis.
              </p>
            </div>

            {/* Right Column: Dynamic Bottle Showcase */}
            <div className="lg:col-span-5 flex items-center justify-center min-h-[360px] md:min-h-[420px] relative">
              <motion.div
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  damping: 15,
                  stiffness: 50,
                  duration: 1.2
                }}
                className="relative cursor-pointer select-none"
                whileHover={{ scale: 1.02 }}
                aria-hidden="true"
              >
                <img 
                  src={moon1L} 
                  alt="Moon Premium 1L Bottle" 
                  className="w-[140px] md:w-[170px] lg:w-[190px] object-contain drop-shadow-[0_12px_28px_rgba(10,35,74,0.06)]"
                />

                {/* Soft floor shadow */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[90px] h-[8px] bg-primary/20 blur-[6px] rounded-full opacity-60" />
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Product Grid */}
        <section className="py-12 border-t border-border">
          <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PRODUCTS.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => setSelectedProduct(product)}
                />
              ))}
            </div>
          </Container>
        </section>

        {/* Technical Specification Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProduct(null)}
                className="fixed inset-0 bg-primary/20 backdrop-blur-[2px] z-50 flex items-center justify-center p-4"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.98 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed inset-y-4 right-4 left-4 md:left-auto md:w-[600px] bg-white border border-border rounded-[16px] shadow-soft-lg z-50 overflow-hidden flex flex-col justify-between"
              >
                {/* Header */}
                <div className="p-6 border-b border-border flex items-center justify-between">
                  <div>
                    <span className="font-inter text-[10px] font-bold tracking-widest uppercase text-secondary">
                      Technical Profile
                    </span>
                    <h2 className="font-manrope text-2xl font-bold text-heading">
                      {selectedProduct.name}
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(null)}
                    className="text-muted hover:text-primary p-2 focus:outline-none"
                    aria-label="Close details"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto p-6 space-y-8">
                  {/* Summary */}
                  <div className="space-y-3">
                    <h3 className="font-manrope text-lg font-bold text-heading">Description</h3>
                    <p className="font-inter text-sm text-body leading-relaxed">
                      {selectedProduct.description}
                    </p>
                  </div>

                  {/* Specifications Table */}
                  <div className="space-y-4">
                    <h3 className="font-manrope text-lg font-bold text-heading flex items-center gap-2">
                      <Info size={16} className="text-secondary" />
                      Analytical Properties
                    </h3>
                    <div className="border border-border rounded-xl overflow-hidden font-inter text-sm">
                      <div className="grid grid-cols-2 bg-background border-b border-border px-4 py-3 font-semibold text-primary">
                        <span>Metric</span>
                        <span>Value</span>
                      </div>
                      <div className="grid grid-cols-2 border-b border-border/60 px-4 py-2.5 text-body">
                        <span>pH Balance</span>
                        <span>{selectedProduct.specs.pH}</span>
                      </div>
                      <div className="grid grid-cols-2 border-b border-border/60 px-4 py-2.5 text-body">
                        <span>Aquifer Source</span>
                        <span>{selectedProduct.specs.source}</span>
                      </div>
                      <div className="grid grid-cols-2 border-b border-border/60 px-4 py-2.5 text-body">
                        <span>Packaging Material</span>
                        <span>{selectedProduct.specs.packaging}</span>
                      </div>
                      <div className="grid grid-cols-2 px-4 py-2.5 text-body">
                        <span>Minerals present</span>
                        <span>{selectedProduct.specs.minerals}</span>
                      </div>
                    </div>
                  </div>

                  {/* Typical Analysis */}
                  <div className="space-y-4">
                    <h3 className="font-manrope text-lg font-bold text-heading flex items-center gap-2">
                      <ShieldCheck size={16} className="text-secondary" />
                      Typical Mineral Analysis (mg/L)
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                      <div className="p-3 bg-background border border-border/60 rounded-xl">
                        <span className="block text-[10px] text-muted font-bold tracking-widest uppercase">Calcium</span>
                        <span className="font-manrope text-base font-semibold text-primary">12.4</span>
                      </div>
                      <div className="p-3 bg-background border border-border/60 rounded-xl">
                        <span className="block text-[10px] text-muted font-bold tracking-widest uppercase">Magnesium</span>
                        <span className="font-manrope text-base font-semibold text-primary">4.2</span>
                      </div>
                      <div className="p-3 bg-background border border-border/60 rounded-xl">
                        <span className="block text-[10px] text-muted font-bold tracking-widest uppercase">Silica</span>
                        <span className="font-manrope text-base font-semibold text-primary">9.1</span>
                      </div>
                      <div className="p-3 bg-background border border-border/60 rounded-xl">
                        <span className="block text-[10px] text-muted font-bold tracking-widest uppercase">Potassium</span>
                        <span className="font-manrope text-base font-semibold text-primary">1.5</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Inquire button */}
                <div className="p-6 border-t border-border bg-background/30 flex items-center justify-between">
                  <span className="font-inter text-xs text-muted">
                    Inquire for distributor pricing.
                  </span>
                  <Button
                    to={`/contact?subject=Inquiry: ${encodeURIComponent(selectedProduct.name)}`}
                    variant="primary"
                    className="h-[42px] px-6 text-xs"
                    onClick={() => setSelectedProduct(null)}
                  >
                    Send Inquiry
                  </Button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </>
  );
}