import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Container from '../components/UI/Container';
import SEO from '../components/UI/SEO';

/**
 * Terms of Service Page.
 * Minimalist editorial design.
 */
export default function Terms() {
  return (
    <>
      <SEO 
        title="Terms of Service" 
        description="Review the legal agreements and delivery policies governing your Moon Premium Water subscription."
      />
      <Navbar />

      <main className="min-h-screen pt-36 pb-24 bg-white text-left">
        <Container className="max-w-[720px] mx-auto space-y-12">
          {/* Header */}
          <div className="space-y-4 border-b border-border pb-8">
            <span className="font-inter text-xs font-bold tracking-[0.25em] uppercase text-secondary">
              Legal Framework
            </span>
            <h1 className="font-manrope text-4xl md:text-5xl font-light text-heading">
              Terms of Service
            </h1>
            <p className="font-inter text-xs text-muted">
              Last updated: August 8, 2026
            </p>
          </div>

          {/* Content */}
          <div className="font-inter text-sm text-body space-y-8 leading-relaxed">
            <section className="space-y-3">
              <h2 className="font-manrope text-xl font-medium text-heading">1. Introduction</h2>
              <p>
                Welcome to Moon. By subscribing to our delivery services, purchasing our premium glass vessels, 
                or utilizing our digital platform, you agree to comply with and be bound by these Terms of Service. 
                Please review them carefully.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-manrope text-xl font-medium text-heading">2. Delivery Subscriptions</h2>
              <p>
                Moon Water offers recurring hydration plans for residential and commercial environments. Deliveries are 
                coordinated based on your selected cycle (weekly, bi-weekly, or monthly). Subscriptions can be paused, 
                adjusted, or cancelled at any time by accessing your account dashboard prior to your next scheduled dispatch.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-manrope text-xl font-medium text-heading">3. Circular Glass return system</h2>
              <p>
                To minimize environmental footprint and support our commitment to purity, our 500ml, 1L, and 2L glass bottles 
                are designed within a closed-loop return framework. We sanitize and reuse returned vessels. We encourage customers 
                to leave empty glass bottles at their designated delivery point on their next scheduled delivery cycle.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-manrope text-xl font-medium text-heading">4. Account Responsibilities</h2>
              <p>
                When creating an account with Moon, you agree to provide accurate and current delivery details. You are solely 
                responsible for maintaining the confidentiality of your credentials and protecting access to your account.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-manrope text-xl font-medium text-heading">5. Limitation of Liability</h2>
              <p>
                Moon reserves the right to adjust delivery schedules in the event of extreme weather conditions or natural 
                disturbances that compromise dispatch safety. We strive to notify all subscribers immediately of any delays.
              </p>
            </section>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
