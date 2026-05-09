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
import SmoothScroll from './components/SmoothScroll';
import SEO from './components/SEO';
import Schema from './components/Schema';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Developers from './components/Developers';

export default function App() {
  useEffect(() => {
    // Add meta viewport for better performance
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, viewport-fit=cover');
    }
  }, []);

  return (
    <HelmetProvider>
      <SEO />
      <Schema />
     
        <div className="min-h-screen bg-background text-white selection:bg-primary/30 selection:text-white">
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
            <Developers />
            <Testimonials />
            <FAQ /> {/* Add FAQ component here */}
            <Contact />
          </main>
          
          <Footer />
        </div>

    </HelmetProvider>
  );
}