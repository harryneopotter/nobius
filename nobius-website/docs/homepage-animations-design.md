# Nobius Website Redevelopment - Master Design Doc

> **Reference Site**: https://nobius3.bluepanda.cloud/  
> **Reference Images**: `update/reference-home-nobius.jpg`, `update/reference2.jpg` (Structure)  
> **Hero Header**: `public/images/hero-option.jpg` (For Speaker Category)  
> **Logo Asset**: `public/images/logo-dark.png`

---

## 1. Brand Identity & Slogan
- **Old (Retired)**: "Imperfectly Honest"
- **New Core**: "Fun and Sincere"
- **Technical Focus**: "Well Engineered" / "Sound that serves the music, not the specifications."

---

## 2. Site Architecture

### Homepage (One-Page Experience)
The homepage acts as a high-level portal with the following scrolling sequence:
1. **Hero**: Large centered header with "Fun and Sincere" branding.
2. **Product Categories**: Grid showing **Speakers**, **Stands**, and **Audio Tools** (linking to separate category pages).
3. **The Pillars**: "Craft, Care, and Consistency" (3 cards: Musical Truth, Craftsmanship, Premium Materials).

### Category Pages
- Dedicated pages for Speakers, Stands, and Audio Tools.
- **Speakers Header**: Uses the "Green Forest" picture (`hero-option.jpg`).
- Product listings pulled from `update/product-data.csv` (or content/products.csv).

### Product Detail Pages
- **Full Specifications**: Comprehensive grid/table of specs from CSV.
- **Pricing**: Clearly displayed price for each unit/pair.
- **Order Call-to-Action**: "Contact us to Order" button.
- **Order Inquiry Form**:
    - **User Data**: Name, Email, Phone, City/Country.
    - **Context Awareness**: Hidden fields for `category` and `product_name` to ensure admin knows exactly what's being discussed.

### "Who We Are" (The Craft Page)
A rich content page merging:
- **Craft & Design**: Workshop details, hand-assembly, material specs.
- **Driver Selection & Voicing**: Scientific approach vs. musical soul.
- **Crossover Execution**: Testing processes and asymmetric topology.
- **Our Philosophy**: "Music is fun," "Long-term stability," "Sacred listening space."

---

## 3. Visual Specifications

| Feature | Specification |
|--|--|
| **Primary Background** | Stone-950 (`#0c0a09`) |
| **Accent Glow** | Blue vignette radial gradient at screen edges |
| **Animation Library** | Framer Motion |
| **Transitions** | Staggered fade-ins, slide-ups (Y: 30px -> 0) |
| **Easing** | `cubic-bezier(0.16, 1, 0.3, 1)` (Premium slow-in/out) |
| **Header** | Glassmorphism (blur + semi-transparent) |

---

## 4. Content Blocks (from update/content/)

### Craft Pillars ("Craft, Care, and Consistency")
**Header**: Craft, Care, and Consistency  
**Subheader**: Though every Nobius speaker is built by hand, each one is crafted with a disciplined commitment to accuracy, consistency, and intentional voicing. Our process blends artisanal construction with measured engineering so that what you hear is not random variation — but character.

| Pillar | Icon (approx) | Description |
|---|---|---|
| **Musical Truth** | Music Note | We prioritize emotional authenticity over sterile precision, ensuring your music breathes with life. |
| **Craftsmanship** | Hammer/Wrench | Every member is hand-voiced by experienced engineers who understand the art of sound. |
| **Premium Materials** | Diamond | We use only the finest components and materials to ensure long-lasting quality and performance. |

**Footer Quote**: "Sound that serves the music, not the specifications."

### Technical Detail Highlights
- **Workshop**: Lake in the Hills, IL.
- **Legacy References**: KEF B200, Audax HD20.
- **Key Models**: S1-2, N1-9.
