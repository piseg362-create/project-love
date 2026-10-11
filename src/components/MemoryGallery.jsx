"use client";

import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Heart, Sparkles, ZoomIn } from "lucide-react";
import { siteContent } from "@/data/content";
import ImageWithFallback from "./ImageWithFallback";

export default function MemoryGallery() {
  const { memories } = siteContent;
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const activePhoto =
    selectedPhotoIndex !== null ? memories.photos[selectedPhotoIndex] : null;

  const handleNext = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev + 1) % memories.photos.length);
  }, [selectedPhotoIndex, memories.photos.length]);

  const handlePrev = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) =>
      prev === 0 ? memories.photos.length - 1 : prev - 1
    );
  }, [selectedPhotoIndex, memories.photos.length]);

  const handleClose = useCallback(() => {
    setSelectedPhotoIndex(null);
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (selectedPhotoIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhotoIndex, handleClose, handleNext, handlePrev]);

  return (
    <section id="memories" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100/60 text-rose-800 text-xs font-medium tracking-wider uppercase">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-400" />
            <span>{memories.sectionTag}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-stone-900 tracking-tight">
            {memories.heading}
          </h2>

          <p className="font-sans text-stone-600 text-base sm:text-lg font-light">
            {memories.subheading}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {memories.photos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhotoIndex(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedPhotoIndex(index);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View photo: ${photo.caption}`}
              className="group cursor-pointer rounded-2xl sm:rounded-3xl bg-white p-3 sm:p-4 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border border-rose-100/70 focus:outline-none focus-visible:ring-4 focus-visible:ring-rose-300 relative overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden bg-rose-50/50">
                <ImageWithFallback
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  fallbackLabel={photo.title}
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm text-rose-600 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>

                {/* Subtle date or badge */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/85 backdrop-blur-md text-stone-700 text-xs font-sans font-medium shadow-sm">
                  {photo.date}
                </span>
              </div>

              {/* Caption */}
              <div className="mt-3.5 px-1 pb-1">
                <p className="font-handwriting text-rose-950 text-xl sm:text-2xl leading-snug">
                  “{photo.caption}”
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Helpful replace photos notice */}
        <div className="mt-12 text-center">
          <p className="inline-flex items-center gap-2 text-xs sm:text-sm text-stone-500 bg-rose-50/80 px-4 py-2 rounded-full border border-rose-100 font-sans">
            <Sparkles className="w-4 h-4 text-rose-400" />
            <span>
              Tip: Drop your real photos into <code className="text-rose-700 font-mono">/public/images/</code> as <code className="text-rose-700 font-mono">srushti-1.jpg</code>, <code className="text-rose-700 font-mono">srushti-2.jpg</code>, etc.
            </span>
          </p>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Full screen photo viewer"
          onClick={handleClose}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 sm:top-8 sm:right-8 z-50 text-white/80 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close photo viewer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Modal Content */}
          <div
            className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[55vh] sm:h-[65vh] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={activePhoto.src}
                alt={activePhoto.alt}
                fill
                sizes="100vw"
                className="object-contain"
                fallbackLabel={activePhoto.title}
              />
            </div>

            {/* Lightbox Caption */}
            <div className="mt-4 text-center text-white px-4">
              <p className="font-handwriting text-2xl sm:text-3xl text-rose-200">
                “{activePhoto.caption}”
              </p>
              <p className="font-sans text-xs sm:text-sm text-stone-300 mt-1">
                {activePhoto.title} • {selectedPhotoIndex + 1} of {memories.photos.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
