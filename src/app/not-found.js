import Link from "next/link";
import { Heart, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-b from-[#fff5f7] via-[#fffbf5] to-[#fef2f4] text-center">
      <div className="max-w-md w-full glass-card rounded-3xl p-8 sm:p-12 border border-rose-200/80 shadow-xl space-y-6">
        <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mx-auto text-rose-500 animate-pulse-gentle">
          <Heart className="w-8 h-8 fill-rose-300 stroke-rose-600" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-rose-600">
            Page Not Found • 404
          </span>
          <h1 className="font-serif text-3xl font-semibold text-rose-950">
            A Wandering Page
          </h1>
          <p className="font-sans text-stone-600 text-sm leading-relaxed">
            This little path doesn't lead anywhere, but the world of memories is just a click away.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-rose-600 text-white font-medium text-sm shadow-md hover:bg-rose-700 transition-all hover:scale-105"
          >
            <Home className="w-4 h-4" />
            <span>Return to Srushti's World</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
