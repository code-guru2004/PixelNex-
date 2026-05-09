import { motion, useScroll, useTransform } from 'motion/react';
import { Plus, Minus, HelpCircle, MessageCircle, Mail, ChevronRight, Sparkles } from 'lucide-react';
import { useState, useRef } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const faqs = [
    {
      question: "What is your typical project development timeline?",
      answer: "Project timelines vary based on complexity and scope. A simple website might take 4-6 weeks, while complex web applications can take 3-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the development process.",
      category: "Process"
    },
    {
      question: "How much do your services cost?",
      answer: "Our pricing is project-based and depends on your specific requirements. We offer flexible engagement models including fixed-price projects, hourly rates, and dedicated team hiring. Contact us for a free consultation and detailed quote tailored to your needs.",
      category: "Pricing"
    },
    {
      question: "Do you offer ongoing maintenance and support?",
      answer: "Yes! We provide comprehensive maintenance packages including regular updates, security patches, performance monitoring, bug fixes, and technical support. Our support plans are flexible and can be customized based on your requirements.",
      category: "Support"
    },
    {
      question: "What technologies do you specialize in?",
      answer: "We specialize in modern web technologies including React, Next.js, Node.js, TypeScript, Tailwind CSS, MongoDB, PostgreSQL, and cloud platforms like AWS and Vercel. We stay current with industry trends to deliver cutting-edge solutions.",
      category: "Technology"
    },
    {
      question: "Can you work with our existing team?",
      answer: "Absolutely! We excel at collaborating with in-house teams. Whether you need us to augment your team, provide specific expertise, or take over entire projects, we integrate seamlessly with your existing workflows and communication tools.",
      category: "Collaboration"
    },
    {
      question: "How do you handle project communication?",
      answer: "We use tools like Slack, Discord, or Zoom for daily communication, Jira or Trello for project management, and provide weekly progress reports. You'll have a dedicated project manager as your single point of contact.",
      category: "Process"
    },
    {
      question: "Do you provide UI/UX design services?",
      answer: "Yes, we have an in-house design team that creates research-backed, user-centered designs. We handle everything from wireframing and prototyping to high-fidelity UI design and user testing.",
      category: "Design"
    },
    {
      question: "What is your revision and feedback process?",
      answer: "We follow an agile development process with regular sprint reviews. You'll have opportunities to provide feedback at every stage, and we offer reasonable revisions to ensure the final product meets your expectations.",
      category: "Process"
    }
  ];

  const categories = [...new Set(faqs.map(faq => faq.category))];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredFaqs = selectedCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      ref={sectionRef}
      id="faq" 
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
        className="absolute top-40 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <HelpCircle size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">FAQ</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Frequently Asked Questions
          </motion.h2>
          
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Everything you need to know about working with PixelNex
          </motion.p>
        </motion.div>

        {/* Category Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === 'All'
                ? 'bg-primary text-white shadow-lg shadow-primary/30'
                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
            }`}
          >
            All Questions
          </button>
          {categories.map((category, idx) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative"
            >
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"
                animate={{
                  opacity: openIndex === index ? 0.3 : 0
                }}
              />
              
              <div className={`relative rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'border-primary/50' : ''
              }`}>
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-start justify-between gap-4 hover:bg-white/[0.01] transition-colors duration-300"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-primary font-mono">{index + 1}</span>
                      <span className="text-xs text-gray-500 uppercase tracking-wider">{faq.category}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      openIndex === index 
                        ? 'bg-primary/20 text-primary' 
                        : 'bg-white/5 text-gray-400'
                    }`}
                  >
                    {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                  </motion.div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{ 
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 pt-0">
                    <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-4" />
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {faq.answer}
                    </p>
                    
                    {/* Action buttons within answer */}
                    {faq.category === 'Pricing' && (
                      <div className="mt-4">
                        <a 
                          href="#contact" 
                          className="inline-flex items-center gap-1 text-xs text-primary hover:gap-2 transition-all"
                        >
                          Get a quote <ChevronRight size={12} />
                        </a>
                      </div>
                    )}
                    
                    {faq.category === 'Support' && (
                      <div className="mt-4 flex gap-3">
                        <a 
                          href="mailto:nayandas.own@gmail.com" 
                          className="inline-flex items-center gap-1 text-xs text-primary hover:gap-2 transition-all"
                        >
                          <Mail size={12} /> Email Support
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/20">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 mb-4">
              <MessageCircle size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Still have questions?
            </h3>
            <p className="text-gray-400 mb-6">
              Can't find the answer you're looking for? Please reach out to our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105"
              >
                Contact Us
                <ChevronRight size={16} />
              </a>
              <a 
                href="mailto:nayandas.own@gmail.com" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-semibold hover:border-primary/50 transition-all duration-300"
              >
                <Mail size={16} />
                Email Support
              </a>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          className="mt-12 flex flex-wrap justify-center gap-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex items-center gap-2">
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs text-gray-500">Fast Response Time</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs text-gray-500">98% Client Satisfaction</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs text-gray-500">24/7 Support Available</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}