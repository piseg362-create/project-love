"use client";

import { useState } from "react";
import WelcomeScreen from "@/components/WelcomeScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MemoryGallery from "@/components/MemoryGallery";
import LetterSection from "@/components/LetterSection";
import ReasonsSection from "@/components/ReasonsSection";
import TimelineSection from "@/components/TimelineSection";
import SweetKissSection from "@/components/SweetKissSection";
import InteractiveMoments from "@/components/InteractiveMoments";
import NightSkyEnding from "@/components/NightSkyEnding";
import MusicPlayer from "@/components/MusicPlayer";
import FloatingPetals from "@/components/FloatingPetals";

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <main className="relative min-h-screen">
      {/* Opening Welcome Screen Overlay */}
      {!hasEntered && (
        <WelcomeScreen onEnter={() => setHasEntered(true)} />
      )}

      {/* Floating Gentle Flower Petals */}
      <FloatingPetals />

      {/* Main Website Content (revealed smoothly after welcome) */}
      <div
        className={`transition-opacity duration-1000 ${
          hasEntered ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Navbar />
        <HeroSection />
        <MemoryGallery />
        <LetterSection />
        <ReasonsSection />
        <TimelineSection />
        <SweetKissSection />
        <InteractiveMoments />
        <NightSkyEnding />
      </div>

      {/* Floating Music Player with autoPlay triggered when unlocking world */}
      <MusicPlayer autoPlay={hasEntered} />
    </main>
  );
}
