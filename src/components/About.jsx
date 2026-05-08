import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Code2, 
  PenTool, 
  Layout, 
  Database, 
  Sparkles,
  Rocket,
  Users,
  Award,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Star,
  Heart
} from 'lucide-react';
import { useRef, useState } from 'react';

export default function About() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  const skills = [
    { 
      icon: <Layout size={24} />, 
      label: 'Web Development', 
      desc: 'Modern, responsive web applications',
      color: 'cyan',
      features: ['React/Next.js', 'Performance', 'SEO']
    },
    { 
      icon: <Database size={24} />, 
      label: 'Full Stack', 
      desc: 'End-to-end development',
      color: 'purple',
      features: ['Node.js', 'MongoDB', 'PostgreSQL']
    },
    { 
      icon: <PenTool size={24} />, 
      label: 'UI/UX Design', 
      desc: 'User-centered design',
      color: 'amber',
      features: ['Prototyping', 'User Testing', 'Design Systems']
    },
    { 
      icon: <Code2 size={24} />, 
      label: 'API Development', 
      desc: 'Scalable API solutions',
      color: 'green',
      features: ['RESTful', 'GraphQL', 'Microservices']
    },
  ];

  const achievements = [
    { number: '02+', label: 'Projects Completed', icon: <Rocket size={18} /> },
    { number: '98%', label: 'Client Satisfaction', icon: <Star size={18} /> },
    { number: '24/7', label: 'Support Available', icon: <Heart size={18} /> },
    { number: '5+', label: 'Years Experience', icon: <Award size={18} /> },
  ];

  const values = [
    'Quality First Approach',
    'Transparent Communication',
    'Agile Development',
    'Long-term Partnerships'
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
      id="about" 
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
        className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"
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
      <motion.div
        className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Content */}
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
              <span className="text-sm font-medium text-primary">About Us</span>
            </motion.div>

            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Engineering{' '}
              <span className="bg-gradient-to-r from-primary via-primary/70 to-primary/40 bg-clip-text text-transparent">
                excellence
              </span>
              <br/>
              driven by passion.
            </motion.h2>
            
            <motion.p 
              className="text-gray-400 text-lg leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              At PixelNex, we are a collective of developers, designers, and strategists 
              obsessed with building software that scales. We transform complex problems into 
              elegant, user-centric digital products.
            </motion.p>

            {/* Values Section */}
            <motion.div 
              className="grid grid-cols-2 gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {values.map((value, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  <span className="text-sm text-gray-300">{value}</span>
                </div>
              ))}
            </motion.div>
            
            {/* Partnership Card */}
            <motion.div 
              className="p-6 rounded-3xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 hover:border-primary/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -5, borderColor: 'rgba(59,130,246,0.3)' }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-400 uppercase tracking-wider flex items-center gap-2">
                  <Users size={14} />
                  Current Partnership
                </span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                </motion.div>
              </div>
              <div className="text-xl text-white font-medium mb-2 flex items-center gap-2">
                <TrendingUp size={20} className="text-primary" />
                Moonlit Optics
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Currently collaborating with Moonlit Optics to deliver cutting-edge software 
                solutions and elevated user experiences.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8"
            >
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/20 border border-primary/30 text-primary font-semibold hover:bg-primary/30 transition-all duration-300"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Work Together
                <ArrowRight size={18} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Skills Grid */}
          <div>
            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {skills.map((skill, index) => {
                const colors = colorVariants[skill.color];
                
                return (
                  <motion.div
                    key={skill.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    onHoverStart={() => setHoveredSkill(index)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    className="group relative"
                  >
                    <motion.div
                      className={`absolute -inset-0.5 bg-gradient-to-r from-${skill.color}-500/30 to-primary/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-300`}
                      animate={{
                        opacity: hoveredSkill === index ? 0.5 : 0
                      }}
                    />
                    
                    <div className={`relative p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-${skill.color}-500/50 transition-all duration-300 h-full`}>
                      <div className={`p-3 rounded-xl ${colors.bg} border ${colors.border} mb-4 w-fit group-hover:scale-110 transition-transform duration-300`}>
                        <div className={colors.text}>
                          {skill.icon}
                        </div>
                      </div>
                      
                      <h3 className="text-white font-semibold text-lg mb-2">{skill.label}</h3>
                      <p className="text-gray-500 text-sm mb-3">{skill.desc}</p>
                      
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: hoveredSkill === index ? 1 : 0,
                          height: hoveredSkill === index ? 'auto' : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                          {skill.features.map((feature, idx) => (
                            <span key={idx} className={`text-xs ${colors.text} bg-${skill.color}-500/10 px-2 py-1 rounded-lg`}>
                              {feature}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Achievements Section */}
            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {achievements.map((achievement, idx) => (
                <motion.div
                  key={achievement.label}
                  className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-center group hover:border-primary/30 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -3 }}
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      {achievement.icon}
                    </div>
                    <div className="text-2xl font-bold text-white">{achievement.number}</div>
                  </div>
                  <div className="text-xs text-gray-500">{achievement.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Trust Badge */}
            <motion.div 
              className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent border border-primary/10 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="text-xs text-gray-400">
                Trusted by startups and enterprises worldwide 🌍
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}