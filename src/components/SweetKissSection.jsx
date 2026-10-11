"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Heart, Sparkles, Video, Maximize } from "lucide-react";
import { siteContent } from "@/data/content";

export default function SweetKissSection() {
  const { kissVideo } = siteContent;
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [showHeartsBurst, setShowHeartsBurst] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasError(false);
        })
        .catch(() => {
          setHasError(true);
        });
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    }
  };

  const triggerKissBurst = () => {
    setShowHeartsBurst(true);
    setTimeout(() => {
      setShowHeartsBurst(false);
    }, 2000);
  };

  return (
    <section id="kiss-moment" className="py-24 px-4 sm:px-6 relative">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100/70 text-rose-800 text-xs font-medium tracking-wider uppercase">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-400" />
            <span>{kissVideo.sectionTag}</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-semibold text-stone-900 tracking-tight">
            {kissVideo.heading}
          </h2>

          <p className="font-sans text-stone-600 text-sm sm:text-lg font-light">
            {kissVideo.subheading}
          </p>
        </div>

        {/* Video Frame Showcase */}
        <div className="relative max-w-[300px] sm:max-w-xs md:max-w-sm mx-auto">
          {/* Glowing Aura */}
          <div className="absolute -inset-3 bg-gradient-to-tr from-rose-400/30 via-blush-300/40 to-amber-200/30 rounded-[2.5rem] blur-xl opacity-90" />

          <div className="relative rounded-[2.2rem] bg-white p-3 sm:p-4 shadow-2xl border border-rose-200/80 overflow-hidden">
            {/* Top Badge */}
            <div className="flex items-center justify-between px-3 py-2 mb-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
                <Sparkles className="w-3 h-3 text-rose-500" />
                {kissVideo.dateBadge}
              </span>
              <span className="text-xs font-serif italic text-stone-500">
                From Chaitanya with Love 💌
              </span>
            </div>

            {/* Video Container (aspect 9:16 or 4:5 for phone clips) */}
            <div
              onClick={togglePlay}
              className="relative aspect-[9/14] sm:aspect-[9/13] w-full rounded-2xl sm:rounded-[1.6rem] overflow-hidden bg-stone-950 cursor-pointer group shadow-inner flex items-center justify-center select-none"
            >
              {!hasError ? (
                <video
                  ref={videoRef}
                  src={kissVideo.videoSrc}
                  poster={kissVideo.poster}
                  loop
                  playsInline
                  webkit-playsinline="true"
                  muted={isMuted}
                  className="w-full h-full object-cover"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onError={() => setHasError(true)}
                />
              ) : (
                /* Fallback if video file has not yet been placed */
                <div className="flex flex-col items-center justify-center p-6 text-center text-rose-100 bg-gradient-to-b from-stone-900 via-rose-950 to-stone-900 w-full h-full">
                  <div className="w-16 h-16 rounded-full bg-rose-500/20 border border-rose-400/40 flex items-center justify-center mb-4 text-rose-300 animate-pulse-gentle">
                    <Video className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-xl sm:text-2xl text-rose-200 font-semibold mb-2">
                    Chaitanya's Kiss Video
                  </h4>
                  <p className="font-handwriting text-2xl text-rose-300/90 max-w-[240px] mb-4">
                    “Sending you a flying kiss…”
                  </p>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 text-xs font-sans text-rose-200 border border-rose-400/30 max-w-xs">
                    Drop your video file into:
                    <br />
                    <code className="text-rose-300 font-mono font-semibold">
                      /public/videos/chaitanya-kiss.mp4
                    </code>
                    <br />
                    <span className="text-[11px] text-rose-300/70">
                      (or name it kiss.mp4)
                    </span>
                  </div>
                </div>
              )}

              {/* Floating Kiss Burst when activated */}
              {showHeartsBurst && (
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-30">
                  <span className="text-6xl animate-ping select-none">💋</span>
                </div>
              )}

              {/* Center Play/Pause Overlay indicator */}
              {!isPlaying && !hasError && (
                <div className="absolute inset-0 bg-stone-950/30 backdrop-blur-[2px] flex items-center justify-center group-hover:bg-stone-950/40 transition-all">
                  <div className="w-16 h-16 rounded-full bg-rose-500/90 text-white flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 ml-1 fill-white" />
                  </div>
                </div>
              )}

              {/* Bottom Video Controls Bar */}
              {!hasError && (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-stone-950/80 via-stone-950/40 to-transparent flex items-center justify-between z-20 text-white"
                >
                  <button
                    onClick={togglePlay}
                    type="button"
                    className="p-2 rounded-full hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? <Pause className="w-5 h-5 fill-white" /> : <Play className="w-5 h-5 fill-white" />}
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleMute}
                      type="button"
                      className="p-2 rounded-full hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                      aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                    >
                      {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </button>

                    <button
                      onClick={handleFullscreen}
                      type="button"
                      className="p-2 rounded-full hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                      aria-label="View fullscreen"
                    >
                      <Maximize className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Caption & Cute Interactive Kiss Button */}
            <div className="mt-4 px-2 pb-2 text-center space-y-3">
              <p className="font-handwriting text-rose-950 text-2xl sm:text-3xl leading-snug">
                “{kissVideo.caption}”
              </p>

              <button
                onClick={triggerKissBurst}
                type="button"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs sm:text-sm font-medium transition-all hover:scale-105 active:scale-95 shadow-sm"
              >
                <span>Catch The Kiss 💋</span>
                <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500 animate-pulse" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
