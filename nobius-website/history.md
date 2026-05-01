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
