import React from 'react';

/**
 * Renders an elegant vector blueprint/outline of the water bottle
 * to act as a premium placeholder. Uses a unified viewBox to keep all
 * icons proportionally scaled relative to each other.
 */
export default function ProductPlaceholder({ size }) {
  const renderBottleOutline = () => {
    switch (size?.toLowerCase()) {
      case '500ml':
        return (
          <svg className="w-full h-full max-h-[200px] text-accent stroke-[1] stroke-current" viewBox="0 0 100 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* 500ml slim/small cap & body */}
            <path d="M46,55 L54,55 M44,55 L44,65 L56,65 L56,55 Z" className="opacity-70" />
            <path d="M44,65 L44,75 C44,82 38,92 38,98 L38,185 C38,193 43,198 50,198 C57,198 62,193 62,185 L62,98 C62,92 56,82 56,75 L56,65" />
            {/* Water volume */}
            <path d="M39,115 C45,113 55,117 61,115" className="opacity-30 stroke-[0.75]" />
            <path d="M38,150 C45,148 55,152 62,150" className="opacity-20 stroke-[0.75]" />
            {/* Tiny branding moon circle */}
            <circle cx="50" cy="132" r="5" className="opacity-45 stroke-[0.75]" strokeDasharray="1.5, 1.5" />
          </svg>
        );
      case '1l':
        return (
          <svg className="w-full h-full max-h-[200px] text-accent stroke-[1] stroke-current" viewBox="0 0 100 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* 1L standard cap & body */}
            <path d="M44,35 L56,35 M42,35 L42,47 L58,47 L58,35 Z" className="opacity-70" />
            <path d="M42,47 L42,60 C42,72 32,82 32,92 L32,198 C32,206 38,212 47,212 L53,212 C62,212 68,206 68,198 L68,92 C68,72 58,72 58,47" />
            {/* Water levels */}
            <path d="M33,95 C42,93 58,97 67,95" className="opacity-30 stroke-[0.75]" />
            <path d="M32,145 C42,143 58,147 68,145" className="opacity-20 stroke-[0.75]" />
            {/* Moon circle */}
            <circle cx="50" cy="122" r="7" className="opacity-45 stroke-[0.75]" strokeDasharray="1.5, 1.5" />
          </svg>
        );
      case '2l':
        return (
          <svg className="w-full h-full max-h-[200px] text-accent stroke-[1] stroke-current" viewBox="0 0 100 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* 2L large cap & body */}
            <path d="M42,20 L58,20 M40,20 L40,32 L60,32 L60,20 Z" className="opacity-70" />
            <path d="M40,32 L40,48 C40,65 26,78 26,92 L26,206 C26,216 34,222 45,222 L55,222 C66,222 74,216 74,206 L74,92 C74,78 60,65 60,48 L60,32" />
            {/* Water levels */}
            <path d="M27,85 C40,83 60,87 73,85" className="opacity-30 stroke-[0.75]" />
            <path d="M26,140 C40,138 60,142 74,140" className="opacity-20 stroke-[0.75]" />
            {/* Moon circle */}
            <circle cx="50" cy="115" r="9" className="opacity-45 stroke-[0.75]" strokeDasharray="1.5, 1.5" />
          </svg>
        );
      case '20l jar':
      case '20l':
        return (
          <svg className="w-full h-full max-h-[200px] text-accent stroke-[1] stroke-current" viewBox="0 0 100 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* 20L commercial dispenser jar - wide but vertically aligned to matching baseline */}
            <path d="M45,45 L55,45 M43,45 L43,55 L57,55 L57,45 Z" className="opacity-70" />
            <path d="M43,55 C32,58 20,70 20,86 L20,202 C20,210 26,216 35,216 L65,216 C74,216 80,210 80,202 L80,86 C80,70 68,58 57,55" />
            {/* Horizontal ribbed panels on the barrel */}
            <path d="M21,110 L79,110" className="opacity-25" />
            <path d="M21,145 L79,145" className="opacity-25" />
            <path d="M21,180 L79,180" className="opacity-25" />
            {/* Moon circle */}
            <circle cx="50" cy="125" r="11" className="opacity-45 stroke-[0.75]" strokeDasharray="1.5, 1.5" />
          </svg>
        );
      default:
        return (
          <svg className="w-full h-full max-h-[200px] text-accent stroke-[1] stroke-current" viewBox="0 0 100 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="120" r="30" strokeDasharray="3, 3" />
          </svg>
        );
    }
  };

  return (
    <div className="relative w-full aspect-[4/5] bg-[#F8FBFD] border border-[#DCE5EF] rounded-xl flex flex-col items-center justify-center p-6 select-none group-hover:border-secondary/40 transition-all duration-300">
      {/* Background soft grid pattern to simulate blueprint */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e8f0f8_1px,transparent_1px),linear-gradient(to_bottom,#e8f0f8_1px,transparent_1px)] bg-[size:20px_20px] opacity-[0.4] rounded-xl pointer-events-none" />

      {/* Vector Silhouette */}
      <div className="w-full flex-1 flex items-center justify-center relative z-10">
        {renderBottleOutline()}
      </div>

      {/* Placeholder text */}
      <div className="w-full text-center mt-4">
        <p className="text-sm text-[#A0B0C0]">Product Image</p>
      </div>
    </div>
  );
}
