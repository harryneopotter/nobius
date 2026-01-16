import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-white/80 backdrop-blur-md dark:border-stone-800 dark:bg-black/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-xl font-serif font-bold tracking-tight text-stone-900 dark:text-stone-100">
          Nobius Audio
        </Link>
        <nav className="hidden gap-6 md:flex">
          <Link href="/" className="text-sm font-medium text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100">
            Home
          </Link>
          <Link href="/products" className="text-sm font-medium text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100">
            Products
          </Link>
          <Link href="/philosophy" className="text-sm font-medium text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100">
            Our Philosophy
          </Link>
          <Link href="/contact" className="text-sm font-medium text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100">
            Contact
          </Link>
        </nav>
        {/* Mobile menu placeholder - can be implemented later with state */}
        <div className="md:hidden">
            <span className="text-sm text-stone-500">Menu</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
