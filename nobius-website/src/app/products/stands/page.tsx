'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';

const stands = products.filter(p => p.category === 'Stands');

export default function StandsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="relative h-[60vh] w-full overflow-hidden">
                <Image
                    src="/images/products/spiral-stand.jpg"
                    alt="Nobius Spiral Stands"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="font-serif text-5xl font-medium text-white md:text-7xl"
                    >
                        Stands
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-6 max-w-xl mx-auto text-lg text-stone-200"
                    >
                        Engineered for acoustic control, designed for real living spaces.
                    </motion.p>
                </div>
            </section>

            <section className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
                <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 md:gap-x-10 lg:gap-x-16">
                    {stands.map((product, idx) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="max-w-xs mx-auto"
                        >
                            <Link href={`/products/${product.slug}`} className="group block h-full">
                                <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-stone-900 mb-4">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                    />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xl font-serif font-medium text-white mb-1 group-hover:text-stone-300">
                                        {product.name}
                                    </h3>
                                    <p className="text-sm text-stone-400">
                                        {product.description}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
                {stands.length === 0 && (
                    <div className="text-center text-stone-500 py-12">
                        No stands currently listed. Check back soon.
                    </div>
                )}
            </section>
        </div>
    );
}
