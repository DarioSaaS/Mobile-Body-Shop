import Link from "next/link";
import { serviceAreaCities } from "@/lib/service-areas";
import { siteConfig, telHref } from "@/lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-brand-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 text-lg font-bold text-white">
                MB
              </span>
              <span className="text-lg font-bold text-white">
                {siteConfig.businessName}
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              Professional mobile dent, scratch, and paint repair that comes
              to your home or office — no shop visit required.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={telHref(siteConfig.phoneRaw)}
                  className="font-medium text-cta-400 hover:text-cta-300"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={telHref(siteConfig.phoneRaw2)}
                  className="font-medium text-cta-400 hover:text-cta-300"
                >
                  {siteConfig.phoneDisplay2}
                </a>
              </li>
              <li className="text-slate-400">{siteConfig.email}</li>
              <li className="text-slate-400">{siteConfig.address}</li>
            </ul>
          </div>

          {/* Business hours */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Business Hours
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              {siteConfig.hours.map((slot) => (
                <li key={slot.day} className="flex justify-between gap-4">
                  <span>{slot.day}</span>
                  <span className="text-slate-300">{slot.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Service area & legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Service Area
            </h3>
            <div className="mt-4 flex flex-wrap gap-x-1.5 gap-y-1 text-sm text-slate-400">
              {serviceAreaCities.map((city, i) => (
                <span key={city.slug}>
                  <Link
                    href={`/service-area/${city.slug}`}
                    className="hover:text-cta-400"
                  >
                    {city.name}
                  </Link>
                  {i < serviceAreaCities.length - 1 && (
                    <span aria-hidden="true"> ·</span>
                  )}
                </span>
              ))}
            </div>
            <div className="mt-5 flex flex-col gap-2 text-sm">
              <Link href="/blog" className="text-slate-400 hover:text-cta-400">
                Blog
              </Link>
              <Link
                href="/privacy-policy"
                className="text-slate-400 hover:text-cta-400"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.businessName}. All rights reserved. Licensed
            and insured mobile auto body repair.
          </p>
          <p className="max-w-2xl sm:text-right">
            Legal Notice: Estimates provided online or by phone/text are
            preliminary and subject to in-person confirmation. Final pricing
            may vary based on actual damage assessed on-site.
          </p>
        </div>
      </div>
    </footer>
  );
}
