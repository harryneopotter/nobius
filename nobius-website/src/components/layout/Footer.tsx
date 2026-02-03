import Link from 'next/link';
import Image from 'next/image';
import pagesContent from '@/data/pages-content.json';

const content = pagesContent.footer;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-stone-800 bg-background">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo-dark.png"
                alt="Nobius Audio"
                width={180}
                height={52}
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-sm text-stone-400 leading-relaxed">
              {content.brandDescription}
            </p>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-stone-200 uppercase tracking-wider">
              Products
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/products/speakers"
                  className="text-sm text-stone-400 hover:text-stone-100 transition-colors"
                >
                  Speakers
                </Link>
              </li>
              <li>
                <Link
                  href="/products/stands"
                  className="text-sm text-stone-400 hover:text-stone-100 transition-colors"
                >
                  Stands
                </Link>
              </li>
              <li>
                <Link
                  href="/products/audio-tools"
                  className="text-sm text-stone-400 hover:text-stone-100 transition-colors"
                >
                  Audio Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-stone-200 uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/why-nobius"
                  className="text-sm text-stone-400 hover:text-stone-100 transition-colors"
                >
                  Why Nobius
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-stone-400 hover:text-stone-100 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-stone-200 uppercase tracking-wider">
              Connect
            </h3>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-stone-100 px-5 py-2.5 text-sm font-semibold text-stone-900 transition-all hover:bg-stone-200 hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-10 pt-8 border-t border-stone-800/50">
          <div className="flex flex-wrap justify-center gap-6 text-xs text-stone-500">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              {content.badge1}
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              {content.badge2}
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              {content.badge3}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800/50 bg-background">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-6 md:flex-row md:px-6">
          <p className="text-xs text-stone-500">
            © {currentYear} Nobius Audio. All Rights Reserved.
          </p>
          <p className="text-xs text-stone-500">
            Designed, developed and managed by{' '}
            <a
              href="https://bluepanda.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-stone-200 transition-colors"
            >
              BluePanda.in
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
