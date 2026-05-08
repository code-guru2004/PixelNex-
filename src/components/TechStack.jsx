import { motion, useScroll, useTransform } from 'motion/react';
import { 
  SiReact, 
  SiJavascript, 
  SiTypescript, 
  SiNodedotjs, 
  SiMongodb, 
  SiMysql, 
  SiTailwindcss, 
  SiFramer, 
  SiNextdotjs, 
  SiGithub 
} from 'react-icons/si';
import { FiLayers } from "react-icons/fi";
import { useState, useRef } from 'react';

// Custom icon mapping with fallback
const iconMap = {
  'React': <SiReact className="text-cyan-400" size={32} />,
  'JavaScript / TypeScript': (
    <div className="flex gap-1">
      <SiJavascript className="text-yellow-400" size={32} />
      <SiTypescript className="text-blue-500" size={32} />
    </div>
  ),
  'Node.js': <SiNodedotjs className="text-green-500" size={32} />,
  'MongoDB / MySQL': (
    <div className="flex gap-1">
      <SiMongodb className="text-green-600" size={32} />
      <SiMysql className="text-blue-600" size={32} />
    </div>
  ),
  'Tailwind CSS': <SiTailwindcss className="text-cyan-500" size={32} />,
  'Framer Motion': <SiFramer className="text-purple-500" size={32} />,
  'Next.js': <SiNextdotjs className="text-white" size={32} />,
  'GitHub': <SiGithub className="text-gray-400" size={32} />,
};

export default function TechStack() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  const technologies = [
    { name: 'React', category: 'Frontend', icon: iconMap['React'], gradient: 'from-cyan-500/20 to-blue-500/20' },
    { name: 'JavaScript / TypeScript', category: 'Language', icon: iconMap['JavaScript / TypeScript'], gradient: 'from-yellow-500/20 to-blue-500/20' },
    { name: 'Node.js', category: 'Backend', icon: iconMap['Node.js'], gradient: 'from-green-500/20 to-emerald-500/20' },
    { name: 'MongoDB / MySQL', category: 'Database', icon: iconMap['MongoDB / MySQL'], gradient: 'from-green-600/20 to-blue-600/20' },
    { name: 'Tailwind CSS', category: 'Styling', icon: iconMap['Tailwind CSS'], gradient: 'from-cyan-500/20 to-teal-500/20' },
    { name: 'Framer Motion', category: 'Animation', icon: iconMap['Framer Motion'], gradient: 'from-purple-500/20 to-pink-500/20' },
    { name: 'Next.js', category: 'Framework', icon: iconMap['Next.js'], gradient: 'from-gray-500/20 to-white/10' },
    { name: 'GitHub', category: 'VCS', icon: iconMap['GitHub'], gradient: 'from-gray-600/20 to-gray-400/20' }
  ];

  // Define row order (left to right flow)
  const row1 = technologies.slice(0, 4); // React, JS/TS, Node.js, MongoDB/MySQL
  const row2 = technologies.slice(4, 8); // Tailwind, Framer Motion, Next.js, GitHub

  return (
    <section 
      ref={sectionRef}
      id="tech" 
      className="py-24 relative overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none"
        style={{ y: backgroundY, opacity }}
      />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      
      {/* Animated Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <motion.div 
            className="p-4 rounded-full bg-primary/10 text-primary mb-6 inline-block"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <FiLayers size={32} />
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Powered by modern tech.
          </motion.h2>
          
          <motion.p 
            className="text-gray-400 max-w-2xl text-lg md:text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            We leverage the best-in-class technologies to build resilient, fast, and scalable applications.
          </motion.p>
        </motion.div>

        {/* Row-based Layout */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {/* Row 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-5"
          >
            {row1.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: i * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                onHoverStart={() => setHoveredIndex(`row1-${i}`)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative group flex-1 min-w-[160px] max-w-[200px]"
              >
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`}
                  animate={{
                    opacity: hoveredIndex === `row1-${i}` ? 0.6 : 0
                  }}
                />
                
                <div className="relative px-6 py-5 rounded-2xl bg-white/[0.03] border border-white/10 group-hover:border-primary/50 transition-all duration-300 flex flex-col items-center gap-3 backdrop-blur-sm">
                  <motion.div 
                    className="text-primary"
                    animate={{
                      rotate: hoveredIndex === `row1-${i}` ? [0, -10, 10, -5, 5, 0] : 0,
                      scale: hoveredIndex === `row1-${i}` ? 1.1 : 1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {tech.icon}
                  </motion.div>
                  
                  <div className="text-center">
                    <motion.span 
                      className="font-semibold text-white block text-sm md:text-base"
                      animate={{
                        color: hoveredIndex === `row1-${i}` ? "#fff" : "#e5e7eb"
                      }}
                    >
                      {tech.name}
                    </motion.span>
                    <span className="text-xs text-gray-500 uppercase tracking-widest mt-1 block">
                      {tech.category}
                    </span>
                  </div>
                  
                  <motion.div 
                    className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/50 transition-all duration-300 pointer-events-none"
                    animate={{
                      borderColor: hoveredIndex === `row1-${i}` ? "rgba(59,130,246,0.5)" : "rgba(255,255,255,0)"
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Row 2 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-5"
          >
            {row2.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: i * 0.1 + 0.3,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                onHoverStart={() => setHoveredIndex(`row2-${i}`)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative group flex-1 min-w-[160px] max-w-[200px]"
              >
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`}
                  animate={{
                    opacity: hoveredIndex === `row2-${i}` ? 0.6 : 0
                  }}
                />
                
                <div className="relative px-6 py-5 rounded-2xl bg-white/[0.03] border border-white/10 group-hover:border-primary/50 transition-all duration-300 flex flex-col items-center gap-3 backdrop-blur-sm">
                  <motion.div 
                    className="text-primary"
                    animate={{
                      rotate: hoveredIndex === `row2-${i}` ? [0, -10, 10, -5, 5, 0] : 0,
                      scale: hoveredIndex === `row2-${i}` ? 1.1 : 1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {tech.icon}
                  </motion.div>
                  
                  <div className="text-center">
                    <motion.span 
                      className="font-semibold text-white block text-sm md:text-base"
                      animate={{
                        color: hoveredIndex === `row2-${i}` ? "#fff" : "#e5e7eb"
                      }}
                    >
                      {tech.name}
                    </motion.span>
                    <span className="text-xs text-gray-500 uppercase tracking-widest mt-1 block">
                      {tech.category}
                    </span>
                  </div>
                  
                  <motion.div 
                    className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/50 transition-all duration-300 pointer-events-none"
                    animate={{
                      borderColor: hoveredIndex === `row2-${i}` ? "rgba(59,130,246,0.5)" : "rgba(255,255,255,0)"
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="mt-20 pt-12 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <div className="text-3xl font-bold text-primary">8+</div>
            <div className="text-sm text-gray-400 mt-2">Technologies</div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <div className="text-3xl font-bold text-primary">100%</div>
            <div className="text-sm text-gray-400 mt-2">Modern Stack</div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <div className="text-3xl font-bold text-primary">24/7</div>
            <div className="text-sm text-gray-400 mt-2">Support</div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <div className="text-3xl font-bold text-primary">∞</div>
            <div className="text-sm text-gray-400 mt-2">Scalability</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}