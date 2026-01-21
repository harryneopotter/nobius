import { NextRequest, NextResponse } from 'next/server';
import { sendToTelegram, verifyRecaptcha } from '@/lib/contact-form';

// Rate limiting: Simple in-memory store (use Redis in production)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT = 3; // Max submissions per hour
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

function checkRateLimit(ip: string): boolean {
    const now = Date.now();
    const record = rateLimitMap.get(ip);

    if (!record || now - record.timestamp > RATE_WINDOW) {
        rateLimitMap.set(ip, { count: 1, timestamp: now });
        return true;
    }

    if (record.count >= RATE_LIMIT) {
        return false;
    }

    record.count++;
    return true;
}

export async function POST(request: NextRequest) {
    try {
        // Get client IP for rate limiting
        const ip = request.headers.get('x-forwarded-for') ||
            request.headers.get('x-real-ip') ||
            'unknown';

        // Check rate limit
        if (!checkRateLimit(ip)) {
            return NextResponse.json(
                { error: 'Too many submissions. Please try again later.' },
                { status: 429 }
            );
        }

        const body = await request.json();
        const { name, email, phone, message, product, recaptchaToken, privacyConsent } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required.' },
                { status: 400 }
            );
        }

        // Validate privacy consent
        if (!privacyConsent) {
            return NextResponse.json(
                { error: 'You must agree to the privacy policy.' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Please enter a valid email address.' },
                { status: 400 }
            );
        }

        // Verify reCAPTCHA (if token provided)
        if (recaptchaToken) {
            const recaptchaResult = await verifyRecaptcha(recaptchaToken);
            if (!recaptchaResult.success) {
                return NextResponse.json(
                    { error: 'reCAPTCHA verification failed. Please try again.' },
                    { status: 400 }
                );
            }
        }

        // Send to Telegram
        const sent = await sendToTelegram({
            name,
            email,
            phone,
            message,
            product,
        });

        if (!sent) {
            // Log error but don't expose to user
            console.error('Failed to send to Telegram');
            return NextResponse.json(
                { error: 'Failed to submit form. Please try again or email us directly.' },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            message: 'Thank you! We\'ll respond within 24 hours.',
        });

    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'An unexpected error occurred. Please try again.' },
            { status: 500 }
        );
    }
}
