'use client';

import { motion } from 'framer-motion';

const pillars = [
    {
        title: 'Musical Truth',
        description: 'We prioritize emotional authenticity over sterile precision, ensuring your music breathes with life.',
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
        )
    },
    {
        title: 'Craftsmanship',
        description: 'Every monitor is hand-voiced by experienced engineers who understand the art of sound.',
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
            </svg>
        )
    },
    {
        title: 'Premium Materials',
        description: 'We use only the finest components and materials to ensure lasting quality and performance.',
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
        )
    }
];

const CraftPillars = () => {
    return (
        <section className="bg-stone-950 py-24 md:py-32">
            <div className="container mx-auto px-4">
                {/* Centered Header */}
                <div className="mb-16 text-center max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-6 font-serif text-4xl font-medium text-white md:text-5xl lg:text-6xl"
                    >
                        Craft, Care, and Consistency
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg leading-relaxed text-stone-400"
                    >
                        Though every Nobius speaker is built by hand, each one is crafted with a disciplined commitment to accuracy, consistency, and intentional voicing. Our process blends artisanal construction with measured engineering so that what you hear is not random variation — but character.
                    </motion.p>
                </div>

                {/* Pillar Cards - Centered with rounded backgrounds */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
                    {pillars.map((pillar, idx) => (
                        <motion.div
                            key={pillar.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className="group flex flex-col items-center text-center rounded-2xl bg-stone-900/50 p-8 border border-stone-800/50 hover:border-stone-700/50 transition-colors"
                        >
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-stone-800 text-stone-300 transition-all group-hover:bg-white group-hover:text-black group-hover:scale-110">
                                {pillar.icon}
                            </div>
                            <h3 className="mb-3 text-lg font-semibold text-white">{pillar.title}</h3>
                            <p className="text-sm text-stone-400 leading-relaxed">
                                {pillar.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Quote at bottom */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <p className="font-serif text-xl italic text-stone-300">
                        "Sound that serves the music, not the specifications."
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default CraftPillars;
