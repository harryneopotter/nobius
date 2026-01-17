const ANALYTICS_ENDPOINT = 'https://dashboard.qpanda.in/api/track';

class CentralAnalytics {
    private clientId: string;
    private site: string;
    private buffer: any[] = [];
    private flushInterval: ReturnType<typeof setInterval> | null = null;

    constructor(site: string) {
        this.site = site;
        this.clientId = '';

        // Only run in browser
        if (typeof window !== 'undefined') {
            this.clientId = this.getOrCreateClientId();
            this.setupFlushInterval();
        }
    }

    private getOrCreateClientId(): string {
        // Check for existing client ID
        let clientId = localStorage.getItem('ca_client_id');

        if (!clientId) {
            // Generate new ID (simple UUID)
            clientId = `ca_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
            localStorage.setItem('ca_client_id', clientId);

            // Track first visit
            this.track('consent', { granted: true });
        }

        return clientId;
    }

    private setupFlushInterval() {
        // Send buffered events every 5 seconds
        this.flushInterval = setInterval(() => {
            if (this.buffer.length > 0) {
                this.sendBatch([...this.buffer]);
                this.buffer = [];
            }
        }, 5000);

        // Flush on page hide/unload
        window.addEventListener('beforeunload', () => {
            if (this.buffer.length > 0) {
                navigator.sendBeacon(ANALYTICS_ENDPOINT, JSON.stringify(this.buffer));
            }
        });
    }

    private async sendBatch(events: any[]) {
        try {
            await fetch(ANALYTICS_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(events),
            });
        } catch (error) {
            console.warn('Analytics send failed:', error);
            // Re-buffer on failure
            this.buffer.push(...events);
        }
    }

    track(event: string, data?: any) {
        if (typeof window === 'undefined') return;

        const payload = {
            clientId: this.clientId,
            site: this.site,
            event,
            data,
            timestamp: Date.now(),
        };

        this.buffer.push(payload);
    }

    // Convenience methods
    trackPageView(path: string) {
        this.track('pageview', { path });
        this.startTimeTracking();
    }

    trackClick(element: string) {
        this.track('click', { element });
    }

    startTimeTracking() {
        if (typeof window === 'undefined') return;

        let lastActivity = Date.now();

        // Track time while user is active
        const interval = setInterval(() => {
            const now = Date.now();

            // Only track if user was active in last 30 seconds
            if (now - lastActivity < 30000) {
                this.track('time_on_page', { duration: 5000 });
            } else {
                clearInterval(interval);
            }
        }, 5000);

        // Reset activity timer on interaction
        const updateActivity = () => lastActivity = Date.now();
        document.addEventListener('click', updateActivity);
        document.addEventListener('scroll', updateActivity);
        document.addEventListener('keydown', updateActivity);

        // Stop tracking on page unload
        window.addEventListener('beforeunload', () => {
            clearInterval(interval);
        });
    }
}

// Export singleton for Nobius site
export const analytics = new CentralAnalytics('nobius');
