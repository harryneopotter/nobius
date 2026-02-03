'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import pagesContent from '@/data/pages-content.json';

const speakers = products.filter(p => p.category === 'Speakers' && !p.image.includes('placeholder'));
const content = pagesContent.speakers;

export default function SpeakersClient() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Forest Header Section */}
            <section className="relative h-[60vh] w-full overflow-hidden">
                <Image
                    src="/images/hero-option.jpg"
                    alt="Nobius Speakers in Forest"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="font-serif text-5xl font-medium text-white md:text-7xl lg:text-8xl"
                    >
                        {content.heroTitle}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-6 max-w-2xl text-lg text-stone-200 md:text-xl"
                    >
                        {content.heroSubtitle}
                    </motion.p>
                </div>
            </section>

            {/* Product List */}
            <section className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
                <div className="grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-2 md:gap-x-10 lg:gap-x-16">
                    {speakers.map((product, idx) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            className="group flex flex-col items-center text-center max-w-xs mx-auto"
                        >
                            <Link href={`/products/${product.slug}`} className="w-full">
                                <div className="relative aspect-[8/7] w-full overflow-hidden rounded-sm bg-black/20 mb-5">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-serif text-2xl text-white transition-colors group-hover:text-stone-300">
                                        {product.name}
                                    </h3>
                                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone-500">
                                        {product.tagline}
                                    </p>
                                    <p className="mx-auto max-w-sm text-sm leading-relaxed text-stone-400">
                                        {product.description}
                                    </p>
                                    <span className="inline-block pt-2 text-xs font-medium text-stone-300 border-b border-transparent transition-all group-hover:border-stone-300">
                                        Explore {product.name}
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
