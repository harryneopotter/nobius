import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { ArrowLeft, Check, ShoppingBag } from "lucide-react";

// This is a server component by default in App Router
export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="relative min-h-screen">
      {/* Immersive Header / Hero */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-24 flex items-end">
            <div className="max-w-4xl space-y-4">
                <Link href="/products" className="inline-flex items-center text-sm font-medium text-stone-400 hover:text-white transition-colors mb-4">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Collection
                </Link>
                <h1 className="text-6xl md:text-8xl font-serif text-white tracking-tight">{product.name}</h1>
                <p className="text-xl md:text-2xl text-stone-200 font-light tracking-wide max-w-2xl">{product.tagline}</p>
            </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

            {/* Main Content */}
            <div className="lg:col-span-7 space-y-12">
                <section>
                    <h2 className="text-3xl font-serif text-white mb-6">The Design Philosophy</h2>
                    <p className="text-lg text-stone-300 leading-relaxed whitespace-pre-line">
                        {product.longDescription || product.description}
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-medium text-white mb-6">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {product.features?.map((feature, idx) => (
                            <GlassCard key={idx} className="p-4 flex items-start gap-3">
                                <div className="mt-1 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                                    <Check className="w-3 h-3" />
                                </div>
                                <span className="text-stone-300 text-sm">{feature}</span>
                            </GlassCard>
                        ))}
                    </div>
                </section>
            </div>

            {/* Sticky Sidebar / Specs */}
            <div className="lg:col-span-5">
                <div className="sticky top-32 space-y-8">
                     <GlassCard className="p-8 space-y-8">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-widest text-stone-500 mb-1">Price Pair</p>
                            <p className="text-4xl font-serif text-white">{product.price}</p>
                        </div>

                        <Button className="w-full" size="lg">
                            Add to Cart <ShoppingBag className="ml-2 w-5 h-5" />
                        </Button>

                        <div className="pt-8 border-t border-white/10">
                            <h4 className="text-lg font-serif text-white mb-6">Technical Specifications</h4>
                            <dl className="space-y-4 text-sm">
                                {product.specs && Object.entries(product.specs).map(([key, value]) => (
                                    <div key={key} className="grid grid-cols-2 gap-4 border-b border-white/5 pb-2 last:border-0">
                                        <dt className="font-medium text-stone-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</dt>
                                        <dd className="text-stone-300 text-right">{value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                     </GlassCard>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}
