"use client";

import { useState, useRef, useEffect } from "react";
import {
  Volume2,
  VolumeX,
  Music,
  Play,
  Pause,
  ChevronUp,
  ChevronDown,
  ExternalLink,
  Heart,
  Eye,
  EyeOff,
} from "lucide-react";
import { siteContent } from "@/data/content";

export default function MusicPlayer({ autoPlay = false }) {
  const { audio } = siteContent;
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [apiReady, setApiReady] = useState(false);
  const playerRef = useRef(null);

  useEffect(() => {
    // Load YouTube IFrame API script
    if (typeof window === "undefined") return;

    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    const initPlayer = () => {
      if (window.YT && window.YT.Player) {
        try {
          playerRef.current = new window.YT.Player("youtube-music-player", {
            videoId: audio.youtubeVideoId,
            playerVars: {
              autoplay: 1, // autoplay by default
              controls: 1,
              playsinline: 1,
              rel: 0,
              modestbranding: 1,
              origin: window.location.origin,
            },
            events: {
              onReady: (event) => {
                setApiReady(true);
                // Attempt to play on ready
                try {
                  event.target.playVideo();
                } catch {}
              },
              onStateChange: (event) => {
                // 1 = PLAYING, 2 = PAUSED, 0 = ENDED
                if (event.data === 1) {
                  setIsPlaying(true);
                } else if (event.data === 2 || event.data === 0) {
                  setIsPlaying(false);
                }
              },
            },
          });
        } catch {
          // Ignore initialization error
        }
      }
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      if (playerRef.current && playerRef.current.destroy) {
        try {
          playerRef.current.destroy();
        } catch {}
      }
    };
  }, [audio.youtubeVideoId]);

  // When autoPlay prop changes (e.g. Srushti unlocks the welcome screen)
  useEffect(() => {
    if (autoPlay && playerRef.current && typeof playerRef.current.playVideo === "function") {
      try {
        playerRef.current.playVideo();
      } catch {}
    }
  }, [autoPlay]);

  // Fallback: On the first user gesture anywhere, start playing if not playing yet
  useEffect(() => {
    const handleFirstUserInteraction = () => {
      if (playerRef.current && typeof playerRef.current.playVideo === "function") {
        try {
          playerRef.current.playVideo();
        } catch {}
      }
      window.removeEventListener("click", handleFirstUserInteraction);
      window.removeEventListener("touchstart", handleFirstUserInteraction);
    };

    window.addEventListener("click", handleFirstUserInteraction, { once: true });
    window.addEventListener("touchstart", handleFirstUserInteraction, { once: true });

    return () => {
      window.removeEventListener("click", handleFirstUserInteraction);
      window.removeEventListener("touchstart", handleFirstUserInteraction);
    };
  }, []);

  const toggleMusic = () => {
    if (playerRef.current && typeof playerRef.current.playVideo === "function") {
      if (isPlaying) {
        playerRef.current.pauseVideo();
        setIsPlaying(false);
      } else {
        playerRef.current.playVideo();
        setIsPlaying(true);
      }
    } else {
      // If player wasn't initialized yet, expand widget
      setIsExpanded(true);
      setShowVideo(true);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end max-w-[calc(100vw-2rem)]">
      {/* Expanded Floating Music Card */}
      {isExpanded && (
        <div className="mb-3 w-[calc(100vw-2rem)] max-w-sm sm:w-96 glass-card rounded-3xl p-4 sm:p-5 border border-rose-200/90 shadow-2xl animate-fade-in relative overflow-hidden backdrop-blur-xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
                <Music className="w-4 h-4" />
              </span>
              <div>
                <h4 className="font-serif text-base font-semibold text-rose-950 leading-tight">
                  {audio.title}
                </h4>
                <p className="text-[11px] font-sans text-stone-500">
                  Dedicated by Chaitanya ❤️
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsExpanded(false)}
              className="text-stone-400 hover:text-stone-600 p-1 rounded-full"
              aria-label="Minimize music player"
            >
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>

          {/* Interactive Vinyl / Music Wave animation */}
          <div className="flex items-center justify-between bg-rose-50/70 rounded-2xl p-3 border border-rose-100 mb-3">
            <div className="flex items-center gap-3">
              {/* Spinning Record */}
              <div
                className={`w-12 h-12 rounded-full bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 border-2 border-stone-700 flex items-center justify-center shadow-md relative transition-transform ${
                  isPlaying ? "animate-spin" : ""
                }`}
                style={{ animationDuration: "5s" }}
              >
                <div className="w-4 h-4 rounded-full bg-rose-500 border border-white flex items-center justify-center">
                  <Heart className="w-2.5 h-2.5 fill-white text-white" />
                </div>
              </div>

              {/* Music Visualizer Bars */}
              <div className="flex items-end gap-1 h-6">
                {[40, 75, 100, 50, 90, 60, 80].map((h, i) => (
                  <span
                    key={i}
                    className={`w-1 rounded-full bg-rose-500 transition-all duration-300 ${
                      isPlaying ? "animate-pulse" : "opacity-30 h-2"
                    }`}
                    style={{
                      height: isPlaying ? `${h}%` : "4px",
                      animationDelay: `${i * 0.15}s`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Play/Pause Button inside Card */}
            <button
              onClick={toggleMusic}
              className="w-11 h-11 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-md shadow-rose-600/30 hover:bg-rose-700 hover:scale-105 active:scale-95 transition-all"
              aria-label={isPlaying ? "Pause music" : "Play music"}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 fill-white" />
              ) : (
                <Play className="w-5 h-5 fill-white ml-0.5" />
              )}
            </button>
          </div>

          {/* Toggle Video Display Button */}
          <div className="flex items-center justify-between text-xs text-rose-800 pt-1">
            <button
              onClick={() => setShowVideo(!showVideo)}
              className="inline-flex items-center gap-1.5 hover:text-rose-950 font-medium"
            >
              {showVideo ? (
                <>
                  <EyeOff className="w-3.5 h-3.5" />
                  <span>Hide Video Frame</span>
                </>
              ) : (
                <>
                  <Eye className="w-3.5 h-3.5" />
                  <span>Watch Video Frame</span>
                </>
              )}
            </button>

            <a
              href={`https://www.youtube.com/watch?v=${audio.youtubeVideoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] text-stone-500 hover:text-rose-700"
            >
              <span>YouTube</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Embedded YouTube Player Container */}
          <div
            className={`mt-3 rounded-2xl overflow-hidden transition-all duration-500 ${
              showVideo ? "h-48 opacity-100" : "h-0 opacity-0 pointer-events-none"
            }`}
          >
            <div id="youtube-music-player-visible" className="w-full h-full" />
          </div>
        </div>
      )}

      {/* Hidden YouTube Player Iframe (kept in DOM for background audio) */}
      <div
        className="overflow-hidden pointer-events-auto"
        style={{
          width: showVideo && isExpanded ? "100%" : "1px",
          height: showVideo && isExpanded ? "190px" : "1px",
          opacity: showVideo && isExpanded ? 1 : 0.01,
          position: showVideo && isExpanded ? "relative" : "absolute",
          top: showVideo && isExpanded ? "auto" : "-9999px",
        }}
      >
        <div id="youtube-music-player" className="w-full h-full rounded-2xl" />
      </div>

      {/* Main Bottom Floating Toggle Pill Button */}
      <div className="inline-flex items-center gap-1 shadow-lg rounded-full p-1 bg-white/95 backdrop-blur-md border border-rose-200/90 hover:border-rose-300">
        <button
          onClick={toggleMusic}
          type="button"
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 ${
            isPlaying
              ? "bg-rose-600 text-white shadow-md shadow-rose-600/30"
              : "bg-rose-50 text-stone-800 hover:bg-rose-100/70"
          }`}
          aria-label={isPlaying ? audio.labelOn : audio.labelOff}
        >
          {isPlaying ? (
            <>
              <Volume2 className="w-4 h-4 text-white animate-pulse" />
              <span className="font-sans font-medium text-xs sm:text-sm">
                {audio.labelOn}
              </span>
            </>
          ) : (
            <>
              <Music className="w-4 h-4 text-rose-600" />
              <span className="font-sans font-medium text-xs sm:text-sm text-stone-800">
                {audio.labelOff}
              </span>
            </>
          )}
        </button>

        {/* Expand / Minimize Arrow Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          type="button"
          className="p-2 rounded-full text-stone-500 hover:text-rose-600 hover:bg-rose-50 transition-colors"
          aria-label={isExpanded ? "Close player card" : "Open player card"}
        >
          {isExpanded ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronUp className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
}
