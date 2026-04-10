"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div 
      initial={{ clipPath: "circle(0% at 50% 50%)" }}
      animate={{ clipPath: "circle(150% at 50% 50%)" }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {/* 1. Background Video */}
      <video
        src="/hero/hero-bg-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* 2. Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/50 " />

      {/* 3. Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        
        {/* Animated Headline - Staggered from Center */}
        <motion.h1 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] text-white"
        >
          Modern <br />
          <span className="text-green-400">Living</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6 text-sm md:text-lg font-light tracking-[0.4em] uppercase text-white"
        >
          Premium Home Maintenance
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <Link href="/contact">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 px-10 py-4 bg-green-400 text-black font-bold rounded-full shadow-lg shadow-green-400/20"
            >
              Book Now
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* 4. Center-Out Decorative Ring (Optional visual flair) */}
      <motion.div 
        initial={{ scale: 0, opacity: 0.5 }}
        animate={{ scale: 4, opacity: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-green-400 rounded-full z-15"
      />
    </motion.div>
  );
};

export default Hero;