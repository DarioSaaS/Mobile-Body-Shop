import { siteConfig, telHref } from "@/lib/site-config";

export default function FloatingCallButton() {
  return (
    <a
      href={telHref(siteConfig.phoneRaw)}
      aria-label={`Call now: ${siteConfig.phoneDisplay}`}
      className="fixed z-[60] inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/80 bg-hotline-500 text-white shadow-float transition-transform duration-200 hover:scale-105 hover:border-white hover:bg-hotline-600 motion-safe:animate-cta-pulse bottom-[max(1rem,calc(env(safe-area-inset-bottom)+0.75rem))] right-[max(1rem,calc(env(safe-area-inset-right)+0.75rem))] h-14 w-14 sm:h-auto sm:w-auto sm:px-5 sm:py-3.5 md:bottom-6 md:right-6"
    >
      <PhoneIcon className="h-6 w-6 shrink-0" />
      <span className="hidden text-sm font-semibold sm:inline">Call Now</span>
    </a>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.36 2.33.55 3.58.55a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.19 2.46.55 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2Z" />
    </svg>
  );
}
