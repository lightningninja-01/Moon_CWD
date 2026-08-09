import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../UI/Container';
import { NAV_LINKS, BUSINESS_INFO } from '../../constants';
import { Instagram, Facebook, Linkedin } from 'lucide-react';
import moonHomeSvg from '../../assets/images/moon_home.svg';

/**
 * Clean, spacious, and responsive Footer component.
 * Includes logo, quick links, social placeholders, and legal links.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const iconMap = {
    Instagram: Instagram,
    Facebook: Facebook,
    LinkedIn: Linkedin
  };

  return (
    <footer className="bg-white border-t border-border pt-24 pb-12 w-full mt-auto">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20">
          {/* Brand Artwork Signature */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start select-none">
            <Link to="/" className="block max-w-[240px] w-full" aria-label="Moon Home">
              <img
                src={moonHomeSvg}
                alt="Moon branding"
                className="w-full h-auto object-contain"
              />
            </Link>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-manrope text-xs font-bold uppercase tracking-widest text-primary">
              Navigation
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-inter text-sm text-muted hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Socials */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="font-manrope text-xs font-bold uppercase tracking-widest text-primary">
                Legal
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/privacy"
                    className="font-inter text-sm text-muted hover:text-primary transition-colors cursor-pointer select-none"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="font-inter text-sm text-muted hover:text-primary transition-colors cursor-pointer select-none"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-manrope text-xs font-bold uppercase tracking-widest text-primary">
                Connect
              </h4>
              <div className="flex items-center space-x-5">
                {BUSINESS_INFO.socials.map((social) => {
                  const Icon = iconMap[social.name];
                  return (
                    <button
                      key={social.name}
                      type="button"
                      className="text-muted hover:text-primary transition-colors duration-300 p-1 focus:outline-none"
                      aria-label={`Visit Moon Water ${social.name}`}
                    >
                      {Icon && <Icon size={18} className="stroke-[1.5]" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/80 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted tracking-widest uppercase space-y-4 md:space-y-0">
          <span>&copy; {currentYear} Moon Water. All rights reserved.</span>
        </div>
      </Container>
    </footer>
  );
}