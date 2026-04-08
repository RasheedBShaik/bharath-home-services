"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, MapPin } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutComponent = () => {
  // Minor logic: Adds a subtle movement to the image as the user scrolls
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section className="bg-neutral-900 py-24 px-6 md:px-12 overflow-hidden border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Visual Branding */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative aspect-square md:aspect-video overflow-hidden border border-neutral-800">
              <motion.img 
                style={{ scale: 1.1, y }} // Subtle parallax
                src="https://plus.unsplash.com/premium_photo-1667509213002-f15f1c9eaac8?w=800&auto=format&fit=crop&q=80" 
                alt="BHS Excellence" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
              />
              
              {/* Overlay: Slightly adjusted to ensure green tint is visible before hover */}
              <div className="absolute inset-0 bg-green-900/20 group-hover:bg-transparent transition-colors duration-700" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-transparent to-transparent opacity-80" />
            </div>
            
            {/* Improved Floating Badge: Added a subtle shadow and border */}
            <div className="absolute -bottom-6 -right-6 bg-green-600 p-8 hidden md:block z-10 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] border border-white/10">
              <ShieldCheck className="text-white mb-3" size={32} />
              <p className="text-white font-black text-[11px] uppercase tracking-[0.3em] leading-tight">
                Toxic-Free <br /> <span className="text-green-200">Certified</span>
              </p>
            </div>
          </motion.div>

          {/* RIGHT: The Narrative */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-green-500">
                <MapPin size={16} className="animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Savitri Nagar • Nellore</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
                Articulate <br /> 
                <span className="text-neutral-700 transition-colors duration-700 group-hover:text-green-600">
                  Execution
                </span>
              </h2>
            </div>

            <p className="text-neutral-400 text-lg leading-relaxed max-w-xl font-medium">
              We take home maintenance seriously. From medical-grade tank cleaning 
              to precision electrical work, we ensure your sanctuary remains 
              efficient, safe, and entirely toxic-free.
            </p>

            <div className="pt-4">
              <Link 
                href="/about" 
                className="group/btn relative inline-flex items-center gap-6 bg-white text-black font-black uppercase py-5 px-10 tracking-[0.3em] text-xs hover:bg-green-600 hover:text-white transition-all overflow-hidden"
              >
                <span className="relative z-10">Our Story</span>
                <ArrowRight size={18} className="relative z-10 group-hover/btn:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutComponent;