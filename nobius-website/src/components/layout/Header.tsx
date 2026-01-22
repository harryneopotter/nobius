'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (productsRef.current && !productsRef.current.contains(e.target as Node)) {
        setIsProductsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on Escape key
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsProductsOpen(false);
    }
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleProducts = () => setIsProductsOpen(!isProductsOpen);

  return (
    <>
      {/* Skip to main content link for keyboard accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
          ? 'border-b border-stone-800/50 bg-black/60 backdrop-blur-xl'
          : 'bg-transparent'
          }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="relative h-20 w-72 transition-opacity hover:opacity-80">
            <Image
              src="/images/logo-dark.png"
              alt="Nobius Audio"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link href="/" className="text-sm font-medium text-stone-400 transition-colors hover:text-white">
              Home
            </Link>

            {/* Products Dropdown - Both hover and keyboard accessible */}
            <div
              ref={productsRef}
              className="relative h-full flex items-center"
              onKeyDown={handleKeyDown}
            >
              <button
                onClick={toggleProducts}
                onMouseEnter={() => setIsProductsOpen(true)}
                aria-haspopup="true"
                aria-expanded={isProductsOpen}
                className="text-sm font-medium text-stone-400 transition-colors hover:text-white py-4 flex items-center gap-1"
              >
                Products
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`absolute left-1/2 top-full w-48 -translate-x-1/2 pt-2 transition-all duration-200 ${isProductsOpen
                  ? 'opacity-100 visible translate-y-0'
                  : 'opacity-0 invisible translate-y-2'
                  }`}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <div
                  className="flex flex-col overflow-hidden rounded-xl border border-stone-800/50 bg-black/90 backdrop-blur-xl p-2 shadow-xl"
                  role="menu"
                >
                  <Link
                    href="/products/speakers"
                    role="menuitem"
                    onClick={() => setIsProductsOpen(false)}
                    className="rounded-lg px-4 py-3 text-sm font-medium text-stone-400 transition-colors hover:bg-stone-800 hover:text-white text-left"
                  >
                    Speakers
                  </Link>
                  <Link
                    href="/products/stands"
                    role="menuitem"
                    onClick={() => setIsProductsOpen(false)}
                    className="rounded-lg px-4 py-3 text-sm font-medium text-stone-400 transition-colors hover:bg-stone-800 hover:text-white text-left"
                  >
                    Stands
                  </Link>
                  <Link
                    href="/products/audio-tools"
                    role="menuitem"
                    onClick={() => setIsProductsOpen(false)}
                    className="rounded-lg px-4 py-3 text-sm font-medium text-stone-400 transition-colors hover:bg-stone-800 hover:text-white text-left"
                  >
                    Audio Tools
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/why-nobius" className="text-sm font-medium text-stone-400 transition-colors hover:text-white">
              Why Nobius
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-stone-100 px-5 py-2 text-sm font-semibold text-stone-900 transition-all hover:bg-stone-200 hover:scale-105 active:scale-95"
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-stone-400 transition-colors hover:bg-stone-800 hover:text-white md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <nav className="absolute left-0 top-full w-full border-b border-stone-800 bg-stone-950 px-4 py-8 md:hidden">
            <div className="flex flex-col space-y-6">
              <Link
                href="/"
                onClick={closeMenu}
                className="text-lg font-medium text-stone-300 hover:text-white"
              >
                Home
              </Link>
              <Link
                href="/products/speakers"
                onClick={closeMenu}
                className="text-lg font-medium text-stone-300 hover:text-white"
              >
                Speakers
              </Link>
              <Link
                href="/products/stands"
                onClick={closeMenu}
                className="text-lg font-medium text-stone-300 hover:text-white"
              >
                Stands
              </Link>
              <Link
                href="/products/audio-tools"
                onClick={closeMenu}
                className="text-lg font-medium text-stone-300 hover:text-white"
              >
                Audio Tools
              </Link>
              <Link
                href="/why-nobius"
                onClick={closeMenu}
                className="text-lg font-medium text-stone-300 hover:text-white"
              >
                Why Nobius
              </Link>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="inline-block rounded-full bg-stone-100 px-6 py-3 text-center text-sm font-semibold text-stone-900"
              >
                Get in Touch
              </Link>
            </div>
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
