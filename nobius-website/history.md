# Project Change History - Multi-Tier Pricing Implementation

This document records the changes made to implement the multi-tier pricing system (Standard vs Signature), which are being reverted as per the client's request.

## Summary of Changes (Implemented on 2026-05-02)

### 1. Data Structure Updates
- **Restructured Pricing:** `src/data/prices.json` was changed from simple string values to objects supporting `standard` and `signature` keys.
- **Product Logic:** `src/data/products.ts` was updated to handle tiered pricing objects and calculate price ranges for the catalog.
- **Content Enrichment:** `src/data/products-content.json` was updated with `tierDetails` for the S1-2 and N1-9 models to describe the differences between Standard and Signature series.

### 2. User Interface Updates
- **Tier Selection:** `src/app/products/[slug]/ProductDetailClient.tsx` was modified to include selection cards for "Standard" and "Signature".
- **Dynamic Display:** The UI was updated to dynamically show the price and description based on the selected tier.
- **Order Form Integration:** `src/components/products/OrderForm.tsx` was updated to include a tier selector, ensuring customers could specify their choice in the order inquiry.

### 3. Global Updates
- **Email Change:** The contact email was updated to `J@nobius.audio` across multiple files.
- **Documentation:** Created `PROJECT_STRUCTURE.md` to explain the codebase and provide Regex patterns for future updates.

## Files Impacted
- `src/data/prices.json`
- `src/data/products.ts`
- `src/data/products-content.json`
- `src/app/products/[slug]/ProductDetailClient.tsx`
- `src/components/products/OrderForm.tsx`
- `src/app/contact/page.tsx` (Part of initial sync)
- `src/components/AnalyticsInit.tsx` (Part of initial sync)
- `PROJECT_STRUCTURE.md` (New file)
- `.gitignore` (Updated ignores)

---
*Note: These changes are recorded here for future reference before the codebase is reverted to its previous state.*

---

## Summary of Changes (Implemented on 2026-05-02) - Image Gallery Management via Telegram Bot

This update adds the ability for the client to manage product image galleries directly through the Telegram bot.

### 1. Data Structure Uniformity
- **Products Content (`nobius-website/src/data/products-content.json`)**: Added an empty `"galleryImages": []` array to all product definitions that lacked it. This ensures a uniform schema across the catalog, allowing the bot's regular expression parser to work reliably.

### 2. Bot Gallery Configuration
- **Section Parsing (`telegram-bot/sections.js`)**: Configured the bot to recognize `gallery` sections for products `n1-9`, `s1-2`, and `s2-5`. 
  - Added an `isGallery: true` flag.
  - Implemented specific regex patterns to natively parse and stringify the JSON array representing the images.

### 3. Telegram Bot Overhaul
- **Image Operations (`telegram-bot/bot.js`)**: 
  - **GitHub API Integration**: Added `safeGitHubFileUpload` to upload binary image buffers directly to `public/images/products/bot_uploads/` using the Octokit GitHub API.
  - **Interactive UI**: Bypassed the standard text editor for gallery sections, instead rendering an inline keyboard menu to `➕ Add`, `🔄 Replace`, and `🗑️ Remove` pictures.
  - **Photo Handling**: Updated the message handler to accept photos sent via Telegram, fetch their highest resolution version, upload them to the repository, and safely modify the JSON array structure in the queue.
