import type { Metadata, Viewport } from "next";
import { Lilita_One, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CartDrawer } from "@/components/CartDrawer";
import { CartToast } from "@/components/CartToast";
import { MobileActionBar } from "@/components/MobileActionBar";
import { RESTAURANT_INFO } from "@/data/menu";
import { SITE_URL } from "@/lib/siteUrl";

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
  metadataBase: new URL(SITE_URL),
  title: "Cheezy Bite | Best Fast Food in Kasur - Smash Burgers, Pizza & Broast",
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
    title: "Cheezy Bite | Best Fast Food in Kasur - Wah G Wah!",
    description:
      "Lets Eat Together! Wah G Wah. Authentic Beef Smash Burgers, Injected Broast & Cheesy Pizzas in Kasur. Open daily 11 AM to 3 AM. Free Delivery over Rs 700.",
    url: SITE_URL,
    siteName: "Cheezy Bite",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        secureUrl: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Cheezy Bite Gourmet Fast Food Spread — Smash Burgers, Pizza & Broast in Kasur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheezy Bite Kasur | Wah G Wah!",
    description: "Smash Burgers, Injected Broast, Chicago Deep Dish Pizza & Late Night Delivery.",
    images: [`${SITE_URL}/images/og-image.jpg`],
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
    image: `${SITE_URL}/images/hero-food.jpg`,
    "@id": SITE_URL,
    url: SITE_URL,
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
    menu: `${SITE_URL}/menu`,
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
        {/* Chat / WhatsApp / Social Crawlers Static Fallbacks */}
        <meta property="og:image" content={`${SITE_URL}/images/og-image.jpg`} />
        <meta property="og:image:secure_url" content={`${SITE_URL}/images/og-image.jpg`} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Cheezy Bite Kasur - Smash Burgers, Injected Broast & Deep Dish Pizza" />
        <meta name="twitter:image" content={`${SITE_URL}/images/og-image.jpg`} />
        <link rel="image_src" href={`${SITE_URL}/images/og-image.jpg`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col pb-16 md:pb-0 bg-[#FFFDF7] text-[#231815] selection:bg-[#FFC20E] selection:text-[#730C0C]">
        {children}
        <CartDrawer />
        <CartToast />
        <MobileActionBar />
      </body>
    </html>
  );
}
