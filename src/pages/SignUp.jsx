import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Container from '../components/UI/Container';
import Button from '../components/UI/Button';
import SEO from '../components/UI/SEO';

/**
 * SignUp Page.
 * Minimalist registration card styled for the Moon aesthetic.
 * Clean, structured, secure feeling with inline Terms & Privacy modals.
 */
export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  const [errors, setErrors] = useState({});
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the terms and conditions';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Process SignUp (Mock)
    alert(`Account created successfully for: ${formData.email}`);
  };

  return (
    <>
      <SEO 
        title="Create Account" 
        description="Register a new Moon Water account to establish home or office delivery, manage subscriptions, and order premium vessels."
      />
      <Navbar />

      <main className="min-h-[100svh] pt-28 sm:pt-32 pb-12 sm:pb-16 flex items-center justify-center bg-background relative select-none">
        {/* Soft Grid blueprint lines in background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e8f0f8_1px,transparent_1px),linear-gradient(to_bottom,#e8f0f8_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.25] pointer-events-none" />

        <Container className="flex justify-center items-center relative z-10">
          <div className="w-full max-w-[460px] bg-white border border-border rounded-[16px] shadow-soft p-5 sm:p-8 md:p-10 space-y-7 sm:space-y-8 select-text">
            {/* Header branding */}
            <div className="text-center space-y-2">
              <span className="font-manrope text-2xl font-light text-primary lowercase select-none tracking-[0.05em]">
                moon
              </span>
              <h1 className="font-manrope text-2xl font-semibold text-heading">
                Create Your Account
              </h1>
              <p className="font-inter text-sm text-muted">
                Start your premium hydration journey.
              </p>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-xs font-bold tracking-widest text-primary uppercase">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full h-[52px] px-4 rounded-xl bg-white border font-inter text-sm text-heading transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-secondary ${
                    errors.name ? 'border-red-400' : 'border-border'
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && <span className="text-xs text-red-500">{errors.name}</span>}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs font-bold tracking-widest text-primary uppercase">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full h-[52px] px-4 rounded-xl bg-white border font-inter text-sm text-heading transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-secondary ${
                    errors.email ? 'border-red-400' : 'border-border'
                  }`}
                  placeholder="name@company.com"
                />
                {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label htmlFor="password" className="block text-xs font-bold tracking-widest text-primary uppercase">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full h-[52px] px-4 rounded-xl bg-white border font-inter text-sm text-heading transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-secondary ${
                    errors.password ? 'border-red-400' : 'border-border'
                  }`}
                  placeholder="Min. 8 characters"
                />
                {errors.password && <span className="text-xs text-red-500">{errors.password}</span>}
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="block text-xs font-bold tracking-widest text-primary uppercase">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={`w-full h-[52px] px-4 rounded-xl bg-white border font-inter text-sm text-heading transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-secondary ${
                    errors.confirmPassword ? 'border-red-400' : 'border-border'
                  }`}
                  placeholder="••••••••"
                />
                {errors.confirmPassword && <span className="text-xs text-red-500">{errors.confirmPassword}</span>}
              </div>

              {/* Terms Checkbox */}
              <div className="space-y-2">
                <label className="flex items-start space-x-2 text-xs font-medium font-inter text-body cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleInputChange}
                    className="w-4 h-4 mt-0.5 rounded border-border text-secondary focus:ring-secondary"
                  />
                  <span className="leading-tight">
                    I agree to the{' '}
                    <button
                      type="button"
                      onClick={() => setShowTermsModal(true)}
                      className="text-secondary hover:text-primary underline focus:outline-none inline-block font-medium"
                    >
                      Terms of Service
                    </button>{' '}
                    &{' '}
                    <button
                      type="button"
                      onClick={() => setShowPrivacyModal(true)}
                      className="text-secondary hover:text-primary underline focus:outline-none inline-block font-medium"
                    >
                      Privacy Policy
                    </button>
                    .
                  </span>
                </label>
                {errors.agreeTerms && <span className="text-xs text-red-500 block">{errors.agreeTerms}</span>}
              </div>

              {/* Action Button */}
              <Button type="submit" variant="primary" className="w-full">
                Create Account
              </Button>
            </form>

            <div className="border-t border-border pt-6 text-center space-y-2">
              <span className="font-inter text-xs text-muted block">
                Already have an account?
              </span>
              <Link
                to="/signin"
                className="font-inter text-xs font-bold tracking-widest uppercase text-secondary hover:text-primary transition-colors inline-block"
              >
                Sign In
              </Link>
            </div>
          </div>
        </Container>
      </main>

      {/* Terms of Service Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/20 backdrop-blur-[2px] select-text">
          <div className="w-full max-w-[500px] max-h-[calc(100svh-2rem)] overflow-y-auto bg-white border border-border rounded-[16px] shadow-soft-lg p-5 sm:p-6 space-y-4 text-left">
            <h3 className="font-manrope text-lg font-bold text-heading">Terms of Service</h3>
            <div className="max-h-[300px] overflow-y-auto font-inter text-xs text-body space-y-3 pr-2 scrollbar-thin leading-relaxed">
              <p>Welcome to Moon. By creating an account or placing an order, you agree to these Terms of Service.</p>
              <p><strong>1. Delivery & Services:</strong> We deliver our premium glacier-filtered water in high-durability, lead-free glass vessels. Subscriptions can be paused or cancelled at any time prior to your next scheduled delivery date.</p>
              <p><strong>2. Vessel Return Policy:</strong> To maintain our circular sustainability framework, our premium 500ml, 1L, and 2L glass bottles are designed for return and reuse. We encourage returning empty vessels during subsequent deliveries.</p>
              <p><strong>3. Account Security:</strong> You are responsible for maintaining the confidentiality of your credentials and all activities that occur under your account.</p>
            </div>
            <div className="pt-4 border-t border-border flex justify-end">
              <Button onClick={() => setShowTermsModal(false)} variant="primary" className="h-[40px] px-6 text-xs">
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/20 backdrop-blur-[2px] select-text">
          <div className="w-full max-w-[500px] max-h-[calc(100svh-2rem)] overflow-y-auto bg-white border border-border rounded-[16px] shadow-soft-lg p-5 sm:p-6 space-y-4 text-left">
            <h3 className="font-manrope text-lg font-bold text-heading">Privacy Policy</h3>
            <div className="max-h-[300px] overflow-y-auto font-inter text-xs text-body space-y-3 pr-2 scrollbar-thin leading-relaxed">
              <p>At Moon, we are committed to protecting your privacy. This policy outlines our data collection and handling procedures.</p>
              <p><strong>1. Information Collection:</strong> We collect details necessary to facilitate dispatch and billing, including your name, email address, physical delivery address, and contact numbers.</p>
              <p><strong>2. Data Usage:</strong> Your information is solely utilized to process subscription plans, coordinate deliveries, and provide support. We do not sell or lease customer information to third parties.</p>
              <p><strong>3. Information Security:</strong> All transactional and account data is encrypted in transit and at rest using modern secure protocols to ensure your privacy is preserved.</p>
            </div>
            <div className="pt-4 border-t border-border flex justify-end">
              <Button onClick={() => setShowPrivacyModal(false)} variant="primary" className="h-[40px] px-6 text-xs">
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
