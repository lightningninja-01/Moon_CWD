import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import AppRoutes from './routes/AppRoutes';

/**
 * Root App Component.
 * Wraps routes inside HelmetProvider for SEO support.
 */
export default function App() {
  return (
    <HelmetProvider>
      <AppRoutes />
    </HelmetProvider>
  );
}
