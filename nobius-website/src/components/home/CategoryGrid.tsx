'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const categories = [
    {
        id: 'speakers',
        name: 'Speakers',
        href: '/products/speakers',
        description: 'Reference monitors and high-fidelity systems.',
        image: '/images/products/s1-2-hero.jpg', // Placeholder image from public/images
    },
    {
        id: 'stands',
        name: 'Stands',
        href: '/products/stands',
        description: 'Engineered isolation for peak performance.',
        image: '/images/hero-option.jpg', // Placeholder
    },
    {
        id: 'audio-tools',
        name: 'Audio Tools',
        href: '/products/audio-tools',
        description: 'Precision accessories for critical listening.',
        image: '/images/products/s1-2-hero.jpg', // Placeholder
    }
];

const CategoryGrid = () => {
    return (
        <section className="container mx-auto px-4 py-24">
            <div className="mb-16 text-center">
                <h2 className="mb-4 font-serif text-3xl font-medium text-white md:text-5xl">Our Categories</h2>
                <p className="mx-auto max-w-xl text-stone-400">
                    Everything we build is designed to serve the music first.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {categories.map((category, idx) => (
                    <motion.div
                        key={category.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <Link href={category.href} className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-stone-900 shadow-2xl">
                            <div className="absolute inset-0 bg-stone-950 opacity-40 group-hover:opacity-20 transition-opacity" />
                            <div className="absolute inset-0 flex flex-col justify-end p-8">
                                <h3 className="mb-2 text-2xl font-serif text-white">{category.name}</h3>
                                <p className="mb-4 text-sm text-stone-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    {category.description}
                                </p>
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white transition-all group-hover:bg-white group-hover:text-black">
                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default CategoryGrid;
