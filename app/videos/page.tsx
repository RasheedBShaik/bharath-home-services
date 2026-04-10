"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlay, FiYoutube, FiInstagram, FiX, FiVideo } from "react-icons/fi";
import { VIDEOS, VideoItem } from "@/data/videos";
import { getVideoAssets } from "@/utils/videoHelpers";

const VideosPage = () => {
  const [playingId, setPlayingId] = useState<string | null>(null);

  // Only Platform filter state remains
  const [activePlatform, setActivePlatform] = useState<
    "all" | "youtube" | "instagram"
  >("all");

  // Combined Filter Logic (Simplified to Platform only)
  const filteredVideos = useMemo(() => {
    return VIDEOS.filter((video) => {
      return activePlatform === "all" || video.platform === activePlatform;
    });
  }, [activePlatform]);

  return (
    <main className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <div className="mb-16">
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
                Our <span className="text-green-600 outline-text">videos</span>
              </motion.h1>
            </div>

            {/* Optional: Add a sliding accent line for extra flair */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 1.5,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.8,
              }}
              className="h-1 w-24 bg-green-600 origin-left mt-4"
            />
          </div>

          <div className="inline-flex flex-col gap-4 p-4 md:p-6 bg-slate-50 rounded-3xl border border-slate-100">
            {/* Platform Filter Only */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <FiVideo /> Filter by Platform:
              </span>
              <div className="flex gap-2">
                {["all", "youtube", "instagram"].map((p) => (
                  <button
                    key={p}
                    onClick={() => setActivePlatform(p as any)}
                    className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all border ${
                      activePlatform === p
                        ? "bg-slate-900 text-white border-slate-900 shadow-md"
                        : "bg-white text-slate-500 border-slate-200 hover:border-slate-400"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          <AnimatePresence mode="popLayout">
            {filteredVideos.map((video: VideoItem) => {
              const isPlaying = playingId === video.id;
              const { thumb, embed } = getVideoAssets(
                video.platform,
                video.link,
              );

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={video.id}
                  className={`group relative overflow-hidden rounded-3xl bg-slate-100 transition-all duration-500 ${
                    isPlaying && video.platform === "instagram"
                      ? "md:col-span-1 row-span-2 h-150 z-20 shadow-2xl ring-1 ring-black/5"
                      : "aspect-video shadow-sm hover:shadow-xl"
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
                          className="absolute top-6 right-6 z-50 bg-black/50 backdrop-blur-xl p-3 rounded-full text-white hover:bg-red-500 transition-colors"
                        >
                          <FiX size={24} />
                        </button>
                        <iframe
                          src={embed}
                          className="w-full h-full border-0"
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                          style={
                            video.platform === "instagram"
                              ? {
                                  height: "115%",
                                  transform: "scale(1.02)",
                                  transformOrigin: "top",
                                }
                              : {}
                          }
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="thumb"
                        className="absolute inset-0 cursor-pointer group"
                        onClick={() => setPlayingId(video.id)}
                      >
                        {/* Branded Fallback */}
                        <div
                          className={`absolute inset-0 flex items-center justify-center bg-linear-to-br ${
                            video.platform === "youtube"
                              ? "from-red-600 to-red-800"
                              : "from-[#f09433] via-[#dc2743] to-[#bc1888]"
                          }`}
                        >
                          {video.platform === "youtube" ? (
                            <FiYoutube
                              size={80}
                              className="text-white opacity-20"
                            />
                          ) : (
                            <FiInstagram
                              size={80}
                              className="text-white opacity-20"
                            />
                          )}
                        </div>

                        <img
                          src={thumb}
                          className="absolute inset-0 w-full h-full object-cover z-10 opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                          onError={(e) => (e.currentTarget.style.opacity = "0")}
                        />

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent z-20" />

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 p-8 z-30 w-full">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              {video.platform === "youtube" ? (
                                <FiYoutube className="text-red-500" />
                              ) : (
                                <FiInstagram className="text-pink-500" />
                              )}
                              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
                                {video.platform}
                              </span>
                            </div>
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 scale-0 group-hover:scale-100 transition-transform duration-500 shadow-lg">
                              <FiPlay
                                fill="currentColor"
                                size={12}
                                className="ml-0.5"
                              />
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-white uppercase tracking-tighter leading-tight">
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

        {/* Empty State */}
        {filteredVideos.length === 0 && (
          <div className="py-24 text-center">
            <h3 className="text-2xl font-black uppercase text-slate-300">
              No {activePlatform} videos found.
            </h3>
            <button
              onClick={() => setActivePlatform("all")}
              className="mt-4 text-green-600 font-bold uppercase text-[10px] tracking-widest underline"
            >
              Show all videos
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default VideosPage;
