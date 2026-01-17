import Image from 'next/image';

export default function PhilosophyPage() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-black">
      {/* Hero Section */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-stone-900 py-24 text-center">
        {/* Background Image */}
        <Image
          src="/images/hero-option.jpg"
          alt=""
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="mb-6 font-serif text-5xl font-bold tracking-tight text-white md:text-7xl">
            Imperfectly Honest.
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-stone-200">
            We believe that audio gear should be as honest as the music it reproduces.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
        <div className="space-y-16">
          <div className="prose prose-lg mx-auto dark:prose-invert">
            <h2 className="font-serif text-3xl font-bold text-stone-900 dark:text-stone-100">
              The Nobius Way
            </h2>
            <p className="text-stone-600 dark:text-stone-300">
              In a world of mass-produced plastic and DSP-corrected perfection, we choose a different path.
              Nobius Audio is built on the philosophy that true high-fidelity comes from physical engineering,
              not digital manipulation.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            <div className="space-y-4 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-stone-100 dark:bg-stone-800">
                <span className="text-2xl">🪵</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">Truth in Materials</h3>
              <p className="text-sm text-stone-600 dark:text-stone-400">
                Natural wood, paper cones, and silk domes. Materials that age gracefully and sound natural.
              </p>
            </div>
            <div className="space-y-4 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-stone-100 dark:bg-stone-800">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">Truth in Engineering</h3>
              <p className="text-sm text-stone-600 dark:text-stone-400">
                Phase-coherent crossovers and sealed cabinets. Physics-first design for accurate time-domain performance.
              </p>
            </div>
            <div className="space-y-4 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-stone-100 dark:bg-stone-800">
                <span className="text-2xl">🖤</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">Truth in Emotion</h3>
              <p className="text-sm text-stone-600 dark:text-stone-400">
                Voiced for connection, not just measurement. Speakers that make you want to listen to "just one more track."
              </p>
            </div>
          </div>

          <div className="prose prose-lg mx-auto dark:prose-invert">
            <h2 className="font-serif text-3xl font-bold text-stone-900 dark:text-stone-100">
              Hand-Built for You
            </h2>
            <p className="text-stone-600 dark:text-stone-300">
              Every pair of Nobius speakers is assembled by hand, tested, and matched to ensure they meet our rigorous standards.
              We don't chase the lowest price point; we chase the highest possible connection between you and your music.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
