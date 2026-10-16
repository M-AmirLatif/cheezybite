"use client";

import { motion } from "framer-motion";
import { Truck, Moon, HeartHandshake, Users, Award, ShieldCheck, Flame } from "lucide-react";

const FEATURES = [
  {
    icon: Truck,
    title: "Free Home Delivery",
    desc: "Fast, insulated delivery right to your door in Kasur on all orders of Rs 700 or more. Your food arrives piping hot!",
    badge: "Min Order Rs 700",
  },
  {
    icon: Moon,
    title: "Open Till 3:00 AM",
    desc: "Midnight cravings? We've got you covered. From 11:00 AM in the morning till 3:00 AM late night, every single day.",
    badge: "16 Hours Daily",
  },
  {
    icon: Flame,
    title: "Fresh, Juicy & 100% Halal",
    desc: "Premium quality beef smashed to order, proprietary injected broast marinade, and 100% real pull mozzarella cheese.",
    badge: "Chef Quality",
  },
  {
    icon: Users,
    title: "Great For Groups & Kids",
    desc: "Spacious casual family dining at Cinema Morr, Kasur. Free street parking, friendly staff, and quick service.",
    badge: "Family Favorite",
  },
];

const STATS = [
  {
    value: "5.0 ★",
    label: "Google Rating",
    detail: "Top rated fast food hub in Kasur",
  },
  {
    value: "11 AM – 3 AM",
    label: "Daily Hours",
    detail: "Serving lunch, dinner & late night",
  },
  {
    value: "40+",
    label: "Menu Varieties",
    detail: "Burgers, pizzas, broast & pasta",
  },
  {
    value: "Rs 700",
    label: "Free Delivery",
    detail: "On all qualifying orders in Kasur",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-[#FFFDF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF5D9] border border-[#FFC20E] text-xs font-black text-[#8B1A1A] uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-[#FFC20E] fill-[#FFC20E]" />
            <span>The Cheezy Bite Promise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-[#141414] leading-tight">
            Why Kasur Loves Cheezy Bite
          </h2>
          <p className="text-sm sm:text-base text-[#5C4E4B]">
            We set a high benchmark for taste, portion size, and hospitality. Here is what makes our kitchen the talk of the town!
          </p>
        </div>

        {/* 4 Feature Icon Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {FEATURES.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-3xl p-6 border border-[#8B1A1A]/10 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF5D9] text-[#8B1A1A] flex items-center justify-center mb-4 border border-[#FFC20E]/40">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-[#FFF5D9] text-[#8B1A1A] inline-block mb-2">
                    {feat.badge}
                  </span>
                  <h3 className="text-lg font-bold text-[#141414] mb-2 leading-tight">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-[#5C4E4B] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Row Banner */}
        <div className="bg-[#8B1A1A] rounded-3xl p-6 sm:p-10 text-white shadow-2xl border-4 border-[#FFC20E]/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFC20E]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center relative z-10">
            {STATS.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <p className="text-3xl sm:text-4xl md:text-5xl font-display text-[#FFC20E] tracking-tight">
                  {stat.value}
                </p>
                <p className="text-sm font-bold text-white uppercase tracking-wider">
                  {stat.label}
                </p>
                <p className="text-xs text-white/70">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
