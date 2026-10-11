"use client";

import { useState } from "react";
import { Heart, Mail, Sparkles, X, Smile } from "lucide-react";
import { siteContent } from "@/data/content";

export default function InteractiveMoments() {
  const { interactive } = siteContent;
  const [showHug, setShowHug] = useState(false);
  const [activeNoteIndex, setActiveNoteIndex] = useState(null);
  const [floatingHearts, setFloatingHearts] = useState([]);

  const triggerHug = () => {
    setShowHug(true);

    // Create a gentle burst of mini floating hearts
    const newHearts = Array.from({ length: 12 }).map((_, i) => ({
      id: Date.now() + i,
      x: 35 + Math.random() * 30, // centered percentage
      y: 40 + Math.random() * 20,
      scale: 0.8 + Math.random() * 0.8,
      rotation: -30 + Math.random() * 60,
    }));
    setFloatingHearts(newHearts);

    setTimeout(() => {
      setFloatingHearts([]);
    }, 2500);
  };

  const handleOpenNote = () => {
    setActiveNoteIndex((prev) =>
      prev === null ? 0 : (prev + 1) % interactive.additionalNotes.length
    );
  };

  return (
    <section id="interactive" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100/60 text-rose-800 text-xs font-medium tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-rose-500" />
            <span>{interactive.sectionTag}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-stone-900 tracking-tight">
            {interactive.heading}
          </h2>

          <p className="font-sans text-stone-600 text-base sm:text-lg font-light">
            {interactive.subheading}
          </p>
        </div>

        {/* Action Buttons Box */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-rose-200/80 shadow-lg relative overflow-hidden">
          {/* Subtle floating heart burst overlay */}
          {floatingHearts.map((h) => (
            <div
              key={h.id}
              className="absolute pointer-events-none transition-all duration-1000 ease-out z-20"
              style={{
                left: `${h.x}%`,
                top: `${h.y}%`,
                transform: `scale(${h.scale}) rotate(${h.rotation}deg)`,
                animation: "twinkle 1.8s ease-out forwards",
              }}
            >
              <Heart className="w-8 h-8 text-rose-500 fill-rose-400 drop-shadow-md" />
            </div>
          ))}

          <p className="font-serif italic text-lg sm:text-xl text-stone-700 mb-8 max-w-md mx-auto">
            “No expectations, no pressure. Just a quiet space for warmth whenever you need it.”
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            {/* Hug Button */}
            <button
              onClick={triggerHug}
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-rose-500 to-rose-600 text-white font-medium text-base shadow-lg shadow-rose-500/25 hover:shadow-xl hover:shadow-rose-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-rose-300"
            >
              <Smile className="w-5 h-5" />
              <span>{interactive.hugButtonText}</span>
            </button>

            {/* Note Button */}
            <button
              onClick={handleOpenNote}
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-stone-800 border border-rose-200 font-medium text-base shadow-sm hover:bg-rose-50/70 hover:border-rose-300 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-rose-200"
            >
              <Mail className="w-5 h-5 text-rose-500" />
              <span>{interactive.noteButtonText}</span>
            </button>
          </div>

          {/* Hug Message Card Reveal */}
          {showHug && (
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-rose-50 via-blush-50 to-cream-100 border border-rose-200/80 animate-fade-in relative max-w-lg mx-auto">
              <button
                onClick={() => setShowHug(false)}
                className="absolute top-3 right-3 text-stone-400 hover:text-stone-600 p-1"
                aria-label="Close hug message"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-12 h-12 rounded-full bg-rose-500 text-white flex items-center justify-center mx-auto mb-3 shadow-md shadow-rose-500/20">
                <Heart className="w-6 h-6 fill-white" />
              </div>

              <p className="font-serif text-lg sm:text-xl text-rose-950 font-medium leading-relaxed">
                {interactive.hugMessage}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Additional Note Modal */}
      {activeNoteIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="A special note for Srushti"
          onClick={() => setActiveNoteIndex(null)}
        >
          <div
            className="parchment-paper rounded-3xl p-8 sm:p-10 max-w-md w-full border border-rose-200 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveNoteIndex(null)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 p-1.5 rounded-full"
              aria-label="Close note"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-4">
              <span className="text-xs uppercase font-mono tracking-widest text-rose-600">
                Note {activeNoteIndex + 1} of {interactive.additionalNotes.length}
              </span>
              <h3 className="font-serif text-2xl font-semibold text-rose-950 mt-1">
                {interactive.additionalNotes[activeNoteIndex].title}
              </h3>
            </div>

            <p className="font-sans text-stone-700 text-base leading-relaxed text-center my-6 font-light">
              “{interactive.additionalNotes[activeNoteIndex].content}”
            </p>

            <div className="text-center pt-2">
              <button
                onClick={handleOpenNote}
                className="text-xs text-rose-600 hover:text-rose-700 font-medium underline underline-offset-4"
              >
                Read another note →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
