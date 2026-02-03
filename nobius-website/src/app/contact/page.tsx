'use client';

import { useState, FormEvent, useEffect } from 'react';
import pagesContent from '@/data/pages-content.json';

const content = pagesContent.contact;

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

interface FormState {
  status: 'idle' | 'submitting' | 'success' | 'error';
  message: string;
}

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '';

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>({ status: 'idle', message: '' });

  // Load reCAPTCHA script
  useEffect(() => {
    if (!RECAPTCHA_SITE_KEY) return;

    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ status: 'submitting', message: '' });

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Get reCAPTCHA token
    let recaptchaToken = '';
    if (RECAPTCHA_SITE_KEY && window.grecaptcha) {
      try {
        recaptchaToken = await new Promise((resolve) => {
          window.grecaptcha.ready(async () => {
            const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'contact' });
            resolve(token);
          });
        });
      } catch {
        console.warn('reCAPTCHA failed, proceeding without token');
      }
    }

    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      message: `[${formData.get('subject')}] ${formData.get('message')}`,
      recaptchaToken,
      privacyConsent: true,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setFormState({ status: 'success', message: result.message || 'Thank you! We\'ll respond within 24 hours.' });
        form.reset();
      } else {
        setFormState({ status: 'error', message: result.error || 'Something went wrong. Please try again.' });
      }
    } catch {
      setFormState({ status: 'error', message: 'Network error. Please check your connection and try again.' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-950">
      <section className="container mx-auto max-w-2xl px-4 py-24">
        <div className="mb-12 text-center">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-stone-100 md:text-5xl">
            {content.pageTitle}
          </h1>
          <p className="mt-4 text-lg text-stone-400">
            {content.pageSubtitle}
          </p>
        </div>

        <div className="rounded-2xl border border-stone-800 bg-stone-900/50 p-8 shadow-sm">
          {formState.status === 'success' ? (
            <div className="text-center py-8">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-900/50 text-green-400">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-stone-100 mb-2">Message Sent!</h2>
              <p className="text-stone-400 mb-6">{formState.message}</p>
              <button
                onClick={() => setFormState({ status: 'idle', message: '' })}
                className="text-sm text-stone-400 hover:text-stone-100 underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-stone-100">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-md border border-stone-800 bg-stone-900 px-4 py-2 text-stone-100 placeholder:text-stone-500 focus:border-stone-600 focus:outline-none focus:ring-1 focus:ring-stone-600"
                    required
                    disabled={formState.status === 'submitting'}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-stone-100">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full rounded-md border border-stone-800 bg-stone-900 px-4 py-2 text-stone-100 placeholder:text-stone-500 focus:border-stone-600 focus:outline-none focus:ring-1 focus:ring-stone-600"
                    required
                    disabled={formState.status === 'submitting'}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-stone-100">
                  Phone <span className="text-stone-500">(optional)</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="w-full rounded-md border border-stone-800 bg-stone-900 px-4 py-2 text-stone-100 placeholder:text-stone-500 focus:border-stone-600 focus:outline-none focus:ring-1 focus:ring-stone-600"
                  disabled={formState.status === 'submitting'}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-stone-100">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full rounded-md border border-stone-800 bg-stone-900 px-4 py-2 text-stone-100 focus:border-stone-600 focus:outline-none focus:ring-1 focus:ring-stone-600"
                  disabled={formState.status === 'submitting'}
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Sales & Ordering">Sales & Ordering</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Custom Requests">Custom Requests</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-stone-100">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="How can we help you?"
                  className="w-full rounded-md border border-stone-800 bg-stone-900 px-4 py-2 text-stone-100 placeholder:text-stone-500 focus:border-stone-600 focus:outline-none focus:ring-1 focus:ring-stone-600"
                  required
                  disabled={formState.status === 'submitting'}
                />
              </div>

              {formState.status === 'error' && (
                <div className="rounded-lg bg-red-900/30 border border-red-800/50 p-4 text-sm text-red-300">
                  {formState.message}
                </div>
              )}

              <button
                type="submit"
                disabled={formState.status === 'submitting'}
                className="w-full rounded-full bg-stone-100 py-3 text-sm font-bold text-stone-900 transition hover:bg-stone-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {formState.status === 'submitting' ? (
                  <>
                    <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          )}

          <div className="mt-8 border-t border-stone-800 pt-8 text-center">
            <p className="text-sm text-stone-400">
              Prefer to email us directly? <br />
              <a href="mailto:hello@nobiusaudio.com" className="font-medium text-stone-100 hover:underline">
                hello@nobiusaudio.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
