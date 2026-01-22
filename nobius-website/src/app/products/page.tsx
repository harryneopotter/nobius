import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-black">
      {/* Header Section */}
      <section className="bg-white py-16 dark:bg-stone-900/20 md:py-24">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h1 className="mb-4 font-serif text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100 md:text-5xl">
            Our Collection
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-stone-600 dark:text-stone-400">
            Hand-tuned, each model is engineered to reveal the joy in your music,
            from intimate near-field monitors to full range speakers.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="container mx-auto px-4 py-16 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
