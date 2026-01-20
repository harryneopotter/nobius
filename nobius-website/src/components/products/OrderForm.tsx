'use client';

import { useState } from 'react';
import { Product } from '@/data/products';

interface OrderFormProps {
    product: Product;
    isOpen: boolean;
    onClose: () => void;
}

export default function OrderForm({ product, isOpen, onClose }: OrderFormProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const subject = encodeURIComponent(`Order Inquiry: ${product.name}`);
        const body = encodeURIComponent(
            `Hello Nobius Audio,\n\n` +
            `I am interested in ordering the following product:\n\n` +
            `Product: ${product.name}\n` +
            `Category: ${product.category}\n` +
            `Price: ${product.price}\n\n` +
            `My Details:\n` +
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Phone: ${formData.phone || 'Not provided'}\n` +
            `Location: ${formData.location}\n\n` +
            `Please contact me regarding availability and shipping options.\n\n` +
            `Thank you.`
        );

        window.location.href = `mailto:info@nobiusaudio.com?subject=${subject}&body=${body}`;
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div
                className="relative w-full max-w-lg rounded-2xl bg-stone-900 border border-stone-800 p-8 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-stone-400 transition-colors hover:bg-stone-800 hover:text-white"
                    aria-label="Close form"
                >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Header */}
                <div className="mb-8">
                    <h2 className="font-serif text-2xl text-white">Contact us to Order</h2>
                    <p className="mt-2 text-stone-400">
                        Interested in the <span className="font-medium text-white">{product.name}</span>?
                        Fill out the form below and we'll get back to you.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-stone-300 mb-2">
                            Full Name <span className="text-red-400">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full rounded-lg border border-stone-700 bg-stone-800 px-4 py-3 text-white placeholder-stone-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            placeholder="Your name"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-stone-300 mb-2">
                            Email Address <span className="text-red-400">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full rounded-lg border border-stone-700 bg-stone-800 px-4 py-3 text-white placeholder-stone-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-stone-300 mb-2">
                            Phone Number <span className="text-stone-500">(Optional)</span>
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full rounded-lg border border-stone-700 bg-stone-800 px-4 py-3 text-white placeholder-stone-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            placeholder="+1 (555) 000-0000"
                        />
                    </div>

                    <div>
                        <label htmlFor="location" className="block text-sm font-medium text-stone-300 mb-2">
                            City / Country <span className="text-red-400">*</span>
                        </label>
                        <input
                            type="text"
                            id="location"
                            required
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            className="w-full rounded-lg border border-stone-700 bg-stone-800 px-4 py-3 text-white placeholder-stone-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            placeholder="e.g., New York, USA"
                        />
                    </div>

                    {/* Hidden fields for context - included in email body */}

                    <button
                        type="submit"
                        className="w-full rounded-full bg-white py-4 text-sm font-semibold text-stone-900 transition-colors hover:bg-stone-200"
                    >
                        Send Inquiry
                    </button>

                    <p className="text-center text-xs text-stone-500">
                        This will open your default email client.
                    </p>
                </form>
            </div>
        </div>
    );
}
