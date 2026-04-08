"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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

  // We only show the first 6 for the home section
  const displayVideos = useMemo(() => VIDEOS.slice(0, 6), []);

  return (
    <section className="py-24 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-green-600 mb-4">
              <div className="w-12 h-[2px] bg-green-600" />
              <span className="font-black uppercase tracking-[0.3em] text-[10px]">
                Bharath Services
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Watch <span className="text-slate-300 italic">Inline</span>
            </h2>
          </div>

          <Link
            href="/videos"
            className="flex items-center gap-4 font-black uppercase tracking-[0.2em] text-[12px] text-slate-900 hover:text-green-600 transition-all group bg-white px-6 py-3 rounded-full border border-slate-200 shadow-sm hover:shadow-md"
          >
            <span>Explore Full Library</span>
            <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:bg-green-600 transition-all">
              <FiArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </div>
          </Link>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          <AnimatePresence mode="popLayout">
            {displayVideos.map((video: VideoItem) => {
              const isPlaying = playingId === video.id;
              const { thumb, embed } = getVideoAssets(
                video.platform,
                video.link,
              );

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  key={video.id}
                  className={`group relative overflow-hidden rounded-[2.5rem] bg-slate-100 transition-all duration-700 ${
                    isPlaying && video.platform === "instagram"
                      ? "md:col-span-1 row-span-2 h-[650px] z-20 shadow-2xl ring-1 ring-black/5"
                      : "aspect-video shadow-sm hover:shadow-2xl hover:-translate-y-2"
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {isPlaying ? (
                      <motion.div
                        key="player"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black"
                      >
                        <button
                          onClick={() => setPlayingId(null)}
                          className="absolute top-6 right-6 z-50 bg-black/50 backdrop-blur-xl p-3 rounded-full text-white hover:bg-red-500 transition-colors border border-white/10"
                        >
                          <FiX size={20} />
                        </button>

                        <div className="w-full h-full overflow-hidden">
                          <iframe
                            src={embed}
                            className="w-full h-full border-0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            style={
                              video.platform === "instagram"
                                ? {
                                    height: "118%",
                                    transform: "scale(1.02)",
                                    transformOrigin: "top",
                                  }
                                : {}
                            }
                          />
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="thumb"
                        className="absolute inset-0 cursor-pointer"
                        onClick={() => setPlayingId(video.id)}
                      >
                        {/* Branded Fallback Background */}
                        <div
                          className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br transition-transform duration-1000 group-hover:scale-110 ${
                            video.platform === "youtube"
                              ? "from-red-600 to-red-900"
                              : "from-[#f09433] via-[#dc2743] to-[#bc1888]"
                          }`}
                        >
                          {video.platform === "youtube" ? (
                            <FiYoutube
                              size={100}
                              className="text-white opacity-20"
                            />
                          ) : (
                            <FiInstagram
                              size={100}
                              className="text-white opacity-20"
                            />
                          )}
                        </div>

                        {/* Video Thumbnail */}
                        <img
                          src={thumb}
                          className="absolute inset-0 w-full h-full object-cover z-10 opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                          onError={(e) => (e.currentTarget.style.opacity = "0")}
                        />

                        {/* Modern Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-20" />

                        {/* Play Button UI */}
                        <div className="absolute inset-0 flex items-center justify-center z-30">
                          <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white scale-90 group-hover:scale-100 group-hover:bg-white group-hover:text-black transition-all duration-500 shadow-2xl border border-white/20">
                            <FiPlay
                              fill="currentColor"
                              size={24}
                              className="ml-1.5"
                            />
                          </div>
                        </div>

                        {/* Content Info */}
                        <div className="absolute bottom-0 left-0 p-8 z-40 w-full">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center gap-2">
                              {video.platform === "youtube" ? (
                                <FiYoutube className="text-red-500" />
                              ) : (
                                <FiInstagram className="text-pink-500" />
                              )}
                              <span className="text-[9px] font-black uppercase tracking-widest text-white">
                                {video.platform}
                              </span>
                            </div>
                          </div>
                          <h3 className="text-2xl font-black text-white uppercase tracking-tighter leading-tight group-hover:text-green-400 transition-colors">
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
