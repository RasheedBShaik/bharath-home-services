"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, X, Maximize2 } from "lucide-react";
import { G_IMAGES } from "../../data/gallery";

const StackGallery = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const imageIndex = page;

  const paginate = (newDirection: number) => {
    const nextIndex = page + newDirection;
    if (nextIndex >= 0 && nextIndex < G_IMAGES.length) {
      setPage([nextIndex, newDirection]);
    }
  };

  // Drag constants for swipe
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const variants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.9,
      rotate: direction > 0 ? 8 : -8,
    }),
    center: {
      zIndex: 10,
      x: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.8,
      rotate: direction < 0 ? 8 : -8,
      transition: { duration: 0.3 },
    }),
  };

  return (
    // min-h-[100dvh] ensures it fills the dynamic mobile viewport
    <div className="bg-white  relative overflow-hidden flex flex-col pt-32 pb-24">
      {/* HEADER - Tighter on mobile */}
      <div className="px-6 md:px-20 mb-12 relative z-20">
        <div className="overflow-hidden py-2">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1], // Custom cinematic cubic-bezier
              delay: 0.2,
            }}
            className="text-5xl md:text-9xl font-black uppercase tracking-tighter leading-none"
          >
            Our <span className="text-green-600 outline-text">Image</span>{" "}
            Gallery
          </motion.h1>
        </div>

        {/* Optional: Add a sliding accent line for extra flair */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
          className="h-1 w-24 bg-green-600 origin-left mt-4"
        />
      </div>

      <div className="relative grow flex items-center justify-center px-4 md:px-0">
        {/* SIDE PREVIEWS - Hidden on small screens */}
        {imageIndex > 0 && (
          <button
            onClick={() => paginate(-1)}
            className="absolute left-10 max-w-2xl aspect-video w-1/4 opacity-20 hover:opacity-60 transition-opacity hidden xl:block grayscale scale-75 -rotate-12 border border-neutral-200 bg-neutral-50 overflow-hidden z-0"
          >
            <img
              src={G_IMAGES[imageIndex - 1].url}
              className="w-full h-full object-cover"
              alt="prev"
            />
          </button>
        )}

        {/* MAIN STACK */}
        <div className="relative w-full max-w-4xl aspect-4/5 md:aspect-video z-10">
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
              dragElastic={0.7}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) paginate(1);
                else if (swipe > swipeConfidenceThreshold) paginate(-1);
              }}
              className="absolute inset-0 bg-white border border-neutral-200 shadow-2xl flex flex-col group cursor-grab active:cursor-grabbing overflow-hidden rounded-xl md:rounded-sm"
            >
              <div
                className="relative grow overflow-hidden bg-neutral-100"
                onClick={() => setIsFullscreen(true)}
              >
                <img
                  src={G_IMAGES[imageIndex].url}
                  className="w-full h-full object-cover pointer-events-none"
                  alt={G_IMAGES[imageIndex].title}
                />
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md p-3 text-neutral-900 rounded-full shadow-lg md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={20} />
                </div>
              </div>

              <div className="p-5 md:p-8 bg-white">
                <span className="text-green-600 font-black text-[10px] uppercase tracking-widest block mb-1">
                  Project No. {G_IMAGES[imageIndex].id}
                </span>
                <h3 className="text-neutral-900 font-black uppercase text-xl md:text-4xl tracking-tighter leading-tight">
                  {G_IMAGES[imageIndex].title}
                </h3>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {imageIndex < G_IMAGES.length - 1 && (
          <button
            onClick={() => paginate(1)}
            className="absolute right-10 max-w-2xl aspect-video w-1/4 opacity-20 hover:opacity-60 transition-opacity hidden xl:block grayscale scale-75 rotate-12 border border-neutral-200 bg-neutral-50 overflow-hidden z-0"
          >
            <img
              src={G_IMAGES[imageIndex + 1].url}
              className="w-full h-full object-cover"
              alt="next"
            />
          </button>
        )}
      </div>

      {/* CONTROLS - Optimized for Thumbs */}
      <div className="mt-8 flex flex-col items-center gap-6 relative z-20">
        <div className="flex items-center gap-6 md:gap-16">
          <button
            onClick={() => paginate(-1)}
            disabled={imageIndex === 0}
            className={`p-5 md:p-6 rounded-full border transition-all active:scale-95 ${
              imageIndex === 0
                ? "opacity-20 pointer-events-none"
                : "border-neutral-200 bg-neutral-50 hover:bg-neutral-900 hover:text-white"
            }`}
          >
            <ArrowLeft size={24} />
          </button>

          <div className="text-center min-w-20">
            <p className="text-neutral-900 font-black text-2xl tracking-tighter tabular-nums">
              {imageIndex + 1}{" "}
              <span className="text-neutral-300">/ {G_IMAGES.length}</span>
            </p>
            <div className="w-full h-0.75 bg-neutral-100 mt-2 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-green-500"
                animate={{
                  width: `${((imageIndex + 1) / G_IMAGES.length) * 100}%`,
                }}
              />
            </div>
          </div>

          <button
            onClick={() => paginate(1)}
            disabled={imageIndex === G_IMAGES.length - 1}
            className={`p-5 md:p-6 rounded-full border transition-all active:scale-95 ${
              imageIndex === G_IMAGES.length - 1
                ? "opacity-20 pointer-events-none"
                : "border-neutral-200 bg-neutral-50 hover:bg-neutral-900 hover:text-white"
            }`}
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>

      {/* FULLSCREEN MODAL - Swipe enabled */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-200 bg-white flex flex-col"
          >
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-6 right-6 text-neutral-900 z-210 p-4 bg-neutral-100 rounded-full"
            >
              <X size={24} />
            </button>

            <motion.div
              className="grow flex flex-col items-center justify-center p-4 touch-none"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) paginate(1);
                else if (swipe > swipeConfidenceThreshold) paginate(-1);
              }}
            >
              <motion.img
                key={imageIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                src={G_IMAGES[imageIndex].url}
                className="max-w-full max-h-[70vh] object-contain shadow-2xl rounded-lg"
              />
              <div className="mt-8 text-center px-6">
                <h2 className="text-3xl font-black text-neutral-900 uppercase tracking-tighter">
                  {G_IMAGES[imageIndex].title}
                </h2>
                <p className="text-neutral-400 text-xs font-bold uppercase tracking-[0.2em] mt-2">
                  Swipe to navigate
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StackGallery;
