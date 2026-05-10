import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Users, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Code2,
  Linkedin,
  Github,
  Twitter,
  Sparkles,
  Award,
  Calendar,
  Heart,
  ChevronRight
} from 'lucide-react';
import { useRef, useState } from 'react';

export default function Developers() {
  const [hoveredDev, setHoveredDev] = useState(null);
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const developers = [
    {
      id: 1,
      name: "Nayan Das",
      role: "Full Stack Developer",
      image: "https://ui-avatars.com/api/?background=6366f1&color=fff&name=Nayan+Das",
      education: "B.Tech in CSE - Hooghly Engineering and Technology College",
      experience: "2+ years",
      currentRole: "Full Stack Developer Intern at Nivionx Omnicare Pvt Ltd",
      phone: "+91 9062674732",
      email: "nayandas.own@gmail.com",
      location: "Kolkata, India",
      skills: ["React", "Node.js", "TypeScript", "Tailwind CSS", "MongoDB", "Express"],
      social: {
        linkedin: "https://www.linkedin.com/in/nayan-das2004/",
        github: "https://github.com/code-guru2004",
        twitter: "https://twitter.com/nayandas"
      },
      achievements: [
        "Built 15+ production-ready applications",
        "Open source contributor",
        "Technical blog writer"
      ],
      bio: "Passionate full-stack developer with a focus on creating scalable web applications. Experienced in modern JavaScript frameworks and cloud technologies."
    },
    {
      id: 2,
      name: "Prithwish Das",
      role: "Software Engineer, Business Development Representative, Relationship Manager",
      image: "https://ui-avatars.com/api/?background=6366f1&color=fff&name=Prithwish+Das",
      education: "B.Tech in Computer Science & Engineering - UEM Kolkata",
      experience: "1+ Years",
      currentRole: "Relationship Manager",
      phone: "+91 7439570263",
      email: "dasprithwish444@gmail.com",
      location: "Kolkata, West Bengal, India",
      skills: [
        "Client Interaction",
        "Business Development",
        "Relationship Management",
        "Communication",
        "Frontend Development",
        "JavaScript",
      ],
      social: {
        linkedin: "https://www.linkedin.com/in/prithwish-das-971791266/",
        github: "https://github.com/Prithwish20",
        twitter: "https://twitter.com/prithwishdas"
      },
      achievements: [
        "Worked on business development and client relationship management",
        "Participated in hackathons and technical projects",
        "Contributed to tech communities and collaborative projects"
      ],
      bio: "Passionate software engineer with experience in frontend and backend development, business development, and relationship management. Skilled in building modern web applications, handling client interactions, and delivering user-focused digital solutions."
    }
  ];

  const teamStats = [
    { value: '2', label: 'Core Developers', icon: <Users size={20} /> },
    { value: '25+', label: 'Projects Completed', icon: <Code2 size={20} /> },
    { value: '3+', label: 'Years Combined Experience', icon: <Briefcase size={20} /> },
    
  ];

  return (
    <section 
      ref={sectionRef}
      id="developers" 
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
          y: [0, -30, 0],
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
          y: [0, 30, 0],
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
            <Users size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Our Team</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Meet Our Developers
          </motion.h2>
          
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The passionate minds behind PixelNex's innovative solutions
          </motion.p>
        </motion.div>

      

        {/* Developers Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {developers.map((dev, index) => (
            <motion.div
              key={dev.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              onHoverStart={() => setHoveredDev(dev.id)}
              onHoverEnd={() => setHoveredDev(null)}
              className="relative group"
            >
              {/* Glow Effect */}
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-purple-500/50 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"
                animate={{
                  opacity: hoveredDev === dev.id ? 0.6 : 0
                }}
              />
              
              <div className="relative rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden transition-all duration-300 h-full backdrop-blur-sm">
                {/* Header Section with Background */}
                <div className="relative h-32 bg-gradient-to-r from-primary/20 to-purple-500/20">
                  <div className="absolute -bottom-12 left-8">
                    <motion.img 
                      src={dev.image}
                      alt={dev.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-background"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8 pt-16">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{dev.name}</h3>
                      <p className="text-primary text-sm font-medium">{dev.role}</p>
                    </div>
                    <div className="flex gap-2">
                      <motion.a
                        href={dev.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/20 transition-all"
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        <Linkedin size={14} />
                      </motion.a>
                      <motion.a
                        href={dev.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/20 transition-all"
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        <Github size={14} />
                      </motion.a>
                      <motion.a
                        href={dev.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/20 transition-all"
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        <Twitter size={14} />
                      </motion.a>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {dev.bio}
                  </p>

                  {/* Education & Experience */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <GraduationCap size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500">Education</p>
                        <p className="text-sm text-gray-300">{dev.education}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Briefcase size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500">Experience</p>
                        <p className="text-sm text-gray-300">{dev.experience} • {dev.currentRole}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500">Location</p>
                        <p className="text-sm text-gray-300">{dev.location}</p>
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-6">
                    <p className="text-xs text-gray-500 mb-3">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {dev.skills.map((skill, idx) => (
                        <motion.span
                          key={idx}
                          className="px-2 py-1 rounded-lg bg-primary/10 border border-primary/20 text-xs text-primary"
                          whileHover={{ scale: 1.05 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                    <p className="text-xs text-gray-500 mb-3 flex items-center gap-2">
                      <Award size={12} />
                      Key Achievements
                    </p>
                    <div className="space-y-2">
                      {dev.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                          <ChevronRight size={10} className="text-primary" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="pt-4 border-t border-white/10 space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail size={14} className="text-gray-500" />
                      <a href={`mailto:${dev.email}`} className="text-sm text-gray-300 hover:text-primary transition-colors">
                        {dev.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={14} className="text-gray-500" />
                      <span className="text-sm text-gray-300">{dev.phone}</span>
                    </div>
                  </div>

                  {/* Contact Button */}
                  <motion.a
                    href="#contact"
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-primary/20 border border-primary/30 text-primary font-medium hover:bg-primary/30 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Mail size={14} />
                    Contact {dev.name.split(' ')[0]}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join the Team CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/20">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 mb-4">
              <Heart size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Join Our Team
            </h3>
            <p className="text-gray-400 mb-6">
              We're always looking for talented developers to join our growing team.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now
              <ChevronRight size={16} />
            </motion.a>
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
            <span className="text-xs text-gray-500">Passionate Developers</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs text-gray-500">Continuous Learners</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs text-gray-500">Problem Solvers</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}