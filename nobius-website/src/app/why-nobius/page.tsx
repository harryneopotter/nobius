'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

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
    '/images/why-nobius/C and D 01.jpg',
    '/images/why-nobius/C and D 02.jpg',
    '/images/why-nobius/C and D 03.jpg',
    '/images/why-nobius/C and D 04.jpg',
    '/images/why-nobius/C and D 05.jpg',
    '/images/why-nobius/C and D 06.jpg',
];

const crossoverImages = [
    '/images/why-nobius/Crossover execution 01.jpg',
    '/images/why-nobius/Crossover execution 02.jpg',
    '/images/why-nobius/Crossover execution 03.JPG',
];

const philosophyImages = [
    '/images/why-nobius/Philosophy 01.jpg',
    '/images/why-nobius/Philosophy 02.jpg',
    '/images/why-nobius/Philosophy 03.jpg',
    '/images/why-nobius/Philosophy 04.jpg',
    '/images/why-nobius/Philosophy 05.jpg',
    '/images/why-nobius/Philosophy 06.jpg',
    '/images/why-nobius/Philosophy 07.jpg',
    '/images/why-nobius/Philosophy 08.jpg',
];

const whoWeAreImages = [
    '/images/why-nobius/Who We are 01.JPG',
    '/images/why-nobius/Who We are 02.JPG',
    '/images/why-nobius/Who We are 03.JPG',
    '/images/why-nobius/Who We are 04.JPG',
    '/images/why-nobius/Who We are 05.JPG',
    '/images/why-nobius/Who We are 06.JPG',
    '/images/why-nobius/Who We are 07.JPG',
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
                        Why Nobius
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-lg md:text-xl font-light text-stone-300"
                    >
                        Claude gets me better than my CGPT.
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
                            <span className="text-blue-400 font-bold tracking-widest uppercase text-sm">Craft & Design</span>
                            <h2 className="font-serif text-4xl md:text-5xl text-white">Built Hard by Hand in Illinois</h2>
                            <div className="space-y-4 text-stone-400 leading-relaxed">
                                <p>
                                    Every Nobius speaker is assembled in our Lake in the Hills, IL workshop. One person, start to finish. From selecting the wood and running the CNC to cutting damping material and applying finish, nothing gets outsourced.
                                </p>
                                <p>
                                    The cabinets use a mix of old and new techniques: mitered plywood with rounded edges, dado-cut joint panels, front and rear rebates. All CNC cut on hardwood Baltic Birch—right is real oak. Damping is hand-cut and fitted to each panel. The crossover is point-to-point, in-house, one speaker at a time.
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
                            <span className="text-blue-400 font-bold tracking-widest uppercase text-sm">Driver Selection & Voicing</span>
                            <h2 className="font-serif text-4xl md:text-5xl text-white">Finding the Right Sound</h2>
                            <div className="space-y-4 text-stone-400 leading-relaxed">
                                <p>
                                    We tested over 20 woofer and tweeter combinations to find modern drivers that capture the character of vintage speakers.
                                </p>
                                <p>
                                    Drivers are designed to match the model. Every N1-9 sounds like the N1-9. Each speaker is tuned in a real room, not a sterile chamber. We verify voicing through listening tests, room ports, and feedback from the community.
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
                            <span className="text-blue-400 font-bold tracking-widest uppercase text-sm">Crossover Execution</span>
                            <h2 className="font-serif text-4xl md:text-5xl text-white">The Art of the Crossover</h2>
                            <div className="space-y-4 text-stone-400 leading-relaxed">
                                <p>
                                    Every crossover runs through the same process: simulate, measure, listen, refine. Repeat until it sounds right. Not just on paper, but in your living room.
                                </p>
                                <p>
                                    The S1-2 is a good example. We genetically bred "vintage" sound using modern drivers and crossover topology. Resistors are 1% tolerance steel crossover inductors. It wasn't tuned to be better. It was tuned to be true.
                                </p>
                                <p>
                                    All crossovers are built on custom PCBs using high-tolerance components, backed by ClarityCap film capacitors and hand-soldered air-core inductors. No cheap electrolytic caps. This means long-term stability and signal integrity.
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
                        <span className="text-blue-400 font-bold tracking-widest uppercase text-sm">Who We Are</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-white mt-4 mb-6">The Team Behind Nobius</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {[
                            { title: "Woodworking", desc: "Decades of custom woodworking experience." },
                            { title: "Manufacturing & Design", desc: "25+ years in milestone processes, design, and R&D." },
                            { title: "Aerospace & RF Engineering", desc: "18+ years of military aerospace engineering." },
                            { title: "Landsat Systems", desc: "Multiple patents in power management, optical science, imaging." },
                        ].map((item, i) => (
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
                        We're builders, music lovers, and engineers who believe in doing things proper. Good materials. Simple circuits. Pure sound.
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
                        <span className="text-blue-400 font-bold tracking-widest uppercase text-sm">Our Philosophy</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-white mt-4">What We Believe</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                title: "We design speakers that make music fun.",
                                desc: "If it doesn't make you think, \"What track should I play next?\" we haven't done our job."
                            },
                            {
                                title: "We avoid unnecessary complexity.",
                                desc: "Can you hear a 0.1dB ripple at 15kHz? Neither can we. We focus on what matters."
                            },
                            {
                                title: "We like the classics.",
                                desc: "Old mixers, vintage gear, analog warmth. Nobius speakers are designed to suit, not replace, the sounds you love."
                            },
                            {
                                title: "We respect your listening space.",
                                desc: "Every Nobius is tuned in a real room—not an anechoic chamber."
                            },
                        ].map((item, i) => (
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
