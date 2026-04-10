"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  FiPlay,
  FiYoutube,
  FiInstagram,
  FiX,
  FiArrowRight,
} from "react-icons/fi";
import { VIDEOS, VideoItem } from "@/data/videos";
import { getVideoAssets } from "@/utils/videoHelpers";

const HomeVideoSection = () => {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const displayVideos = useMemo(() => VIDEOS.slice(0, 6), []);
  
  // Parallax effect for the background text
  const { scrollYProgress } = useScroll();
  const xTransform = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section className="py-32 bg-white text-slate-900 overflow-hidden relative">
      {/* Parallax Background Decoration */}
      <motion.div 
        style={{ x: xTransform }}
        className="absolute top-10 whitespace-nowrap opacity-[0.03] select-none pointer-events-none hidden lg:block"
      >
        <span className="text-[20rem] font-black uppercase tracking-tighter">
          Visual Storytelling • Cinematic Workflow • 
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 text-green-600 mb-6">
              <div className="w-12 h-0.5 bg-green-600" />
              <span className="font-black uppercase tracking-[0.4em] text-[10px]">
                Portfolio
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
              Watch <br />
              <span className="text-transparent" style={{ WebkitTextStroke: "1px #0f172a" }}>Inline.</span>
            </h2>
          </motion.div>

          <Link
            href="/videos"
            className="group relative flex items-center gap-6 bg-slate-950 text-white px-10 py-5 rounded-full hover:bg-green-600 transition-all duration-500 shadow-2xl hover:shadow-green-100"
          >
            <span className="font-black uppercase tracking-[0.2em] text-[11px]">Explore Library</span>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
              <FiArrowRight size={20} />
            </div>
          </Link>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
          <AnimatePresence mode="popLayout">
            {displayVideos.map((video: VideoItem, index) => {
              const isPlaying = playingId === video.id;
              const { thumb, embed } = getVideoAssets(video.platform, video.link);

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  key={video.id}
                  className={`group relative overflow-hidden rounded-[3rem] bg-slate-50 transition-all duration-700 ${
                    isPlaying && video.platform === "instagram"
                      ? "md:col-span-1 row-span-2 h-175 z-30 shadow-2xl ring-1 ring-black/5"
                      : "aspect-4/5 md:aspect-square shadow-sm hover:shadow-2xl hover:-translate-y-3"
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {isPlaying ? (
                      <motion.div
                        key="player"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black z-40"
                      >
                        <button
                          onClick={() => setPlayingId(null)}
                          className="absolute top-8 right-8 z-50 bg-white text-black p-4 rounded-full hover:bg-red-500 hover:text-white transition-all shadow-2xl"
                        >
                          <FiX size={20} />
                        </button>
                        <iframe
                          src={embed}
                          className="w-full h-full border-0"
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="thumb"
                        className="absolute inset-0 cursor-pointer overflow-hidden"
                        onClick={() => setPlayingId(video.id)}
                      >
                        {/* Branded Fallback */}
                        <div className={`absolute inset-0 bg-linear-to-br transition-all duration-1000 group-hover:scale-110 ${
                            video.platform === "youtube" ? "from-red-600 to-red-900" : "from-[#f09433] to-[#bc1888]"
                        }`} />

                        {/* Thumbnail with Mask Reveal */}
                        <motion.img
                          src={thumb}
                          className="absolute inset-0 w-full h-full object-cover z-10 opacity-100 group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                          alt={video.title}
                          onError={(e) => (e.currentTarget.style.display = "none")}
                        />

                        {/* High-End Overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent z-20 opacity-80 group-hover:opacity-60 transition-opacity" />

                        {/* Play Button with Glow */}
                        <div className="absolute inset-0 flex items-center justify-center z-30">
                          <div className="relative">
                            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-black scale-90 group-hover:scale-100 transition-all duration-500 shadow-[0_0_50px_rgba(255,255,255,0.3)]">
                              <FiPlay fill="currentColor" size={28} className="ml-1.5" />
                            </div>
                            <div className="absolute -inset-4 border border-white/20 rounded-full animate-ping [animation-duration:3s]" />
                          </div>
                        </div>

                        {/* Metadata */}
                        <div className="absolute bottom-10 left-10 right-10 z-40">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-[9px] font-black uppercase tracking-widest text-white">
                              {video.platform}
                            </span>
                          </div>
                          <h3 className="text-2xl font-black text-white uppercase tracking-tighter leading-none group-hover:text-green-400 transition-colors">
                            {video.title}
                          </h3>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default HomeVideoSection;