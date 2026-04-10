"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FiStar, FiMessageSquare } from 'react-icons/fi';
import { TESTIMONIALS } from '@/data/testimonials';

const TestimonialsPage = () => {
  // Animation Variants
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const cardVars: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Cinematic ease
      },
    },
  };

  return (
    <main className="min-h-screen bg-white pt-32 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- PAGE HEADER --- */}
        <header className="mb-24 relative">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-green-600 mb-6"
          >
            <div className="w-12 h-0.5 bg-green-600" />
            <span className="font-black uppercase tracking-[0.3em] text-[10px]">What they say</span>
          </motion.div>

          {/* Masked Heading Reveal */}
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.85] mb-8"
            >
              Client <span className="text-green-600">Stories</span>
            </motion.h1>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-center justify-between gap-8 border-t border-slate-100 pt-12"
          >
            <p className="max-w-xl text-slate-500 font-bold uppercase tracking-widest text-xs leading-relaxed">
              From luxury villas in Nellore to commercial hubs across Andhra Pradesh, our clients speak for our quality and dedication.
            </p>
            <div className="flex items-center gap-4">
               <div className="text-right">
                  <p className="text-2xl font-black text-slate-900 leading-none">4.9/5</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Average Rating</p>
               </div>
               <div className="flex gap-0.5 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + (i * 0.1) }}
                    >
                      <FiStar fill="currentColor" size={16} />
                    </motion.div>
                  ))}
               </div>
            </div>
          </motion.div>
        </header>

        {/* --- MASONRY GRID --- */}
        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div
              variants={cardVars}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              key={testimonial.id}
              className="break-inside-avoid relative p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 transition-all duration-500 group hover:bg-slate-900 hover:shadow-2xl"
            >
              {/* Quote Icon */}
              <div className="absolute top-10 right-10 opacity-10 group-hover:text-white transition-colors">
                <FiMessageSquare size={40} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-8 text-green-600 group-hover:text-green-400 transition-colors">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} fill="currentColor" size={14} />
                ))}
              </div>

              {/* Content */}
              <p className="text-xl font-bold text-slate-800 leading-relaxed mb-10 group-hover:text-white transition-colors">
                "{testimonial.content}"
              </p>

              {/* Profile */}
              <div className="flex items-center gap-4 border-t border-slate-200 group-hover:border-white/10 pt-8">
                <div className="relative overflow-hidden rounded-2xl">
                    <motion.img 
                        whileHover={{ scale: 1.1 }}
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-14 h-14 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white group-hover:border-slate-900 flex items-center justify-center">
                        <FiStar size={10} className="text-white" fill="currentColor" />
                    </div>
                </div>
                <div>
                  <h4 className="font-black uppercase tracking-tighter text-slate-900 group-hover:text-white transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-green-500 transition-colors">
                    {testimonial.role} • {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Branded Background Element */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="fixed -bottom-20 -left-20 text-[25vh] font-black text-slate-100 pointer-events-none select-none -z-10 uppercase tracking-tighter"
      >
        Stories
      </motion.div>
    </main>
  );
};

export default TestimonialsPage;