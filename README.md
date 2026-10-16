# Cheezy Bite — Official Restaurant Website & Sales Demo

> **"Lets Eat Together! Wah G Wah"**  
> Premium, high-converting demo website for **Cheezy Bite Fast Food Restaurant** located at Cinema Morr, Kasur, Pakistan.

---

## 🌟 Overview & Highlights

This project is a bespoke, production-grade restaurant web application designed to wow diners and drive direct delivery orders via WhatsApp and phone.

- **Brand Personality:** Bold yellow (`#FFC20E`), deep appetite-stimulating maroon (`#8B1A1A`), crisp off-black (`#141414`), and warm cream (`#FFFDF7`). Features the official hand-drawn chef mascot and cheese-drip typography.
- **Dynamic Typing Animation:** Custom zero-dependency typing hook cycling through signatures: *"Smash Burgers."*, *"Injected Broast."*, *"Cheesy Pizzas."*, *"Wah G Wah!"* (fully respects `prefers-reduced-motion`).
- **Real-Time Live Status:** Dynamic badge calculating operating status against `Asia/Karachi` timezone (Open 11:00 AM – 3:00 AM daily).
- **Interactive Menu & Sizing:** Complete category tabs with animated selection underline (`layoutId`), live search filter, and instant serving size selectors (Quarter/Half/Full Broast, Small/Med/Large Pizza).
- **Zustand Cart & WhatsApp Ordering:** Slide-over cart drawer with quantity controls, Free Delivery progress meter (unlocks at Rs 700), and a 1-click **"Send Order on WhatsApp"** button opening `wa.me/923216610034` with an automatically structured order summary.
- **Mobile-First UX:** Sticky bottom thumb-bar with 1-tap Calling (`0321-6610034`), Cart trigger, and instant WhatsApp ordering. 44px+ touch targets across mobile screens.
- **SEO & Schema.org:** Full `FastFoodRestaurant` & `LocalBusiness` JSON-LD structured data with geo coordinates, opening hours, review ratings (5.0 Google rating), and telephone numbers.

---

## 🚀 Quick Start (Local Development)

```powershell
# 1. Install dependencies (if not already installed)
npm install --legacy-peer-deps

# 2. Run the development server
npm run dev

# 3. Open in your browser
http://localhost:3000 (or http://localhost:3002 if 3000 is occupied)
```

### Production Build Test
```powershell
npm run build
npm run start
```

---

## 📁 Image Directory & Sourcing Details

All imagery is stored locally in `/public/images/` so the app is 100% self-contained with no external image dependencies. Real restaurant photography can be swapped in directly using these exact filenames:

| File Name | Description | Source Type | Status |
|---|---|---|---|
| `/public/images/hero-food.jpg` | Grand feast: smash burger, broast, deep dish & loaded fries | AI Food Photography | ✅ Generated HD |
| `/public/images/smash-burger.jpg` | Double Beef Smash Burger with crispy lacy edges & cheddar | AI Food Photography | ✅ Generated HD |
| `/public/images/zinger-burger.jpg` | Crispy Golden Chicken Zinger Burger | AI Food Photography | ✅ Generated HD |
| `/public/images/injected-broast.jpg` | Injected Broast pieces with fries, bun & garlic dip | AI Food Photography | ✅ Generated HD |
| `/public/images/deep-dish-pizza.jpg` | Chicago-style Deep Dish Pizza slice with pull | AI Food Photography | ✅ Generated HD |
| `/public/images/special-pizza.jpg` | Cheezy Bite Special Pizza with crown crust & toppings | AI Food Photography | ✅ Generated HD |
| `/public/images/shawarma.jpg` | Cheezy Bite Special Shawarma wrap cut in half | AI Food Photography | ✅ Generated HD |
| `/public/images/chicken-wrap.jpg` | Grilled chicken wrap with melted cheese & ranch | AI Food Photography | ✅ Generated HD |
| `/public/images/loaded-fries.jpg` | Golden loaded fries with cheese sauce & chicken | AI Food Photography | ✅ Generated HD |
| `/public/images/creamy-pasta.jpg` | Baked chicken cheese penne pasta in ceramic dish | AI Food Photography | ✅ Generated HD |
| `/public/images/fried-fish.jpg` | Crunchy batter-fried fish fillets with lemon & tartar | AI Food Photography | ✅ Generated HD |
| `/public/images/club-sandwich.jpg` | Triple decker club sandwich with fries & flag | AI Food Photography | ✅ Generated HD |
| `/public/images/gallery-chef.jpg` | Artisan chef grilling smash burgers on flat-top griddle | Unsplash (w=1600, q=80) | ✅ Verified Local |
| `/public/images/gallery-cheese-pull.jpg` | Extreme cheese pull from fresh baked pizza slice | Unsplash (w=1600, q=80) | ✅ Verified Local |
| `/public/images/gallery-wings.jpg` | Glazed crispy hot BBQ chicken wings with sesame | Unsplash (w=1600, q=80) | ✅ Verified Local |
| `/public/images/gallery-platter.jpg` | Chicken shawarma platter with rice, pita, dips | Unsplash (w=1600, q=80) | ✅ Verified Local |
| `/public/images/gallery-dining.jpg` | Cozy ambient family dining room at restaurant | Unsplash (w=1600, q=80) | ✅ Verified Local |
| `/public/images/gallery-feast.jpg` | Full party feast spread with pizza, burgers, sides | Unsplash (w=1600, q=80) | ✅ Verified Local |
| `/public/images/deal-feast.jpg` | Golden nuggets, fries, and burger meal combo | Unsplash (w=1600, q=80) | ✅ Verified Local |
| `/public/logo.svg` | Authentic Cheezy Bite Wordmark with mascot & drips | Custom Vector SVG | ✅ Verified Vector |
| `/public/mascot-badge.svg` | Circular Chef Mascot with food tray & "Wah G Wah" | Custom Vector SVG | ✅ Verified Vector |
| `/public/favicon.svg` | Browser tab icon with chef mascot | Custom Vector SVG | ✅ Verified Vector |

---

## 🏢 Business & Contact Configuration

- **Name:** Cheezy Bite
- **Tagline:** "Lets Eat Together! Wah G Wah"
- **Location:** Cinema Morr, Near Ranger School, M.A Jinah Rd, Qadirabad, Kasur, Pakistan
- **Plus Code:** `4CJW+5VC`
- **Primary Phone:** `0321-6610034`
- **Secondary Phone:** `0332-7376511`
- **WhatsApp:** `+92 321 6610034` (Direct wa.me prefill configured)
- **Timings:** 11:00 AM – 3:00 AM Daily
- **Delivery Policy:** Free Home Delivery on orders of Rs 700 or more

---

## 🚢 Deploying to Vercel

1. Push this repository to GitHub or GitLab:
   ```bash
   git init
   git add .
   git commit -m "Cheezy Bite official website"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your CheezyBite repository.
4. Framework Preset will be automatically detected as **Next.js**.
5. Click **"Deploy"**. The site will be live on an SSL-secured URL in under 2 minutes!
