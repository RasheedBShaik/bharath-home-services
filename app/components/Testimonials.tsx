"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import Link from "next/link";
import { TESTIMONIALS } from "@/data/testimonials";

const HomeTestimonials = () => {
  const visibleTestimonials = TESTIMONIALS.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="flex-1">
            <div className="flex items-center gap-2 text-green-600 mb-3 md:mb-4">
              <div className="w-8 md:w-12 h-0.5 bg-green-600" />
              <span className="font-black uppercase tracking-[0.3em] text-[9px] md:text-[10px]">
                Client Stories
              </span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-balance">
              Trusted <span className="text-slate-300 italic">Voices</span>
            </h2>
          </div>
        </div>

        {/* --- Testimonials Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {visibleTestimonials.map((t, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={t.id}
              className="group p-8 md:p-10 bg-slate-50 rounded-4xl md:rounded-[2.5rem] border border-slate-100 hover:bg-slate-900 transition-all duration-500 md:hover:-translate-y-4"
            >
              <div className="flex gap-1 mb-5 md:mb-6 text-green-500">
                {[...Array(t.rating)].map((_, i) => (
                  <FiStar key={i} fill="currentColor" size={14} />
                ))}
              </div>

              <p className="text-lg md:text-xl font-medium text-slate-800 mb-8 leading-relaxed group-hover:text-white transition-colors">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full grayscale group-hover:grayscale-0 transition-all border-2 border-white"
                />
                <div>
                  <h4 className="font-black uppercase tracking-tighter text-sm md:text-base text-slate-900 group-hover:text-white">
                    {t.name}
                  </h4>
                  <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-green-500">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-12 md:mt-16">
          <Link
            href="/testimonials"
            className="px-8 py-3 bg-slate-900 text-white font-bold uppercase text-[10px] tracking-widest rounded-full hover:bg-green-600 transition-all duration-300"
          >
            View More
          </Link>
        </div>

        {/* --- CTA Section --- */}
        <section className="mt-20 md:mt-32 p-8 md:p-20 bg-green-600 rounded-[2.5rem] md:rounded-[4rem] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-8 overflow-hidden relative group">
          <div className="relative z-10 w-full">
            <h3 className="text-[2.5rem] md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8 text-balance">
              Start Your <br />
              <span className="text-green-900">Success Story</span>
            </h3>
            
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
              <Link
                href="/contact"
                className="w-full md:w-auto inline-block hover:text-black hover:bg-white bg-black text-white px-8 py-5 text-xs font-bold uppercase tracking-widest transition-all text-center"
              >
                Contact us
              </Link>
              
              <p className="text-green-100 uppercase tracking-[0.2em] text-[9px] md:text-[10px] font-bold opacity-80 leading-relaxed">
                Join hundreds of satisfied <br className="hidden md:block" /> 
                clients in Andhra Pradesh.
              </p>
            </div>
          </div>

          {/* Decorative background circle */}
          <div className="absolute -bottom-12 -right-12 md:-bottom-24 md:-right-24 w-64 h-64 md:w-96 md:h-96 bg-green-400 rounded-full opacity-30 blur-3xl group-hover:bg-green-300 transition-colors duration-700" />
        </section>
      </div>
    </section>
  );
};

export default HomeTestimonials;