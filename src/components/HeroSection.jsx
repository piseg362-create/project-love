"use client";

import { Heart, Sparkles, ArrowDown } from "lucide-react";
import { siteContent } from "@/data/content";
import ImageWithFallback from "./ImageWithFallback";

export default function HeroSection() {
  const { hero } = siteContent;

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background radial gradients for soft blush glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[750px] h-[500px] sm:h-[750px] bg-gradient-to-tr from-rose-200/35 via-blush-100/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Heading, Supporting Text, and Buttons */}
        <div className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-8">
          {/* Subtle Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100/70 border border-rose-200 text-rose-800 text-xs sm:text-sm font-medium tracking-wide shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span>{hero.tagline}</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-stone-900 leading-[1.2] tracking-tight">
            Some people become a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-500 relative">
              part of your heart…
            </span>{" "}
            and stay there.
          </h1>

          {/* Supporting Text */}
          <p className="font-sans text-sm sm:text-lg md:text-xl text-stone-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
            {hero.supportingText}
          </p>

          {/* Action Buttons & Animated Heart */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
            <button
              onClick={() => scrollToSection("timeline")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-rose-600 text-white font-medium text-sm sm:text-base shadow-lg shadow-rose-600/25 hover:bg-rose-700 hover:shadow-xl hover:shadow-rose-600/35 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-4 focus-visible:ring-rose-300"
            >
              <span>{hero.buttonStoryText}</span>
              <Heart className="w-4 h-4 fill-white stroke-white animate-pulse" />
            </button>

            <button
              onClick={() => scrollToSection("letter")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-white/80 backdrop-blur-sm text-stone-700 border border-rose-200 font-medium text-sm sm:text-base hover:bg-rose-50/80 hover:text-rose-700 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-4 focus-visible:ring-rose-200"
            >
              <span>{hero.buttonLetterText}</span>
            </button>
          </div>

          {/* Gentle reminder indicator */}
          <div className="hidden lg:flex items-center gap-2 text-xs text-stone-400 font-sans pt-4">
            <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping" />
            <span>Scroll gently through our little world</span>
          </div>
        </div>

        {/* Right Column: Hero Portrait of Srushti */}
        <div className="lg:col-span-5 flex justify-center w-full">
          <div className="relative w-full max-w-[280px] sm:max-w-sm lg:max-w-md">
            {/* Glowing Backdrop */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-rose-300/40 via-blush-200/50 to-amber-100/40 rounded-[2.5rem] blur-xl opacity-80" />

            {/* Frame Container */}
            <div className="relative rounded-[2.2rem] bg-white p-3 sm:p-4 shadow-2xl border border-rose-100/80">
              <div className="relative aspect-[4/5] rounded-[1.8rem] overflow-hidden bg-rose-50 shadow-inner">
                <ImageWithFallback
                  src={hero.heroPhoto}
                  alt={hero.heroPhotoAlt}
                  fill
                  priority
                  className="object-cover object-center"
                  fallbackLabel="Srushti's Cherished Photo"
                />

                {/* Subtle gradient vignette at bottom of image */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-stone-900/60 to-transparent pointer-events-none" />

                {/* Handwritten-style caption on photo */}
                <div className="absolute bottom-4 inset-x-4 text-center z-10">
                  <p className="font-handwriting text-white text-xl sm:text-2xl drop-shadow-md tracking-wide">
                    {hero.heroPhotoCaption}
                  </p>
                </div>
              </div>

              {/* Little cute corner heart badge */}
              <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-md animate-float-slow">
                <Heart className="w-5 h-5 fill-white stroke-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Down arrow indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-rose-300 animate-bounce">
        <ArrowDown className="w-5 h-5" />
      </div>
    </section>
  );
}
