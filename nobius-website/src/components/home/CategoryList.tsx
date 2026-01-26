'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const categories = [
    {
        id: 'speakers',
        name: 'Speakers',
        href: '/products/speakers',
        description: 'Fun, inviting's and familiar',
        image: '/images/products/s1-2-hero.jpg',
        alignment: 'left', // Text Left, Image Right
    },
    {
        id: 'stands',
        name: 'Stands',
        href: '/products/stands',
        description: 'Engineered for acoustic control, designed for real living spaces.',
        image: '/images/products/space-saver.jpg',
        alignment: 'right', // Text Right, Image Left
    },
    {
        id: 'audio-tools',
        name: 'Audio Tools',
        href: '/products/audio-tools',
        description: 'The not-so-little details that matter.',
        image: '/images/products/risers/risers4.jpg',
        alignment: 'left', // Text Left, Image Right
    }
];

const CategoryList = () => {
    return (
        <section className="container mx-auto px-4 py-32 space-y-32">
            {categories.map((category, idx) => (
                <div
                    key={category.id}
                    className={`flex flex-col-reverse items-center gap-12 md:gap-24 ${category.alignment === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
                        }`}
                >
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: category.alignment === 'left' ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex-1 text-center md:text-left"
                    >
                        <div className={`flex flex-col ${category.alignment === 'left' ? 'md:items-start' : 'md:items-end'}`}>
                            <h2 className="mb-6 font-serif text-5xl font-medium text-white md:text-7xl">
                                {category.name}
                            </h2>
                            <p className={`mb-8 max-w-md text-lg leading-relaxed text-stone-400 ${category.alignment === 'left' ? 'md:text-left' : 'md:text-right'
                                }`}>
                                {category.description}
                            </p>
                            <Link
                                href={category.href}
                                className="group inline-flex items-center gap-2 rounded-full border border-stone-800 bg-transparent px-8 py-4 text-sm font-bold text-white transition-all hover:bg-white hover:text-black"
                            >
                                Explore {category.name}
                                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 w-full"
                    >
                        <Link href={category.href} className="group block relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-black/20">
                            <Image
                                src={category.image}
                                alt={category.name}
                                fill
                                className="object-contain transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
                        </Link>
                    </motion.div>
                </div>
            ))}
        </section>
    );
};

export default CategoryList;
