"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig, telHref } from "@/lib/site-config";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/service-area", label: "Service Area" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-950/95 shadow-lg shadow-black/30 backdrop-blur-md"
          : "bg-brand-950/80 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 text-lg font-bold text-white shadow-glow">
            MB
          </span>
          <span className="text-base font-bold tracking-tight text-white sm:text-lg">
            {siteConfig.businessName}
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-200 transition-colors hover:text-cta-400"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href={telHref(siteConfig.phoneRaw)}
            className="inline-flex items-center gap-2 rounded-full bg-cta-500 px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-colors hover:bg-cta-600"
          >
            <PhoneIcon className="h-4 w-4" />
            Call Now: {siteConfig.phoneDisplay}
          </a>
          <a
            href={telHref(siteConfig.phoneRaw2)}
            className="inline-flex items-center gap-2 rounded-full border-2 border-cta-500/60 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <PhoneIcon className="h-4 w-4" />
            Call Now: {siteConfig.phoneDisplay2}
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={telHref(siteConfig.phoneRaw)}
            className="inline-flex items-center gap-1.5 rounded-full bg-cta-500 px-3 py-2 text-xs font-semibold text-white shadow-glow"
            aria-label="Call now"
          >
            <PhoneIcon className="h-3.5 w-3.5" />
            Call
          </a>
          <a
            href={telHref(siteConfig.phoneRaw2)}
            className="inline-flex items-center gap-1.5 rounded-full border-2 border-cta-500/60 px-3 py-2 text-xs font-semibold text-white"
            aria-label="Call now (second number)"
          >
            <PhoneIcon className="h-3.5 w-3.5" />
            Call
          </a>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:bg-white/10"
          >
            {isOpen ? (
              <CloseIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-brand-950/98 px-4 pb-4 pt-2 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/10 hover:text-cta-400"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.36 2.33.55 3.58.55a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.19 2.46.55 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2Z" />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
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
