"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { G_IMAGES } from "../../data/gallery";
import Link from "next/link";

const HomeStackGallery = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = page;

  const paginate = (newDirection: number) => {
    const nextIndex = page + newDirection;
    if (nextIndex >= 0 && nextIndex < G_IMAGES.length) {
      setPage([nextIndex, newDirection]);
    }
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const variants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "20%" : "-20%",
      y: 10,
      opacity: 0,
      rotate: direction > 0 ? 2 : -2,
      scale: 0.9,
    }),
    center: {
      zIndex: 10,
      x: 0,
      y: 0,
      rotate: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 200, damping: 25 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      },
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "20%" : "-20%",
      y: 10,
      opacity: 0,
      rotate: direction < 0 ? 2 : -2,
      scale: 0.9,
      transition: { duration: 0.3 },
    }),
  };

  return (
    <section className="py-24 px-6 bg-white overflow-hidden relative">
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 opacity-[0.03] select-none pointer-events-none hidden lg:block">
        <h2 className="text-[25rem] font-black uppercase tracking-tighter">Stack</h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-green-600">
              <span className="w-12 h-0.5 bg-green-600" />
              <span className="font-black uppercase tracking-[0.3em] text-[10px]">
                Portfolio Archive 2026
              </span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-neutral-900">
              Featured <br />
              <span className="text-transparent" style={{ WebkitTextStroke: "1px #171717" }}>Projects</span>
            </h2>
          </div>

          {/* CONTROLS */}
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-end mr-4">
               <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Navigation</span>
               <span className="text-xl font-black tabular-nums text-neutral-900">
                {String(imageIndex + 1).padStart(2, '0')} / {String(G_IMAGES.length).padStart(2, '0')}
              </span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => paginate(-1)}
                disabled={imageIndex === 0}
                className="w-14 h-14 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-all disabled:opacity-10 active:scale-90"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                onClick={() => paginate(1)}
                disabled={imageIndex === G_IMAGES.length - 1}
                className="w-14 h-14 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-all disabled:opacity-10 active:scale-90"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* VIEWPORT CONTAINER */}
        <div className="relative h-150 md:h-137.5 w-full max-w-6xl mx-auto touch-pan-y">
          
          {/* Ghost Stack Effect Behind */}
          <div className="absolute inset-4 bg-neutral-50 border border-neutral-100 rounded-[2.5rem] -rotate-2 scale-[0.98] pointer-events-none" />
          
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) paginate(1);
                else if (swipe > swipeConfidenceThreshold) paginate(-1);
              }}
              className="absolute inset-0 bg-white border border-neutral-100 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] rounded-[2.5rem] flex flex-col md:flex-row overflow-hidden cursor-grab active:cursor-grabbing"
            >
              {/* IMAGE PART */}
              <div className="relative w-full h-75 md:h-full md:w-3/5 overflow-hidden">
                <motion.img
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                  src={G_IMAGES[imageIndex].url}
                  className="w-full h-full object-cover pointer-events-none transition-all duration-700"
                  alt={G_IMAGES[imageIndex].title}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
              </div>

              {/* CONTENT PART */}
              <div className="w-full md:w-2/5 p-10 md:p-16 flex flex-col justify-center bg-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-green-600 font-black text-[10px] tracking-[0.4em] mb-4 block">
                    PROJECT REF. {G_IMAGES[imageIndex].id}
                  </span>
                  
                  <h3 className="text-3xl md:text-5xl font-black text-neutral-900 uppercase leading-[0.9] tracking-tighter mb-6">
                    {G_IMAGES[imageIndex].title}
                  </h3>
                  
                  <p className="text-neutral-500 text-sm md:text-base leading-relaxed mb-8 font-medium">
                    We redefine the standards of residential excellence through 
                    meticulous attention to detail and professional integrity.
                  </p>

                  <Link href="/gallery" className="inline-flex group items-center gap-4">
                    <span className="text-neutral-900 font-black text-xs uppercase tracking-widest border-b-2 border-green-500 pb-1 group-hover:text-green-600 transition-colors">
                      View All Gallery
                    </span>
                    <div className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all">
                      <ArrowUpRight size={14} />
                    </div>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* PROGRESS BAR (Instead of Dots) */}
        <div className="mt-16 max-w-md mx-auto h-0.5 bg-neutral-100 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-green-500"
            animate={{ width: `${((imageIndex + 1) / G_IMAGES.length) * 100}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeStackGallery;