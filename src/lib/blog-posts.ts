import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { blocksToPlainText, parseMarkdownBlocks, type ContentBlock } from "./markdown";

export type FaqItem = { question: string; answer: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  coverEmoji: string;
  content: ContentBlock[];
  /** Optional Q&A list rendered at the end of the article + emitted as FAQPage structured data. */
  faq: FaqItem[];
};

/**
 * Blog content lives as individual Markdown files in /content/blog,
 * one file per article, parsed at build/request time. This scales to
 * hundreds of posts without touching this file — just drop in a new
 * `.md` file with the frontmatter fields below and it shows up
 * automatically, sorted newest-first.
 *
 * Frontmatter fields: title, excerpt, category, date (YYYY-MM-DD),
 * readTime, coverEmoji, and an optional `faq` list of { question, answer }
 * pairs. The Markdown body supports `## `/`### ` headings, `- ` or `1. `
 * lists, and inline `**bold**` / `[label](url)` links — parsed into
 * structured blocks by `parseMarkdownBlocks` for SEO-friendly HTML
 * (real <h2>/<h3>/<ul> elements, not just flat paragraphs).
 */
const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function loadPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith(".md"));

  const posts = files.map((filename): BlogPost => {
    const slug = filename.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf8");
    const { data, content } = matter(raw);

    const blocks = parseMarkdownBlocks(content);
    const faq: FaqItem[] = Array.isArray(data.faq)
      ? data.faq.map((item: { question: string; answer: string }) => ({
          question: item.question,
          answer: item.answer,
        }))
      : [];

    return {
      slug,
      title: data.title ?? slug,
      excerpt: data.excerpt ?? "",
      category: data.category ?? "General",
      date: data.date ?? "",
      readTime: data.readTime ?? "",
      coverEmoji: data.coverEmoji ?? "📝",
      content: blocks,
      faq,
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export const blogPosts: BlogPost[] = loadPosts();

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

export { blocksToPlainText };
export type { ContentBlock };
