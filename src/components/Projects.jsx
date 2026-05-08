import { motion, useScroll, useTransform } from 'motion/react';
import { ExternalLink, Github, Calendar, Users, ChevronRight, Sparkles } from 'lucide-react';
import { useState, useRef } from 'react';

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const projects = [
    {
      title: 'Optics Commerce Platform',
      desc: 'A high-conversion headless e-commerce store with real-time inventory management, seamless checkout, and advanced filtering capabilities.',
      longDesc: 'Built for Moonlit Optics, this platform handles high traffic volumes with sub-second response times. Features include real-time stock updates, automated email notifications, and comprehensive analytics dashboard.',
      tech: ['React', 'Next.js', 'Tailwind CSS', 'Stripe', 'Redis', 'PostgreSQL'],
      link: 'https://capable-dodol-3f48d5.netlify.app',
      github: 'https://github.com/Prithwish20/moonlit-optics.git',
      partner: 'Moonlit Optics',
      image: 'moonlit.png',
      metrics: {
        performance: '99%',
        uptime: '99.9%',
        conversion: '+45%'
      },
      features: ['Real-time inventory', 'Secure payments', 'Order tracking']
    },
    {
      title: 'Test Portal - SSC, RRB NTPC, PSC',
      desc: 'Comprehensive exam preparation platform with mock tests, performance analytics, and personalized learning paths.',
      longDesc: 'Serving thousands of students daily, this platform offers adaptive testing algorithms, detailed performance reports, and competitive leaderboards. Includes support for multiple exam patterns and real-time result processing.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'D3.js', 'Express', 'JWT'],
      link: 'https://test-easy-kappa.vercel.app',
      github: '#',
      partner: null,
      image: 'testmate.png',
      metrics: {
        users: '10K+',
        tests: '500+',
        accuracy: '95%'
      },
      features: ['Mock tests', 'Performance analytics', 'Leaderboards']
    },
    {
      title: 'AI Content Generator',
      desc: 'Enterprise-grade AI-powered content generation platform for marketing teams.',
      longDesc: 'Leverages GPT-4 to generate SEO-optimized content, social media posts, and email campaigns. Includes collaboration tools, version history, and team workflows.',
      tech: ['React', 'OpenAI API', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      link: '#',
      github: '#',
      partner: 'TechCorp AI',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      metrics: {
        generated: '50K+',
        time: '80% less',
        engagement: '+120%'
      },
      features: ['AI-powered', 'Team collaboration', 'Analytics dashboard']
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="projects" 
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
        className="absolute top-40 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
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
          className="mb-16 text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Our Portfolio</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Selected Work
          </motion.h2>
          
          <motion.p 
            className="text-gray-400 max-w-2xl text-lg md:text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Showcasing recent platforms and tools designed for high performance and scalability.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              onHoverStart={() => setHoveredProject(i)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative"
            >
              {/* Glow Effect on Hover */}
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-purple-500/50 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"
                animate={{
                  opacity: hoveredProject === i ? 0.6 : 0
                }}
              />
              
              <div className="relative rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden hover:border-primary/50 transition-all duration-300 h-full flex flex-col backdrop-blur-sm">
                {/* Image Container */}
                <div className="relative h-56 w-full overflow-hidden">
                  {proj.partner && (
                    <motion.div 
                      initial={{ x: -100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1 + 0.2 }}
                      className="absolute top-4 left-4 z-20 px-3 py-1 rounded-lg bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 backdrop-blur-sm"
                    >
                      <div className="flex items-center gap-1">
                        <Users size={12} className="text-indigo-300" />
                        <span className="text-xs font-medium text-indigo-300">
                          {proj.partner}
                        </span>
                      </div>
                    </motion.div>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <motion.img 
                    src={proj.image} 
                    alt={proj.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  {/* Title & Description */}
                  <motion.h3 
                    className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 + 0.1 }}
                  >
                    {proj.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-400 mb-4 text-sm line-clamp-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                  >
                    {proj.desc}
                  </motion.p>
                  
                  {/* Metrics Grid */}
                  <motion.div 
                    className="grid grid-cols-3 gap-2 mb-4 p-3 rounded-xl bg-white/[0.03] border border-white/5"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 + 0.25 }}
                  >
                    {Object.entries(proj.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-sm font-bold text-primary">{value}</div>
                        <div className="text-[10px] text-gray-500 uppercase">{key}</div>
                      </div>
                    ))}
                  </motion.div>
                  
                  {/* Tech Stack */}
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                  >
                    {proj.tech.slice(0, 4).map(t => (
                      <span key={t} className="px-2 py-1 bg-white/5 rounded-md text-[10px] border border-white/5 text-gray-300">
                        {t}
                      </span>
                    ))}
                    {proj.tech.length > 4 && (
                      <span className="px-2 py-1 bg-white/5 rounded-md text-[10px] text-gray-400">
                        +{proj.tech.length - 4}
                      </span>
                    )}
                  </motion.div>
                  
                  {/* Features List */}
                  <motion.div 
                    className="mb-4 space-y-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 + 0.35 }}
                  >
                    {proj.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-1 text-xs text-gray-500">
                        <ChevronRight size={12} className="text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </motion.div>
                  
                  {/* Action Buttons */}
                  <motion.div 
                    className="flex items-center gap-4 pt-4 mt-auto border-t border-white/10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 + 0.4 }}
                  >
                    <motion.a 
                      href={proj.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-primary transition-all duration-300"
                      whileHover={{ x: 3 }}
                    >
                      <ExternalLink size={16} /> Live Demo
                    </motion.a>
                    {proj.github !== '#' && (
                      <motion.a 
                        href={proj.github} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-white transition-all duration-300"
                        whileHover={{ x: 3 }}
                      >
                        <Github size={16} /> Source
                      </motion.a>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 text-white font-semibold transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <ChevronRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}