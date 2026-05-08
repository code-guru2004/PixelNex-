import { motion } from 'motion/react';
import { Layers } from 'lucide-react';

export default function TechStack() {
  const technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'JavaScript / TypeScript', category: 'Language' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'MongoDB / MySQL', category: 'Database' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'Framer Motion', category: 'Animation' },
    { name: 'Next.js', category: 'Framework' },
    { name: 'GitHub', category: 'VCS' }
  ];

  return (
    <section id="tech" className="py-24 relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-center"
        >
          <div className="p-4 rounded-full bg-primary/10 text-primary mb-6 inline-block">
            <Layers size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Powered by modern tech.</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">We leverage the best-in-class technologies to build resilient, fast, and scalable applications.</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="px-6 py-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-primary/50 transition-all flex flex-col items-center gap-1 min-w-[140px]"
            >
              <span className="font-semibold text-white">{tech.name}</span>
              <span className="text-xs text-gray-500 uppercase tracking-widest">{tech.category}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
