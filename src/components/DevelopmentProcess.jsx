import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Lightbulb, 
  PenTool, 
  Code2, 
  Beaker,
  Rocket,
  Heart,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  Target,
  Zap
} from 'lucide-react';
import { useRef, useState } from 'react';

export default function DevelopmentProcess() {
  const sectionRef = useRef(null);
  const [hoveredStage, setHoveredStage] = useState(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const stages = [
    {
      id: 1,
      title: "Discovery",
      icon: <Lightbulb size={28} />,
      description: "We dive deep into your business goals, target audience, and technical requirements to create a solid foundation.",
      duration: "1-2 weeks",
      deliverables: [
        "Requirements analysis",
        "Technical specification",
        "Project timeline",
        "Resource planning"
      ],
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/30",
      textColor: "text-amber-400"
    },
    {
      id: 2,
      title: "Design",
      icon: <PenTool size={28} />,
      description: "Our designers create stunning, user-centered interfaces with interactive prototypes for your feedback.",
      duration: "2-3 weeks",
      deliverables: [
        "Wireframes",
        "UI/UX Design",
        "Interactive prototype",
        "Design system"
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      textColor: "text-purple-400"
    },
    {
      id: 3,
      title: "Development",
      icon: <Code2 size={28} />,
      description: "Agile development with regular sprints, code reviews, and continuous integration for quality assurance.",
      duration: "4-8 weeks",
      deliverables: [
        "Frontend development",
        "Backend APIs",
        "Database setup",
        "Unit testing"
      ],
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/30",
      textColor: "text-cyan-400"
    },
    {
      id: 4,
      title: "Testing",
      icon: <Beaker size={28} />,
      description: "Rigorous quality assurance including functional, performance, and security testing.",
      duration: "1-2 weeks",
      deliverables: [
        "QA testing",
        "Bug fixes",
        "Performance optimization",
        "Security audit"
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      textColor: "text-green-400"
    },
    {
      id: 5,
      title: "Deployment",
      icon: <Rocket size={28} />,
      description: "Seamless deployment to production with minimal downtime and comprehensive monitoring.",
      duration: "1 week",
      deliverables: [
        "Production deployment",
        "Server configuration",
        "SSL/HTTPS setup",
        "Monitoring tools"
      ],
      color: "from-red-500 to-orange-500",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30",
      textColor: "text-red-400"
    },
    {
      id: 6,
      title: "Support",
      icon: <Heart size={28} />,
      description: "Ongoing maintenance, updates, and dedicated technical support for long-term success.",
      duration: "Ongoing",
      deliverables: [
        "24/7 monitoring",
        "Bug fixes",
        "Feature updates",
        "Technical support"
      ],
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/30",
      textColor: "text-indigo-400"
    }
  ];

  const processStats = [
    { value: '6', label: 'Stages', icon: <CheckCircle size={16} /> },
    { value: '2-4', label: 'Weeks Avg', icon: <Clock size={16} /> },
    { value: '100%', label: 'Agile Process', icon: <Zap size={16} /> },
    { value: '24/7', label: 'Support', icon: <Heart size={16} /> }
  ];

  return (
    <section 
      ref={sectionRef}
      id="process" 
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
        className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 18,
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
            <Target size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Our Process</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            How We Work
          </motion.h2>
          
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A streamlined development process that ensures quality and transparency at every stage
          </motion.p>
        </motion.div>

        {/* Process Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {processStats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-white/[0.02] border border-white/10"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-center gap-2 text-primary mb-3">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
         

          {/* Stages Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onHoverStart={() => setHoveredStage(stage.id)}
                onHoverEnd={() => setHoveredStage(null)}
                className="relative"
              >
                {/* Stage Number Badge */}
                <div className="absolute -top-3 -left-3 z-10">
                  <motion.div 
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${stage.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}
                    animate={{
                      scale: hoveredStage === stage.id ? 1.1 : 1,
                      rotate: hoveredStage === stage.id ? 360 : 0
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {stage.id}
                  </motion.div>
                </div>

             
                <motion.div
                  className={`relative rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden transition-all duration-300 ${
                    hoveredStage === stage.id ? 'border-opacity-100' : ''
                  }`}
                  style={{
                    boxShadow: hoveredStage === stage.id ? `0 0 30px rgba(99, 102, 241, 0.2)` : 'none'
                  }}
                >
                  {/* Gradient overlay on hover */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${stage.color} opacity-0 transition-opacity duration-500`}
                    animate={{ opacity: hoveredStage === stage.id ? 0.05 : 0 }}
                  />

                  <div className="p-6 relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-xl ${stage.bgColor} border ${stage.borderColor}`}>
                        <div className={stage.textColor}>
                          {stage.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{stage.title}</h3>
                        <div className="flex items-center gap-2 mb-3">
                          <Clock size={12} className="text-gray-500" />
                          <span className="text-xs text-gray-500">{stage.duration}</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {stage.description}
                        </p>
                      </div>
                    </div>

                    {/* Deliverables */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: hoveredStage === stage.id ? 1 : 0,
                        height: hoveredStage === stage.id ? 'auto' : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <p className="text-xs font-semibold text-gray-400 mb-3 flex items-center gap-2">
                          <CheckCircle size={12} className="text-primary" />
                          Deliverables
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                          {stage.deliverables.map((item, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              className="flex items-center gap-2"
                            >
                              <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${stage.color}`} />
                              <span className="text-xs text-gray-500">{item}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    {/* Progress indicator */}
                    <div className="mt-4 pt-3">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-gray-600">Stage {stage.id}/6</span>
                        <span className={stage.textColor}>{Math.round((stage.id / stages.length) * 100)}%</span>
                      </div>
                      <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${stage.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(stage.id / stages.length) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.3 }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Curved Path Animation for Desktop */}
        <div className="hidden lg:block relative mt-8">
          <svg className="w-full h-20" viewBox="0 0 1200 80">
            <path
              d="M 0 40 Q 300 40, 400 40 Q 500 40, 600 40 Q 700 40, 800 40 Q 900 40, 1200 40"
              stroke="url(#arrowGradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="8,8"
            />
          </svg>
        </div>

        {/* Trust Indicators */}
        <motion.div 
          className="mt-16 flex flex-wrap justify-center gap-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex items-center gap-2">
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs text-gray-500">Agile Methodology</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs text-gray-500">Regular Updates</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs text-gray-500">Quality Assured</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs text-gray-500">On-Time Delivery</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}