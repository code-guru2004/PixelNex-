/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
