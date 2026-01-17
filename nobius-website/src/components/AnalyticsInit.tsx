'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { analytics } from '@/lib/central-analytics';

export function AnalyticsInit() {
    const pathname = usePathname();

    useEffect(() => {
        // Track page view on route change
        analytics.trackPageView(pathname);
    }, [pathname]);

    useEffect(() => {
        // Track clicks
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const element = target.tagName.toLowerCase();
            const id = target.id ? `#${target.id}` : '';
            const className = target.className && typeof target.className === 'string'
                ? `.${target.className.split(' ')[0]}`
                : '';

            analytics.trackClick(`${element}${id}${className}`);
        };

        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);

    // Track errors
    useEffect(() => {
        const handleError = (e: ErrorEvent) => {
            analytics.track('error', {
                message: e.message,
                source: e.filename,
                line: e.lineno,
            });
        };

        window.addEventListener('error', handleError);
        return () => window.removeEventListener('error', handleError);
    }, []);

    return null;
}
