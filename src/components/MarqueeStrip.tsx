"use client";

const MARQUEE_ITEMS = [
  "BEEF SMASH BURGERS",
  "CHICAGO DEEP DISH PIZZA",
  "INJECTED BROAST",
  "CHEEZY SPECIAL SHAWARMA",
  "LOADED CHEESE FRIES",
  "BAKED PASTA",
  "CRISPY FRIED FISH",
  "MALAI BOTI WRAPS",
  "CROWN CRUST PIZZA",
  "LATE NIGHT 3 AM DELIVERY",
  "WAH G WAH!",
];

export function MarqueeStrip() {
  return (
    <div
      id="marquee"
      className="relative w-full overflow-hidden bg-[#FFC20E] text-[#630F0F] py-3.5 border-y-2 border-[#8B1A1A] shadow-md select-none"
    >
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {/* First Loop */}
        {MARQUEE_ITEMS.map((item, index) => (
          <div key={`m1-${index}`} className="flex items-center gap-8 font-display text-sm sm:text-base tracking-wider">
            <span className="hover:text-[#8B1A1A] transition-colors">{item}</span>
            <span className="text-[#8B1A1A] text-lg">★</span>
          </div>
        ))}

        {/* Duplicate for Seamless Loop */}
        {MARQUEE_ITEMS.map((item, index) => (
          <div key={`m2-${index}`} className="flex items-center gap-8 font-display text-sm sm:text-base tracking-wider">
            <span className="hover:text-[#8B1A1A] transition-colors">{item}</span>
            <span className="text-[#8B1A1A] text-lg">★</span>
          </div>
        ))}
      </div>
    </div>
  );
}
