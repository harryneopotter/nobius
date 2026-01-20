'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useCallback, useEffect } from 'react';
import { Product } from '@/data/products';
import OrderForm from '@/components/products/OrderForm';

// Image Lightbox Component
function ImageLightbox({
    src,
    alt,
    isOpen,
    onClose
}: {
    src: string;
    alt: string;
    isOpen: boolean;
    onClose: () => void;
}) {
    // Handle escape key to close
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={onClose}
        >
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                aria-label="Close lightbox"
            >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Full Image Container */}
            <div
                className="relative max-h-[90vh] max-w-[90vw]"
                onClick={(e) => e.stopPropagation()}
            >
                <Image
                    src={src}
                    alt={alt}
                    width={1200}
                    height={1200}
                    className="max-h-[90vh] w-auto object-contain"
                    priority
                />
            </div>
        </div>
    );
}

interface ProductDetailClientProps {
    product: Product;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [orderFormOpen, setOrderFormOpen] = useState(false);

    const openLightbox = useCallback(() => setLightboxOpen(true), []);
    const closeLightbox = useCallback(() => setLightboxOpen(false), []);
    const openOrderForm = useCallback(() => setOrderFormOpen(true), []);
    const closeOrderForm = useCallback(() => setOrderFormOpen(false), []);

    return (
        <div className="min-h-screen bg-stone-50 dark:bg-black">
            {/* Image Lightbox */}
            <ImageLightbox
                src={product.image}
                alt={product.name}
                isOpen={lightboxOpen}
                onClose={closeLightbox}
            />

            {/* Order Form Modal */}
            <OrderForm
                product={product}
                isOpen={orderFormOpen}
                onClose={closeOrderForm}
            />

            {/* Hero Section */}
            <section className="bg-white py-16 dark:bg-stone-900/20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
                        {/* Product Image - Now clickable */}
                        <div className="flex-1 flex justify-center">
                            <button
                                onClick={openLightbox}
                                className="group relative aspect-[3/4] w-full max-w-lg cursor-zoom-in overflow-hidden rounded-2xl shadow-2xl bg-stone-900 transition-transform hover:scale-[1.02]"
                                aria-label="Click to view full image"
                            >
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-contain object-bottom transition-transform duration-300 group-hover:scale-105"
                                    priority
                                />
                                {/* Zoom hint overlay */}
                                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/10">
                                    <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-stone-900 opacity-0 transition-opacity group-hover:opacity-100">
                                        Click to enlarge
                                    </span>
                                </div>
                            </button>
                        </div>

                        {/* Product Info */}
                        <div className="flex-1 space-y-8">
                            <div>
                                <p className="mb-2 text-sm font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                                    {product.category}
                                </p>
                                <h1 className="font-serif text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100 md:text-5xl lg:text-6xl">
                                    {product.name}
                                </h1>
                                <p className="mt-2 text-xl font-medium italic text-stone-500 dark:text-stone-400">
                                    {product.tagline}
                                </p>
                            </div>

                            <div className="space-y-6 text-lg leading-relaxed text-stone-600 dark:text-stone-300">
                                <p>{product.description}</p>
                                {product.longDescription && <p>{product.longDescription}</p>}
                            </div>

                            <div className="flex items-center justify-between border-t border-stone-200 py-6 dark:border-stone-800">
                                <span className="text-3xl font-bold text-stone-900 dark:text-stone-100">
                                    {product.price}
                                </span>
                            </div>

                            <div className="flex flex-col gap-4 sm:flex-row">
                                <button
                                    onClick={openOrderForm}
                                    className="inline-flex h-12 items-center justify-center rounded-full bg-stone-900 px-8 text-sm font-medium text-white transition-colors hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200"
                                >
                                    Contact us to Order
                                </button>
                                <button
                                    className="inline-flex h-12 items-center justify-center rounded-full border border-stone-200 px-8 text-sm font-medium text-stone-900 transition-colors hover:bg-stone-50 dark:border-stone-800 dark:text-stone-100 dark:hover:bg-stone-900"
                                >
                                    Download Technical Sheet
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Specifications */}
            <section className="container mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24">
                <div className="mb-12 text-center">
                    <h2 className="font-serif text-3xl font-bold text-stone-900 dark:text-stone-100">
                        Technical Specifications
                    </h2>
                    <p className="mt-4 text-stone-600 dark:text-stone-400">
                        Precision engineering in every detail.
                    </p>
                </div>

                <div className="overflow-hidden rounded-xl border border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900/50">
                    <table className="w-full text-left text-sm">
                        <tbody className="divide-y divide-stone-100 dark:divide-stone-800">
                            {product.specs?.frequencyResponse && (
                                <tr className="group transition-colors hover:bg-stone-50 dark:hover:bg-stone-900">
                                    <th className="w-1/3 px-6 py-4 font-medium text-stone-900 dark:text-stone-100">
                                        Frequency Response
                                    </th>
                                    <td className="px-6 py-4 text-stone-600 dark:text-stone-400">
                                        {product.specs.frequencyResponse}
                                    </td>
                                </tr>
                            )}
                            {product.specs?.sensitivity && (
                                <tr className="group transition-colors hover:bg-stone-50 dark:hover:bg-stone-900">
                                    <th className="w-1/3 px-6 py-4 font-medium text-stone-900 dark:text-stone-100">
                                        Sensitivity
                                    </th>
                                    <td className="px-6 py-4 text-stone-600 dark:text-stone-400">
                                        {product.specs.sensitivity}
                                    </td>
                                </tr>
                            )}
                            {product.specs?.impedance && (
                                <tr className="group transition-colors hover:bg-stone-50 dark:hover:bg-stone-900">
                                    <th className="w-1/3 px-6 py-4 font-medium text-stone-900 dark:text-stone-100">
                                        Nominal Impedance
                                    </th>
                                    <td className="px-6 py-4 text-stone-600 dark:text-stone-400">
                                        {product.specs.impedance}
                                    </td>
                                </tr>
                            )}
                            {product.specs?.cabinetType && (
                                <tr className="group transition-colors hover:bg-stone-50 dark:hover:bg-stone-900">
                                    <th className="w-1/3 px-6 py-4 font-medium text-stone-900 dark:text-stone-100">
                                        Cabinet Architecture
                                    </th>
                                    <td className="px-6 py-4 text-stone-600 dark:text-stone-400">
                                        {product.specs.cabinetType}
                                    </td>
                                </tr>
                            )}
                            {product.specs?.drivers && (
                                <tr className="group transition-colors hover:bg-stone-50 dark:hover:bg-stone-900">
                                    <th className="w-1/3 px-6 py-4 font-medium text-stone-900 dark:text-stone-100">
                                        Drivers
                                    </th>
                                    <td className="px-6 py-4 text-stone-600 dark:text-stone-400">
                                        {product.specs.drivers}
                                    </td>
                                </tr>
                            )}
                            {product.specs?.dimensions && (
                                <tr className="group transition-colors hover:bg-stone-50 dark:hover:bg-stone-900">
                                    <th className="w-1/3 px-6 py-4 font-medium text-stone-900 dark:text-stone-100">
                                        Dimensions (H x W x D)
                                    </th>
                                    <td className="px-6 py-4 text-stone-600 dark:text-stone-400">
                                        {product.specs.dimensions}
                                    </td>
                                </tr>
                            )}
                            {product.specs?.weight && (
                                <tr className="group transition-colors hover:bg-stone-50 dark:hover:bg-stone-900">
                                    <th className="w-1/3 px-6 py-4 font-medium text-stone-900 dark:text-stone-100">
                                        Weight
                                    </th>
                                    <td className="px-6 py-4 text-stone-600 dark:text-stone-400">
                                        {product.specs.weight}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
