"use client";

import { MapPin, Phone, Send, Clock, Navigation, CheckCircle, Car } from "lucide-react";
import { RESTAURANT_INFO } from "@/data/menu";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-[#FFFDF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF5D9] border border-[#FFC20E] text-xs font-black text-[#8B1A1A] uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-[#FFC20E] fill-[#FFC20E]" />
            <span>Visit Us In Kasur</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-[#141414] leading-tight">
            Location, Hours &amp; Contact
          </h2>
          <p className="text-sm sm:text-base text-[#5C4E4B]">
            Dine-in with family and friends at Cinema Morr, Kasur or call us for lightning-fast home delivery till 3:00 AM!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Details, Phone Numbers & Hours */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#8B1A1A]/10 shadow-md space-y-3">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-[#FFF5D9] text-[#8B1A1A] flex items-center justify-center shrink-0 border border-[#FFC20E]/40">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#141414]">Restaurant Address</h3>
                  <p className="text-xs sm:text-sm text-[#5C4E4B] mt-1 leading-relaxed">
                    {RESTAURANT_INFO.address}
                  </p>
                  <p className="text-xs font-mono font-bold text-[#8B1A1A] mt-1.5">
                    Plus Code: {RESTAURANT_INFO.plusCode}
                  </p>
                </div>
              </div>
            </div>

            {/* Calling & WhatsApp Action Buttons */}
            <div className="bg-white rounded-3xl p-4 sm:p-6 border border-[#8B1A1A]/10 shadow-md space-y-3.5">
              <h3 className="text-xs sm:text-sm font-extrabold text-[#141414] uppercase tracking-wider">
                Order Directly By Phone / WhatsApp
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* Phone 1 */}
                <a
                  href={`tel:${RESTAURANT_INFO.phonePrimary}`}
                  className="p-3 rounded-2xl bg-[#FFF5D9] hover:bg-[#FFEBB5] text-[#8B1A1A] flex items-center justify-center gap-2.5 border-2 border-[#FFC20E]/40 transition-all cursor-pointer group active:scale-98"
                >
                  <span className="w-8 h-8 rounded-xl bg-[#8B1A1A] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4 text-[#FFC20E]" />
                  </span>
                  <div className="text-left">
                    <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider">Call Primary</span>
                    <span className="text-xs sm:text-sm font-black font-mono text-[#141414]">{RESTAURANT_INFO.phonePrimary}</span>
                  </div>
                </a>

                {/* Phone 2 */}
                <a
                  href={`tel:${RESTAURANT_INFO.phoneSecondary}`}
                  className="p-3 rounded-2xl bg-[#FFF5D9] hover:bg-[#FFEBB5] text-[#8B1A1A] flex items-center justify-center gap-2.5 border-2 border-[#FFC20E]/40 transition-all cursor-pointer group active:scale-98"
                >
                  <span className="w-8 h-8 rounded-xl bg-[#8B1A1A] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4 text-[#FFC20E]" />
                  </span>
                  <div className="text-left">
                    <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider">Call Secondary</span>
                    <span className="text-xs sm:text-sm font-black font-mono text-[#141414]">{RESTAURANT_INFO.phoneSecondary}</span>
                  </div>
                </a>
              </div>

              {/* Main WhatsApp Button */}
              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-2xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/25 transition-all cursor-pointer active:scale-98"
              >
                <Send className="w-4 h-4 fill-white shrink-0" />
                <span>Order on WhatsApp (0321-6610034)</span>
              </a>
            </div>

            {/* Hours Card */}
            <div className="bg-white rounded-3xl p-4 sm:p-6 border border-[#8B1A1A]/10 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-[#FFF5D9] text-[#8B1A1A] flex items-center justify-center shrink-0 border border-[#FFC20E]/40">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#141414]">Operating Schedule</h3>
                  <p className="text-xs text-[#5C4E4B]">Open 7 Days a Week</p>
                </div>
              </div>

              <div className="space-y-2.5 text-xs divide-y divide-gray-100">
                <div className="flex justify-between items-center pt-2">
                  <span className="font-semibold text-gray-700">Monday – Sunday</span>
                  <span className="font-extrabold text-[#8B1A1A]">11:00 AM – 3:00 AM</span>
                </div>
                <div className="flex justify-between items-center pt-2.5">
                  <span className="font-semibold text-gray-700">Home Delivery Hours</span>
                  <span className="font-extrabold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    11:00 AM – 3:00 AM
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2.5">
                  <span className="font-semibold text-gray-700">Free Delivery</span>
                  <span className="font-extrabold text-[#141414] bg-[#FFF5D9] px-2 py-0.5 rounded-md border border-[#FFC20E]/50">
                    Orders of Rs 700+
                  </span>
                </div>
              </div>
            </div>

            {/* Restaurant Features Grid (Clean 2-column layout on all mobile screens) */}
            <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
              {RESTAURANT_INFO.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-2.5 sm:px-3 sm:py-2 rounded-xl bg-white border border-[#8B1A1A]/12 text-[11px] sm:text-xs font-bold text-[#141414] shadow-sm flex items-center gap-2"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Embedded Google Map & Directions */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white rounded-3xl p-3 sm:p-4 border border-[#8B1A1A]/10 shadow-xl overflow-hidden">
              <div className="relative w-full h-[380px] sm:h-[450px] rounded-2xl overflow-hidden bg-gray-100">
                <iframe
                  title="Cheezy Bite Kasur Cinema Morr Google Map"
                  src="https://maps.google.com/maps?q=Cheezy%20Bite%20Cinema%20Morr%20Kasur&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Map Footer Bar */}
              <div className="p-3 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-center sm:text-left">
                  <p className="text-xs font-bold text-[#141414]">Cinema Morr, Near Ranger School</p>
                  <p className="text-[11px] text-[#5C4E4B]">M.A Jinah Rd, Qadirabad, Kasur</p>
                </div>

                <a
                  href={RESTAURANT_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#8B1A1A] hover:bg-[#630F0F] text-[#FFFDF7] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow transition-colors cursor-pointer"
                >
                  <Navigation className="w-4 h-4 text-[#FFC20E]" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
