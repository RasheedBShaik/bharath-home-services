"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiMessageSquare, FiArrowUpRight } from 'react-icons/fi';
import { TESTIMONIALS } from '@/data/testimonials';

const TestimonialsPage = () => {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Header */}
        <header className="mb-24 relative">
          <div className="flex items-center gap-2 text-green-600 mb-6">
            <div className="w-12 h-0.5 bg-green-600" />
            <span className="font-black uppercase tracking-[0.3em] text-[10px]">What they say</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
            Client <span className="text-green-600">Stories</span>
          </h1>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 border-t border-slate-100 pt-12">
            <p className="max-w-xl text-slate-500 font-bold uppercase tracking-widest text-xs leading-relaxed">
              From luxury villas in Nellore to commercial hubs across Andhra Pradesh, our clients speak for our quality and dedication.
            </p>
            <div className="flex items-center gap-4">
               <div className="text-right">
                  <p className="text-2xl font-black text-slate-900 leading-none">4.9/5</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Average Rating</p>
               </div>
               <div className="flex gap-0.5 text-yellow-400">
                  {[...Array(5)].map((_, i) => <FiStar key={i} fill="currentColor" size={16} />)}
               </div>
            </div>
          </div>
        </header>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={testimonial.id}
              className="break-inside-avoid relative p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 transition-all duration-500 group hover:bg-slate-900"
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
                <div className="relative">
                    <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-14 h-14 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
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
        </div>

        {/* Bottom Call to Action */}
        <section className="mt-32 p-12 md:p-24 bg-green-600 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
            <div className="relative z-10">
                <h3 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
                    Start Your <br /> <span className="text-green-900">Success Story.</span>
                </h3>
                <p className="text-green-100 uppercase tracking-widest text-[10px] font-bold">
                    Join hundreds of satisfied clients in Andhra Pradesh.
                </p>
            </div>

            {/* Decorative background circle */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-green-500 rounded-full opacity-50 blur-3xl" />
        </section>
      </div>
    </main>
  );
};

export default TestimonialsPage;