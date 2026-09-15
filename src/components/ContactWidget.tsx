"use client";

import { useState } from "react";
import {
  siteConfig,
  smsHref,
  telHref,
  whatsappHref,
} from "@/lib/site-config";

const quoteMessage =
  "Hi! I'd like a quote for a repair. Here are some details:";

const contactOptions = [
  {
    key: "call",
    label: "Call Now",
    sublabel: siteConfig.phoneDisplay,
    href: telHref(siteConfig.phoneRaw),
    className: "bg-cta-500 hover:bg-cta-600",
    icon: PhoneIcon,
  },
  {
    key: "call2",
    label: "Call Now",
    sublabel: siteConfig.phoneDisplay2,
    href: telHref(siteConfig.phoneRaw2),
    className: "bg-cta-500 hover:bg-cta-600",
    icon: PhoneIcon,
  },
  {
    key: "sms",
    label: "Text a Photo",
    sublabel: "Get an instant quote",
    href: smsHref(siteConfig.smsRaw, quoteMessage),
    className: "bg-brand-600 hover:bg-brand-500",
    icon: ChatIcon,
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    sublabel: "International & preferred",
    href: whatsappHref(siteConfig.whatsappRaw, quoteMessage),
    className: "bg-[#25D366] hover:bg-[#1fbd5a]",
    icon: WhatsAppIcon,
  },
];

export default function ContactWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {/* Expanded options */}
      <div
        className={`flex flex-col items-end gap-2.5 transition-all duration-200 ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        {contactOptions.map((option) => (
          <a
            key={option.key}
            href={option.href}
            target={option.key === "whatsapp" ? "_blank" : undefined}
            rel={option.key === "whatsapp" ? "noopener noreferrer" : undefined}
            className={`flex items-center gap-3 rounded-full ${option.className} px-4 py-3 text-white shadow-lg shadow-black/30 transition-transform hover:scale-[1.03]`}
          >
            <span className="flex h-6 w-6 items-center justify-center">
              <option.icon className="h-5 w-5" />
            </span>
            <span className="text-left">
              <span className="block text-sm font-semibold leading-tight">
                {option.label}
              </span>
              <span className="block text-xs leading-tight text-white/85">
                {option.sublabel}
              </span>
            </span>
          </a>
        ))}
      </div>

      {/* Toggle button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close contact options" : "Open contact options"}
        aria-expanded={isOpen}
        className={`flex h-16 w-16 items-center justify-center rounded-full shadow-glow transition-all duration-300 ${
          isOpen
            ? "bg-brand-800 rotate-45"
            : "bg-cta-500 hover:bg-cta-600 animate-pulse-slow"
        }`}
      >
        {isOpen ? (
          <CloseIcon className="h-7 w-7 text-white" />
        ) : (
          <PhoneIcon className="h-7 w-7 text-white" />
        )}
      </button>
    </div>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.36 2.33.55 3.58.55a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.19 2.46.55 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2Z" />
    </svg>
  );
}

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 3C6.48 3 2 6.94 2 11.8c0 2.55 1.29 4.85 3.36 6.47-.08.79-.42 2.24-1.31 3.68a.5.5 0 0 0 .58.75c1.94-.62 3.4-1.5 4.29-2.13A11.7 11.7 0 0 0 12 20.6c5.52 0 10-3.94 10-8.8S17.52 3 12 3Z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.29-.15-1.7-.84-1.96-.93-.26-.1-.46-.15-.65.15-.19.29-.75.93-.92 1.12-.17.19-.34.21-.63.07-.29-.15-1.22-.45-2.32-1.44-.86-.76-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.15-.15.34-.38.51-.58.17-.19.22-.33.34-.55.11-.22.06-.41-.03-.56-.1-.15-.63-1.52-.86-2.08-.23-.55-.47-.48-.65-.48-.17-.01-.37-.01-.57-.01-.19 0-.5.07-.77.36-.26.29-1 .98-1 2.4 0 1.4 1.02 2.76 1.16 2.95.15.19 2 3.05 4.86 4.16 2.86 1.11 2.86.74 3.38.69.52-.05 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34ZM12.03 21.4h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.35 9.35 0 0 1-1.44-4.99c0-5.17 4.22-9.38 9.42-9.38 2.52 0 4.88.98 6.66 2.76a9.32 9.32 0 0 1 2.76 6.65c0 5.17-4.23 9.37-9.43 9.37Zm8.02-17.4A11.15 11.15 0 0 0 12.03 1C5.94 1 1 5.93 1 12c0 2.09.58 4.05 1.6 5.72L1 23l5.45-1.43a11.05 11.05 0 0 0 5.58 1.51h.01c6.09 0 11.03-4.93 11.03-11 0-2.94-1.15-5.7-3.02-7.78Z" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
