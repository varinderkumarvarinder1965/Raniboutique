# Website Design Document

## Project: Handmade Tailoring Studio Website

A warm, elegant, personal website to showcase your mother's tailoring
business, her craftsmanship, and make it easy for customers to book an
appointment or request a custom outfit.

> **Placeholders:** Replace `[Mom's Name]`, `[Studio Name]`, `[City]`,
> `[Phone]`, `[Email]`, and `[Instagram]` before publishing.

---

## 1. Brand Identity

| Element | Value |
| --- | --- |
| Business Name | `[Studio Name]` — e.g. "Rani Tailoring boutique" |
| Tagline | "Stitched with love, tailored to you." |
| Personality | Warm · Trustworthy · Handcrafted · Elegant · Personal |
| Tone of Voice | Friendly, simple, respectful, celebratory of craft |

### Logo Concept
A minimal needle-and-thread forming a subtle heart or the letter of the
studio name. Rendered in the primary accent color with a thin, elegant
line weight.

---

## 2. Color Palette

Inspired by fabric, thread, and warm natural light.

| Role | Color | Hex |
| --- | --- | --- |
| Primary (Deep Rose) | Warm burgundy / rose | `#8C3B4A` |
| Secondary (Blush) | Soft dusty pink | `#E8C4C4` |
| Accent (Gold Thread) | Muted gold | `#C9A227` |
| Background (Cream) | Warm off-white | `#FAF6F0` |
| Surface | Light linen | `#F2E9DE` |
| Text (Charcoal) | Near-black brown | `#2E2A28` |
| Muted Text | Taupe | `#7A6E68` |
| Success / CTA | Deep green | `#3F6B4F` |

**Usage:** Cream background, charcoal text, deep rose for headings and
primary buttons, gold for fine details (dividers, icons, hover accents).

---

## 3. Typography

| Purpose | Font | Fallback |
| --- | --- | --- |
| Headings | *Playfair Display* (serif, elegant) | Georgia, serif |
| Body | *Inter* or *Nunito Sans* (clean, friendly) | system sans-serif |
| Accent / Signature | *Great Vibes* or *Dancing Script* (handwritten, used sparingly for the studio name and quotes) | cursive |

**Scale:**
- H1: 48–64px (clamp)
- H2: 32–40px
- H3: 22–26px
- Body: 16–18px, line-height 1.7
- Caption: 13–14px

---

## 4. Sitemap

```
Home (single-page scroll)
├── Hero
├── About Mom
├── Services
├── Gallery / Portfolio
├── How It Works
├── Testimonials
├── Pricing (optional)
├── Book an Appointment / Contact
└── Footer
```

Optional secondary pages (later): `/gallery`, `/services`, `/contact`,
`/blog` (stitching tips & care guides).

---

## 5. Page Design: Section by Section

### 5.1 Hero
- **Layout:** Full-width warm cream background with a soft fabric texture
  or faint thread pattern. Large left-aligned text, portrait image on the
  right in an arched frame.
- **Content:**
  - Handwritten accent: *"Welcome to [Studio Name]"*
  - H1: "Custom stitching by `[Mom's Name]`"
  - Subtext: "Beautifully tailored blouses, dresses, and alterations
    made with care in `[City]`."
  - Buttons: **Book an Appointment** (filled rose) · **View Gallery** (outline)
- **Details:** A thin gold divider line. Subtle floating thread motif in
  the corner.
- **Image:** Warm portrait of your mother at her sewing machine.

### 5.2 About Mom
- **Layout:** Two columns — photo (left) + story (right).
- **Content:**
  - H2: "Meet `[Mom's Name]`"
  - 2–3 short paragraphs: years of experience, passion, specialties,
    what she loves about tailoring.
  - Small badge: "25+ years of experience" (circular gold seal).
- **Details:** Handwritten pull-quote: "Every stitch tells a story."

### 5.3 Services
- **Layout:** Responsive grid of 3 cards (2 columns on tablet, 1 on mobile).
- **Cards:**
  1. **Custom Stitching** — blouses, dresses, suits.
  2. **Alterations & Repairs** — resizing, hemming, fixes.
  3. **Designer Blouses** — bridal, festive, embroidered.
- **Card style:** Cream card, soft shadow, gold line icon, short
  description, "Enquire →" link.
- **Hover:** Card lifts slightly, accent line grows.

### 5.4 Gallery / Portfolio
- **Layout:** Masonry or 3-column grid of outfit photos. Lightbox on click.
- **Content:** 6–9 high-quality photos of finished garments and detail
  shots (embroidery, buttons, hems).
- **Details:** Filter chips: *All · Blouses · Dresses · Bridal · Alterations*.
- **Empty-state:** Placeholder tiles with fabric patterns until real
  photos are added.

### 5.5 How It Works
- **Layout:** 4-step horizontal timeline (stacked vertical on mobile).
- **Steps:**
  1. **Book a visit** — call, WhatsApp, or form.
  2. **Measure & design** — choose fabric, style, and fit.
  3. **Stitching** — careful handcrafting.
  4. **Fitting & delivery** — final adjustments and pickup.
- **Details:** Numbered circles in gold, connecting dashed thread line.

### 5.6 Testimonials
- **Layout:** Carousel of 3 quote cards.
- **Card style:** Blush background, large quotation mark, gold stars.
- **Content:** 3–5 short customer reviews with names.

### 5.7 Pricing (Optional)
- Simple table or 3 tier cards: *Basic Alteration · Custom Blouse ·
  Bridal Package*. Keep "Starting from `[price]`" and note "final quote
  after consultation."

### 5.8 Book / Contact
- **Layout:** Two columns — contact details (left) + form (right).
- **Form fields:** Name, Phone, Email, Service (dropdown), Preferred date,
  Message. Submit button **Request Appointment**.
- **Contact details:** Phone (click-to-call), WhatsApp button, address,
  working hours, Instagram link.
- **Details:** Soft map embed (optional). Friendly confirmation message
  after submit.

### 5.9 Footer
- Studio name + handwritten tagline.
- Quick links, social icons, contact info.
- Small line: "Made with love for `[Mom's Name]` ❤" — use a heart only if
  desired; otherwise "Made with love."
- Copyright year.

---

## 6. Layout & Spacing

- Max content width: **1180px**, centered.
- Section vertical padding: **80–120px** desktop, **48–64px** mobile.
- 12-column grid; generous white space for an uncluttered, premium feel.
- Rounded corners: 12–20px on cards and images.
- Arched image frames for a boutique feel.

---

## 7. Responsive Behavior

| Breakpoint | Behavior |
| --- | --- |
| ≥ 1024px | Two-column hero, 3-column grids, full nav |
| 768–1023px | 2-column grids, stacked hero, condensed nav |
| < 768px | Single column, hamburger menu, large tap targets (44px+), full-width buttons |

Mobile-first: ensure text stays readable (min 16px) and images lazy-load.

---

## 8. Interactions & Animation

- Fade-up on scroll for sections (subtle, 200–400ms).
- Gentle hover lift on cards and buttons.
- Image zoom on gallery hover.
- Sticky header that turns solid on scroll.
- Smooth anchor scrolling for single-page nav.
- Respect `prefers-reduced-motion`.
- **Avoid** heavy animations — keep it calm and elegant.

---

## 9. Imagery & Assets Checklist

- [ ] Portrait of your mother (warm, natural light).
- [ ] 6–9 photos of finished outfits and detail shots.
- [ ] Studio / workspace photo.
- [ ] Logo (SVG) + favicon.
- [ ] Fabric texture background (subtle, optional).
- [ ] Icons (needle, scissors, measuring tape, iron) — thin line style.
- [ ] Open Graph image for social sharing.

---

## 10. Accessibility

- Color contrast ≥ 4.5:1 for body text.
- Alt text for every image.
- Visible focus states on all interactive elements.
- Semantic headings (one H1 per page).
- Form labels always visible (not placeholder-only).
- Keyboard-navigable menu and lightbox.

---

## 11. Recommended Tech Stack

| Option | Stack |
| --- | --- |
| Simplest | Static HTML + CSS + a little vanilla JS |
| Recommended | **Next.js + Tailwind CSS** (or Astro for a fast static site) |
| Forms | Formspree / Getform / EmailJS (no backend needed) |
| Hosting | Vercel / Netlify (free tier) |
| Extras | Google Fonts, Lucide icons, Framer Motion (optional) |

---

## 12. Content To Collect From Mom

1. Studio name and preferred spelling.
2. Years of experience and her story.
3. List of services + starting prices.
4. Best phone number / WhatsApp for bookings.
5. Studio address and working hours.
6. Instagram or Facebook handle (if any).
7. Photos of her best work and of herself.
8. 3–5 happy customer reviews (with permission).

---

## 13. Success Criteria

- A visitor understands **who she is** and **what she offers** within 5 seconds.
- Booking an appointment takes **under 1 minute** on mobile.
- The site loads fast (< 2s on 4G) and looks beautiful on phones.
- Your mother feels proud and surprised. 💐

---

*Design prepared with care. Replace all `[placeholders]` before launch.*
