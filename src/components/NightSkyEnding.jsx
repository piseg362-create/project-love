"use client";

import { useEffect, useState } from "react";
import { Heart, ArrowUp, Feather } from "lucide-react";
import { siteContent } from "@/data/content";

export default function NightSkyEnding() {
  const { ending } = siteContent;
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate small twinkling stars
    const generated = Array.from({ length: 45 }).map((_, i) => ({
      id: i,
      top: `${(Math.random() * 95).toFixed(1)}%`,
      left: `${(Math.random() * 95).toFixed(1)}%`,
      size: 1.5 + Math.random() * 2.5,
      animationDuration: `${2 + Math.random() * 4}s`,
      delay: `${Math.random() * 3}s`,
      opacity: 0.4 + Math.random() * 0.6,
    }));
    setStars(generated);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#181124] via-[#0e0917] to-[#07040d] text-rose-50 pt-28 pb-16 px-4 sm:px-6 overflow-hidden">
      {/* Moonlit Glow in Night Sky */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-rose-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-16 right-1/4 w-32 h-32 rounded-full bg-amber-100/5 blur-[60px] pointer-events-none" />

      {/* Twinkling Stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white star-glow animate-twinkle"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDuration: star.animationDuration,
              animationDelay: star.delay,
              opacity: star.opacity,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-3xl mx-auto text-center space-y-8 z-10">
        {/* Soft Animated Glowing Heart */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-rose-950/60 border border-rose-500/30 shadow-lg shadow-rose-900/30 animate-pulse-gentle">
          <Heart className="w-8 h-8 text-rose-400 fill-rose-500 heart-glow" />
        </div>

        {/* Ending Quote */}
        <h2 className="font-serif text-2xl sm:text-4xl text-rose-100 font-normal leading-relaxed tracking-tight max-w-2xl mx-auto">
          “{ending.quote}”
        </h2>

        {/* Subtext */}
        <p className="font-serif italic text-lg sm:text-xl text-rose-300/80 font-light max-w-xl mx-auto">
          {ending.subtext}
        </p>

        {/* Signature */}
        <div className="pt-4 pb-2">
          <p className="font-handwriting text-3xl sm:text-4xl text-rose-400 tracking-wider">
            {ending.signature}
          </p>
        </div>

        {/* Navigation Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <button
            onClick={() => scrollToSection("letter")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-rose-600/30 hover:bg-rose-600/40 border border-rose-400/40 text-rose-100 text-sm font-medium transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
          >
            <Feather className="w-4 h-4 text-rose-300" />
            <span>{ending.repeatLetterButton}</span>
          </button>

          <button
            onClick={scrollToTop}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-rose-200/90 text-sm font-medium transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ArrowUp className="w-4 h-4" />
            <span>{ending.scrollTopButton}</span>
          </button>
        </div>

        {/* Bottom subtle copyright / note */}
        <div className="pt-16 border-t border-white/10 text-xs text-rose-300/40 font-sans">
          <p>A personal heartfelt website • Always here for you, Srushti</p>
        </div>
      </div>
    </footer>
  );
}
