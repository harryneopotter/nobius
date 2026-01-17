import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] items-center bg-black text-stone-100">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16 md:flex-row md:items-center md:py-24">
        <section className="flex-1 space-y-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-400">
            Nobius Audio
          </p>
          <h1 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Imperfectly Honest.
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-stone-300 md:text-base">
            Truth in materials. Truth in engineering. Truth in how our speakers make you feel.
            Meticulously voiced nearfield monitors for listeners who care more about emotion than
            perfection on a graph.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/products"
              className="inline-flex items-center rounded-full bg-stone-100 px-6 py-3 text-sm font-medium text-stone-900 transition hover:bg-stone-200"
            >
              View All Products
            </Link>
            <Link
              href="/philosophy"
              className="inline-flex items-center text-sm font-medium text-stone-200 underline-offset-4 hover:text-white hover:underline"
            >
              Our Philosophy
            </Link>
          </div>
        </section>

        <section className="flex-1 flex justify-center">
          <Link href="/products/s1-2" className="group block w-full">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-2xl shadow-black/50 transition-transform duration-500 group-hover:scale-[1.02]">
              <Image
                src="/images/products/s1-2-hero.jpg"
                alt="S1-2 Nearfield Monitors"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 pt-20">
                <p className="font-semibold tracking-wide text-stone-100 text-lg">S1-2 Nearfield Monitor</p>
                <p className="text-xs uppercase tracking-[0.2em] text-stone-400">
                  Starter Stereo, Vintage Soul
                </p>
              </div>
            </div>
          </Link>
        </section>
      </main>
    </div>
  );
}
