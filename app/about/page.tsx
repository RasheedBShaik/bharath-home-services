"use client";
import React from "react";
import { ShieldCheck, Target, MapPin, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION WITH CONTENT ON IMAGE */}
      <section className="relative w-full h-[90vh] md:h-screen overflow-hidden bg-neutral-900">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src="https://plus.unsplash.com/premium_photo-1667509213002-f15f1c9eaac8?w=1600&auto=format&fit=crop&q=80"
          alt="BHS Professional Service"
          className="w-full h-full object-cover grayscale opacity-60 transition-all duration-1000 group-hover:grayscale-0"
        />

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />

        {/* Hero Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-green-500 font-black uppercase tracking-[0.4em] text-xs md:text-sm mb-4 block">
              Established in Nellore
            </span>
            <h1 className="text-6xl md:text-[9rem] font-black uppercase tracking-tighter leading-[0.8] text-white mb-8">
              Pure <br /> <span className="text-green-500">Integrity</span>
            </h1>

            <div className="max-w-2xl">
              <p className="text-lg md:text-2xl text-neutral-300 leading-relaxed font-medium mb-10">
                Based in Savitri Nagar, we offer articulate cleaning, plumbing,
                electricity, and painting services designed for modern homes.
              </p>

              <div className="flex flex-wrap gap-6">
                <Link href="/contact">
                  <button className="bg-white hover:cursor-pointer text-black font-black uppercase py-5 px-10 tracking-[0.2em] hover:bg-green-500 hover:text-white transition-all text-xs">
                    Contact Us Today
                  </button>
                </Link>
                <a
                  href="https://www.google.com/maps/place/Savitri+Nagar,+Vanam+Thopu,+Nellore,+Andhra+Pradesh+524004,+India/@14.423584,79.974522,16z/data=!4m6!3m5!1s0x3a4cf322e9a9b8ef:0x4a032ec800590924!8m2!3d14.4235654!4d79.9736471!16s%2Fg%2F11bx5v185_?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDQwNS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white border-l border-white/20 pl-6 hover:text-green-500 transition-colors group"
                >
                  <MapPin
                    className="text-green-500 group-hover:scale-110 transition-transform"
                    size={20}
                  />
                  <span className="font-bold uppercase tracking-widest text-[10px]">
                    Nellore, Andhra Pradesh
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DETAIL SECTION BELOW HERO */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-4xl font-black uppercase tracking-tighter leading-none mb-8 text-neutral-900">
              The BHS <br /> Philosophy
            </h2>
            <p className="text-xl text-neutral-500 leading-relaxed font-medium italic border-l-4 border-green-500 pl-6 mb-8">
              "We take our job seriously and make sure our customers are happy
              with what we have to offer."
            </p>
            <div className="space-y-4">
              {[
                "Articulate Execution",
                "Customer Happiness",
                "Toxic-Free Living",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-green-600" />
                  <span className="font-black uppercase tracking-widest text-[11px] text-neutral-400">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 space-y-12">
            <div className="text-neutral-700 text-lg md:text-xl font-medium leading-relaxed space-y-6">
              <p>
                At **Bharath Home Services**, we understand how important it is
                to maintain a healthy environment. A dirty tank isn't just an
                eyesore—it's a source of contamination.
              </p>
              <p>
                We strive to ensure your liquids and household items remain
                **toxic-free**. From intricate electrical work to heavy-duty
                plumbing, our team treats your sanctuary with the respect it
                deserves.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-neutral-100">
              <div className="space-y-4">
                <ShieldCheck className="text-green-600" size={40} />
                <h4 className="font-black uppercase tracking-widest text-sm text-neutral-900">
                  Health First
                </h4>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  Regular tank cleaning is vital for preventing contamination.
                  We make your safety our primary mission.
                </p>
              </div>
              <div className="space-y-4">
                <Target className="text-green-600" size={40} />
                <h4 className="font-black uppercase tracking-widest text-sm text-neutral-900">
                  Total Efficiency
                </h4>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  Whether it is painting or electricity, we provide articulate
                  solutions that stand the test of time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
