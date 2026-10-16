import type { Metadata, Viewport } from "next";
import { Lilita_One, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CartDrawer } from "@/components/CartDrawer";
import { CartToast } from "@/components/CartToast";
import { MobileActionBar } from "@/components/MobileActionBar";
import { RESTAURANT_INFO } from "@/data/menu";

const lilita = Lilita_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lilita",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#FFC20E",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://cheezybite.pk"),
  title: "Cheezy Bite | Best Fast Food in Kasur — Smash Burgers, Pizza & Broast",
  description:
    "Lets Eat Together! Wah G Wah. Savor juicy Beef Smash Burgers, Crispy Injected Broast, Chicago Deep Dish Pizza & Loaded Fries in Kasur. Dine-in, Takeaway & Free Delivery above Rs 700. Open daily 11 AM - 3 AM.",
  keywords: [
    "Cheezy Bite",
    "Cheezy Bite Kasur",
    "Fast Food Kasur",
    "Smash Burger Kasur",
    "Injected Broast Kasur",
    "Deep Dish Pizza Kasur",
    "Cinema Morr Kasur restaurant",
    "Late night food delivery Kasur",
    "Wah G Wah fast food",
  ],
  authors: [{ name: "Cheezy Bite" }],
  creator: "Cheezy Bite",
  publisher: "Cheezy Bite",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Cheezy Bite | Kasur's Ultimate Fast Food Hub",
    description:
      "Lets Eat Together! Wah G Wah. Authentic Beef Smash Burgers, Injected Broast & Cheesy Pizzas in Kasur. Open daily 11 AM to 3 AM. Free Delivery over Rs 700.",
    url: "https://cheezybite.pk",
    siteName: "Cheezy Bite",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "/images/hero-food.jpg",
        width: 1200,
        height: 675,
        alt: "Cheezy Bite Gourmet Fast Food Spread",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheezy Bite Kasur | Wah G Wah!",
    description: "Smash Burgers, Injected Broast, Chicago Deep Dish Pizza & Late Night Delivery.",
    images: ["/images/hero-food.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FastFoodRestaurant",
    name: RESTAURANT_INFO.name,
    image: "https://cheezybite.pk/images/hero-food.jpg",
    "@id": "https://cheezybite.pk",
    url: "https://cheezybite.pk",
    telephone: RESTAURANT_INFO.phonePrimary,
    servesCuisine: ["Fast Food", "Burgers", "Pizza", "Broast", "Shawarma"],
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Cinema Morr, Near Ranger School, M.A Jinah Rd, Qadirabad",
      addressLocality: "Kasur",
      addressRegion: "Punjab",
      addressCountry: "PK",
      postalCode: "55050",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 31.1172,
      longitude: 74.4533,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "11:00",
        closes: "03:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "142",
      bestRating: "5",
      worstRating: "1",
    },
    menu: "https://cheezybite.pk/menu",
    potentialAction: {
      "@type": "OrderAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: RESTAURANT_INFO.whatsappUrl,
        inLanguage: "en-PK",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
    },
  };

  return (
    <html lang="en" className={`${lilita.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FFFDF7] text-[#231815] selection:bg-[#FFC20E] selection:text-[#730C0C]">
        {children}
        <CartDrawer />
        <CartToast />
        <MobileActionBar />
      </body>
    </html>
  );
}
