"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, MapPin } from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const AboutComponent = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smoother Parallax constants
  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const badgeY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const bgTextX = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={containerRef}
      className="bg-neutral-900 py-32 md:py-48 px-6 md:px-12 overflow-hidden border-t border-neutral-800 relative"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* LEFT: Visual Branding */}
          <div className="relative group">
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="relative aspect-4/5 md:aspect-square overflow-hidden border border-neutral-800 rounded-sm"
            >
              <motion.img
                style={{ y: imageY }}
                src="https://plus.unsplash.com/premium_photo-1667509213002-f15f1c9eaac8?w=800&auto=format&fit=crop&q=80"
                alt="BHS Excellence"
                className="w-full h-full object-cover 
             /* Mobile: Clear and vibrant */
             grayscale-0 brightness-100 
             /* Desktop: Start moody, reveal on hover */
             md:grayscale md:brightness-75 md:group-hover:grayscale-0 md:group-hover:brightness-100 scale:110 md:scale-130
             transition-all duration-1000 ease-in-out"
              />

              <div className="absolute inset-0 bg-green-900/10 group-hover:bg-transparent transition-colors duration-700" />
              <div className="absolute inset-0 bg-linear-to-t from-neutral-900 via-transparent to-transparent opacity-60" />
            </motion.div>

            {/* Parallax Badge */}
            <motion.div
              style={{ y: badgeY }}
              className="absolute -bottom-10 -right-6 bg-green-600 p-10 hidden md:block z-20 shadow-[20px_20px_0px_0px_rgba(0,0,0,0.5)] border border-white/10"
            >
              <ShieldCheck className="text-white mb-4" size={40} />
              <p className="text-white font-black text-[12px] uppercase tracking-[0.4em] leading-tight">
                Toxic-Free <br />{" "}
                <span className="text-green-200">Certified</span>
              </p>
            </motion.div>
          </div>

          {/* RIGHT: Narrative */}
          <div className="space-y-12">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 text-green-500"
              >
                <div className="w-8 h-px bg-green-500/50" />
                <MapPin size={14} className="animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em]">
                  Nellore, Andhra Pradesh
                </span>
              </motion.div>

              <div className="space-y-0">
                <div className="overflow-hidden h-17.5 md:h-27.5">
                  <motion.h2
                    initial={{ y: "100%" }}
                    animate={isInView ? { y: 0 } : {}}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none"
                  >
                    Articulate
                  </motion.h2>
                </div>
                <div className="overflow-hidden h-17.5 md:h-27.5">
                  <motion.h2
                    initial={{ y: "100%" }}
                    animate={isInView ? { y: 0 } : {}}
                    transition={{
                      duration: 1,
                      delay: 0.15,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="text-5xl md:text-8xl font-black text-transparent uppercase tracking-tighter leading-none"
                    style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}
                  >
                    Execution
                  </motion.h2>
                </div>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-neutral-400 text-lg md:text-2xl leading-relaxed max-w-xl font-medium border-l-2 border-green-600/30 pl-8"
            >
              We don't just maintain homes; we preserve sanctuaries. Our
              medical-grade protocols ensure your environment is safe,
              efficient, and entirely toxic-free.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Link
                href="/about"
                className="group/btn relative inline-flex items-center gap-10 bg-white text-black font-black uppercase py-7 px-14 tracking-[0.4em] text-[11px] transition-all overflow-hidden hover:shadow-[0_0_40px_rgba(34,197,94,0.2)]"
              >
                <span className="relative z-10">Our Philosophy</span>
                <ArrowRight
                  size={20}
                  className="relative z-10 group-hover/btn:translate-x-3 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-green-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Dynamic Background Text */}
      <motion.div
        style={{ x: bgTextX }}
        className="absolute -bottom-20 left-0 text-[25rem] font-black text-white/2 pointer-events-none select-none whitespace-nowrap"
      >
        BHARATHI SERVICES 2026
      </motion.div>
    </section>
  );
};

export default AboutComponent;
