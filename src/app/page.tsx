import type { Metadata } from "next";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import {
  siteConfig,
  smsHref,
  telHref,
  whatsappHref,
} from "@/lib/site-config";
import { services } from "@/lib/services";
import { slugifyCity } from "@/lib/service-areas";

export const metadata: Metadata = {
  title: `${siteConfig.businessName} | Mobile Dent, Scratch & Paint Repair in Mesa & Phoenix`,
  description:
    "Professional mobile dent, scratch, and paint repair that comes to you in Mesa, Phoenix, Chandler, Gilbert, Tempe & Scottsdale. Text a photo for an instant free quote.",
};

const trustPoints = [
  { label: "Fully Insured Technicians", icon: "🛡️" },
  { label: "Same-Day Appointments", icon: "⚡" },
  { label: "We Come to You", icon: "📍" },
  { label: "No Hidden Fees", icon: "💵" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(34,197,94,0.35), transparent 45%), radial-gradient(circle at 80% 0%, rgba(59,130,246,0.35), transparent 40%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-cta-400 ring-1 ring-inset ring-white/15">
                📍 Serving Mesa &amp; the Greater Phoenix Area
              </span>
              <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Mobile Dent, Scratch &amp; Paint Repair{" "}
                <span className="text-cta-400">at Your Doorstep</span> in
                Mesa &amp; Phoenix
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
                Skip the body shop drop-off. Our fully-equipped mobile
                technicians come to your home or office and repair dents,
                scratches, and bumper damage in hours — not days.
              </p>
              <p className="mt-3 max-w-xl text-lg leading-8 text-slate-300">
                We also offer RV Fiberglass Repair for panels and components — from
                cracks and stress fractures to full gelcoat refinishing —
                restoring structural integrity and a seamless
                factory-matched finish.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={telHref(siteConfig.phoneRaw)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cta-500 px-7 py-4 text-base font-bold text-white shadow-glow transition-transform hover:scale-[1.02] hover:bg-cta-600"
                >
                  <PhoneIcon className="h-5 w-5" />
                  Call Us Now: {siteConfig.phoneDisplay}
                </a>
                <a
                  href={telHref(siteConfig.phoneRaw2)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cta-500 px-7 py-4 text-base font-bold text-white shadow-glow transition-transform hover:scale-[1.02] hover:bg-cta-600"
                >
                  <PhoneIcon className="h-5 w-5" />
                  Call Us Now: {siteConfig.phoneDisplay2}
                </a>
                <a
                  href={smsHref(
                    siteConfig.smsRaw,
                    "Hi! I'd like to text photos of my vehicle damage for a quote."
                  )}
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/25 bg-white/5 px-7 py-4 text-base font-bold text-white transition-colors hover:bg-white/15"
                >
                  <ChatIcon className="h-5 w-5" />
                  Text Us Photos for Instant Quote
                </a>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {trustPoints.map((point) => (
                  <div
                    key={point.label}
                    className="flex flex-col items-center gap-1.5 rounded-xl bg-white/5 px-3 py-4 text-center ring-1 ring-white/10"
                  >
                    <span className="text-2xl">{point.icon}</span>
                    <span className="text-xs font-medium text-slate-300">
                      {point.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote form */}
            <div id="quote">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-700">
              Our Services
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
              Repairs That Come to You
            </p>
            <p className="mt-4 text-lg text-slate-600">
              From a single door ding to full bumper damage, our mobile team
              handles it right in your driveway.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-3xl">
                  {service.icon}
                </span>
                <h3 className="mt-5 text-xl font-bold text-brand-950">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>
                <ul className="mt-5 flex flex-1 flex-col gap-2">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-sm text-slate-700"
                    >
                      <CheckIcon className="h-4 w-4 flex-shrink-0 text-cta-600" />
                      {point}
                    </li>
                  ))}
                </ul>
                <a
                  href={telHref(siteConfig.phoneRaw)}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-brand-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cta-600"
                >
                  Get a Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER GALLERY */}
      <BeforeAfterGallery />

      {/* SERVICE AREA / COVERAGE + AGGRESSIVE CTA */}
      <section
        id="service-area"
        className="relative overflow-hidden bg-gradient-to-br from-brand-900 to-brand-950 py-16 sm:py-24"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(circle at 85% 30%, rgba(34,197,94,0.3), transparent 45%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-cta-400">
                Proudly Serving the East Valley &amp; Beyond
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                We Come to Wherever Your Car Is
              </p>
              <p className="mt-4 text-lg leading-7 text-slate-300">
                Home, office, apartment complex, or job site — our mobile
                units are fully stocked and ready to repair your vehicle on
                location across the Phoenix metro area.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {siteConfig.serviceAreas.map((area) => (
                  <Link
                    key={area}
                    href={`/service-area/${slugifyCity(area)}`}
                    className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-inset ring-white/15 transition-colors hover:bg-cta-500/20 hover:ring-cta-400/40"
                  >
                    {area}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-cta-500/30 bg-brand-950/60 p-8 shadow-2xl sm:p-10">
              <h3 className="text-2xl font-extrabold text-white">
                Don&apos;t Drive Around With Damage.
                <span className="block text-cta-400">
                  Get It Fixed This Week.
                </span>
              </h3>
              <p className="mt-3 text-sm text-slate-300">
                Every day you wait, small scratches can spread into rust and
                dents can worsen resale value. Our team typically has same-day
                or next-day openings.
              </p>

              <div className="mt-7 flex flex-col gap-3">
                <a
                  href={telHref(siteConfig.phoneRaw)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cta-500 px-6 py-4 text-base font-bold text-white shadow-glow transition-transform hover:scale-[1.02] hover:bg-cta-600"
                >
                  <PhoneIcon className="h-5 w-5" />
                  Call Now: {siteConfig.phoneDisplay}
                </a>
                <a
                  href={telHref(siteConfig.phoneRaw2)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cta-500 px-6 py-4 text-base font-bold text-white shadow-glow transition-transform hover:scale-[1.02] hover:bg-cta-600"
                >
                  <PhoneIcon className="h-5 w-5" />
                  Call Now: {siteConfig.phoneDisplay2}
                </a>
                <a
                  href={whatsappHref(
                    siteConfig.whatsappRaw,
                    "Hi! I'd like a repair quote."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Message Us on WhatsApp
                </a>
                <Link
                  href="#quote"
                  className="text-center text-sm font-medium text-slate-400 underline-offset-4 hover:text-cta-400 hover:underline"
                >
                  ...or scroll up to request a free quote online
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
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

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
