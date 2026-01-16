export default function ContactPage() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-black">
      <section className="container mx-auto max-w-2xl px-4 py-24">
        <div className="mb-12 text-center">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100 md:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-stone-600 dark:text-stone-400">
            Questions about our speakers? Interested in a custom finish? We'd love to hear from you.
          </p>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm dark:border-stone-800 dark:bg-stone-900/50">
          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-stone-900 dark:text-stone-100">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-md border border-stone-200 bg-stone-50 px-4 py-2 text-stone-900 placeholder:text-stone-400 focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-100 dark:focus:border-stone-100 dark:focus:ring-stone-100"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-stone-900 dark:text-stone-100">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-md border border-stone-200 bg-stone-50 px-4 py-2 text-stone-900 placeholder:text-stone-400 focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-100 dark:focus:border-stone-100 dark:focus:ring-stone-100"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-stone-900 dark:text-stone-100">
                Subject
              </label>
              <select
                id="subject"
                className="w-full rounded-md border border-stone-200 bg-stone-50 px-4 py-2 text-stone-900 focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-100 dark:focus:border-stone-100 dark:focus:ring-stone-100"
              >
                <option value="inquiry">General Inquiry</option>
                <option value="sales">Sales & Ordering</option>
                <option value="support">Technical Support</option>
                <option value="custom">Custom Requests</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-stone-900 dark:text-stone-100">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                placeholder="How can we help you?"
                className="w-full rounded-md border border-stone-200 bg-stone-50 px-4 py-2 text-stone-900 placeholder:text-stone-400 focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-100 dark:focus:border-stone-100 dark:focus:ring-stone-100"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-stone-900 py-3 text-sm font-bold text-white transition hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200"
            >
              Send Message
            </button>
          </form>

          <div className="mt-8 border-t border-stone-200 pt-8 text-center dark:border-stone-800">
            <p className="text-sm text-stone-500 dark:text-stone-400">
              Prefer to email us directly? <br />
              <a href="mailto:hello@nobiusaudio.com" className="font-medium text-stone-900 hover:underline dark:text-stone-100">
                hello@nobiusaudio.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
