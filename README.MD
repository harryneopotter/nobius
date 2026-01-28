# Nobius Audio - Website

<div align="center">

**Premium handcrafted audio equipment built with care in Illinois**

[🌐 Live Site](https://nobius.bluepanda.cloud) | [📧 Contact](https://nobius.bluepanda.cloud/contact)

</div>

---

## 🎨 Overview

Nobius is a premium audio equipment manufacturer specializing in handcrafted speakers, stands, and audio tools. This website showcases their product lineup with a focus on craftsmanship, musicality, and timeless design.

**Built with:**
- ⚡ **Next.js 15** - React framework with App Router
- 🎨 **Tailwind CSS v4** - Utility-first styling
- ✨ **Framer Motion** - Smooth animations
- 📱 **Fully Responsive** - Mobile-first design
- 🚀 **Netlify** - Continuous deployment

---

## 📁 Project Structure

```
nobius-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Home page
│   │   ├── products/          # Product category pages
│   │   │   ├── speakers/
│   │   │   ├── stands/
│   │   │   └── audio-tools/
│   │   ├── why-nobius/        # Brand story
│   │   ├── contact/           # Contact form
│   │   └── layout.tsx         # Root layout
│   ├── components/            # React components
│   │   ├── home/             # Home page components
│   │   ├── layout/           # Header, Footer, Navigation
│   │   ├── products/         # Product displays
│   │   └── ui/               # Reusable UI elements
│   ├── data/                 # Static data
│   │   └── products.ts       # Product catalog
│   └── styles/               # Global styles
│       └── globals.css       # Tailwind + custom CSS
├── public/                    # Static assets
│   └── images/               # Product images
├── tailwind.config.ts        # Tailwind configuration
└── next.config.ts            # Next.js configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/harryneopotter/nobius.git
cd nobius/nobius-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run start
```

---

## 📦 Product Catalog

Products are defined in `src/data/products.ts`. Each product includes:

```typescript
{
  id: string;           // Unique identifier
  name: string;         // Display name
  slug: string;         // URL-friendly slug
  tagline: string;      // Short tagline
  description: string;  // Brief description
  longDescription?: string;  // Detailed description
  price: string;        // Price (e.g., "$1499")
  image: string;        // Main product image
  galleryImages?: string[];  // Additional images
  category: string;     // "Speakers", "Stands", "Audio Tools"
  features: string[];   // Key features list
  specs: object;        // Technical specifications
  specsText?: string;   // Formatted specs text
}
```

### Adding a New Product

1. Add product entry to `src/data/products.ts`
2. Add product images to `public/images/products/`
3. Product automatically appears on category page

---

## 🎨 Design System

### Typography

- **Headings:** `font-serif` (Playfair Display)
- **Body:** `font-sans` (Inter)
- **Scale:** Tailwind's default scale (text-sm through text-7xl)

### Colors

```css
/* Primary Palette */
--stone-950: #0c0a09;   /* Background */
--stone-900: #1c1917;   /* Surfaces */
--stone-100: #f5f5f4;   /* Light text */
--stone-400: #a8a29e;   /* Muted text */

/* Accent */
--accent: Custom per component
```

### Key Components

- **Hero Sections:** Full-width with animated content
- **Product Cards:** Click-through to individual products
- **Category Grids:** Responsive 1-3 column layouts
- **Navigation:** Sticky header with smooth transitions

---

## 🔧 Configuration

### Tailwind CSS v4

Customize in `src/styles/globals.css`:

```css
@theme {
  --font-family-serif: 'Playfair Display', serif;
  --font-family-sans: 'Inter', sans-serif;
  /* Add custom theme variables */
}
```

### Netlify Deployment

**netlify.toml:**
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

Automatic deployments on push to `main` branch.

---

## 📝 Content Management

### Telegram Bot Integration

This website has a companion [Telegram content bot](../telegram-bot) that allows non-technical users to edit text content without touching code:

- **60+ editable sections** across all pages
- **Real-time updates** via GitHub commits
- **Build monitoring** with success/failure notifications

See the [telegram-bot README](../telegram-bot/README.md) for setup instructions.

---

## 🛠️ Development

### Code Style

- **TypeScript** for type safety
- **ESLint** for linting (Next.js config)
- **Prettier** for formatting (recommended)

### Key Scripts

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run start    # Run production server
npm run lint     # Run ESLint
```

### Adding New Pages

1. Create file in `src/app/[page-name]/page.tsx`
2. Add navigation link in `src/components/layout/Header.tsx`
3. Page automatically routes via Next.js App Router

---

## 📱 Responsive Breakpoints

```css
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Desktops */
xl: 1280px  /* Large desktops */
2xl: 1536px /* Extra large screens */
```

---

## 🌐 SEO

### Metadata

Configured in `src/app/layout.tsx`:

```typescript
export const metadata = {
  title: "Nobius Audio - Handcrafted Speakers",
  description: "Premium audio equipment...",
  keywords: [...],
}
```

### Page-Specific SEO

Each page can override metadata:

```typescript
// src/app/products/speakers/page.tsx
export const metadata = {
  title: "Speakers | Nobius Audio",
  description: "Explore our speaker lineup...",
}
```

---

## 🚢 Deployment

### Production Checklist

- [ ] Test all pages on mobile, tablet, desktop
- [ ] Verify product images load correctly
- [ ] Check contact form submission
- [ ] Validate SEO metadata
- [ ] Run production build locally
- [ ] Check Netlify build logs
- [ ] Test live site after deployment

### Environment Variables

None required for the website. All configuration is in `next.config.ts` and `tailwind.config.ts`.

---

## 🤝 Contributing

1. Create feature branch: `git checkout -b feature/new-feature`
2. Make changes and test locally
3. Commit: `git commit -m "Add new feature"`
4. Push: `git push origin feature/new-feature`
5. Create Pull Request

---

## 📄 License

Private repository - All rights reserved to Nobius Audio.

---

## 🆘 Support

For technical issues or questions:
- **Developer:** Neo (@harryneopotter)
- **Client:** Nobius Audio Team

---

## 🔗 Related Projects

- [Telegram Content Bot](../telegram-bot) - Edit website content via Telegram

---

<div align="center">

**Made with ❤️ for Nobius Audio**

*Pure sound, refined performance*

</div>
