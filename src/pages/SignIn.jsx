import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Container from '../components/UI/Container';
import Button from '../components/UI/Button';
import SEO from '../components/UI/SEO';

/**
 * SignIn Page.
 * Centered login card inspired by the Aquafina popup aesthetic.
 * Clean, minimal, secure feeling.
 */
export default function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [errors, setErrors] = useState({});

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
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Process Login (Mock)
    alert(`Logging in as: ${formData.email}`);
  };

  return (
    <>
      <SEO 
        title="Sign In" 
        description="Access your Moon Water account to manage orders, subscriptions, and shipping preferences."
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
                Sign In to Your Account
              </h1>
              <p className="font-inter text-sm text-muted">
                Manage your home or office hydration plans.
              </p>
            </div>

            {/* Login form */}
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
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
                  placeholder="••••••••"
                />
                {errors.password && <span className="text-xs text-red-500">{errors.password}</span>}
              </div>

              {/* Remember me & Forgot Password */}
              <div className="flex flex-col min-[380px]:flex-row min-[380px]:items-center min-[380px]:justify-between gap-3 text-xs font-medium font-inter">
                <label className="flex items-center space-x-2 text-body cursor-pointer">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="w-4 h-4 rounded border-border text-secondary focus:ring-secondary"
                  />
                  <span>Remember Me</span>
                </label>
                <Link
                  to="/signin"
                  onClick={() => alert('Reset password link sent (Mock).')}
                  className="text-secondary hover:text-primary transition-colors"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Action Button */}
              <Button type="submit" variant="primary" className="w-full">
                Sign In
              </Button>
            </form>

            <div className="border-t border-border pt-6 text-center space-y-2">
              <span className="font-inter text-xs text-muted block">
                Don't have an account?
              </span>
              <Link
                to="/signup"
                className="font-inter text-xs font-bold tracking-widest uppercase text-secondary hover:text-primary transition-colors inline-block"
              >
                Create Account
              </Link>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
