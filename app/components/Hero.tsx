import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* The Video Background */}
      <video
        src="/hero/hero-bg-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay Content (Optional) */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white bg-black/40">
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
          {/* Minimal, high-impact headline */}
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
            Modern <br />
            <span className="text-green-400">Living</span>
          </h1>

          {/* Thin, wide-spaced subtext */}
          <p className="mt-6 text-sm md:text-lg font-light tracking-[0.4em] uppercase opacity-70">
            Premium Home Maintenance
          </p>

          {/* Clean, pill-shaped CTA */}
          <Link href="/contact">
          <button className="mt-10 px-10 py-4 bg-green-400 hover:bg-green-500 text-black font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-green-400/20">
            Book Now
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
