import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import AboutSection from '../components/About/AboutSection';
import WhyMoon from '../components/WhyMoon/WhyMoon';
import ProductShowcase from '../components/ProductShowcase/ProductShowcase';
import WaterProcess from '../components/WaterProcess/WaterProcess';
import ContactCTA from '../components/UI/ContactCTA';
import Footer from '../components/Footer/Footer';
import SEO from '../components/UI/SEO';

/**
 * Home Page Component.
 * Integrates navbar, hero, about story, value propositions, product showcase,
 * purification flow, CTA and footer in chronological order.
 */
export default function Home() {
  return (
    <>
      {/* SEO Head tags */}
      <SEO 
        title="Illuminating Pure Hydration" 
        description="Premium bottled water brand. Crafted for everyday refreshment, filtered by alpine geology, and preserved in sustainable glass vessels."
      />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Sections */}
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <WhyMoon />
        <ProductShowcase />
        {/* <WaterProcess /> */}
        <ContactCTA />
      </main>
      
      {/* Footer */}
      <Footer />
    </>
  );
}
