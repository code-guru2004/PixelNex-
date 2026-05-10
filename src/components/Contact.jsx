import { motion, useScroll, useTransform } from 'motion/react';
import { MapPin, Mail, MessageSquare, Phone, Clock, Sparkles } from 'lucide-react';
import { useRef } from 'react';

export default function Contact() {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: 'Email Us',
      value: 'nayandas.own@gmail.com',
      href: 'mailto:nayandas.own@gmail.com',
      color: 'cyan'
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: 'Remote Worldwide',
      href: null,
      color: 'purple'
    },
    {
      icon: <Phone size={20} />,
      label: 'Phone',
      value: '+91 7439570263',
      href: 'tel:+917439570263',
      color: 'green'
    },
    {
      icon: <Clock size={20} />,
      label: 'Response Time',
      value: 'Within 24 hours',
      href: null,
      color: 'amber'
    }
  ];

  const colorVariants = {
    cyan: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
    purple: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
    green: 'text-green-400 bg-green-500/10 border-green-500/30',
    amber: 'text-amber-400 bg-amber-500/10 border-amber-500/30'
  };

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-24 relative overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none"
        style={{ y: backgroundY }}
      />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      
      {/* Animated Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: [0, -70, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">Get In Touch</span>
            </motion.div>

            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Let's build something{' '}
              <span className="bg-gradient-to-r from-primary via-primary/70 to-primary/40 bg-clip-text text-transparent">
                remarkable.
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-gray-400 text-lg mb-10 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Whether you have a specific project in mind or just want to explore possibilities, 
              our team is ready to deliver exceptional results.
            </motion.p>
            
            {/* Contact Info Grid */}
            <motion.div 
              className="grid sm:grid-cols-2 gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {contactInfo.map((info, idx) => (
                <motion.div
                  key={info.label}
                  className={`flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-${info.color}-500/50 transition-all duration-300 group`}
                  whileHover={{ x: 5, y: -3 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + idx * 0.05 }}
                >
                  <div className={`w-12 h-12 rounded-xl ${colorVariants[info.color]} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">{info.label}</div>
                    {info.href ? (
                      <a href={info.href} className={`text-white hover:text-${info.color}-400 transition-colors text-sm font-medium`}>
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-white text-sm font-medium">{info.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Google Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glow behind form */}
            <motion.div 
              className="absolute -top-20 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <div className="relative rounded-3xl bg-white/[0.02] backdrop-blur-sm border border-white/10 overflow-hidden">
              {/* Form Header */}
              <div className="p-6 border-b border-white/10 bg-gradient-to-r from-primary/10 to-transparent">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <MessageSquare size={20} className="text-primary" />
                  Send us a message
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>
              
              {/* Google Form Iframe */}
              <div className="relative w-full overflow-auto" style={{ height: '650px' }}>
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSf_yuzhw4hqxGUku-T3il56epS2jOopS0vCNC17saESz_KwVQ/viewform?embedded=true"
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  marginHeight="0" 
                  marginWidth="0"
                  title="Contact Form"
                  className="absolute top-0 left-0 w-full h-full"
                  loading="lazy"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}