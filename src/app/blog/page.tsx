import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-posts";
import { siteConfig, telHref } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Repair Guides & Cost Tips",
  description:
    "Practical, honest guides on dent repair, scratch removal, bumper repair costs, and insurance claims — written by mobile auto body technicians serving Mesa & Phoenix.",
};

export default function BlogIndexPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-brand-950 to-brand-900 py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-cta-400 ring-1 ring-inset ring-white/15">
            Repair Guides &amp; Cost Tips
          </span>
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            The Mobile Body Shop Blog
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Straight answers on dent repair, scratch removal, bumper costs,
            and insurance claims — from technicians who work on cars every
            day.
          </p>
        </div>
      </section>

      {/* Post grid */}
      <section className="bg-slate-50 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-40 items-center justify-center bg-gradient-to-br from-brand-800 to-brand-950 text-6xl">
                  {post.coverEmoji}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-700">
                    <span>{post.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-400">{post.readTime}</span>
                  </div>
                  <h2 className="mt-3 text-lg font-bold leading-snug text-brand-950 group-hover:text-brand-700">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                    {post.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-cta-600">
                    Read Article
                    <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA tying blog readers back to the business */}
          <div className="mt-16 flex flex-col items-center gap-4 rounded-2xl bg-brand-950 px-6 py-10 text-center">
            <h3 className="text-2xl font-bold text-white">
              Got Damage on Your Car Right Now?
            </h3>
            <p className="max-w-xl text-sm text-slate-300">
              Skip the research — send us a photo and we&apos;ll give you a
              straight answer and a free quote, usually within the hour.
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

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}
