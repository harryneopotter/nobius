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
  image: string;
  galleryImages?: string[];
  category: string;
  features: string[];
  specs: ProductSpecs;
  specsText?: string;
}

// Import content from JSON files (separates content from code)
import productsContent from './products-content.json';
import pricesData from './prices.json';

// Type for the prices config
type PricesConfig = { [key: string]: string };
const prices: PricesConfig = pricesData;

// Merge product content with prices at build time
export const products: Product[] = (productsContent as Product[]).map(product => ({
  ...product,
  price: prices[product.id] || product.price || '$TBD'
}));
