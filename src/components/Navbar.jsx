"use client";

import { useState, useEffect } from "react";
import { Heart, Menu, X, Sparkles } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Our Memories", href: "#memories" },
    { name: "A Letter", href: "#letter" },
    { name: "Why You're Special", href: "#reasons" },
    { name: "Our Story", href: "#timeline" },
    { name: "Sweet Kiss 💋", href: "#kiss-moment" },
    { name: "A Little Hug", href: "#interactive" },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-rose-100 shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Monogram */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, "#hero")}
          className="group inline-flex items-center gap-2 text-rose-950 font-serif text-xl sm:text-2xl font-medium tracking-tight"
        >
          <span className="font-serif">Srushti</span>
          <Heart className="w-4 h-4 text-rose-500 fill-rose-400 transition-transform duration-300 group-hover:scale-125" />
          <span className="text-stone-500 text-sm font-sans font-normal hidden sm:inline">
            by Chaitanya
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-stone-700 hover:text-rose-600 font-sans text-sm font-medium transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-rose-400 hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-xl text-rose-900 hover:bg-rose-100/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-rose-100 px-6 py-6 space-y-4 shadow-xl animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="block text-stone-800 hover:text-rose-600 font-sans text-base font-medium py-2 border-b border-rose-50"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 text-xs text-rose-600/80 font-serif italic text-center">
            With love for Srushti ❤️
          </div>
        </div>
      )}
    </header>
  );
}
