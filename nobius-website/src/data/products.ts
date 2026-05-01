// Product type definitions
export interface ProductSpecs {
  [key: string]: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  longDescription?: string;
  price: string;
  standardPrice?: string;
  signaturePrice?: string;
  image: string;
  galleryImages?: string[];
  category: string;
  features: string[];
  specs: ProductSpecs;
  specsText?: string;
  tierDetails?: {
    standard: string;
    signature?: string;
  };
}

// Import content from JSON files (separates content from code)
import productsContent from './products-content.json';
import pricesData from './prices.json';

// Type for the prices config
type PriceEntry = string | { standard: string; signature?: string };
type PricesConfig = { [key: string]: PriceEntry };
const prices: PricesConfig = pricesData as PricesConfig;

// Merge product content with prices at build time
export const products: Product[] = (productsContent as any[]).map(product => {
  const priceEntry = prices[product.id];
  let priceStr = '$TBD';
  let standardPrice = undefined;
  let signaturePrice = undefined;

  if (typeof priceEntry === 'string') {
    priceStr = priceEntry;
  } else if (priceEntry && typeof priceEntry === 'object') {
    standardPrice = priceEntry.standard;
    signaturePrice = priceEntry.signature;
    
    if (standardPrice && signaturePrice) {
      priceStr = `${standardPrice} - ${signaturePrice}`;
    } else {
      priceStr = standardPrice || '$TBD';
    }
  }

  return {
    ...product,
    price: priceStr,
    standardPrice,
    signaturePrice
  };
});
