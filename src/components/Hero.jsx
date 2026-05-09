import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Sparkles, ChevronDown, Star, Code, Zap } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const stats = [
    { value: '50+', label: 'Projects Delivered', icon: <Code size={14} /> },
    { value: '98%', label: 'Client Satisfaction', icon: <Star size={14} /> },
    { value: '24/7', label: 'Support', icon: <Zap size={14} /> }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      {/* Simplified Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"
        style={{ y: backgroundY }}
      />
      
      {/* Static Grid Pattern (no animation for performance) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      
      {/* Simplified Animated Blobs - using CSS animations instead of motion */}
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl pointer-events-none animate-float-slower" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div 
          className="max-w-5xl mx-auto text-center"
          style={{ opacity }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 backdrop-blur-sm"
          >
            <Sparkles size={16} className="text-primary animate-bounce" />
            <span className="text-sm font-medium text-primary">PixelNex Software Solutions</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[1.1] tracking-tighter mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            We build{' '}
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-primary via-primary/70 to-purple-500 bg-clip-text text-transparent">
              scalable & modern
            </span>
            <br />
            digital solutions.
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            A premier software services team crafting high-performance web applications, 
            intuitive UI/UX designs, and custom software architectures. Partnering with 
            industry leaders to bring your vision to life.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <a 
              href="#projects" 
              className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white px-8 py-4 rounded-xl font-semibold shadow-xl shadow-primary/30 transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-semibold hover:border-primary/50 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:translate-x-1"
            >
              Contact Us
            </a>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            className="flex flex-wrap justify-center gap-8 md:gap-12 pt-8 border-t border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-1 text-3xl md:text-4xl font-bold text-white mb-2">
                  <span>{stat.value}</span>
                  <div className="text-primary">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-50"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
        <div className="animate-bounce">
          <ChevronDown size={20} className="text-gray-400" />
        </div>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"></div>
      </motion.div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}