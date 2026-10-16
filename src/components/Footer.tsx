"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Clock, Send, Heart, Sparkles, ExternalLink } from "lucide-react";
import { RESTAURANT_INFO } from "@/data/menu";

export function Footer() {
  return (
    <footer className="bg-[#6B1212] text-[#FFFDF7] pt-16 pb-24 md:pb-12 border-t-4 border-[#FFC20E] relative overflow-hidden">
      {/* Decorative Cheese Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FFC20E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative w-48 h-12" style={{ position: "relative" }}>
                <Image
                  src="/logo.svg"
                  alt="Cheezy Bite Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-[#FFF6DC]/90 leading-relaxed max-w-sm font-medium">
              &quot;Lets Eat Together! Wah G Wah&quot; — Kasur&apos;s premier fast food brand serving authentic beef smash burgers, signature injected broast, Chicago deep-dish pizzas, and loaded fries.
            </p>
            <div className="space-y-1.5 text-xs text-[#FFF6DC]/80">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#FFC20E] shrink-0" />
                <span>Cinema Morr, Near Ranger School, Kasur</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#FFC20E] shrink-0" />
                <span>{RESTAURANT_INFO.phonePrimary} / {RESTAURANT_INFO.phoneSecondary}</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#FFC20E] shrink-0" />
                <span>11:00 AM – 3:00 AM Daily</span>
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-display text-[#FFC20E] uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link href="/#home" className="hover:text-[#FFC20E] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-[#FFC20E] transition-colors">
                  Full Menu
                </Link>
              </li>
              <li>
                <Link href="/#deals" className="hover:text-[#FFC20E] transition-colors">
                  Value Combo Deals
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="hover:text-[#FFC20E] transition-colors">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link href="/#reviews" className="hover:text-[#FFC20E] transition-colors">
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-[#FFC20E] transition-colors">
                  Location &amp; Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Signatures */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-display text-[#FFC20E] uppercase tracking-wider">
              Famous Signatures
            </h4>
            <ul className="space-y-2 text-xs text-[#FFF6DC]/90 font-medium">
              <li>Beef Smash Burger (Single / Double)</li>
              <li>Injected Broast (Quarter / Half / Full)</li>
              <li>Chicago Deep Dish Pizza (7&quot; &amp; 10&quot;)</li>
              <li>Cheezy Bite Special Pizza</li>
              <li>Special Chicken Shawarma Platter</li>
              <li>Cheese Loaded Fries</li>
            </ul>
          </div>

          {/* Column 4: Hours & Delivery */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-display text-[#FFC20E] uppercase tracking-wider">
              Free Delivery Policy
            </h4>
            <div className="p-4 rounded-2xl bg-black/25 border border-white/10 space-y-2 text-xs">
              <p className="font-bold text-[#FFC20E] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Free Home Delivery
              </p>
              <p className="text-white/80 leading-relaxed">
                Enjoy 100% Free Delivery on orders of Rs 700 or more in Kasur. Order till 3:00 AM!
              </p>
              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#FFC20E] font-bold hover:underline pt-1 cursor-pointer"
              >
                <span>Order on WhatsApp now &rarr;</span>
              </a>
            </div>
          </div>
        </div>

        {/* Sales Demo Attribution & CTA */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#FFF6DC]/80">
          <p className="text-center md:text-left">
            &copy; 2026 Cheezy Bite Kasur. &quot;Lets Eat Together! Wah G Wah&quot;. All rights reserved.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 bg-black/30 px-4 py-2 rounded-2xl border border-white/10">
            <span className="flex items-center gap-1.5 text-white/90">
              <Heart className="w-3.5 h-3.5 text-[#FFC20E] fill-[#FFC20E]" />
              Website demo by <strong className="text-[#FFC20E]">Senior Product Engineer</strong>
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <a
              href="https://wa.me/923216610034?text=Hi!%20I%20saw%20the%20Cheezy%20Bite%20website%20demo%20and%20want%20a%20similar%20high-converting%20website%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFC20E] font-bold hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>Want this website for your business? Contact me</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
