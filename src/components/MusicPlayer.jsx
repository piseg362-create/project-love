"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";
import { siteContent } from "@/data/content";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const audioRef = useRef(null);
  const synthIntervalRef = useRef(null);
  const audioCtxRef = useRef(null);

  const { audio } = siteContent;

  // Gentle ambient piano notes generator using Web Audio API as an exquisite fallback
  const playGentleTone = (freq, duration = 2.5) => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Soft sine tone for warm music-box / rhodes piano vibe
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      // Soft envelope
      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Ignore audio synthesis errors
    }
  };

  const startAmbientChords = () => {
    // Romantic pentatonic chord sequence (C - G - Am - F)
    const melody = [
      [261.63, 329.63, 392.0], // C major
      [196.0, 246.94, 293.66], // G major
      [220.0, 261.63, 329.63], // A minor
      [174.61, 220.0, 261.63], // F major
    ];
    let step = 0;

    const playChord = () => {
      const chord = melody[step % melody.length];
      chord.forEach((freq, idx) => {
        setTimeout(() => playGentleTone(freq, 3.5), idx * 180);
      });
      step++;
    };

    playChord();
    synthIntervalRef.current = setInterval(playChord, 3800);
    setIsSynthesizing(true);
  };

  const stopAmbientChords = () => {
    if (synthIntervalRef.current) {
      clearInterval(synthIntervalRef.current);
      synthIntervalRef.current = null;
    }
    setIsSynthesizing(false);
  };

  const toggleMusic = () => {
    if (isPlaying) {
      if (audioRef.current && !audioRef.current.paused) {
        audioRef.current.pause();
      }
      stopAmbientChords();
      setIsPlaying(false);
    } else {
      // Attempt to play actual MP3 file if available
      if (audioRef.current) {
        audioRef.current.volume = 0.4;
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // If MP3 file not found or browser blocked, use gentle ambient tone generator
            startAmbientChords();
            setIsPlaying(true);
          });
      } else {
        startAmbientChords();
        setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
    return () => {
      stopAmbientChords();
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <>
      <audio ref={audioRef} src={audio.src} loop preload="none" />
      <button
        onClick={toggleMusic}
        type="button"
        className={`fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 px-4 py-2.5 rounded-full shadow-lg border text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 ${
          isPlaying
            ? "bg-rose-500 text-white border-rose-400 shadow-rose-500/30 scale-105"
            : "bg-white/90 backdrop-blur-md text-stone-700 border-rose-200/80 hover:bg-rose-50 shadow-stone-800/5 hover:border-rose-300"
        }`}
        aria-label={isPlaying ? audio.labelOn : audio.labelOff}
        title={isPlaying ? audio.labelOn : audio.labelOff}
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-4 h-4 text-white animate-pulse" />
            <span className="hidden sm:inline font-sans">{audio.labelOn}</span>
            <span className="sm:hidden font-sans">Music On</span>
          </>
        ) : (
          <>
            <Music className="w-4 h-4 text-rose-500" />
            <span className="hidden sm:inline font-sans">{audio.labelOff}</span>
            <span className="sm:hidden font-sans">Music</span>
          </>
        )}
      </button>
    </>
  );
}
