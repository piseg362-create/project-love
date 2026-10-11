"use client";

import { useState } from "react";
import {
  Sparkles,
  HeartHandshake,
  Camera,
  Sun,
  Compass,
  Flower2,
  Heart,
  ChevronDown,
} from "lucide-react";
import { siteContent } from "@/data/content";

const iconMap = {
  Sparkles,
  HeartHandshake,
  Camera,
  Sun,
  Compass,
  Flower2,
};

export default function ReasonsSection() {
  const { reasons } = siteContent;
  const [expandedCardId, setExpandedCardId] = useState(reasons.cards[0]?.id || null);

  const toggleCard = (id) => {
    setExpandedCardId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="reasons" className="py-24 px-4 sm:px-6 relative bg-gradient-to-b from-transparent via-blush-50/40 to-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100/60 text-rose-800 text-xs font-medium tracking-wider uppercase">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-400" />
            <span>{reasons.sectionTag}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-stone-900 tracking-tight">
            {reasons.heading}
          </h2>

          <p className="font-sans text-stone-600 text-base sm:text-lg font-light">
            {reasons.subheading}
          </p>
        </div>

        {/* Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.cards.map((card, index) => {
            const IconComponent = iconMap[card.icon] || Heart;
            const isExpanded = expandedCardId === card.id;

            return (
              <div
                key={card.id}
                onClick={() => toggleCard(card.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleCard(card.id);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-expanded={isExpanded}
                className={`group rounded-3xl p-6 sm:p-7 transition-all duration-300 border cursor-pointer select-none relative overflow-hidden flex flex-col justify-between ${
                  isExpanded
                    ? "bg-white/95 border-rose-300 shadow-xl shadow-rose-500/10 scale-[1.02]"
                    : "glass-card hover:bg-white/90 border-rose-100 hover:border-rose-200 shadow-sm hover:shadow-md"
                }`}
              >
                {/* Top Row: Icon and Card Number */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        isExpanded
                          ? "bg-rose-500 text-white shadow-md shadow-rose-500/25 rotate-3"
                          : "bg-rose-50 text-rose-600 group-hover:bg-rose-100"
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className="text-xs font-mono font-medium text-stone-400">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-stone-900 mb-1 group-hover:text-rose-900 transition-colors">
                    {card.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-stone-500 font-normal mb-4">
                    {card.subtitle}
                  </p>
                </div>

                {/* Hidden / Revealed Description */}
                <div>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isExpanded ? "max-h-48 opacity-100 pt-3 border-t border-rose-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="font-sans text-stone-700 text-sm sm:text-base leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Bottom Expand Indicator */}
                  <div className="flex items-center justify-between mt-4 text-xs font-medium text-rose-600/90 pt-1">
                    <span>{isExpanded ? "Tap to fold" : "Tap to reveal thought"}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
