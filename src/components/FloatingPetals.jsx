"use client";

import { useEffect, useState } from "react";

export default function FloatingPetals() {
  const [petals, setPetals] = useState([]);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check user's motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handler = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);

    // Generate 16 gentle floating elements (petals and little glowing hearts)
    const generated = Array.from({ length: 16 }).map((_, index) => ({
      id: index,
      left: `${(index * 6.25 + Math.random() * 4).toFixed(1)}%`,
      animationDuration: `${12 + Math.random() * 10}s`,
      animationDelay: `${Math.random() * 8}s`,
      size: 14 + Math.random() * 12,
      opacity: 0.35 + Math.random() * 0.4,
      rotation: Math.floor(Math.random() * 360),
      isHeart: index % 3 === 0,
    }));
    setPetals(generated);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  if (reducedMotion) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-10 overflow-hidden"
      aria-hidden="true"
    >
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-petal"
          style={{
            left: petal.left,
            animationDuration: petal.animationDuration,
            animationDelay: petal.animationDelay,
            top: "-40px",
          }}
        >
          {petal.isHeart ? (
            <svg
              className="text-blush-400 drop-shadow-sm"
              style={{
                width: `${petal.size * 0.8}px`,
                height: `${petal.size * 0.8}px`,
                opacity: petal.opacity,
                transform: `rotate(${petal.rotation}deg)`,
              }}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ) : (
            <svg
              className="text-blush-300 drop-shadow-sm"
              style={{
                width: `${petal.size}px`,
                height: `${petal.size * 1.3}px`,
                opacity: petal.opacity,
                transform: `rotate(${petal.rotation}deg)`,
              }}
              viewBox="0 0 20 28"
              fill="currentColor"
            >
              <path d="M10,0 C17,6 20,16 15,24 C10,30 2,24 0,16 C0,8 6,2 10,0 Z" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}
