import React from 'react';

/**
 * Reusable Product Card Component.
 * Hover lifts card 6px and expands shadow smoothly.
 */
export default function ProductCard({ product, onClick, showLink = true }) {
  return (
    <div
      onClick={onClick}
      className="group bg-white border border-border p-6 rounded-[16px] shadow-soft hover:shadow-soft-lg hover:-translate-y-[6px] transition-all duration-500 ease-out cursor-pointer flex flex-col justify-between h-full"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
      aria-label={`View details for ${product.name}`}
    >
      <div className="space-y-6">
        {/* Real Product Image Container */}
        <div className="relative w-full aspect-[4/5] bg-[#F8FBFD] border border-border/40 rounded-xl flex items-center justify-center p-6 select-none group-hover:border-secondary/20 transition-all duration-300 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-contain transition-transform duration-500 max-h-[210px] ${
              product.id === '20l' 
                ? 'scale-[1.03] group-hover:scale-[1.06]' 
                : 'group-hover:scale-[1.03]'
            }`}
          />
        </div>
        
        {/* Typography */}
        <div className="space-y-2">
          <span className="font-inter text-xs font-bold tracking-widest text-secondary uppercase block">
            {product.volume}
          </span>
          <h3 className="font-manrope text-xl font-bold text-heading group-hover:text-primary transition-colors duration-300">
            {product.name}
          </h3>
          <p className="font-inter text-sm text-body leading-relaxed">
            {product.description}
          </p>
        </div>
      </div>

      {showLink && (
        <div className="mt-8 pt-4 border-t border-border flex items-center justify-between text-xs font-bold tracking-widest uppercase text-muted group-hover:text-primary transition-colors duration-300">
          <span>Technical Specifications</span>
          <span className="text-base transform group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
        </div>
      )}
    </div>
  );
}
