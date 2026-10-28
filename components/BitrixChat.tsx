import Script from "next/script";

/*
 * Bitrix24 chat and contact button, carried over from the previous website
 * (rschoyalgroup.com). Bitrix24 places it at the bottom right of the screen
 * (50px from the edges, 66px wide); the floating call button sits just above it.
 */
const BITRIX_LOADER_URL =
  "https://cdn.bitrix24.in/b34357779/crm/site_button/loader_4_zjol7l.js";

export default function BitrixChat() {
  return (
    <Script id="bitrix24-site-button" strategy="lazyOnload">
      {`(function(w,d,u){var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/60000|0);var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})(window,document,'${BITRIX_LOADER_URL}');`}
    </Script>
  );
}
