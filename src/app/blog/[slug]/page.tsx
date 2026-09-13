import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AdBanner from "@/components/AdBanner";
import type { ContentBlock, InlineToken } from "@/lib/markdown";
import { blogPosts, getAllSlugs, getPostBySlug } from "@/lib/blog-posts";
import { siteConfig, smsHref, telHref } from "@/lib/site-config";

type BlogPostPageProps = {
  params: { slug: string };
};

const SITE_URL = siteConfig.siteUrl;

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: `${SITE_URL}/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  // Everything up to (not including) the first H2 is treated as the intro.
  const firstHeadingIndex = post.content.findIndex(
    (block) => block.type === "heading" && block.level === 2
  );
  const introEnd = firstHeadingIndex === -1 ? 1 : firstHeadingIndex;
  const introBlocks = post.content.slice(0, introEnd);
  const remaining = post.content.slice(introEnd);
  const midpoint = Math.ceil(remaining.length / 2);
  const middleBlocks = remaining.slice(0, midpoint);
  const restBlocks = remaining.slice(midpoint);

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: siteConfig.businessName,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.businessName,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${SITE_URL}/blog/${post.slug}`,
      },
    ],
  };

  const faqJsonLd =
    post.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  return (
    <article>
      {/* Structured data for Google rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      {/* Article header */}
      <header className="bg-gradient-to-br from-brand-950 to-brand-900 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-xs text-slate-500">
              <li>
                <Link href="/" className="hover:text-cta-400">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/blog" className="hover:text-cta-400">
                  Blog
                </Link>
              </li>
            </ol>
          </nav>
          <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-cta-400">
            <span>{post.category}</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400">{post.readTime}</span>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-slate-300">{post.excerpt}</p>
          <p className="mt-4 text-sm text-slate-500">
            Published{" "}
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </p>
        </div>
      </header>

      {/* Article body */}
      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <AdBanner slot="1111111111" label="Advertisement" />

          <div className="prose-article max-w-none text-[1.05rem] text-slate-800">
            <BlockList blocks={introBlocks} />
            <BlockList blocks={middleBlocks} />
          </div>

          <AdBanner slot="2222222222" label="Advertisement" />

          <div className="my-10 rounded-2xl border border-brand-100 bg-brand-50 p-6 sm:p-8">
            <h3 className="text-lg font-bold text-brand-950">
              Dealing with damage like this right now?
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Send us a photo and we&apos;ll give you an honest, no-pressure
              quote — usually within the hour.
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <a
                href={telHref(siteConfig.phoneRaw)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cta-500 px-5 py-2.5 text-sm font-bold text-white shadow-glow hover:bg-cta-600"
              >
                Call {siteConfig.phoneDisplay}
              </a>
              <a
                href={smsHref(
                  siteConfig.smsRaw,
                  "Hi! I read your blog and would like a repair quote."
                )}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand-800 px-5 py-2.5 text-sm font-bold text-brand-900 hover:bg-brand-800 hover:text-white"
              >
                Text a Photo for a Quote
              </a>
            </div>
          </div>

          <div className="prose-article max-w-none text-[1.05rem] text-slate-800">
            <BlockList blocks={restBlocks} />
          </div>

          {post.faq.length > 0 && (
            <div className="mt-12 border-t border-slate-200 pt-10">
              <h2 className="text-2xl font-bold text-brand-950">
                Frequently Asked Questions
              </h2>
              <dl className="mt-6 flex flex-col gap-6">
                {post.faq.map((item) => (
                  <div key={item.question}>
                    <dt className="text-base font-bold text-brand-950">
                      {item.question}
                    </dt>
                    <dd className="mt-2 text-[1.05rem] leading-7 text-slate-700">
                      {item.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          <AdBanner slot="3333333333" label="Advertisement" />
        </div>
      </div>

      {relatedPosts.length > 0 && (
        <section className="bg-slate-50 py-14 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-brand-950">
              More Repair Guides
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <span className="text-3xl">{related.coverEmoji}</span>
                  <h3 className="mt-3 text-sm font-bold leading-snug text-brand-950 group-hover:text-brand-700">
                    {related.title}
                  </h3>
                  <span className="mt-3 text-xs font-semibold text-cta-600">
                    Read Article →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}

function BlockList({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        if (block.type === "heading") {
          const Tag = block.level === 2 ? "h2" : "h3";
          return (
            <Tag
              key={i}
              id={block.id}
              className={
                block.level === 2
                  ? "mt-10 scroll-mt-24 text-2xl font-bold text-brand-950"
                  : "mt-8 scroll-mt-24 text-xl font-bold text-brand-950"
              }
            >
              <Inline tokens={block.text} />
            </Tag>
          );
        }

        if (block.type === "list") {
          const ListTag = block.ordered ? "ol" : "ul";
          return (
            <ListTag
              key={i}
              className={
                block.ordered
                  ? "list-decimal space-y-2 pl-6"
                  : "list-disc space-y-2 pl-6"
              }
            >
              {block.items.map((item, j) => (
                <li key={j}>
                  <Inline tokens={item} />
                </li>
              ))}
            </ListTag>
          );
        }

        return (
          <p key={i}>
            <Inline tokens={block.text} />
          </p>
        );
      })}
    </>
  );
}

function Inline({ tokens }: { tokens: InlineToken[] }) {
  return (
    <>
      {tokens.map((token, i) => {
        if (token.type === "bold") {
          return <strong key={i}>{token.value}</strong>;
        }
        if (token.type === "link") {
          return (
            <a
              key={i}
              href={token.href}
              className="font-medium text-brand-700 underline underline-offset-2 hover:text-brand-800"
            >
              {token.label}
            </a>
          );
        }
        return token.value;
      })}
    </>
  );
}

