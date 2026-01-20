/**
 * Central Analytics Tracker - Nobius Audio
 * Vanilla JavaScript implementation
 * Site ID: nobius1
 */

const CentralAnalytics = (function () {
    const ANALYTICS_ENDPOINT = 'https://dashboard.qpanda.in/api/track/';
    const SITE_ID = 'nobius1';

    let clientId = null;
    let buffer = [];
    let flushInterval = null;
    let lastActivity = Date.now();

    // Initialize
    function init() {
        clientId = getOrCreateClientId();
        setupFlushInterval();
        setupActivityTracking();
        setupClickTracking();
        setupErrorTracking();

        // Track initial page view
        trackPageView(window.location.pathname);

        console.log('%c Analytics initialized ', 'background: #333; color: #DFFF00;', 'Site:', SITE_ID);
    }

    // Get or create persistent client ID
    function getOrCreateClientId() {
        let id = localStorage.getItem('ca_client_id');

        if (!id) {
            id = 'ca_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('ca_client_id', id);

            // Track first visit
            track('consent', { granted: true, firstVisit: true });
        }

        return id;
    }

    // Setup interval to flush buffered events
    function setupFlushInterval() {
        // Send buffered events every 5 seconds
        flushInterval = setInterval(function () {
            if (buffer.length > 0) {
                sendBatch(buffer.slice());
                buffer = [];
            }
        }, 5000);

        // Flush on page hide/unload
        window.addEventListener('beforeunload', function () {
            if (buffer.length > 0) {
                // Use sendBeacon for reliable sending on page exit
                navigator.sendBeacon(ANALYTICS_ENDPOINT, JSON.stringify(buffer));
            }
        });

        // Also handle visibility change (for mobile)
        document.addEventListener('visibilitychange', function () {
            if (document.visibilityState === 'hidden' && buffer.length > 0) {
                navigator.sendBeacon(ANALYTICS_ENDPOINT, JSON.stringify(buffer));
                buffer = [];
            }
        });
    }

    // Send batch of events to server
    function sendBatch(events) {
        fetch(ANALYTICS_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(events),
        })
            .then(function (response) {
                if (!response.ok) {
                    console.warn('Analytics send failed:', response.status);
                }
            })
            .catch(function (error) {
                console.warn('Analytics send error:', error);
                // Re-buffer on failure
                buffer = buffer.concat(events);
            });
    }

    // Core tracking function
    function track(event, data) {
        const payload = {
            clientId: clientId,
            site: SITE_ID,
            event: event,
            data: data || {},
            timestamp: Date.now(),
            url: window.location.href,
            referrer: document.referrer || null
        };

        buffer.push(payload);
    }

    // Track page views
    function trackPageView(path) {
        track('pageview', {
            path: path,
            title: document.title,
            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight
        });
        startTimeTracking();
    }

    // Track clicks
    function trackClick(element, details) {
        track('click', {
            element: element,
            ...details
        });
    }

    // Setup click tracking
    function setupClickTracking() {
        document.addEventListener('click', function (e) {
            const target = e.target;
            const element = target.tagName.toLowerCase();
            const id = target.id ? '#' + target.id : '';
            const className = target.className && typeof target.className === 'string'
                ? '.' + target.className.split(' ')[0]
                : '';

            const details = {
                tag: element,
                id: target.id || null,
                class: target.className || null,
                text: target.innerText ? target.innerText.substring(0, 50) : null,
                href: target.href || null
            };

            trackClick(element + id + className, details);
        });
    }

    // Track time on page
    function startTimeTracking() {
        let intervalId = setInterval(function () {
            const now = Date.now();

            // Only track if user was active in last 30 seconds
            if (now - lastActivity < 30000) {
                track('time_on_page', { duration: 5000 });
            } else {
                clearInterval(intervalId);
            }
        }, 5000);

        // Stop tracking on page unload
        window.addEventListener('beforeunload', function () {
            clearInterval(intervalId);
        });
    }

    // Setup activity tracking
    function setupActivityTracking() {
        const updateActivity = function () {
            lastActivity = Date.now();
        };

        document.addEventListener('click', updateActivity);
        document.addEventListener('scroll', updateActivity);
        document.addEventListener('keydown', updateActivity);
        document.addEventListener('mousemove', updateActivity);
        document.addEventListener('touchstart', updateActivity);
    }

    // Setup error tracking
    function setupErrorTracking() {
        window.addEventListener('error', function (e) {
            track('error', {
                message: e.message,
                source: e.filename,
                line: e.lineno,
                column: e.colno
            });
        });

        window.addEventListener('unhandledrejection', function (e) {
            track('error', {
                message: 'Unhandled Promise Rejection',
                reason: e.reason ? e.reason.toString() : 'Unknown'
            });
        });
    }

    // Public API
    return {
        init: init,
        track: track,
        trackPageView: trackPageView,
        trackClick: trackClick
    };
})();

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', CentralAnalytics.init);
} else {
    CentralAnalytics.init();
}
