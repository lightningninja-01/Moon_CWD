import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Container from '../components/UI/Container';
import SEO from '../components/UI/SEO';

/**
 * Privacy Policy Page.
 * Minimalist editorial design.
 */
export default function Privacy() {
  return (
    <>
      <SEO 
        title="Privacy Policy" 
        description="Learn how Moon Water collects, protects, and utilizes your delivery and account details."
      />
      <Navbar />

      <main className="min-h-screen pt-28 sm:pt-36 pb-16 md:pb-24 bg-white text-left">
        <Container className="max-w-[720px] mx-auto space-y-8 md:space-y-12">
          {/* Header */}
          <div className="space-y-4 border-b border-border pb-8">
            <span className="font-inter text-xs font-bold tracking-[0.25em] uppercase text-secondary">
              Information Integrity
            </span>
            <h1 className="font-manrope text-4xl md:text-5xl font-light text-heading">
              Privacy Policy
            </h1>
            <p className="font-inter text-xs text-muted">
              Last updated: August 8, 2026
            </p>
          </div>

          {/* Content */}
          <div className="font-inter text-sm text-body space-y-8 leading-relaxed">
            <section className="space-y-3">
              <h2 className="font-manrope text-xl font-medium text-heading">1. Commitments to Privacy</h2>
              <p>
                At Moon, we value the trust you place in us when sharing your contact details and delivery locations. 
                We manage all personal information with absolute restraint, security, and care. We do not sell, rent, 
                or monetize customer database profiles.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-manrope text-xl font-medium text-heading">2. Information We Collect</h2>
              <p>
                To deliver our premium water plans, we collect necessary account data:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Personal identifiers (name, email address, contact numbers).</li>
                <li>Physical details (shipping and billing delivery locations).</li>
                <li>Hydration plan details (vessel format preferences, delivery cycles).</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-manrope text-xl font-medium text-heading">3. How Information is Used</h2>
              <p>
                Your data is exclusively utilized to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Process orders and dispatch logistics to your delivery address.</li>
                <li>Provide subscriber support and plan adjustments.</li>
                <li>Issue billing statements and updates regarding your delivery schedule.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-manrope text-xl font-medium text-heading">4. Data Encryption & Security</h2>
              <p>
                We use industry-standard encryption protocols (SSL/TLS) for data in transit. Delivery databases and payment tokens 
                are stored within secure, access-controlled server environments to prevent unauthorized data access.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-manrope text-xl font-medium text-heading">5. Policy Updates</h2>
              <p>
                We may periodically update this policy to align with operational changes or new regulatory guidelines. Any modifications 
                will be posted immediately with an updated version date at the top of this document.
              </p>
            </section>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
