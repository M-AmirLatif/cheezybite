import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { MenuSection } from "@/components/MenuSection";
import { DealsSection } from "@/components/DealsSection";
import { Footer } from "@/components/Footer";
import { Utensils, Sparkles, Clock, Truck } from "lucide-react";
import { RESTAURANT_INFO } from "@/data/menu";
import { SITE_URL } from "@/lib/siteUrl";

export const metadata: Metadata = {
  title: "Full Menu & Deals | Cheezy Bite Kasur",
  description:
    "Explore the complete Cheezy Bite menu in Kasur: Beef Smash Burgers, Injected Broast, Chicago Deep Dish Pizza, Shawarma, Wraps, Loaded Fries & Combo Deals. Free Home Delivery above Rs 700.",
  openGraph: {
    title: "Cheezy Bite Full Menu & Deals | Wah G Wah!",
    description:
      "Explore the complete Cheezy Bite menu in Kasur: Beef Smash Burgers, Injected Broast, Chicago Deep Dish Pizza & Value Deals. Free Delivery above Rs 700.",
    url: `${SITE_URL}/menu`,
    siteName: "Cheezy Bite",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/og-image-menu.jpg`,
        secureUrl: `${SITE_URL}/images/og-image-menu.jpg`,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Cheezy Bite Kasur Full Feast Menu & Combo Deals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheezy Bite Full Menu & Deals | Kasur",
    description:
      "Beef Smash Burgers, Injected Broast, Chicago Deep Dish Pizza & Value Deals in Kasur.",
    images: [`${SITE_URL}/images/og-image-menu.jpg`],
  },
};

export default function MenuPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FFFDF7]">
      <Navbar />

      {/* Menu Header Banner */}
      <section className="pt-28 pb-12 bg-gradient-to-b from-[#FFF5D9] to-[#FFFDF7] border-b border-[#8B1A1A]/10 text-center px-4">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8B1A1A] text-[#FFF6DC] text-xs font-black uppercase tracking-wider shadow">
            <Utensils className="w-3.5 h-3.5 text-[#FFC20E]" />
            <span>Official Dining &amp; Takeaway Menu</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display text-[#141414] leading-tight">
            The Cheezy Bite Feast Menu
          </h1>

          <p className="text-sm sm:text-base text-[#5C4E4B] max-w-2xl mx-auto font-medium">
            &quot;Lets Eat Together! Wah G Wah&quot; — Savor 100% pure beef smash burgers, spicy injected broast, Chicago deep-dish pizzas, and loaded fries. All items are cooked fresh upon order!
          </p>

          {/* Quick Info Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-bold text-[#8B1A1A]">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#FFC20E] shadow-sm">
              <Clock className="w-3.5 h-3.5" />
              <span>11:00 AM – 3:00 AM Daily</span>
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#FFC20E] shadow-sm">
              <Truck className="w-3.5 h-3.5" />
              <span>Free Delivery On Orders &gt; Rs 700</span>
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#FFC20E] shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Cinema Morr, Kasur</span>
            </span>
          </div>
        </div>
      </section>

      {/* Interactive Menu Filtering & Items */}
      <MenuSection />

      {/* Value Combo Deals */}
      <DealsSection />

      <Footer />
    </main>
  );
}
