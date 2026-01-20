import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full border-t border-stone-800 bg-stone-950 py-12">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 md:flex-row md:px-6">
        <p className="text-sm text-stone-400">
          © {new Date().getFullYear()} Nobius Audio. All Rights Reserved.
        </p>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium text-stone-400 hover:text-stone-100">
            Social Media
          </Link>
          <Link href="/contact" className="text-sm font-medium text-stone-400 hover:text-stone-100">
            Contact
          </Link>
          <Link href="#" className="text-sm font-medium text-stone-400 hover:text-stone-100">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm font-medium text-stone-400 hover:text-stone-100">
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
