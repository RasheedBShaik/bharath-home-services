"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { FiStar, FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import { TESTIMONIALS } from "@/data/testimonials";

const HomeTestimonials = () => {
  const visibleTestimonials = TESTIMONIALS.slice(0, 3);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };
  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        // Add 'as const' right here
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };
  return (
    <section className="py-24 md:py-40 bg-white overflow-hidden relative">
      {/* Background Typography Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-[0.03] select-none pointer-events-none hidden lg:block">
        <h2 className="text-[20rem] font-black uppercase tracking-tighter text-neutral-900">
          Ethics
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="flex items-center gap-3 text-green-600 mb-6">
              <div className="w-12 h-0.5 bg-green-600" />
              <span className="font-black uppercase tracking-[0.4em] text-[10px]">
                Validation
              </span>
            </div>
            <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] text-neutral-900">
              Trusted <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px #171717" }}
              >
                Voices.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/testimonials"
              className="group flex items-center gap-4 bg-neutral-900 text-white px-10 py-5 rounded-full hover:bg-green-600 transition-all shadow-xl hover:shadow-green-100"
            >
              <span className="font-black uppercase tracking-[0.2em] text-[11px]">
                Read All Reviews
              </span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* --- Testimonials Grid --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {visibleTestimonials.map((t, index) => (
            <motion.div
              variants={cardVariants}
              key={t.id}
              className="group p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 hover:bg-neutral-900 transition-all duration-700 md:hover:-translate-y-4 relative overflow-hidden"
            >
              <div className="flex gap-1 mb-8 text-green-500">
                {[...Array(t.rating)].map((_, i) => (
                  <FiStar key={i} fill="currentColor" size={14} />
                ))}
              </div>

              <p className="text-xl md:text-2xl font-medium text-neutral-800 mb-12 leading-relaxed group-hover:text-white transition-colors duration-500">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4 border-t border-neutral-200 pt-8 group-hover:border-neutral-800 transition-colors">
                <div className="relative">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-full grayscale group-hover:grayscale-0 transition-all duration-700 object-cover border-2 border-white shadow-lg"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                  </div>
                </div>
                <div>
                  <h4 className="font-black uppercase tracking-tighter text-base text-neutral-900 group-hover:text-white transition-colors">
                    {t.name}
                  </h4>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 group-hover:text-green-500 transition-colors">
                    {t.role}
                  </p>
                </div>
              </div>

              {/* Decorative Quote Icon on Hover */}
              <span className="absolute -top-4 -right-2 text-[10rem] font-black text-neutral-900/5 group-hover:text-white/5 transition-colors pointer-events-none select-none">
                "
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* --- CTA Section: The Success Story --- */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mt-32 md:mt-48 p-12 md:p-24 bg-green-600 rounded-[4rem] text-white flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative group"
        >
          <div className="relative z-10 max-w-2xl">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-10"
            >
              Start Your <br />
              <span className="text-green-950">Success Story.</span>
            </motion.h3>

            <div className="flex flex-col md:flex-row md:items-center gap-10">
              <Link
                href="/contact"
                className="group/btn relative w-full md:w-auto inline-flex items-center justify-center gap-4 bg-neutral-900 text-white px-12 py-6 text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:bg-white hover:text-neutral-900 shadow-2xl overflow-hidden"
              >
                <span className="relative z-10">Get Started</span>
                <FiArrowRight
                  size={16}
                  className="relative z-10 group-hover/btn:translate-x-2 transition-transform"
                />
              </Link>

              <p className="text-green-100 uppercase tracking-[0.3em] text-[10px] font-black opacity-80 leading-relaxed border-l-2 border-green-400/30 pl-6">
                Join 500+ satisfied <br />
                residents in Nellore.
              </p>
            </div>
          </div>

          {/* Abstract Geometric Shapes */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-40px border-green-500/30 rounded-full"
            />
            <div className="w-32 h-32 bg-green-400 rounded-full blur-3xl opacity-50 group-hover:scale-150 transition-transform duration-1000" />
            <FiStar
              size={80}
              className="text-green-950/20 absolute rotate-12"
            />
          </div>

          {/* Decorative Corner Text */}
          <div className="absolute bottom-10 right-10 text-[10px] font-black uppercase tracking-[0.5em] opacity-20 hidden md:block">
            Est. 2020 • BHS
          </div>
        </motion.section>
      </div>
    </section>
  );
};

export default HomeTestimonials;
