import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Container from '../UI/Container';
import Button from '../UI/Button';
import { NAV_LINKS } from '../../constants';

/**
 * Navbar component.
 * Transparent initially, turns solid white on scroll.
 * Desktop: Logo left, Navigation center, Sign In right.
 * Mobile: Animated Hamburger and Drawer.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initialize state on mount/route change
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route transition
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
          scrolled
            ? 'bg-white/95 backdrop-blur-sm border-b border-border py-3 sm:py-4 shadow-soft'
            : 'bg-transparent py-4 sm:py-6'
        }`}
      >
        <Container className="flex items-center justify-between">
          {/* Logo */}
          {/* Logo */}
          <Link
            to="/"
            className="flex flex-col items-center select-none transition-opacity hover:opacity-90 group text-center"
            aria-label="Moon Home"
          >
            <span className="font-manrope text-[28px] font-light text-primary lowercase leading-none tracking-[0.05em]">
              moon
            </span>
            <span className="font-inter text-[10px] font-medium tracking-[0.08em] text-[#45668E] lowercase mt-1.5 leading-none">
              illuminating pure hydration
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-10" aria-label="Desktop navigation">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-inter text-sm font-medium tracking-widest uppercase transition-colors duration-300 hover:text-primary ${
                    isActive ? 'text-primary' : 'text-muted'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Sign In Button - Desktop */}
          <div className="hidden lg:block">
            <Button
              to="/signin"
              variant="secondary"
              className="h-[42px] px-6 text-xs tracking-widest"
            >
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="block lg:hidden text-primary p-2 -mr-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </Container>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-[#0A234A]/20 z-40 lg:hidden"
            />

            {/* Side Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-[min(320px,88vw)] bg-white z-50 p-6 sm:p-8 flex flex-col justify-between border-l border-border lg:hidden overflow-y-auto"
            >
              <div className="space-y-12">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-center text-center">
                    <span className="font-manrope text-[23px] font-light text-primary lowercase leading-none tracking-[0.05em]">
                      moon
                    </span>
                    <span className="font-inter text-[9px] font-medium tracking-[0.08em] text-[#45668E] lowercase mt-1.5 leading-none">
                      illuminating pure hydration
                    </span>
                  </div>
                  <button
                    type="button"
                    className="text-primary p-1"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                <nav className="flex flex-col space-y-6" aria-label="Mobile navigation">
                  {NAV_LINKS.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className={({ isActive }) =>
                        `font-inter text-base font-medium tracking-widest uppercase transition-colors hover:text-primary ${
                          isActive ? 'text-primary' : 'text-muted'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </nav>
              </div>

              <div>
                <Button
                  to="/signin"
                  className="w-full text-center h-[52px] tracking-widest"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign In
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
