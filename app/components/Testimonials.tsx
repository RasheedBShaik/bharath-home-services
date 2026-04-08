"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import Link from 'next/link';
import { TESTIMONIALS } from '@/data/testimonials';

const HomeTestimonials = () => {
  const visibleTestimonials = TESTIMONIALS.slice(0, 3);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="flex-1">
            <div className="flex items-center gap-2 text-green-600 mb-4">
              <div className="w-12 h-0.5 bg-green-600" />
              <span className="font-black uppercase tracking-[0.3em] text-[10px]">
                Client Stories
              </span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
              Trusted{" "}
              <span className="text-slate-300 italic">Voices</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleTestimonials.map((t, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={t.id}
              className="group p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-slate-900 transition-all duration-500 hover:-translate-y-4"
            >
              <div className="flex gap-1 mb-6 text-green-500">
                {[...Array(t.rating)].map((_, i) => (
                  <FiStar key={i} fill="currentColor" size={14} />
                ))}
              </div>

              <p className="text-xl font-medium text-slate-800 mb-8 leading-relaxed group-hover:text-white transition-colors">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full grayscale group-hover:grayscale-0 transition-all border-2 border-white"
                />
                <div>
                  <h4 className="font-black uppercase tracking-tighter text-slate-900 group-hover:text-white">
                    {t.name}
                  </h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-green-500">
                    {t.role} • {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-16">
          <Link
            href="/testimonials"
            className="px-8 py-3 bg-slate-900 text-white font-bold uppercase text-xs tracking-widest rounded-full hover:bg-green-600 transition-all duration-300"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;