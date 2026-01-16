'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { GlassCard } from "@/components/ui/GlassCard";
import { ArrowRight } from "lucide-react";

export default function ProductsPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="relative min-h-screen pt-32 pb-24 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center md:text-left">
           <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-400 mb-4"
            >
              The Collection
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-serif text-white mb-6"
            >
              Precision Tools <span className="text-stone-600">/</span> Musical Instruments
            </motion.h1>
            <motion.p
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="max-w-2xl text-lg text-stone-300"
            >
              Each model is designed to solve a specific acoustic challenge while maintaining the signature Nobius transparency and musicality.
            </motion.p>
        </div>

        {/* Product Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={item}>
              <Link href={`/products/${product.slug}`}>
                <GlassCard hoverEffect className="h-full flex flex-col group cursor-pointer">
                  {/* Image Area */}
                  <div className="relative aspect-square w-full overflow-hidden border-b border-white/5 bg-black">
                     <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                      <p className="text-xs font-medium text-stone-200">{product.category}</p>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-baseline justify-between mb-2">
                       <h3 className="text-2xl font-serif text-white group-hover:text-stone-200 transition-colors">{product.name}</h3>
                       <p className="text-sm font-medium text-stone-400">{product.price}</p>
                    </div>
                    <p className="text-xs uppercase tracking-wider text-stone-500 mb-4">{product.tagline}</p>
                    <p className="text-stone-400 text-sm line-clamp-3 mb-6 flex-1 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="flex items-center text-sm font-medium text-white group-hover:underline underline-offset-4">
                      View Details <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
