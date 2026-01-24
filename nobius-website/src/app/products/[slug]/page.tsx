import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { products } from '@/data/products';
import ProductDetailClient from './ProductDetailClient';

// Generate static params for all products at build time
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const resolvedParams = await params;
  const product = products.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    return {
      title: 'Product Not Found | Nobius Audio',
    };
  }

  return {
    title: `${product.name} | Nobius Audio`,
    description: product.description || product.tagline,
    openGraph: {
      title: `${product.name} - ${product.tagline} | Nobius Audio`,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
  };
}

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

  return <ProductDetailClient product={product} />;
}
