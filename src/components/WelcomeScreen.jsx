"use client";

import { useState } from "react";
import { Heart, Sparkles, MailOpen } from "lucide-react";
import { siteContent } from "@/data/content";

export default function WelcomeScreen({ onEnter }) {
  const [isOpening, setIsOpening] = useState(false);
  const { welcomeScreen } = siteContent;

  const handleOpen = () => {
    setIsOpening(true);
    // Smooth transition delay before calling onEnter
    setTimeout(() => {
      onEnter();
    }, 700);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-gradient-to-b from-[#fff5f7] via-[#fffbf5] to-[#fef2f4] transition-all duration-700 ease-in-out ${
        isOpening ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Welcome screen for Srushti"
    >
      {/* Soft ambient glowing background orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-rose-200/30 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-blush-200/40 blur-3xl pointer-events-none -z-10" />

      {/* Main Welcome Card */}
      <div className="max-w-xl w-full mx-auto text-center glass-card rounded-3xl p-6 sm:p-10 md:p-12 border border-rose-200/70 shadow-2xl relative overflow-hidden max-h-[92vh] overflow-y-auto">
        {/* Decorative corner florals/sparkles */}
        <div className="absolute top-4 left-4 text-blush-300">
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
        </div>
        <div className="absolute bottom-4 right-4 text-blush-300">
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
        </div>

        {/* Floating Heart Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-blush-100 to-rose-50 border border-blush-200 mb-5 sm:mb-6 shadow-inner animate-float-medium">
          <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-rose-600 fill-rose-500 heart-glow animate-pulse-gentle" />
        </div>

        {/* Title */}
        <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl font-semibold text-rose-950 tracking-tight mb-2 sm:mb-3">
          {welcomeScreen.greeting}
        </h1>

        {/* Marathi Subtitle */}
        <p className="font-serif italic text-base sm:text-xl text-rose-700/90 font-medium mb-4 sm:mb-6">
          “{welcomeScreen.subGreetingMarathi}”
        </p>

        {/* Divider with heart */}
        <div className="flex items-center justify-center gap-3 my-4 sm:my-6">
          <span className="h-[1px] w-12 sm:w-16 bg-gradient-to-r from-transparent to-blush-300" />
          <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-400 fill-rose-300" />
          <span className="h-[1px] w-12 sm:w-16 bg-gradient-to-l from-transparent to-blush-300" />
        </div>

        {/* Description text */}
        <p className="text-stone-700 font-sans text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-md mx-auto">
          {welcomeScreen.description}
        </p>

        {/* Action Button */}
        <button
          onClick={handleOpen}
          disabled={isOpening}
          className="group relative inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-rose-500 via-rose-600 to-blush-600 text-white font-medium text-sm sm:text-base md:text-lg shadow-lg shadow-rose-500/25 hover:shadow-xl hover:shadow-rose-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-rose-300 w-full sm:w-auto"
          aria-label="Open the website"
        >
          <MailOpen className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
          <span>{welcomeScreen.buttonText}</span>
          <span className="absolute -inset-1 rounded-full bg-rose-400/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>

        <p className="mt-6 text-xs text-stone-500 font-sans tracking-wide">
          Crafted with love by Chaitanya • Just for Srushti
        </p>
      </div>
    </div>
  );
}
