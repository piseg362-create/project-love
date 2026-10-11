"use client";

import { Heart, Sparkles, Milestone } from "lucide-react";
import { siteContent } from "@/data/content";
import ImageWithFallback from "./ImageWithFallback";

export default function TimelineSection() {
  const { timeline } = siteContent;

  return (
    <section id="timeline" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100/60 text-rose-800 text-xs font-medium tracking-wider uppercase">
            <Milestone className="w-3.5 h-3.5 text-rose-500" />
            <span>{timeline.sectionTag}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-stone-900 tracking-tight">
            {timeline.heading}
          </h2>

          <p className="font-sans text-stone-600 text-base sm:text-lg font-light">
            {timeline.subheading}
          </p>
        </div>

        {/* Desktop: Horizontal layout with gentle scroll track & connector */}
        <div className="hidden lg:block relative py-8">
          {/* Connecting line */}
          <div className="absolute top-[3.75rem] left-12 right-12 h-1 bg-gradient-to-r from-rose-200 via-rose-300 to-rose-200 -z-0 rounded-full" />

          <div className="grid grid-cols-5 gap-6 relative z-10">
            {timeline.milestones.map((item, index) => (
              <div key={item.id} className="flex flex-col items-center text-center group">
                {/* Milestone Node */}
                <div className="w-12 h-12 rounded-full bg-white border-4 border-rose-400 shadow-md flex items-center justify-center text-rose-600 mb-6 group-hover:scale-110 group-hover:border-rose-500 transition-all duration-300">
                  <Heart className="w-5 h-5 fill-rose-100" />
                </div>

                {/* Milestone Card */}
                <div className="w-full glass-card rounded-2xl p-4 border border-rose-100 group-hover:shadow-lg transition-all duration-300 flex flex-col items-center">
                  <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-xs font-mono font-medium mb-3">
                    {item.badge}
                  </span>

                  {/* Photo thumbnail */}
                  <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-rose-50 relative">
                    <ImageWithFallback
                      src={item.photo}
                      alt={item.title}
                      fill
                      className="object-cover"
                      fallbackLabel={`Memory ${index + 1}`}
                    />
                  </div>

                  <h3 className="font-serif text-lg font-semibold text-stone-900 mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="font-sans text-xs text-stone-600 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet: Vertical Timeline */}
        <div className="lg:hidden relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2.5 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-rose-200">
          {timeline.milestones.map((item, index) => (
            <div key={item.id} className="relative group">
              {/* Timeline pin */}
              <div className="absolute -left-6 sm:-left-8 top-1.5 w-6 h-6 rounded-full bg-white border-2 border-rose-500 flex items-center justify-center shadow-sm">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
              </div>

              {/* Card */}
              <div className="glass-card rounded-2xl p-5 sm:p-6 border border-rose-100 shadow-sm">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-xs font-mono font-medium">
                    {item.badge}
                  </span>
                  <span className="text-xs text-stone-400 font-sans">Milestone {index + 1}</span>
                </div>

                <h3 className="font-serif text-xl font-semibold text-stone-900 mb-2">
                  {item.title}
                </h3>

                <p className="font-sans text-sm text-stone-600 leading-relaxed font-light mb-4">
                  {item.description}
                </p>

                {/* Photo thumbnail */}
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-rose-50">
                  <ImageWithFallback
                    src={item.photo}
                    alt={item.title}
                    fill
                    className="object-cover"
                    fallbackLabel={`Memory ${index + 1}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
