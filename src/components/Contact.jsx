import { motion } from 'motion/react';
import { Send, MapPin, Mail, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Let's build something <span className="text-gradient">remarkable.</span></h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-md">
              Whether you have a specific project in mind or just want to explore possibilities, our team is ready to deliver.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider block">Email Us</div>
                  <a href="mailto:hello@pixelnex.com" className="text-white hover:text-primary transition-colors text-lg font-medium">nayandas.own@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider block">Location</div>
                  <div className="text-white text-lg font-medium">Remote Worldwide</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/10 relative overflow-hidden"
          >
            {/* Soft glow behind form */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10 absolute pointer-events-none mix-blend-screen" />
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project..." 
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-primary text-white font-bold rounded-xl px-6 py-4 flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
