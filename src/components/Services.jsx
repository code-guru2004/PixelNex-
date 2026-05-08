import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Code2, 
  Settings, 
  Palette, 
  Shield, 
  ArrowRight,
  Sparkles,
  Zap,
  TrendingUp,
  Users
} from 'lucide-react';
import { useRef, useState } from 'react';

export default function Services() {
  const [hoveredService, setHoveredService] = useState(null);
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  const services = [
    {
      number: '01',
      title: 'Web Development',
      desc: 'High-performance, accessible, and modern web applications built with the latest React and Node.js ecosystems.',
      longDesc: 'From SPAs to complex enterprise portals, we deliver blazing-fast, SEO-optimized web solutions that scale.',
      icon: <Code2 size={28} />,
      gradient: 'from-cyan-500/20 to-blue-500/20',
      color: 'cyan',
      features: ['React/Next.js', 'Node.js/Express', 'GraphQL/REST', 'Serverless']
    },
    {
      number: '02',
      title: 'Custom Software',
      desc: 'Tailored SaaS platforms, internal tools, and complex system architectures designed precisely for your business needs.',
      longDesc: 'Bespoke software solutions that automate workflows, integrate with existing systems, and drive operational efficiency.',
      icon: <Settings size={28} />,
      gradient: 'from-purple-500/20 to-pink-500/20',
      color: 'purple',
      features: ['SaaS Platforms', 'ERP Systems', 'CRM Solutions', 'API Integration']
    },
    {
      number: '03',
      title: 'UI/UX Design',
      desc: 'Research-backed user interfaces that focus on conversion, accessibility, and modern aesthetic principles.',
      longDesc: 'User-centered design process that transforms complex requirements into intuitive, engaging digital experiences.',
      icon: <Palette size={28} />,
      gradient: 'from-amber-500/20 to-orange-500/20',
      color: 'amber',
      features: ['Wireframing', 'Prototyping', 'User Testing', 'Design Systems']
    },
    {
      number: '04',
      title: 'Maintenance & Support',
      desc: 'Ongoing code optimization, feature updates, cloud infrastructure scaling, and technical support.',
      longDesc: '24/7 proactive monitoring, security patches, performance optimization, and dedicated technical support.',
      icon: <Shield size={28} />,
      gradient: 'from-green-500/20 to-emerald-500/20',
      color: 'green',
      features: ['24/7 Monitoring', 'Security Updates', 'Performance Tuning', 'Backup & Recovery']
    }
  ];

  const colorVariants = {
    cyan: {
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/30',
      text: 'text-cyan-400',
      glow: 'shadow-cyan-500/20'
    },
    purple: {
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/30',
      text: 'text-purple-400',
      glow: 'shadow-purple-500/20'
    },
    amber: {
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/30',
      text: 'text-amber-400',
      glow: 'shadow-amber-500/20'
    },
    green: {
      bg: 'bg-green-500/10',
      border: 'border-green-500/30',
      text: 'text-green-400',
      glow: 'shadow-green-500/20'
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="services" 
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
        className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: [0, -60, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">What We Do</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our Services
          </motion.h2>
          
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Comprehensive technical solutions designed to give your business a competitive edge.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((svc, i) => {
            const colors = colorVariants[svc.color];
            
            return (
              <motion.div 
                key={svc.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                onHoverStart={() => setHoveredService(i)}
                onHoverEnd={() => setHoveredService(null)}
                className="group relative"
              >
                {/* Glow Effect */}
                <motion.div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${svc.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500`}
                  animate={{
                    opacity: hoveredService === i ? 0.6 : 0
                  }}
                />
                
                <div className={`relative rounded-3xl border bg-white/[0.02] backdrop-blur-sm overflow-hidden transition-all duration-300 h-full ${colors.glow}`}>
                  {/* Decorative Number Background */}
                  <div className="absolute top-0 right-0 text-8xl font-bold text-white/[0.02] select-none pointer-events-none">
                    {svc.number}
                  </div>
                  
                  <div className="p-8">
                    {/* Icon & Number */}
                    <div className="flex items-start justify-between mb-6">
                      <motion.div 
                        className={`p-3 rounded-2xl ${colors.bg} border ${colors.border}`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6, type: "spring" }}
                      >
                        <div className={colors.text}>
                          {svc.icon}
                        </div>
                      </motion.div>
                      
                      <motion.span 
                        className={`font-mono text-sm tracking-widest font-bold ${colors.text}`}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 + 0.2 }}
                      >
                        {svc.number}
                      </motion.span>
                    </div>
                    
                    {/* Title & Description */}
                    <motion.h3 
                      className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: i * 0.1 + 0.1 }}
                    >
                      {svc.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-gray-400 leading-relaxed mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: i * 0.1 + 0.2 }}
                    >
                      {svc.desc}
                    </motion.p>
                    
                    {/* Long Description (appears on hover) */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: hoveredService === i ? 1 : 0,
                        height: hoveredService === i ? 'auto' : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-gray-500 mb-4 pt-2 border-t border-white/10">
                        {svc.longDesc}
                      </p>
                      
                      {/* Features List */}
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {svc.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: hoveredService === i ? 1 : 0, x: hoveredService === i ? 0 : -10 }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex items-center gap-1 text-xs text-gray-400"
                          >
                            <Zap size={10} className={colors.text} />
                            <span>{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                    
                    {/* Learn More Link */}
                    <motion.a
                      href="#contact"
                      className={`inline-flex items-center gap-2 text-sm font-medium ${colors.text} mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      whileHover={{ x: 5 }}
                    >
                      Learn More <ArrowRight size={14} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section
        <motion.div 
          className="mt-20 pt-12 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <div className="text-3xl font-bold text-primary">2+</div>
            <div className="text-sm text-gray-400 mt-2">Projects Delivered</div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <div className="text-3xl font-bold text-primary">98%</div>
            <div className="text-sm text-gray-400 mt-2">Client Satisfaction</div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <div className="text-3xl font-bold text-primary">24/7</div>
            <div className="text-sm text-gray-400 mt-2">Support Available</div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <div className="text-3xl font-bold text-primary">5+</div>
            <div className="text-sm text-gray-400 mt-2">Years Experience</div>
          </motion.div>
        </motion.div> */}

        {/* CTA Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <Users size={18} className="text-primary" />
            <span className="text-sm text-gray-300">
              Need a custom solution? <a href="#contact" className="text-primary font-semibold hover:underline">Let's talk</a>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}