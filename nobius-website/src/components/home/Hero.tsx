'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.4
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
            }
        }
    };

    return (
        <section className="relative flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center overflow-hidden px-4 text-center">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 flex flex-col items-center"
            >
                <motion.p
                    variants={itemVariants}
                    className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-stone-500"
                >
                    Nobius Audio
                </motion.p>

                <motion.h1
                    variants={itemVariants}
                    className="mb-8 font-serif text-5xl font-medium leading-[1.1] tracking-tight text-white md:text-7xl lg:text-8xl"
                >
                    Fun and Sincere.
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="mb-10 max-w-2xl text-base leading-relaxed text-stone-400 md:text-lg"
                >
                    High-performance speakers designed for the love of music,
                    built with disciplined engineering and artisanal care.
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-6">
                    <Link
                        href="/products"
                        className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition-all hover:scale-105 active:scale-95"
                    >
                        Explore Collection
                    </Link>
                    <Link
                        href="/why-nobius"
                        className="text-sm font-medium text-stone-400 transition-colors hover:text-white"
                    >
                        Learn Our Story →
                    </Link>
                </motion.div>
            </motion.div>

            {/* Bounce Arrow */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="flex flex-col items-center"
                >
                    <span className="mb-2 text-[10px] uppercase tracking-widest text-stone-600">Scroll</span>
                    <svg className="h-6 w-6 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
