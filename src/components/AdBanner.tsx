"use client";

import { useEffect, useRef } from "react";

type AdBannerProps = {
  /** Google AdSense ad slot ID. Replace with your real slot when approved. */
  slot?: string;
  /** Visual/layout format passed to AdSense. */
  format?: "auto" | "fluid" | "rectangle";
  /** Extra classes for spacing/positioning within the surrounding content. */
  className?: string;
  /** Small label shown above the unit so readers understand it's an ad. */
  label?: string;
};

declare global {
  interface Window {
    adsbygoogle?: Record<string, unknown>[];
  }
}

/**
 * Reusable AdSense placement. Renders a clearly-labeled, responsive
 * container so ad units never crowd the surrounding article copy.
 * Swap ADSENSE_CLIENT_ID for your real publisher ID before going live.
 */
const ADSENSE_CLIENT_ID = "ca-pub-0000000000000000";

export default function AdBanner({
  slot = "0000000000",
  format = "auto",
  className = "",
  label = "Advertisement",
}: AdBannerProps) {
  const adRef = useRef<HTMLModElement>(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
      pushed.current = true;
    } catch {
      // AdSense script not loaded yet (e.g. local dev) — fail silently.
    }
  }, []);

  return (
    <div
      className={`my-8 flex w-full flex-col items-center gap-2 ${className}`}
      aria-label="Advertisement placement"
    >
      <span className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
        {label}
      </span>
      <div className="flex w-full items-center justify-center overflow-hidden rounded-xl border border-dashed border-slate-300 bg-slate-50 py-6 dark:border-slate-700 dark:bg-slate-800/40">
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: "block", width: "100%", minHeight: "100px" }}
          data-ad-client={ADSENSE_CLIENT_ID}
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
}
