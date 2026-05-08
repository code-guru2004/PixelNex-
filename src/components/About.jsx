import { motion } from 'motion/react';
import { Code2, PenTool, Layout, Database } from 'lucide-react';

export default function About() {
  const skills = [
    { icon: <Layout />, label: 'Web Development' },
    { icon: <Database />, label: 'Full Stack' },
    { icon: <PenTool />, label: 'UI/UX Design' },
    { icon: <Code2 />, label: 'API Development' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Engineering <span className="text-gradient">excellence</span><br/>
              driven by passion.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              At PixelNex, we are a collective of developers, designers, and strategists 
              obsessed with building software that scales. We transform complex problems into 
              elegant, user-centric digital products.
            </p>
            
            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 mt-8">
              <span className="text-sm text-gray-400 uppercase tracking-wider block mb-2">Current Partnership</span>
              <div className="text-xl text-white font-medium flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-400 block animate-pulse"></span>
                Moonlit Optics
              </div>
              <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                Currently collaborating with Moonlit Optics to deliver cutting-edge software 
                solutions and elevated user experiences.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-primary/50 transition-all flex flex-col items-start gap-4"
              >
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  {skill.icon}
                </div>
                <h3 className="text-white font-medium text-lg">{skill.label}</h3>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
