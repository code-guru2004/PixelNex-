import { motion } from 'motion/react';

export default function Services() {
  const services = [
    {
      number: '01',
      title: 'Web Development',
      desc: 'High-performance, accessible, and modern web applications built with the latest React and Node.js ecosystems.'
    },
    {
      number: '02',
      title: 'Custom Software',
      desc: 'Tailored SaaS platforms, internal tools, and complex system architectures designed precisely for your business needs.'
    },
    {
      number: '03',
      title: 'UI/UX Design',
      desc: 'Research-backed user interfaces that focus on conversion, accessibility, and modern aesthetic principles.'
    },
    {
      number: '04',
      title: 'Maintenance & Support',
      desc: 'Ongoing code optimization, feature updates, cloud infrastructure scaling, and technical support.'
    }
  ];

  return (
    <section id="services" className="py-24 relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Our Services</h2>
            <p className="text-gray-400 max-w-xl text-lg">Comprehensive technical solutions designed to give your business a competitive edge.</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
          {services.map((svc, i) => (
            <motion.div 
              key={svc.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative border border-white/10 rounded-3xl p-8 bg-white/[0.02] hover:border-primary/50 transition-all"
            >
              <div className="flex flex-col gap-6">
                <span className="font-mono text-sm tracking-widest text-primary font-bold">
                  {svc.number}
                </span>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">{svc.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{svc.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
