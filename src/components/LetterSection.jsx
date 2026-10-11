"use client";

import { useState, useEffect, useRef } from "react";
import { Heart, Sparkles, Feather, Eye, RotateCcw } from "lucide-react";
import { siteContent } from "@/data/content";

export default function LetterSection() {
  const { letter } = siteContent;
  const [displayedParagraphs, setDisplayedParagraphs] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setDisplayedParagraphs(letter.paragraphs.length);
      setIsTyping(false);
      return;
    }

    // Intersection observer to trigger reading when scrolled into view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted, letter.paragraphs.length]);

  useEffect(() => {
    if (!hasStarted || !isTyping) return;

    if (displayedParagraphs < letter.paragraphs.length) {
      const timer = setTimeout(() => {
        setDisplayedParagraphs((prev) => prev + 1);
      }, 1200);
      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
    }
  }, [hasStarted, displayedParagraphs, isTyping, letter.paragraphs.length]);

  const handleShowAll = () => {
    setDisplayedParagraphs(letter.paragraphs.length);
    setIsTyping(false);
  };

  const handleReplay = () => {
    setDisplayedParagraphs(0);
    setIsTyping(true);
    setHasStarted(true);
  };

  return (
    <section id="letter" ref={containerRef} className="py-24 px-4 sm:px-6 relative">
      {/* Decorative floral background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-100/35 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100/60 text-rose-800 text-xs font-medium tracking-wider uppercase">
            <Feather className="w-3.5 h-3.5 text-rose-500" />
            <span>{letter.sectionTag}</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-semibold text-stone-900 tracking-tight leading-snug px-2">
            {letter.heading}
          </h2>

          <p className="font-sans text-stone-600 text-sm sm:text-lg font-light">
            {letter.subheading}
          </p>
        </div>

        {/* Parchment Letter Container */}
        <div className="parchment-paper rounded-3xl p-5 sm:p-10 md:p-16 border border-rose-200/80 shadow-2xl relative overflow-hidden">
          {/* Subtle corner floral decorations */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 text-rose-300 pointer-events-none">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 opacity-60" />
          </div>
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 text-rose-300 pointer-events-none">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-rose-200 opacity-60" />
          </div>

          {/* Letter Salutation */}
          <div className="mb-6 sm:mb-8 mt-2 sm:mt-0">
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-rose-950 font-medium italic">
              {letter.salutation}
            </h3>
          </div>

          {/* Letter Body Paragraphs */}
          <div className="space-y-5 sm:space-y-6 text-stone-800 font-sans text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose font-normal break-words">
            {letter.paragraphs.map((para, index) => {
              const isVisible = index < displayedParagraphs;
              
              // Helper to format bold markdown **text**
              const renderFormattedText = (text) => {
                if (!text.includes("**")) return text;
                const parts = text.split(/(\*\*.*?\*\*)/g);
                return parts.map((part, i) => {
                  if (part.startsWith("**") && part.endsWith("**")) {
                    return (
                      <strong key={i} className="font-semibold text-rose-950 bg-rose-50/80 px-1 py-0.5 rounded">
                        {part.slice(2, -2)}
                      </strong>
                    );
                  }
                  return part;
                });
              };

              return (
                <p
                  key={index}
                  className={`transition-all duration-700 leading-relaxed ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3 pointer-events-none select-none"
                  }`}
                  style={{
                    display: isVisible ? "block" : "none",
                  }}
                >
                  {renderFormattedText(para)}
                </p>
              );
            })}
          </div>

          {/* Letter Sign-off and Signature */}
          <div
            className={`mt-12 pt-8 border-t border-rose-200/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 transition-all duration-700 ${
              displayedParagraphs >= letter.paragraphs.length
                ? "opacity-100 translate-y-0"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <div>
              <p className="font-serif italic text-stone-600 text-base sm:text-lg">
                {letter.closing}
              </p>
              <p className="font-sans text-2xl sm:text-3xl text-rose-700 font-bold mt-1">
                {letter.signature}
              </p>
              {letter.footerNote && (
                <p className="font-serif italic text-rose-900/80 text-sm sm:text-base mt-3">
                  {letter.footerNote}
                </p>
              )}
            </div>

            {/* Wax seal simulation */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-600 to-rose-800 text-rose-100 flex items-center justify-center shadow-lg border-2 border-rose-300/40 select-none flex-shrink-0">
              <span className="font-serif font-bold text-base tracking-widest">च & सृ</span>
            </div>
          </div>

          {/* Controls to read instantly or replay */}
          <div className="mt-8 flex items-center justify-center gap-4 text-xs font-sans text-stone-500 pt-4">
            {isTyping && displayedParagraphs < letter.paragraphs.length && (
              <button
                onClick={handleShowAll}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/70 hover:bg-white text-rose-700 border border-rose-200 transition-colors shadow-sm"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Read Full Letter Instantly</span>
              </button>
            )}
            {!isTyping && (
              <button
                onClick={handleReplay}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/70 hover:bg-white text-rose-700 border border-rose-200 transition-colors shadow-sm"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Replay Letter Animation</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
