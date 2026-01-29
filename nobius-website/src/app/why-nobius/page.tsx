'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import content from '@/data/why-nobius.json';

// Image Gallery Component with Crossfade Transition
function ImageGallery({ images, title }: { images: string[]; title: string }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const next = () => {
        setDirection(1);
        setCurrentIndex((i) => (i + 1) % images.length);
    };
    const prev = () => {
        setDirection(-1);
        setCurrentIndex((i) => (i - 1 + images.length) % images.length);
    };

    // Autoplay with 4-second interval
    useEffect(() => {
        if (images.length <= 1) return;

        const timer = setInterval(() => {
            setDirection(1);
            setCurrentIndex((i) => (i + 1) % images.length);
        }, 4000);

        return () => clearInterval(timer);
    }, [images.length]);

    const variants = {
        enter: {
            opacity: 0,
            scale: 1.02,
        },
        center: {
            opacity: 1,
            scale: 1,
        },
        exit: {
            opacity: 0,
            scale: 0.98,
        },
    };

    return (
        <div className="relative h-full">
            <div className="relative h-[350px] w-full overflow-hidden rounded-lg bg-stone-900">
                <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                        key={currentIndex}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            opacity: { duration: 0.5, ease: "easeInOut" },
                            scale: { duration: 0.5, ease: "easeInOut" },
                        }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={images[currentIndex]}
                            alt={`${title} ${currentIndex + 1}`}
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </AnimatePresence>
                {/* Navigation Arrows */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={prev}
                            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
                            aria-label="Previous image"
                        >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={next}
                            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
                            aria-label="Next image"
                        >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </>
                )}
            </div>
            {/* Dots */}
            {images.length > 1 && (
                <div className="mt-4 flex justify-center gap-2">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                setDirection(i > currentIndex ? 1 : -1);
                                setCurrentIndex(i);
                            }}
                            className={`h-2 w-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-white w-4' : 'bg-stone-600 hover:bg-stone-500'}`}
                            aria-label={`Go to image ${i + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

// Gallery image paths
const craftDesignImages = [
    '/images/galleries/craft-design/C and D 01.jpg',
    '/images/galleries/craft-design/C and D 02.jpg',
    '/images/galleries/craft-design/C and D 03.jpg',
    '/images/galleries/craft-design/C and D 04.jpg',
    '/images/galleries/craft-design/C and D 05.jpg',
    '/images/galleries/craft-design/C and D 06.jpg',
];

const crossoverImages = [
    '/images/galleries/crossover/Crossover execution 01.jpg',
    '/images/galleries/crossover/Crossover execution 02.jpg',
    '/images/galleries/crossover/Crossover execution 03.JPG',
];

const philosophyImages = [
    '/images/galleries/philosophy/Philosophy 01.jpg',
    '/images/galleries/philosophy/Philosophy 02.jpg',
    '/images/galleries/philosophy/Philosophy 03.jpg',
    '/images/galleries/philosophy/Philosophy 04.jpg',
    '/images/galleries/philosophy/Philosophy 05.jpg',
    '/images/galleries/philosophy/Philosophy 06.jpg',
    '/images/galleries/philosophy/Philosophy 07.jpg',
    '/images/galleries/philosophy/Philosophy 08.jpg',
];

const whoWeAreImages = [
    '/images/galleries/who-we-are/Who We are 01.JPG',
    '/images/galleries/who-we-are/Who We are 02.JPG',
    '/images/galleries/who-we-are/Who We are 03.JPG',
    '/images/galleries/who-we-are/Who We are 04.JPG',
    '/images/galleries/who-we-are/Who We are 05.JPG',
    '/images/galleries/who-we-are/Who We are 06.JPG',
    '/images/galleries/who-we-are/Who We are 07.JPG',
    '/images/galleries/who-we-are/Who We are 08.jpg',
];

export default function WhyNobiusPage() {
    return (
        <div className="flex flex-col min-h-screen bg-stone-950 text-stone-200">

            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/hero-option.jpg"
                    alt="Nobius Philosophy"
                    fill
                    className="object-cover object-center opacity-30"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-950/50 to-stone-950" />

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="font-serif text-5xl md:text-7xl font-medium text-white mb-6"
                    >
                        ${content.hero.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-lg md:text-xl font-light text-stone-300"
                    >
                        ${content.hero.subtitle}
                    </motion.p>
                </div>
            </section>

            {/* Section 1: Craft & Design */}
            <section className="py-20 md:py-28">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <span className="text-blue-400 font-bold tracking-widest uppercase text-sm">{content.sections.craft.tag}</span>
                            <h2 id="section-craft" className="font-serif text-4xl md:text-5xl text-white">{content.sections.craft.title}</h2>
                            <div className="space-y-4 text-stone-400 leading-relaxed">
                                <p>
                                    {content.sections.craft.p1}
                                </p>
                                <p>
                                    {content.sections.craft.p2}
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <ImageGallery images={craftDesignImages} title="Craft & Design" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 2: Driver Selection & Voicing */}
            <section className="py-20 md:py-28 bg-stone-900/30">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:order-2 space-y-6"
                        >
                            <h2 id="section-driver" className="font-serif text-4xl md:text-5xl text-white">{content.sections.driver.title}</h2>
                            <div className="space-y-4 text-stone-400 leading-relaxed">
                                <p>
                                    {content.sections.driver.p1}
                                </p>
                                <p>
                                    {content.sections.driver.p2}
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="lg:order-1"
                        >
                            <ImageGallery images={philosophyImages.slice(0, 4)} title="Driver Selection" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 3: Crossover Execution */}
            <section className="py-20 md:py-28">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 id="section-crossover" className="font-serif text-4xl md:text-5xl text-white">{content.sections.crossover.title}</h2>
                            <div className="space-y-4 text-stone-400 leading-relaxed">
                                <p>
                                    {content.sections.crossover.p1}
                                </p>
                                <p>
                                    {content.sections.crossover.p2}
                                </p>
                                <p>
                                    {content.sections.crossover.p3}
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <ImageGallery images={crossoverImages} title="Crossover Execution" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 4: Who We Are */}
            <section className="py-20 md:py-28 bg-stone-900/30">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 id="section-who" className="font-serif text-4xl md:text-5xl text-white mt-4 mb-6">{content.sections.who_we_are.title}</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {content.sections.who_we_are.bios.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-stone-900/50 p-6 rounded-xl border border-stone-800/50"
                            >
                                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                                <p className="text-stone-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <ImageGallery images={whoWeAreImages} title="Who We Are" />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center text-stone-400 mt-12 max-w-2xl mx-auto"
                    >
                        {content.sections.who_we_are.subtitle}
                    </motion.p>
                </div>
            </section>

            {/* Section 5: Our Philosophy */}
            <section className="py-20 md:py-28">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 id="section-philosophy" className="font-serif text-4xl md:text-5xl text-white mt-4">Our Philosophy</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {content.sections.philosophy.items.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-stone-900/50 p-8 rounded-2xl border border-stone-800/50 hover:border-stone-700 transition-colors"
                            >
                                <h3 className="font-serif text-xl text-white mb-3">{item.title}</h3>
                                <p className="text-stone-400 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-16 max-w-4xl mx-auto"
                    >
                        <ImageGallery images={philosophyImages.slice(4)} title="Philosophy" />
                    </motion.div>

                </div>
            </section>

        </div>
    );
}
