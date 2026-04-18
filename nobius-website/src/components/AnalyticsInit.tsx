'use client';

import Script from 'next/script';

export function AnalyticsInit() {
    return (
        <Script id="apollo-tracking" strategy="afterInteractive">
            {`
                function initApollo(){
                    var n=Math.random().toString(36).substring(7),
                        o=document.createElement("script");
                    o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,
                    o.async=!0,
                    o.defer=!0,
                    o.onload=function(){
                        window.trackingFunctions.onLoad({appId:"69e27ae900abf60019ab5fb1"})
                    },
                    document.head.appendChild(o)
                }
                initApollo();
            `}
        </Script>
    );
}
