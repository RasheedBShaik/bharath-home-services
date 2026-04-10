"use client";
import React, { useRef } from "react";
import { ShieldCheck, Target, MapPin, CheckCircle2 } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  Variants,
} from "framer-motion";
import Link from "next/link";

const AboutPage = () => {
  const scrollRef = useRef(null);
  const philosophyRef = useRef(null);
  const isPhilosophyInView = useInView(philosophyRef, {
    once: true,
    amount: 0.3,
  });

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });

  // Parallax and Opacity effects for the Hero
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut", // TypeScript now accepts this because of the Variants type
      },
    }),
  };

  return (
    <div className="bg-white pt-18 min-h-screen">
      {/* --- HERO SECTION WITH PARALLAX --- */}
      <section
        ref={scrollRef}
        className="relative w-full h-[90vh] md:h-screen overflow-hidden bg-neutral-900"
      >
        <motion.div style={{ y, opacity }} className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            src="https://plus.unsplash.com/premium_photo-1667509213002-f15f1c9eaac8?w=1600&auto=format&fit=crop&q=80"
            alt="BHS Professional Service"
            className="w-full h-full object-cover grayscale brightness-50"
          />
        </motion.div>

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-linear-to-r from-neutral-950 via-neutral-900/40 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-transparent to-transparent" />

        {/* Hero Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-green-500 font-black uppercase tracking-[0.4em] text-[10px] md:text-xs mb-6 block"
            >
              Established in Nellore • 2026
            </motion.span>

            <h1 className="text-6xl md:text-[9rem] font-black uppercase tracking-tighter leading-[0.8] text-white mb-10">
              Pure <br />
              <motion.span
                initial={{ color: "#fff" }}
                animate={{ color: "#22c55e" }}
                transition={{ delay: 0.8, duration: 1 }}
              >
                Integrity
              </motion.span>
            </h1>

            <div className="max-w-2xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg md:text-2xl text-neutral-400 leading-relaxed font-medium mb-12"
              >
                Based in Savitri Nagar, we offer articulate cleaning, plumbing,
                electricity, and painting services designed for modern homes.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap items-center gap-10"
              >
                <Link href="/contact">
                  <button className="group relative bg-white text-black font-black uppercase py-6 px-12 tracking-[0.3em] text-[10px] transition-all overflow-hidden hover:text-white">
                    <span className="relative z-10">Contact Us Today</span>
                    <div className="absolute inset-0 bg-green-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                  </button>
                </Link>

                <a
                  href="https://www.google.com/maps/place/Savitri+Nagar,+Vanam+Thopu,+Nellore,+Andhra+Pradesh+524004,+India/@14.423584,79.974522,16z/data=!4m6!3m5!1s0x3a4cf322e9a9b8ef:0x4a032ec800590924!8m2!3d14.4235654!4d79.9736471!16s%2Fg%2F11bx5v185_?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDQwNS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-white/60 hover:text-green-500 transition-colors group"
                >
                  <MapPin
                    size={20}
                    className="text-green-500 group-hover:animate-bounce"
                  />
                  <span className="font-bold uppercase tracking-[0.2em] text-[10px] border-b border-white/10 group-hover:border-green-500 transition-all">
                    Nellore, AP
                  </span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- DETAIL SECTION WITH VIEWPORT REVEALS --- */}
      <section
        ref={philosophyRef}
        className="py-32 md:py-48 px-6 md:px-12 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          {/* Left: Philosophy Header */}
          <div className="lg:col-span-5 space-y-10">
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                animate={isPhilosophyInView ? { y: 0 } : {}}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none text-neutral-900"
              >
                The BHS <br /> Philosophy
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={isPhilosophyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-neutral-500 leading-relaxed font-medium italic border-l-4 border-green-500 pl-8"
            >
              "We take our job seriously and make sure our customers are happy
              with what we have to offer."
            </motion.p>

            <div className="space-y-5 pt-4">
              {[
                "Articulate Execution",
                "Customer Happiness",
                "Toxic-Free Living",
              ].map((item, i) => (
                <motion.div
                  key={item}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  animate={isPhilosophyInView ? "visible" : "hidden"}
                  className="flex items-center gap-4"
                >
                  <CheckCircle2 size={20} className="text-green-600 shrink-0" />
                  <span className="font-black uppercase tracking-[0.3em] text-[11px] text-neutral-900">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Narrative & Features */}
          <div className="lg:col-span-7 space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isPhilosophyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-neutral-700 text-lg md:text-2xl font-medium leading-relaxed space-y-8"
            >
              <p>
                At{" "}
                <span className="text-black font-black">
                  Bharath Home Services
                </span>
                , we understand how important it is to maintain a healthy
                environment. A dirty tank isn't just an eyesore—it's a source of
                contamination.
              </p>
              <p>
                We strive to ensure your liquids and household items remain
                <span className="text-green-600 font-black"> toxic-free</span>.
                From intricate electrical work to heavy-duty plumbing, our team
                treats your sanctuary with the respect it deserves.
              </p>
            </motion.div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-16 border-t border-neutral-100">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isPhilosophyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
                className="group space-y-6"
              >
                <div className="w-16 h-16 bg-neutral-50 flex items-center justify-center group-hover:bg-green-600 transition-colors duration-500">
                  <ShieldCheck
                    className="text-green-600 group-hover:text-white transition-colors"
                    size={32}
                  />
                </div>
                <h4 className="font-black uppercase tracking-widest text-sm text-neutral-900">
                  Health First
                </h4>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  Regular tank cleaning is vital for preventing contamination.
                  We make your safety our primary mission with medical-grade
                  protocols.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isPhilosophyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 }}
                className="group space-y-6"
              >
                <div className="w-16 h-16 bg-neutral-50 flex items-center justify-center group-hover:bg-green-600 transition-colors duration-500">
                  <Target
                    className="text-green-600 group-hover:text-white transition-colors"
                    size={32}
                  />
                </div>
                <h4 className="font-black uppercase tracking-widest text-sm text-neutral-900">
                  Total Efficiency
                </h4>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  Whether it is painting or electricity, we provide articulate
                  solutions that prioritize long-term durability over quick
                  fixes.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Background Text */}
      <div className="fixed top-1/2 left-0 -translate-y-1/2 -rotate-90 origin-left text-[15vh] font-black text-black/2 pointer-events-none select-none z-0">
        BHARATH SERVICES
      </div>
    </div>
  );
};

export default AboutPage;
