"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTypewriter } from "@/hooks/useTypewriter";
import { getRestaurantStatus } from "@/lib/restaurantStatus";
import {
  Star,
  Truck,
  Clock,
  Send,
  ChevronDown,
  Sparkles,
  Flame,
  Phone,
} from "lucide-react";
import { RESTAURANT_INFO } from "@/data/menu";

const TYPEWRITER_WORDS = [
  "Smash Burgers.",
  "Injected Broast.",
  "Cheesy Pizzas.",
  "Wah G Wah!",
];

export function Hero() {
  const { currentText, isReducedMotion } = useTypewriter({
    words: TYPEWRITER_WORDS,
    typingSpeed: 85,
    deletingSpeed: 45,
    pauseDuration: 1900,
  });

  const [status, setStatus] = useState({
    isOpen: true,
    statusText: "Open Now • Closes 3:00 AM",
    badgeLabel: "Open Now",
  });

  useEffect(() => {
    setStatus(getRestaurantStatus());
    const interval = setInterval(() => setStatus(getRestaurantStatus()), 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-[#FFF5D9]/80 via-[#FFFDF7] to-[#FFFDF7]"
      aria-label="Hero Introduction"
    >
      {/* Decorative Cheese Drip / Radiant Glow Backdrops */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#FFC20E]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-10 w-[300px] h-[300px] bg-[#8B1A1A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Copy, Typing Headline & CTAs */}
          <motion.div
            initial={isReducedMotion ? {} : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left pt-2 lg:pt-0"
          >
            {/* Official Mascot Badge & Tagline */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
              <div
                className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#FFC20E] shadow-md overflow-hidden bg-[#141414] shrink-0 hover:scale-105 transition-transform"
                style={{ position: "relative" }}
              >
                <Image
                  src="/mascot-badge.svg"
                  alt="Cheezy Bite Official Chef Mascot"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-left">
                <span className="block text-xs font-black uppercase tracking-wider text-[#8B1A1A]">
                  Official Restaurant • Cinema Morr, Kasur
                </span>
                <span className="text-xs font-extrabold text-[#141414] italic">
                  &ldquo;Lets Eat Together! Wah G Wah&rdquo;
                </span>
              </div>
            </div>

            {/* Badges Bar */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-2.5">
              {/* Live Hours Badge */}
              <div
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold shadow-sm ${
                  status.isOpen
                    ? "bg-emerald-100 text-emerald-900 border border-emerald-300"
                    : "bg-amber-100 text-amber-900 border border-amber-300"
                }`}
              >
                <Clock className="w-3.5 h-3.5 text-emerald-700" />
                <span>{status.statusText}</span>
              </div>

              {/* 5.0 Google Rating Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#FFC20E] text-xs font-bold text-[#141414] shadow-sm">
                <div className="flex items-center text-[#FFC20E]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#FFC20E]" />
                  ))}
                </div>
                <span className="font-extrabold text-[#8B1A1A]">5.0</span>
                <span className="text-[11px] text-[#5C4E4B] hidden sm:inline">(140+ Reviews)</span>
              </div>

              {/* Free Delivery Chip */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1A1A] text-[#FFF6DC] text-xs font-bold shadow-sm">
                <Truck className="w-3.5 h-3.5 text-[#FFC20E]" />
                <span>Free Delivery &gt; Rs 700</span>
              </div>
            </div>

            {/* Headline with Typewriter */}
            <div className="space-y-2">
              <span className="block text-sm sm:text-base md:text-lg font-extrabold tracking-wider text-[#8B1A1A] uppercase">
                Kasur&apos;s Ultimate Fast Food Craving 🍔
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-display text-[#141414] leading-[1.08] tracking-tight">
                Fresh, Crispy &amp; Juicy{" "}
                <span className="relative inline-block text-[#8B1A1A]">
                  <span className="text-[#8B1A1A] drop-shadow-sm">
                    {currentText}
                  </span>
                  {!isReducedMotion && (
                    <span className="inline-block w-1 h-[0.85em] bg-[#FFC20E] ml-1 align-baseline animate-pulse" />
                  )}
                </span>
              </h1>
            </div>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-[#5C4E4B] max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              &quot;Lets Eat Together! Wah G Wah&quot; — Savor 100% pure beef smash burgers with crispy lacy edges, spicy injected broast, Chicago deep-dish pizzas, and loaded fries at Cinema Morr, Kasur. Dine-in, takeout, or delivered piping hot to your doorstep!
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-extrabold text-base flex items-center justify-center gap-2.5 shadow-xl shadow-[#25D366]/25 transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer border-2 border-[#FFFDF7]"
              >
                <Send className="w-5 h-5 fill-white" />
                <span>Order on WhatsApp</span>
              </a>

              <Link
                href="/menu"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-[#8B1A1A] hover:bg-[#630F0F] text-[#FFFDF7] font-extrabold text-base flex items-center justify-center gap-2.5 shadow-xl shadow-[#8B1A1A]/20 transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer border-2 border-[#FFC20E]"
              >
                <Flame className="w-5 h-5 text-[#FFC20E]" />
                <span>Explore Full Menu</span>
              </Link>
            </div>

            {/* Quick Contact Line */}
            <div className="flex items-center justify-center lg:justify-start gap-4 text-xs font-bold text-[#5C4E4B] pt-1">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#8B1A1A]" />
                Direct Order:{" "}
                <a
                  href={`tel:${RESTAURANT_INFO.phonePrimary}`}
                  className="text-[#8B1A1A] hover:underline"
                >
                  {RESTAURANT_INFO.phonePrimary}
                </a>
              </span>
              <span>•</span>
              <span>Cinema Morr, Kasur</span>
            </div>
          </motion.div>

          {/* Right Column: High-Impact Photography with Floating Badges */}
          <motion.div
            initial={isReducedMotion ? {} : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            {/* Decorative Cheese Ring Badge */}
            <div className="relative mx-auto max-w-[480px] lg:max-w-none">
              <div
                className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FFF5D9] bg-white group"
                style={{ position: "relative" }}
              >
                <Image
                  src="/images/hero-food.jpg"
                  alt="Cheezy Bite signature feast: Beef Smash Burger, Injected Broast, Deep Dish Pizza and Loaded Fries"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                {/* Bottom caption overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-black/60 backdrop-blur-md text-white border border-white/20 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-display text-[#FFC20E]">CHEEZY BITE SIGNATURES</p>
                    <p className="text-[11px] text-white/90 font-medium">Smash Burger • Injected Broast • Deep Dish</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#FFC20E] text-[#8B1A1A] text-[11px] font-black">
                    Wah G Wah!
                  </span>
                </div>
              </div>

              {/* Floating Badge Top Right */}
              <motion.div
                animate={isReducedMotion ? {} : { y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-2 sm:-right-4 bg-white px-3.5 py-2 rounded-2xl shadow-xl border-2 border-[#FFC20E] flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-xl bg-[#FFF5D9] text-[#8B1A1A] flex items-center justify-center font-bold">
                  🍗
                </div>
                <div>
                  <p className="text-[10px] uppercase font-black text-[#8B1A1A]">Kasur&apos;s Specialty</p>
                  <p className="text-xs font-extrabold text-[#141414]">Injected Broast</p>
                </div>
              </motion.div>

              {/* Floating Badge Bottom Left */}
              <motion.div
                animate={isReducedMotion ? {} : { y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-2 sm:-left-4 bg-[#8B1A1A] text-white px-3.5 py-2 rounded-2xl shadow-xl border-2 border-[#FFC20E] flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-xl bg-[#FFC20E] text-[#8B1A1A] flex items-center justify-center font-bold">
                  🍕
                </div>
                <div>
                  <p className="text-[10px] uppercase font-black text-[#FFC20E]">Chicago Style</p>
                  <p className="text-xs font-extrabold text-white">7&quot; &amp; 10&quot; Deep Dish</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Animated Scroll Down Indicator */}
        <div className="pt-12 text-center hidden md:block">
          <Link
            href="#marquee"
            className="inline-flex flex-col items-center text-xs font-bold text-[#8B1A1A]/70 hover:text-[#8B1A1A] transition-colors"
          >
            <span>Scroll to Taste the Menu</span>
            <ChevronDown className="w-4 h-4 animate-bounce mt-1 text-[#8B1A1A]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
