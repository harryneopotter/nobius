# Client Site Implementation Guide

This guide covers the step-by-step implementation of the central analytics tracker on each of your 4 client sites.

## Overview

Each client site needs to integrate the shared analytics tracker to send data to the central dashboard. This is a one-time setup per site that takes approximately 15-20 minutes.

## Prerequisites

- Your central analytics dashboard is deployed and accessible
- You have the analytics endpoint URL (e.g., `https://your-analytics-dashboard.vercel.app/api/track`)
- Each site has a unique site identifier (e.g., `'nobius'`, `'site2'`, `'site3'`, `'site4'`)

---

## Implementation Steps

### Step 1: Create the Tracker File

Create a new file in each client's project:

**File location:** `lib/central-analytics.ts` (or `src/lib/central-analytics.ts` if using src directory)

Copy the following code:

```typescript
const ANALYTICS_ENDPOINT = 'https://your-analytics-dashboard.vercel.app/api/track';

class CentralAnalytics {
  private clientId: string;
  private site: string;
  private buffer: any[] = [];
  private flushInterval: NodeJS.Timeout;

  constructor(site: string) {
    this.site = site;
    this.clientId = this.getOrCreateClientId();
    this.setupFlushInterval();
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
    let startTime = Date.now();
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

// Export singleton
export const analytics = new CentralAnalytics(
  // **IMPORTANT: Set unique site ID for each deployment **
  // Options: 'nobius' | 'site2' | 'site3' | 'site4'
  'CHANGE_THIS_TO_YOUR_SITE_ID'
);
```

### Step 2: Configure Site ID

** Critical:** Update the last line of the tracker file for each site:

```typescript
// For nobius.onrender.com:
export const analytics = new CentralAnalytics('nobius');

// For site 2:
export const analytics = new CentralAnalytics('site2');

// For site 3:
export const analytics = new CentralAnalytics('site3');

// For site 4:
export const analytics = new CentralAnalytics('site4');
```

### Step 3: Integrate with Your Application

#### Option A: Next.js App Router (Recommended)

Add the tracking initializer to your `app/layout.tsx`:

```tsx
import { analytics } from '@/lib/central-analytics';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Create a client component for analytics
function AnalyticsInit() {
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
      const className = target.className ? `.${target.className.split(' ')[0]}` : '';
      
      analytics.trackClick(`${element}${id}${className}`);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
}

// In your RootLayout:
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AnalyticsInit />
        {children}
      </body>
    </html>
  );
}
```

#### Option B: Next.js Pages Router

Create `_app.tsx` if it doesn't exist:

```tsx
import { analytics } from '@/lib/central-analytics';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Track initial page load
    analytics.trackPageView(router.pathname);

    // Track route changes
    const handleRouteChange = (url: string) => {
      analytics.trackPageView(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    // Track clicks
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const element = target.tagName.toLowerCase();
      const id = target.id ? `#${target.id}` : '';
      const className = target.className ? `.${target.className.split(' ')[0]}` : '';
      
      analytics.trackClick(`${element}${id}${className}`);
    };

    document.addEventListener('click', handleClick);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
```

#### Option C: Vanilla JavaScript / React (Non-Next.js)

Add to your main entry point or `index.html`:

```html
<!DOCTYPE html>
<html>
<head>
  <!-- Your head content -->
</head>
<body>
  <!-- Your app content -->
  
  <script type="module">
    import { analytics } from './lib/central-analytics.js';

    // Track initial page view
    analytics.trackPageView(window.location.pathname);

    // Track page views on navigation (for SPA)
    let lastPath = window.location.pathname;
    setInterval(() => {
      const currentPath = window.location.pathname;
      if (currentPath !== lastPath) {
        analytics.trackPageView(currentPath);
        lastPath = currentPath;
      }
    }, 100);

    // Track clicks
    document.addEventListener('click', (e) => {
      const target = e.target;
      const element = target.tagName.toLowerCase();
      const id = target.id ? `#${target.id}` : '';
      const className = target.className ? `.${target.className.split(' ')[0]}` : '';
      
      analytics.trackClick(`${element}${id}${className}`);
    });
  </script>
</body>
</html>
```

### Step 4: Add Environment Variables (Optional)

If you want to keep your analytics endpoint configurable:

**.env.local** (or your environment file):
```
NEXT_PUBLIC_ANALYTICS_ENDPOINT=https://your-analytics-dashboard.vercel.app/api/track
```

Then update the tracker file:
```typescript
const ANALYTICS_ENDPOINT = process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT 
  || 'https://your-analytics-dashboard.vercel.app/api/track';
```

---

## Testing & Verification

### Local Testing

1. **Start your development server:**
   ```bash
   npm run dev
   ```

2. **Open browser console** and look for:
   - Any errors related to analytics
   - Network requests to your analytics endpoint

3. **Check localStorage**:
   - Open DevTools → Application → Local Storage
   - Verify `ca_client_id` is created

4. **Test tracking**:
   - Navigate between pages
   - Click on elements
   - Wait 5+ seconds for time tracking
   - Check Network tab for POST requests to `/api/track`

### Verify Endpoint Communication

In your browser's Network tab, you should see:
- **Request URL**: `https://your-analytics-dashboard.vercel.app/api/track`
- **Method**: POST
- **Status**: 200
- **Payload**: JSON array of events

### Dashboard Verification

1. Deploy your changes to each site
2. Visit each site and perform some actions
3. Open your central dashboard
4. Verify data appears within 10-30 seconds
5. Check that each site shows its unique identifier

---

## Troubleshooting

### Issue: No data appearing in dashboard

**Solutions:**
- Check browser console for errors
- Verify site ID is correctly set in tracker file
- Confirm analytics endpoint URL is correct
- Check Vercel KV logs for the central dashboard
- Ensure CORS is properly configured (should be automatic with Vercel)

### Issue: Duplicate page views

**Solutions:**
- Ensure analytics initialization happens only once
- Check that trackPageView is not called in multiple places
- For Next.js App Router, verify useEffect dependency array

### Issue: Client ID changing on refresh

**Solutions:**
- Verify localStorage is not being cleared
- Check for browser privacy settings blocking localStorage
- Ensure you're not in incognito/private browsing mode

### Issue: Click tracking not working

**Solutions:**
- Verify click event listener is attached to document
- Check for event propagation issues (e.stopPropagation())
- Ensure AnalyticsInit component is mounted

---

## Per-Site Implementation Checklist

Use this checklist for each of the 4 sites:

- [ ] Create `lib/central-analytics.ts` with correct site ID
- [ ] Update `ANALYTICS_ENDPOINT` if using custom domain
- [ ] Integrate tracker into layout/app component
- [ ] Add AnalyticsInit component or equivalent
- [ ] Test locally and verify network requests
- [ ] Deploy to production
- [ ] Verify data appears in central dashboard
- [ ] Add consent banner (optional but recommended)

---

## Site-Specific Configuration

### Site 1: nobius.onrender.com
```typescript
// lib/central-analytics.ts
export const analytics = new CentralAnalytics('nobius');
```

### Site 2: [Your Site 2 URL]
```typescript
// lib/central-analytics.ts
export const analytics = new CentralAnalytics('site2');
```

### Site 3: [Your Site 3 URL]
```typescript
// lib/central-analytics.ts
export const analytics = new CentralAnalytics('site3');
```

### Site 4: [Your Site 4 URL]
```typescript
// lib/central-analytics.ts
export const analytics = new CentralAnalytics('site4');
```

---

## Privacy & Consent Banner (Optional but Recommended)

Add this component to maintain GDPR/privacy compliance:

```tsx
// components/ConsentBanner.tsx
'use client';

import { useState, useEffect } from 'react';
import { analytics } from '@/lib/central-analytics';

export function ConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('ca_consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptConsent = () => {
    localStorage.setItem('ca_consent', 'true');
    setShowBanner(false);
    analytics.track('consent', { granted: true });
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">
          We track anonymized usage across our portfolio to improve your experience.
        </p>
        <button 
          onClick={acceptConsent}
          className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium"
        >
          OK
        </button>
      </div>
    </div>
  );
}
```

Add to your layout:
```tsx
import { ConsentBanner } from '@/components/ConsentBanner';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AnalyticsInit />
        {children}
        <ConsentBanner />
      </body>
    </html>
  );
}
```

---

## Advanced Configuration

### Custom Event Tracking

Track custom events specific to your business logic:

```typescript
import { analytics } from '@/lib/central-analytics';

// Track a button conversion
function handlePurchase() {
  analytics.track('purchase', { 
    amount: 99.99, 
    product: 'premium-plan' 
  });
}

// Track form submissions
function handleFormSubmit(formData) {
  analytics.track('form_submit', { 
    form: 'contact',
    fields: Object.keys(formData).length 
  });
}

// Track video engagement
function handleVideoPlay(videoId: string) {
  analytics.track('video_play', { videoId, timestamp: Date.now() });
}
```

### Error Tracking

Add global error tracking:

```typescript
// In AnalyticsInit or app entry point
useEffect(() => {
  window.addEventListener('error', (e) => {
    analytics.track('error', {
      message: e.message,
      source: e.filename,
      line: e.lineno,
    });
  });
}, []);
```

---

## Deployment Notes

- **No additional dependencies** required for the client sites
- **No environment variables** required (unless using custom endpoint)
- **Bundle size impact**: ~2KB gzipped
- **Performance impact**: Negligible (batched requests, minimal CPU usage)

---

## Support & Next Steps

Once all 4 sites are implemented:
1. Verify cross-site tracking works (same client ID appears across sites)
2. Monitor dashboard for data accuracy
3. Consider implementing the optional consent banner
4. Review analytics data after 1-2 weeks to identify engagement patterns

For issues or questions, check the central dashboard logs or browser console for error messages.
