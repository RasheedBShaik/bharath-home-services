"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
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

  // Sensitivity for the swipe
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const variants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 10,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2 },
    }),
  };

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8 md:mb-12">
          <div>
            <div className="flex items-center gap-2 text-green-600 mb-2">
              <div className="w-8 h-px bg-green-600" />
              <span className="font-bold uppercase tracking-widest text-[10px]">
                Project Archive
              </span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Featured <span className="text-slate-300 italic">Stack</span>
            </h2>
          </div>

          {/* CONTROLS - Hidden on small mobile to save space, visible on tablet+ */}
          <div className="flex items-center gap-4 self-end md:self-auto">
            <button
              onClick={() => paginate(-1)}
              disabled={imageIndex === 0}
              className="p-3 border border-neutral-200 hover:bg-neutral-900 hover:text-white transition-colors disabled:opacity-10"
            >
              <ArrowLeft size={18} />
            </button>
            <span className="text-sm font-black tabular-nums min-w-12.5 text-center">
              {imageIndex + 1} / {G_IMAGES.length}
            </span>
            <button
              onClick={() => paginate(1)}
              disabled={imageIndex === G_IMAGES.length - 1}
              className="p-3 border border-neutral-200 hover:bg-neutral-900 hover:text-white transition-colors disabled:opacity-10"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* VIEWPORT CONTAINER */}
        <div className="relative h-137.5 md:h-auto md:aspect-21/9 w-full max-w-5xl mx-auto touch-pan-y">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              // SWIPE LOGIC
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute inset-0 bg-white border border-neutral-100 shadow-2xl flex flex-col md:flex-row group overflow-hidden cursor-grab active:cursor-grabbing"
            >
              {/* IMAGE PART - Height fixed on mobile */}
              <div className="relative w-full h-62.5 md:h-full md:w-2/3 bg-neutral-100 overflow-hidden shrink-0">
                <img
                  src={G_IMAGES[imageIndex].url}
                  className="w-full h-full object-cover pointer-events-none"
                  alt={G_IMAGES[imageIndex].title}
                />
                {/* Mobile Swipe Indicator (Optional hint) */}
                <div className="absolute bottom-4 right-4 md:hidden bg-black/20 backdrop-blur-sm px-2 py-1 rounded text-[10px] text-white uppercase font-bold tracking-tighter">
                  Swipe to navigate
                </div>
              </div>

              {/* CONTENT PART */}
              <div className="w-full md:w-1/3 p-6 md:p-8 flex flex-col justify-center bg-white border-l border-neutral-50 h-full">
                <span className="text-green-600 font-bold text-[10px] tracking-widest mb-2 block">
                  NO. {G_IMAGES[imageIndex].id}
                </span>
                <h3 className="text-xl md:text-2xl font-black text-neutral-900 uppercase leading-tight mb-3">
                  {G_IMAGES[imageIndex].title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                  "Our commitment to excellence in residential service
                  delivery."
                </p>
                <div className="mt-auto md:mt-0">
                  <Link href="/gallery">
                    <button className="text-neutral-900 font-black text-xs uppercase tracking-tighter border-b-2 border-green-500 self-start pb-1 hover:text-green-600 transition-colors">
                      View All Projects
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* SWIPE DOTS (Mobile visual feedback) */}
        <div className="flex justify-center gap-2 mt-8 md:hidden">
          {G_IMAGES.slice(0, 5).map((_, i) => (
            <div
              key={i}
              className={`h-1 transition-all duration-300 ${imageIndex % 5 === i ? "w-8 bg-green-500" : "w-2 bg-neutral-200"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeStackGallery;
