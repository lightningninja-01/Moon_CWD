import React from 'react';

/**
 * Reusable Container component to enforce grid and margin alignment
 * across 390px, 768px, 1280px, and 1440px break points.
 */
export default function Container({ children, className = '' }) {
  return (
    <div className={`max-w-[1440px] mx-auto px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-full ${className}`}>
      {children}
    </div>
  );
}
