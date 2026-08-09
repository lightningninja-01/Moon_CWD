/**
 * Moon Water Brand Constants
 * Reusable data definitions to avoid hardcoding values inside components.
 */

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Contact', path: '/contact' }
];

import moon500 from '../assets/images/Moon 500ml.png';
import moon1L from '../assets/images/Moon 1L.png';
import moon2L from '../assets/images/Moon 2L.png';
import moon20L from '../assets/images/Moon 20L.png';

export const PRODUCTS = [
  {
    id: '500ml',
    name: 'Moon 500ml',
    volume: '500ml',
    tagline: 'Refined Personal Hydration',
    description: 'A compact and elegant companion designed for active commutes, fitness studios, and daily travel.',
    image: moon500,
    specs: {
      pH: '7.4 ± 0.2 (Neutral)',
      source: 'Protected Alpine Aquifer',
      packaging: '100% Recyclable Premium Glass',
      minerals: 'Calcium, Magnesium, Silica, Potassium'
    }
  },
  {
    id: '1l',
    name: 'Moon 1L',
    volume: '1L',
    tagline: 'The Workspace Essential',
    description: 'An editorial design statement for conference tables, dining settings, or your home work desk.',
    image: moon1L,
    specs: {
      pH: '7.4 ± 0.2 (Neutral)',
      source: 'Protected Alpine Aquifer',
      packaging: '100% Recyclable Premium Glass',
      minerals: 'Calcium, Magnesium, Silica, Potassium'
    }
  },
  {
    id: '2l',
    name: 'Moon 2L',
    volume: '2L',
    tagline: 'Extended Shared Hydration',
    description: 'Generously proportioned for residential dinner tables, culinary preparation, and active households.',
    image: moon2L,
    specs: {
      pH: '7.4 ± 0.2 (Neutral)',
      source: 'Protected Alpine Aquifer',
      packaging: '100% Recyclable Premium Glass',
      minerals: 'Calcium, Magnesium, Silica, Potassium'
    }
  },
  {
    id: '20l',
    name: 'Moon 20L Jar',
    volume: '20L Jar',
    tagline: 'The Purity Reservoir',
    description: 'Engineered for high-capacity dispensers, offering a continuous stream of pure hydration for homes or workspaces.',
    image: moon20L,
    specs: {
      pH: '7.4 ± 0.2 (Neutral)',
      source: 'Protected Alpine Aquifer',
      packaging: 'Eco-Friendly BPA-Free Tritan',
      minerals: 'Calcium, Magnesium, Silica, Potassium'
    }
  }
];

export const PURIFICATION_STEPS = [
  {
    id: 1,
    title: 'Source',
    subtitle: 'Alpine Aquifer',
    description: 'Naturally filtered through sub-surface geological layers, flowing into protected catchments.'
  },
  {
    id: 2,
    title: 'RO',
    subtitle: 'Reverse Osmosis',
    description: 'Multi-barrier physical separation removing microscopic particulates and inorganic solutes.'
  },
  {
    id: 3,
    title: 'UV',
    subtitle: 'Micro-Sterilization',
    description: 'High-intensity ultraviolet disinfection eliminating microbiological agents without chemical trace.'
  },
  {
    id: 4,
    title: 'Mineral Balance',
    subtitle: 'Electrolyte Infusion',
    description: 'Reintroducing trace elements of calcium and magnesium to curate a soft, crisp flavor profile.'
  },
  {
    id: 5,
    title: 'Quality Tested',
    subtitle: 'Batch Validation',
    description: 'Continuous chemical and microbial screening ensuring compliance with premium standards.'
  }
];

export const BUSINESS_INFO = {
  phone: 'Coming Soon',
  email: 'Coming Soon',
  address: 'Coming Soon',
  socials: [
    { name: 'Instagram', label: 'instagram' },
    { name: 'Facebook', label: 'facebook' },
    { name: 'LinkedIn', label: 'linkedin' }
  ]
};
