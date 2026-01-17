import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link href={`/products/${product.slug}`} className="group block h-full">
      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white transition-all duration-300 hover:border-stone-300 hover:shadow-lg dark:border-stone-800 dark:bg-stone-900/50 dark:hover:border-stone-700">
        {/* Image */}
        <div className="relative aspect-square w-full overflow-hidden rounded-t-2xl bg-stone-900">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          <div className="mb-4">
            <p className="mb-1 text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
              {product.category}
            </p>
            <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
              {product.name}
            </h3>
            <p className="mt-1 text-sm font-medium italic text-stone-500 dark:text-stone-400">
              {product.tagline}
            </p>
          </div>

          <p className="mb-6 line-clamp-3 flex-1 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
            {product.description}
          </p>

          <div className="flex items-center justify-between border-t border-stone-100 pt-4 dark:border-stone-800">
            <span className="text-lg font-semibold text-stone-900 dark:text-stone-100">
              {product.price}
            </span>
            <span className="text-sm font-medium text-stone-900 underline decoration-stone-300 underline-offset-4 transition-colors group-hover:text-stone-600 group-hover:decoration-stone-600 dark:text-stone-100 dark:decoration-stone-600 dark:group-hover:text-stone-300">
              Learn More
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
