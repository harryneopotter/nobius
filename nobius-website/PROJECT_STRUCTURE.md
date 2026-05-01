# Nobius Website Project Structure

This document explains the project's organization, data structure, and where to make changes for various sections of the site.

## 📁 File Structure Overview

The project is built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**.

```text
/
├── src/
│   ├── app/                # Next.js App Router (Pages & Routing)
│   │   ├── api/            # API routes (e.g., for contact form)
│   │   ├── contact/        # Contact page
│   │   ├── products/       # Products catalog & category pages
│   │   ├── why-nobius/     # Why Nobius page
│   │   ├── layout.tsx      # Global layout (Header, Footer, Analytics)
│   │   ├── page.tsx        # Homepage
│   │   └── globals.css     # Global styles & Tailwind directives
│   ├── components/         # Reusable React components
│   │   ├── home/           # Homepage specific components (Hero, CategoryList, etc.)
│   │   ├── layout/         # Layout components (Header, Footer)
│   │   ├── product/        # Product detail components
│   │   └── products/       # Product listing components
│   ├── data/               # Content & Data (JSON files)
│   ├── lib/                # Utility functions & shared logic
│   └── assets/             # Local assets (fonts, icons)
├── public/                 # Static assets (Images, favicon)
│   └── images/             # Product and site images
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

---

## 📊 Data Structure

Most of the website's text content is decoupled from the code and stored in JSON files within `src/data/`.

| File | Description |
| :--- | :--- |
| `products-content.json` | The primary source of truth for all products. Contains IDs, names, descriptions, specs, and image paths. |
| `pages-content.json` | Contains hero titles and subtitles for category pages (Speakers, Stands, Audio Tools) and footer text. |
| `why-nobius.json` | Full content for the "Why Nobius" page, including sections for Craft, Drivers, Crossovers, and Team Bios. |
| `prices.json` | Stores pricing information separately for easier updates. |
| `products.ts` | A TypeScript wrapper that imports the JSON data and provides types for use in the app. |

---

## 🛠️ What to Edit & Where

Use this guide to find the right file when you need to make updates:

### 1. Products & Inventory
*   **Add/Edit a Product:** `src/data/products-content.json`
*   **Change Prices:** `src/data/prices.json`
*   **Product Images:** Upload to `public/images/products/` and reference the path in the JSON.
*   **Product Detail Page Layout:** `src/app/products/[slug]/ProductDetailClient.tsx`

### 2. Website Content
*   **Homepage Sections:**
    *   Hero: `src/components/home/Hero.tsx`
    *   Category Grid: `src/components/home/CategoryList.tsx`
    *   Craft Pillars: `src/components/home/CraftPillars.tsx`
*   **"Why Nobius" Page Text:** `src/data/why-nobius.json`
*   **"Why Nobius" Layout:** `src/app/why-nobius/WhyNobiusClient.tsx`
*   **Category Page Headers:** `src/data/pages-content.json` (under `speakers`, `stands`, or `audioTools`)

### 3. Global Site Elements
*   **Navigation Menu / Header:** `src/components/layout/Header.tsx`
*   **Footer Links & Badges:** `src/components/layout/Footer.tsx` (Text content is in `src/data/pages-content.json`)
*   **Global Styling (Colors, Fonts):** `src/app/globals.css` and `tailwind.config.ts`
*   **Favicon & Icons:** `src/app/icon.png` and `src/app/apple-icon.png`

### 4. Functionality
*   **Contact Form Logic:** `src/lib/contact-form.ts` and `src/app/api/contact/route.ts`
*   **SEO Metadata:** Edit the `metadata` object in the respective `page.tsx` file for each route.

---

## 🔍 Regex for Content Updates

If you need to perform bulk updates or find specific sections using Regex (e.g., in VS Code search or scripts), use these patterns:

### 1. Find a Specific Product Block
Find the entire object for a specific product ID (replace `n1-9` with the ID you need):
```regex
\{\s*"id":\s*"n1-9"[\s\S]*?\n\s*\}
```

### 2. Find and Replace Prices
To find a price for a specific product in `prices.json`:
```regex
"n1-9":\s*"\$([\d,]+|TBD)"
```
*Capture Group 1* will contain the numeric price or "TBD".

### 3. Update Specific Fields in `products-content.json`
To find a specific field within a product (e.g., `tagline`):
```regex
"tagline":\s*"(.*?)"
```

### 4. Find Section in `why-nobius.json`
To find a specific content section (e.g., `craft`):
```regex
"craft":\s*\{[\s\S]*?\}
```

### 5. Find Hero Titles in `pages-content.json`
```regex
"heroTitle":\s*"(.*?)"
```

---

## 🚀 Development Workflow

1.  **Content Updates:** For 90% of updates (text, products, specs), you only need to edit the files in `src/data/`.
2.  **Styles:** Use Tailwind utility classes directly in components or update variables in `globals.css`.
3.  **New Pages:** Create a new folder in `src/app/` with a `page.tsx` file.
