# Cheezy Bite — Design System & Visual Specification

**Brand Identity:** Cheezy Bite — "Lets Eat Together! Wah G Wah"  
**Industry:** Premium Fast Food, Dine-In, Takeaway & Late-Night Delivery (Kasur, Pakistan)  
**Aesthetic Direction:** Playful, high-energy, vibrant & appetizing fast-food brand with chef mascot / cheese-drip touches. Chunky display type, warm layered shadows, rich contrasting accents, and high visual polish.

---

## 1. Color Palette (WCAG AA / AAA Accessible)

| Token Name | Hex Code | Role & Usage | Contrast Ratio |
|------------|----------|--------------|----------------|
| **Brand Yellow (Primary)** | `#FFC20E` | Mascot accent, badges, highlight borders, radiant buttons | 10.8:1 against deep maroon |
| **Deep Maroon (Brand Core)** | `#8B1A1A` | Primary headers, primary buttons, brand accents, footer | 5.2:1 against cream background |
| **Burgundy Dark** | `#5E0E0E` | Button hover states, dark text on yellow, shadow tinting | 8.9:1 against cream |
| **Rich Charcoal / Black** | `#141414` | Hero text, primary headings, ultra-high contrast surfaces | 16.2:1 on cream |
| **Warm Cream (Base Canvas)** | `#FFFDF7` | Main page background (soft, warm, avoids harsh clinical white) | Canvas |
| **Light Cream Surface** | `#FFF5D9` | Card backgrounds, pill tags, interactive hover surfaces | Subtle depth |
| **Card White** | `#FFFFFF` | Menu items & deal cards, crisp elevated surfaces | Elevation |
| **Muted Brown/Grey** | `#5C4E4B` | Subheadings, descriptions, secondary copy (no low-contrast grey) | 5.8:1 on cream |
| **Success Emerald** | `#15803D` | Open Now badge, free delivery qualifiers | High legibility |

---

## 2. Typography Hierarchy

- **Display & Headings:** `Lilita One` (Google Font via `next/font/google`, chunky, playful, punchy, confident, fast-food personality).
- **Body & UI Elements:** `Plus Jakarta Sans` (Google Font via `next/font/google`, geometric, modern, legible at all sizes with 400, 500, 600, 700 weights).

### Type Scale
- **Display 1 (Hero Title):** `clamp(2.5rem, 6vw, 4.5rem)` / line-height `1.05` / font-weight `Lilita One`
- **Heading 1 (Section Titles):** `clamp(2rem, 4vw, 3rem)` / line-height `1.15` / font-weight `Lilita One`
- **Heading 2 (Card Titles / Deals):** `1.5rem` (`24px`) / line-height `1.25` / font-weight `Lilita One`
- **Heading 3 (Item Names):** `1.25rem` (`20px`) / line-height `1.3` / font-weight `600`
- **Body Large (Hero Subtitle):** `1.125rem` (`18px`) / line-height `1.6` / font-weight `500`
- **Body Standard (Descriptions):** `0.9375rem` (`15px`) / line-height `1.55` / font-weight `400`
- **Captions / Tags / Meta:** `0.8125rem` (`13px`) / line-height `1.4` / font-weight `600` / tracking `0.02em`

---

## 3. Spacing & Elevation System

### Spacing Scale
- `xs`: 4px (`0.25rem`)
- `sm`: 8px (`0.5rem`)
- `md`: 16px (`1rem`)
- `lg`: 24px (`1.5rem`)
- `xl`: 32px (`2rem`)
- `2xl`: 48px (`3rem`)
- `3xl`: 64px (`4rem`)
- `section`: `clamp(4rem, 8vw, 6.5rem)`

### Borders & Radius
- Badges & Pills: `rounded-full` (`9999px`)
- Menu Cards & Deal Containers: `rounded-2xl` (`16px`) to `rounded-3xl` (`24px`)
- Buttons: `rounded-xl` (`12px`) / `rounded-full`
- Card Borders: `1.5px solid rgba(139, 26, 26, 0.08)` or `2px solid #FFC20E` on highlight

### Shadows & Depth
- **Soft Floating:** `0 10px 30px -5px rgba(139, 26, 26, 0.07), 0 4px 6px -2px rgba(0, 0, 0, 0.04)`
- **Hover Lift:** `0 20px 35px -8px rgba(139, 26, 26, 0.16), 0 8px 12px -3px rgba(0, 0, 0, 0.06)`
- **Golden Glow (CTAs):** `0 10px 25px -4px rgba(255, 194, 14, 0.45)`

---

## 4. Components & Interactive States

1. **Sticky Glass Navbar:**
   - Background: `rgba(255, 253, 247, 0.85)` with `backdrop-blur-md`
   - Border bottom: `1px solid rgba(139, 26, 26, 0.08)`
   - Height transition on scroll (76px down to 64px)
   - Cart counter bubble with bounce trigger on item addition.
2. **Hero:**
   - Custom typing hook cycling food items with blinking cursor.
   - Live Open/Closed badge: Real-time calculation against Asia/Karachi timezone (11 AM to 3 AM).
   - Dynamic floating food badges with gentle tilt.
3. **Menu Card:**
   - 4:3 high-res food photo with subtle zoom on hover.
   - Dietary / size selector tags (e.g. Small / Med / Large for Pizza, Quarter / Half / Full for Broast).
   - Quick "Add to Cart" with micro-feedback toast and cart drawer counter bump.
4. **Cart Slide-Over:**
   - Spring drawer from right.
   - Free delivery progress meter (calculating `Rs 700 - currentTotal`).
   - "Order on WhatsApp" button generating structured Urdu/English text with item breakdown, add-ons, and total.
5. **Mobile Sticky Action Bar:**
   - Fixed bottom bar on mobile (< 768px): Call Direct (0321-6610034) + View Cart / WhatsApp Order. Touch targets > 48px.
6. **Accessibility & Reduced Motion:**
   - Respects `prefers-reduced-motion` across all Framer Motion components and CSS marquee.
   - Visible keyboard `:focus-visible` rings in brand yellow/maroon.
