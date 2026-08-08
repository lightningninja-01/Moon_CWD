import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * SEO helper using react-helmet-async to update the head metadata dynamically.
 */
export default function SEO({ title, description, ogType = 'website', ogUrl = '' }) {
  const defaultTitle = "Moon — Illuminating Pure Hydration";
  const defaultDesc = "Discover Moon, a premium bottled water brand crafted for everyday refreshment. Naturally balanced minerals, purified with precision, and packaged sustainably in glass.";

  const finalTitle = title ? `${title} | Moon` : defaultTitle;
  const finalDesc = description || defaultDesc;

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDesc} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDesc} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl || window.location.href} />
      
      {/* Open Graph branding images could be linked here once provided */}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDesc} />
    </Helmet>
  );
}
