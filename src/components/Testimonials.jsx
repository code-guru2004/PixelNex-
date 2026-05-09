import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight, Briefcase, Calendar, ShieldCheck } from 'lucide-react';
import { MdTask } from "react-icons/md";

import { useState, useRef, useEffect, useCallback } from 'react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef(null);
  const autoPlayIntervalRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CTO",
      company: "TechInnovate Solutions",
      image: "https://ui-avatars.com/api/?background=6366f1&color=fff&name=Sarah+Johnson",
      content: "PixelNex transformed our outdated platform into a modern, high-performance web application. Their attention to detail and technical expertise exceeded our expectations. The team delivered ahead of schedule and the results have been outstanding.",
      rating: 5,
      project: "E-commerce Platform",
      date: "March 2024"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Founder",
      company: "StartupHub",
      image: "https://ui-avatars.com/api/?background=6366f1&color=fff&name=Michael+Chen",
      content: "Working with PixelNex has been a game-changer for our startup. They understood our vision and built a scalable solution that grew with us. Their proactive approach and technical guidance were invaluable.",
      rating: 5,
      project: "SaaS Platform",
      date: "February 2024"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Product Manager",
      company: "DigitalWave",
      image: "https://ui-avatars.com/api/?background=6366f1&color=fff&name=Emily+Rodriguez",
      content: "The team at PixelNex delivered a stunning UI/UX design that our users love. They're responsive, creative, and truly care about delivering quality. Our conversion rates have increased by 40% since launch.",
      rating: 5,
      project: "Mobile App Design",
      date: "January 2024"
    },
    {
      id: 4,
      name: "David Kim",
      position: "Operations Director",
      company: "Global Logistics Inc",
      image: "https://ui-avatars.com/api/?background=6366f1&color=fff&name=David+Kim",
      content: "PixelNex helped us streamline our operations with custom software that automated critical workflows. Their team was professional, communicative, and delivered a robust solution that saved us countless hours.",
      rating: 5,
      project: "Internal Dashboard",
      date: "December 2023"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      position: "Marketing Director",
      company: "CreativeAgency",
      image: "https://ui-avatars.com/api/?background=6366f1&color=fff&name=Lisa+Thompson",
      content: "Exceptional service from start to finish. PixelNex built a beautiful, responsive website that perfectly captures our brand identity. The ongoing support has been fantastic as well.",
      rating: 5,
      project: "Corporate Website",
      date: "November 2023"
    }
  ];

  const stats = [
    { value: '50+', label: 'Happy Clients' },
    { value: '98%', label: 'Satisfaction Rate' },
    { value: '4.9', label: 'Average Rating' },
    { value: '100+', label: 'Projects Completed' }
  ];

  // Next slide function
  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  // Previous slide function
  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  // Go to specific slide
  const goToSlide = (index) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    // Reset auto-play timer when manually navigating
    resetAutoPlay();
  };

  // Start auto-play
  const startAutoPlay = useCallback(() => {
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
    }
    autoPlayIntervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
    setIsAutoPlaying(true);
  }, [nextSlide]);

  // Stop auto-play
  const stopAutoPlay = useCallback(() => {
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
      autoPlayIntervalRef.current = null;
    }
    setIsAutoPlaying(false);
  }, []);

  // Reset auto-play
  const resetAutoPlay = useCallback(() => {
    stopAutoPlay();
    startAutoPlay();
  }, [stopAutoPlay, startAutoPlay]);

  // Handle mouse enter - pause auto-play
  const handleMouseEnter = () => {
    stopAutoPlay();
  };

  // Handle mouse leave - resume auto-play
  const handleMouseLeave = () => {
    startAutoPlay();
  };

  // Handle touch start for swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  // Handle touch end for swipe
  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const swipeThreshold = 50;
    const diff = touchStartX.current - touchEndX.current;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  // Initialize auto-play on mount
  useEffect(() => {
    startAutoPlay();
    
    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
      }
    };
  }, [startAutoPlay]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { duration: 0.5, ease: "easeInOut" },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -500 : 500,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { duration: 0.5, ease: "easeInOut" },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    })
  };

  return (
    <section 
      ref={sectionRef}
      id="testimonials" 
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
        className="absolute top-40 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: [0, -40, 0],
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
            <Star size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Testimonials</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            What Our Clients Say
          </motion.h2>
          
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Don't just take our word for it - hear from our satisfied clients
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-white/[0.02] border border-white/10"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial Carousel */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-20 w-10 h-10 rounded-full bg-white/10 border border-white/20 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 flex items-center justify-center text-white"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-20 w-10 h-10 rounded-full bg-white/10 border border-white/20 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 flex items-center justify-center text-white"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>

          {/* Carousel Content */}
          <div className="relative overflow-hidden rounded-3xl min-h-[450px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10"
              >
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote size={48} className="text-primary/30" />
                </div>
                
                {/* Testimonial Content */}
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
                  "{testimonials[currentIndex].content}"
                </p>
                
                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                
                {/* Client Info */}
                <div className="flex items-center gap-4 flex-wrap">
                  <img 
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary/30"
                  />
                  <div className="flex-1 min-w-[200px]">
                    <h4 className="text-white font-semibold text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-400 text-sm">
                      {testimonials[currentIndex].position} at {testimonials[currentIndex].company}
                    </p>
                    <div className="flex items-center gap-4 mt-1 flex-wrap">
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Briefcase size={10} />
                        {testimonials[currentIndex].project}
                      </span>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Calendar size={10} />
                        {testimonials[currentIndex].date}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? 'w-8 bg-primary' 
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-[-30px] flex gap-1">
            <div className={`w-1 h-1 rounded-full transition-colors duration-300 ${isAutoPlaying ? 'bg-primary' : 'bg-gray-600'}`} />
            <div className={`w-1 h-1 rounded-full transition-colors duration-300 ${isAutoPlaying ? 'bg-primary' : 'bg-gray-600'}`} />
            <div className={`w-1 h-1 rounded-full transition-colors duration-300 ${isAutoPlaying ? 'bg-primary' : 'bg-gray-600'}`} />
          </div>
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
            <ShieldCheck size={14} className="text-primary" />
            <span className="text-xs text-gray-500">Trusted by 50+ Companies</span>
          </div>
          <div className="flex items-center gap-2">
          <Star size={14} className="text-primary" />
            <span className="text-xs text-gray-500">4.9-Star Rated on Clutch</span>
          </div>
          <div className="flex items-center gap-2">
          <MdTask size={14} className="text-primary" />
            <span className="text-xs text-gray-500">100+ Successful Projects</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}