import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Optics Commerce Platform',
      desc: 'A high-conversion headless e-commerce store with real-time inventory management.',
      tech: ['React', 'Next.js', 'Tailwind CSS', 'Stripe'],
      link: 'https://capable-dodol-3f48d5.netlify.app',
      github: 'https://github.com/Prithwish20/moonlit-optics.git',
      partner: 'Moonlit Optics',
      image: 'moonlit.png'
    },
    {
      title: 'Test Portal-SSC, RRB NTPC, PSC',
      desc: 'Internal developer productivity tracking tool with D3.js data visualizations.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'D3'],
      link: 'https://test-easy-kappa.vercel.app',
      github: '#',
      partner: null,
      image: 'testmate.png'
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Selected Work</h2>
          <p className="text-gray-400 max-w-xl text-lg">Showcasing recent platforms and tools designed for high performance.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden hover:border-primary/50 transition-all"
            >
              <div className="relative h-64 w-full overflow-hidden">
                {proj.partner && (
                  <div className="absolute top-4 left-4 z-20 px-2 py-0.5 rounded-md bg-indigo-500/20 border border-indigo-500/30 text-[10px] text-indigo-300 w-fit mb-2 uppercase tracking-tighter">
                    Made with {proj.partner}
                  </div>
                )}
                <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">{proj.title}</h3>
                <p className="text-gray-400 mb-6 line-clamp-2">{proj.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {proj.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-white/5 rounded-lg text-xs border border-white/5 text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <a href={proj.link} className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a href={proj.github} className="flex items-center gap-2 text-sm font-medium hover:text-white transition-colors text-gray-400">
                    <Github size={16} /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
