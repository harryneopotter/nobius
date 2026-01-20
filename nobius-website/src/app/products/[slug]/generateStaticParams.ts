import { products } from '@/data/products';

// Generate static params for all products at build time
export async function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}
