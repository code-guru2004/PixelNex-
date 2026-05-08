import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Blobs */}
      <div className="blob bg-primary w-[500px] h-[500px] top-[-100px] left-[-100px]"></div>
      <div className="blob bg-secondary w-[400px] h-[400px] bottom-[-50px] right-[-50px] animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-secondary font-medium tracking-wider uppercase text-sm mb-4 block">
              PixelNex Software Solutions
            </span>
            <h1 className="text-6xl md:text-8xl font-bold leading-[1.1] tracking-tighter mb-6">
              We build <br className="hidden md:block"/>
              <span className="text-gradient">scalable &amp; modern</span><br />
              digital solutions.
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
          >
            A premier software services team crafting high-performance web applications, 
            intuitive UI/UX designs, and custom software architectures. Partnering with 
            industry leaders to bring your vision to life.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#projects" 
              className="group flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-primary/20 transition-transform hover:scale-105"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="flex items-center justify-center px-6 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-semibold hover:border-primary/50 transition-colors"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"></div>
      </motion.div>
    </section>
  );
}
