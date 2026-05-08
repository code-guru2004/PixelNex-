import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Tech', href: '#tech' },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md border-b border-white/5 py-4' : 'py-6 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-10 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img src="/logo1.png" alt="PixelNex Logo" className="h-16 w-auto" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-5 py-2 bg-white/5 border border-white/10 hover:border-primary/50 rounded-full text-white transition-all text-sm font-semibold"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white relative z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.1, duration: 0.2 }}
              className="flex flex-col items-center justify-center min-h-screen gap-8 p-6"
              onClick={(e) => e.stopPropagation()}
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="text-gray-300 hover:text-white transition-colors text-2xl font-medium"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="px-8 py-4 bg-white/10 border border-white/20 hover:border-primary/50 rounded-full text-white transition-all font-semibold text-lg mt-4"
              >
                Contact Us
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}