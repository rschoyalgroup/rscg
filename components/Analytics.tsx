"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef } from "react";

/*
 * Tracking carried over from the previous website (rschoyalgroup.com):
 * - Google Tag Manager container (it also loads Google Analytics 4, G-D4QFSZGKJN)
 * - Google Ads tags (remarketing / conversions)
 * - Meta (Facebook) Pixel
 */
export const GTM_ID = "GTM-NQPXN8J";
export const GOOGLE_ADS_IDS = ["AW-11119069785", "AW-18157164395"];
export const META_PIXEL_ID = "1655615661482941";

type TrackingWindow = Window & {
  gtag?: (...args: unknown[]) => void;
  fbq?: (...args: unknown[]) => void;
};

// Next.js changes pages without a full reload, so page views after the first
// one are reported here (GA4 in GTM picks these up from browser history itself).
function RouteChangeTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const firstLoad = useRef(true);

  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }
    const w = window as TrackingWindow;
    const query = searchParams?.toString();
    const pagePath = query ? `${pathname}?${query}` : pathname;
    GOOGLE_ADS_IDS.forEach((id) => w.gtag?.("config", id, { page_path: pagePath }));
    w.fbq?.("track", "PageView");
  }, [pathname, searchParams]);

  return null;
}

export function AnalyticsScripts() {
  return (
    <>
      {/* Google Tag Manager */}
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>

      {/* Google Ads (gtag.js) */}
      <Script
        id="gtag-src"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_IDS[0]}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());${GOOGLE_ADS_IDS.map((id) => `gtag('config','${id}');`).join("")}`}
      </Script>

      {/* Meta Pixel */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`}
      </Script>

      <Suspense fallback={null}>
        <RouteChangeTracker />
      </Suspense>
    </>
  );
}

// Fallbacks for visitors with JavaScript turned off
export function AnalyticsNoScript() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
        alt=""
      />
    </noscript>
  );
}
