import { motion, useScroll, useTransform } from 'motion/react';
import { Send, MapPin, Mail, MessageSquare, Phone, Clock, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';
import { useRef, useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

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
      href: 'tel:7439570263',
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

  const faqs = [
    { q: 'What is your typical project timeline?', a: 'Project timelines vary based on complexity, but typically range from 4-12 weeks for most projects.' },
    { q: 'Do you offer ongoing maintenance?', a: 'Yes, we provide comprehensive maintenance and support packages for all our projects.' },
    { q: 'What technologies do you specialize in?', a: 'We specialize in React, Node.js, Next.js, and modern cloud technologies.' }
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

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-8 border-t border-white/10"
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <MessageSquare size={18} className="text-primary" />
                Frequently Asked Questions
              </h3>
              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <motion.details
                    key={idx}
                    className="group"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 + idx * 0.1 }}
                  >
                    <summary className="cursor-pointer text-sm text-gray-300 hover:text-primary transition-colors font-medium list-none flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/10">
                      <span>{faq.q}</span>
                      <ArrowRight size={14} className="group-open:rotate-90 transition-transform" />
                    </summary>
                    <p className="text-xs text-gray-500 mt-2 pl-4">{faq.a}</p>
                  </motion.details>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
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
            
            <div className="relative p-8 md:p-10 rounded-3xl bg-white/[0.02] backdrop-blur-sm border border-white/10 overflow-hidden">
              
              {/* Success Message */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: isSubmitted ? 1 : 0,
                  scale: isSubmitted ? 1 : 0.9,
                  display: isSubmitted ? 'flex' : 'none'
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 z-20 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-8 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center mb-4"
                >
                  <CheckCircle size={32} className="text-green-500" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400 text-sm">
                  Thanks for reaching out! We'll get back to you within 24 hours.
                </p>
              </motion.div>

              <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                    <span>Name</span>
                    <span className="text-primary text-xs">*</span>
                  </label>
                  <motion.input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe" 
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                    <span>Email Address</span>
                    <span className="text-primary text-xs">*</span>
                  </label>
                  <motion.input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com" 
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                    <span>Message</span>
                    <span className="text-primary text-xs">*</span>
                  </label>
                  <motion.textarea 
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project..." 
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
                
                <motion.button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-primary/80 text-white font-bold rounded-xl px-6 py-4 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Send size={18} />
                      </motion.div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </motion.button>

                {/* Trust Badge */}
                <motion.p 
                  className="text-center text-xs text-gray-600 mt-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  We respect your privacy. Your information is safe with us.
                </motion.p>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}