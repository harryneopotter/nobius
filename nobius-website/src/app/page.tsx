'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px]" />
      </div>

      <main className="relative z-10 flex flex-col items-center">
        {/* Hero Section */}
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center px-6 pt-20 text-center">
          <motion.div
            style={{ y: y1, opacity }}
            className="flex flex-col items-center gap-8 max-w-4xl"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-sm font-semibold uppercase tracking-[0.4em] text-stone-400"
            >
              Nobius Audio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-serif text-5xl leading-tight tracking-tight md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
            >
              Imperfectly <br /> Honest.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="max-w-xl text-base leading-relaxed text-stone-300 md:text-lg"
            >
              Truth in materials. Truth in engineering. Meticulously voiced nearfield monitors for listeners who care more about emotion than perfection on a graph.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-4 pt-4"
            >
              <Link href="/products">
                <Button size="lg" className="group">
                  Explore Collection
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/philosophy">
                <Button variant="ghost" size="lg">
                  Our Philosophy
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            style={{ opacity }}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 text-stone-500"
          >
            <div className="w-[1px] h-12 bg-gradient-to-b from-stone-500 to-transparent mx-auto mb-2" />
            <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          </motion.div>
        </section>

        {/* Featured Product Section */}
        <section className="w-full max-w-7xl px-6 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <motion.div
              style={{ y: y2 }}
              className="relative order-2 md:order-1"
            >
              <GlassCard className="aspect-[4/5] w-full p-2" hoverEffect>
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-black">
                   <Image
                    src="/images/products/s1-2.png"
                    alt="S1-2 Nearfield Monitor"
                    fill
                    className="object-cover object-center opacity-80 transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-2">Featured Model</p>
                    <h3 className="text-3xl font-serif text-white mb-2">S1-2 Monitor</h3>
                    <p className="text-stone-300 text-sm mb-6">Vintage soul, modern engineering.</p>
                    <Link href="/products/s1-2" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-white border-b border-white pb-1 hover:border-transparent transition-colors">
                      Discover S1-2 <ChevronRight className="ml-1 w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            <div className="order-1 md:order-2 space-y-8">
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                Designed for the <span className="text-stone-500">intimate</span> listening experience.
              </h2>
              <p className="text-stone-300 leading-relaxed text-lg">
                Most speakers are designed to shout across a room. Ours are designed to whisper in your ear.
                The S1-2 is built on the belief that desktop audio shouldn't be an afterthought.
              </p>

              <div className="grid grid-cols-2 gap-8 pt-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Sealed Cabinet</h4>
                  <p className="text-sm text-stone-400">Tight, accurate bass response without port noise.</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Phase Coherent</h4>
                  <p className="text-sm text-stone-400">Seamless integration between woofer and tweeter.</p>
                </div>
              </div>

              <div className="pt-8">
                <Link href="/philosophy">
                  <Button variant="outline">Read About Our Process</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
