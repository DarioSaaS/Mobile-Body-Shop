import type { Metadata } from "next";
import Link from "next/link";
import { serviceAreaCities } from "@/lib/service-areas";
import { siteConfig, telHref } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Service Area",
  description:
    "Mobile Body Shop provides on-site dent, bumper, and scratch repair across Mesa, Phoenix, Chandler, Gilbert, Tempe, Scottsdale, Queen Creek, and Apache Junction, AZ.",
};

export default function ServiceAreaIndexPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-950 to-brand-900 py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-cta-400 ring-1 ring-inset ring-white/15">
            Where We Work
          </span>
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Serving the Entire Phoenix Metro
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Pick your city for local pricing context, recent job photos, and
            a free instant quote — or just call and we&apos;ll come to you.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {serviceAreaCities.map((city) => (
              <Link
                key={city.slug}
                href={`/service-area/${city.slug}`}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                  {city.region}
                </span>
                <h2 className="mt-2 text-lg font-bold text-brand-950 group-hover:text-brand-700">
                  {city.name}, AZ
                </h2>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                  {city.blurb}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-cta-600">
                  View {city.name} Repair Info →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center gap-4 rounded-2xl bg-brand-950 px-6 py-10 text-center">
            <h3 className="text-2xl font-bold text-white">
              Don&apos;t See Your City Listed?
            </h3>
            <p className="max-w-xl text-sm text-slate-300">
              We regularly cover the broader Phoenix metro area beyond this
              list. Give us a call and we&apos;ll let you know if we can come
              to you.
            </p>
            <a
              href={telHref(siteConfig.phoneRaw)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-cta-500 px-7 py-3.5 text-base font-bold text-white shadow-glow transition-colors hover:bg-cta-600"
            >
              Call {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
