import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import Link from 'next/link';
import Image from 'next/image';

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Await the params before accessing them
  const resolvedParams = await params;
  const product = products.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-black">
      {/* Hero Section */}
      <section className="bg-white py-16 dark:bg-stone-900/20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
            {/* Image Placeholder - Carousel to be implemented */}
            <div className="flex-1">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-stone-100 dark:bg-stone-800">
                 <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-center"
                    priority
                  />
              </div>
            </div>

            {/* Product Info */}
            <div className="flex-1 space-y-8">
              <div>
                <p className="mb-2 text-sm font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                  {product.category}
                </p>
                <h1 className="font-serif text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100 md:text-5xl lg:text-6xl">
                  {product.name}
                </h1>
                <p className="mt-2 text-xl font-medium italic text-stone-500 dark:text-stone-400">
                  {product.tagline}
                </p>
              </div>

              <div className="space-y-6 text-lg leading-relaxed text-stone-600 dark:text-stone-300">
                <p>{product.description}</p>
                {product.longDescription && <p>{product.longDescription}</p>}
              </div>

              <div className="flex items-center justify-between border-t border-stone-200 py-6 dark:border-stone-800">
                <span className="text-3xl font-bold text-stone-900 dark:text-stone-100">
                  {product.price}
                </span>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-stone-900 px-8 text-sm font-medium text-white transition-colors hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200"
                >
                  Request a Quote
                </Link>
                <button
                  className="inline-flex h-12 items-center justify-center rounded-full border border-stone-200 px-8 text-sm font-medium text-stone-900 transition-colors hover:bg-stone-50 dark:border-stone-800 dark:text-stone-100 dark:hover:bg-stone-900"
                >
                  Download Technical Sheet
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="container mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold text-stone-900 dark:text-stone-100">
            Technical Specifications
          </h2>
          <p className="mt-4 text-stone-600 dark:text-stone-400">
            Precision engineering in every detail.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900/50">
          <table className="w-full text-left text-sm">
            <tbody className="divide-y divide-stone-100 dark:divide-stone-800">
              {product.specs?.frequencyResponse && (
                <tr className="group transition-colors hover:bg-stone-50 dark:hover:bg-stone-900">
                  <th className="w-1/3 px-6 py-4 font-medium text-stone-900 dark:text-stone-100">
                    Frequency Response
                  </th>
                  <td className="px-6 py-4 text-stone-600 dark:text-stone-400">
                    {product.specs.frequencyResponse}
                  </td>
                </tr>
              )}
              {product.specs?.sensitivity && (
                <tr className="group transition-colors hover:bg-stone-50 dark:hover:bg-stone-900">
                  <th className="w-1/3 px-6 py-4 font-medium text-stone-900 dark:text-stone-100">
                    Sensitivity
                  </th>
                  <td className="px-6 py-4 text-stone-600 dark:text-stone-400">
                    {product.specs.sensitivity}
                  </td>
                </tr>
              )}
              {product.specs?.impedance && (
                <tr className="group transition-colors hover:bg-stone-50 dark:hover:bg-stone-900">
                  <th className="w-1/3 px-6 py-4 font-medium text-stone-900 dark:text-stone-100">
                    Nominal Impedance
                  </th>
                  <td className="px-6 py-4 text-stone-600 dark:text-stone-400">
                    {product.specs.impedance}
                  </td>
                </tr>
              )}
              {product.specs?.cabinetType && (
                <tr className="group transition-colors hover:bg-stone-50 dark:hover:bg-stone-900">
                  <th className="w-1/3 px-6 py-4 font-medium text-stone-900 dark:text-stone-100">
                    Cabinet Architecture
                  </th>
                  <td className="px-6 py-4 text-stone-600 dark:text-stone-400">
                    {product.specs.cabinetType}
                  </td>
                </tr>
              )}
              {product.specs?.drivers && (
                <tr className="group transition-colors hover:bg-stone-50 dark:hover:bg-stone-900">
                  <th className="w-1/3 px-6 py-4 font-medium text-stone-900 dark:text-stone-100">
                    Drivers
                  </th>
                  <td className="px-6 py-4 text-stone-600 dark:text-stone-400">
                    {product.specs.drivers}
                  </td>
                </tr>
              )}
              {product.specs?.dimensions && (
                <tr className="group transition-colors hover:bg-stone-50 dark:hover:bg-stone-900">
                  <th className="w-1/3 px-6 py-4 font-medium text-stone-900 dark:text-stone-100">
                    Dimensions (H x W x D)
                  </th>
                  <td className="px-6 py-4 text-stone-600 dark:text-stone-400">
                    {product.specs.dimensions}
                  </td>
                </tr>
              )}
              {product.specs?.weight && (
                <tr className="group transition-colors hover:bg-stone-50 dark:hover:bg-stone-900">
                  <th className="w-1/3 px-6 py-4 font-medium text-stone-900 dark:text-stone-100">
                    Weight
                  </th>
                  <td className="px-6 py-4 text-stone-600 dark:text-stone-400">
                    {product.specs.weight}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
