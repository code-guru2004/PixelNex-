import { Github, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="text-center md:text-left">
            <a href="#" className="flex items-center gap-3 mb-4 justify-center md:justify-start">
              <img src="/logo.png" alt="PixelNex Logo" className="h-8 w-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all" />
              <span className="text-2xl font-bold font-display tracking-tight text-white hidden sm:block">
                Pixel<span className="text-primary">Nex</span>
              </span>
            </a>
            <p className="text-gray-500 text-sm">We build scalable and modern digital solutions.</p>
          </div>

          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
              <Github size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
              <Instagram size={18} />
            </a>
          </div>
          
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            &copy; {currentYear} PixelNex Software Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
