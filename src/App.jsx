/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEO from './components/SEO';
import Schema from './components/Schema';

export default function App() {
  // Track page views for analytics (optional)
  useEffect(() => {
    // Google Analytics or other analytics initialization
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'YOUR-GA4-ID', {
        page_path: window.location.pathname,
      });
    }
  }, []);

  return (
    <HelmetProvider>
      <SEO />
      <Schema />
      <div className="min-h-screen bg-background text-white selection:bg-primary/30 selection:text-white">
        {/* Skip to content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md"
        >
          Skip to main content
        </a>
        
        <Navbar />
        
        <main id="main-content">
          <Hero />
          <About />
          <Services />
          <Projects />
          <TechStack />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </HelmetProvider>
  );
}