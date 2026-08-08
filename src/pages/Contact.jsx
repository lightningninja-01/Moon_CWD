import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, CheckCircle, Instagram, Facebook, Linkedin } from 'lucide-react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Container from '../components/UI/Container';
import Button from '../components/UI/Button';
import SEO from '../components/UI/SEO';
import { BUSINESS_INFO } from '../constants';

/**
 * Contact Page.
 * Two-column clean editorial layout:
 * - Left: Contact Info placeholders and Social outlets.
 * - Right: Form with 52px height fields, active borders, and focus rings.
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 1200);
  };

  const socialIconMap = {
    Instagram: Instagram,
    Facebook: Facebook,
    LinkedIn: Linkedin
  };

  return (
    <>
      <SEO 
        title="Contact Us" 
        description="Get in touch with the Moon team. Find distribution details, general support info, or send us a message through our form."
      />
      <Navbar />

      <main className="pt-32 pb-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mt-12 md:mt-20">
            {/* Left Column: Let's Connect */}
            <div className="lg:col-span-5 space-y-12 select-none">
              <div className="space-y-4">
                <span className="font-inter text-xs font-bold tracking-[0.25em] uppercase text-secondary block">
                  Inquiries
                </span>
                <h1 className="font-manrope text-4xl md:text-5xl font-light text-heading leading-tight">
                  Let's Connect
                </h1>
                <p className="font-inter text-base text-body leading-relaxed max-w-[420px]">
                  Whether you are planning a corporate order, seeking retail distribution, or simply want to learn more, we would love to hear from you.
                </p>
              </div>

              {/* Business Info Placeholders */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-background border border-border/80 rounded-xl text-secondary">
                    <Phone size={18} className="stroke-[1.5]" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-muted font-bold tracking-widest uppercase">Phone</span>
                    <span className="font-inter text-sm text-heading">{BUSINESS_INFO.phone}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-background border border-border/80 rounded-xl text-secondary">
                    <Mail size={18} className="stroke-[1.5]" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-muted font-bold tracking-widest uppercase">Email</span>
                    <span className="font-inter text-sm text-heading">{BUSINESS_INFO.email}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-background border border-border/80 rounded-xl text-secondary">
                    <MapPin size={18} className="stroke-[1.5]" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-muted font-bold tracking-widest uppercase">Address</span>
                    <span className="font-inter text-sm text-heading">{BUSINESS_INFO.address}</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="space-y-4">
                <h4 className="font-manrope text-xs font-bold uppercase tracking-widest text-primary">
                  Social Outlets
                </h4>
                <div className="flex items-center space-x-4">
                  {BUSINESS_INFO.socials.map((social) => {
                    const Icon = socialIconMap[social.name];
                    return (
                      <button
                        key={social.name}
                        type="button"
                        className="p-3 border border-border bg-background/30 text-muted hover:text-primary hover:border-secondary/40 transition-colors duration-300 rounded-xl focus:outline-none"
                        aria-label={`Visit Moon ${social.name}`}
                      >
                        {Icon && <Icon size={18} className="stroke-[1.5]" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 bg-[#F8FBFD] border border-border rounded-[24px] p-8 md:p-12 relative overflow-hidden">
              {/* Soft Grid Blueprint background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#e8f0f8_1px,transparent_1px),linear-gradient(to_bottom,#e8f0f8_1px,transparent_1px)] bg-[size:30px_30px] opacity-[0.2] pointer-events-none" />

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    className="relative z-10 space-y-6"
                    noValidate
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name field */}
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-xs font-bold tracking-widest text-primary uppercase">
                          Your Name *
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
                        />
                        {errors.name && <span className="text-xs text-red-500">{errors.name}</span>}
                      </div>

                      {/* Email field */}
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-xs font-bold tracking-widest text-primary uppercase">
                          Email Address *
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
                        />
                        {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Phone field */}
                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-xs font-bold tracking-widest text-primary uppercase">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full h-[52px] px-4 rounded-xl bg-white border border-border font-inter text-sm text-heading transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-secondary"
                        />
                      </div>

                      {/* Subject field */}
                      <div className="space-y-2">
                        <label htmlFor="subject" className="block text-xs font-bold tracking-widest text-primary uppercase">
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className={`w-full h-[52px] px-4 rounded-xl bg-white border font-inter text-sm text-heading transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-secondary ${
                            errors.subject ? 'border-red-400' : 'border-border'
                          }`}
                        />
                        {errors.subject && <span className="text-xs text-red-500">{errors.subject}</span>}
                      </div>
                    </div>

                    {/* Message field */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-xs font-bold tracking-widest text-primary uppercase">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className={`w-full p-4 rounded-xl bg-white border font-inter text-sm text-heading transition-all duration-300 resize-none focus:outline-none focus:ring-1 focus:ring-secondary ${
                          errors.message ? 'border-red-400' : 'border-border'
                        }`}
                      />
                      {errors.message && <span className="text-xs text-red-500">{errors.message}</span>}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        className="w-full"
                        disabled={loading}
                      >
                        {loading ? 'Sending Message...' : 'Send Message'}
                      </Button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative z-10 flex flex-col items-center justify-center py-12 text-center space-y-4"
                  >
                    <CheckCircle size={56} className="text-secondary stroke-[1.5]" />
                    <h3 className="font-manrope text-2xl font-bold text-heading">Message Sent</h3>
                    <p className="font-inter text-sm text-body max-w-[360px] leading-relaxed">
                      Thank you for contacting Moon Water. A brand representative will review your message and reply via email shortly.
                    </p>
                    <div className="pt-4">
                      <Button
                        variant="secondary"
                        onClick={() => setIsSubmitted(false)}
                        className="h-[42px] px-6 text-xs"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}