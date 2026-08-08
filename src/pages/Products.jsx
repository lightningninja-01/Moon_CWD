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

/**
 * Products Page.
 * Displays our 4 sizes in an elegant grid.
 * When clicked, a modal details the mineral content, container composition, and origin aquifer.
 */
export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [hasSettled, setHasSettled] = useState(false);

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

            {/* Right Column: Dynamic Bottle Dropping & Floating Showcase */}
            <div className="lg:col-span-5 flex items-center justify-center min-h-[360px] md:min-h-[420px] relative">
              <motion.div
                initial={{ y: "-100vh", opacity: 0 }}
                animate={
                  hasSettled
                    ? { y: [0, -7, 0], opacity: 1 }
                    : { y: 0, opacity: 1 }
                }
                transition={
                  hasSettled
                    ? {
                        duration: 4.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    : {
                        type: "spring",
                        damping: 14,
                        stiffness: 45,
                        duration: 1.8
                      }
                }
                onAnimationComplete={() => {
                  if (!hasSettled) setHasSettled(true);
                }}
                className="relative cursor-pointer select-none"
                whileHover={{ scale: 1.02 }}
                aria-hidden="true"
              >
                {/* 
                  IMAGE REFERENCE PLACEHOLDER FOR CLIENT 
                  Uncomment this <img> tag and link your actual bottle photo here.
                  Make sure to add the correct image path (e.g. /src/assets/images/actual_bottle.png).
                */}
                {/* 
                <img 
                  src="/src/assets/images/actual_bottle.png" 
                  alt="Moon Premium Bottle" 
                  className="w-[180px] md:w-[220px] lg:w-[240px] drop-shadow-[0_12px_28px_rgba(10,35,74,0.06)]"
                /> 
                */}

                {/* Visible Vector Bottle Placeholder (Will be replaced when they uncomment the image tag above) */}
                <svg
                  viewBox="0 0 160 480"
                  className="w-[160px] md:w-[200px] lg:w-[220px] drop-shadow-[0_12px_28px_rgba(10,35,74,0.06)]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Cap */}
                  <rect x="68" y="20" width="24" height="20" rx="4" fill="#E8F0F8" stroke="#5B7DA5" strokeWidth="1.5" />
                  <line x1="72" y1="26" x2="88" y2="26" stroke="#5B7DA5" strokeWidth="1" />
                  <line x1="72" y1="30" x2="88" y2="30" stroke="#5B7DA5" strokeWidth="1" />
                  
                  {/* Neck & Body */}
                  <path
                    d="M68,40 L68,70 C68,90 50,110 50,130 L50,440 C50,455 62,465 80,465 C98,465 110,455 110,440 L110,130 C110,110 92,90 92,70 L92,40 Z"
                    fill="#FFFFFF"
                    fillOpacity="0.75"
                    stroke="#5B7DA5"
                    strokeWidth="1.5"
                  />
                  
                  {/* Water Volume */}
                  <path
                    d="M52,142 L52,438 C52,448 60,458 80,458 C100,458 108,448 108,438 L108,142 C108,142 94,146 80,142 C66,138 52,142 52,142 Z"
                    fill="url(#water-gradient-spec)"
                    opacity="0.85"
                  />
                  
                  {/* Minimalist Logo print on Glass */}
                  <circle cx="80" cy="240" r="16" stroke="#0A234A" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                  <text
                    x="80"
                    y="244"
                    fill="#0A234A"
                    fontFamily="Manrope"
                    fontSize="11"
                    fontWeight="300"
                    letterSpacing="0.05em"
                    textAnchor="middle"
                    opacity="0.8"
                  >
                    moon
                  </text>
                  
                  {/* Specular Highlights */}
                  <path d="M58,150 L58,420" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" opacity="0.45" />
                  <path d="M102,170 L102,380" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
                  
                  <defs>
                    <linearGradient id="water-gradient-spec" x1="80" y1="142" x2="80" y2="458" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#A8BED7" stopOpacity="0.45" />
                      <stop offset="100%" stopColor="#5B7DA5" stopOpacity="0.15" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Soft floor shadow */}
                <motion.div
                  animate={hasSettled ? { scale: [1, 0.9, 1], opacity: [0.15, 0.22, 0.15] } : { scale: 1, opacity: 0.15 }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[90px] h-[8px] bg-primary/20 blur-[6px] rounded-full"
                />
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