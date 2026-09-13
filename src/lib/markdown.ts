/**
 * Minimal Markdown-to-blocks parser covering exactly the subset used by
 * our blog content: H2/H3 headings, paragraphs, and bulleted/numbered
 * lists. Kept intentionally small (no external MDX/remark dependency)
 * since blog posts are hand-written with a consistent, simple structure.
 */
export type InlineToken =
  | { type: "text"; value: string }
  | { type: "bold"; value: string }
  | { type: "link"; label: string; href: string };

export type ContentBlock =
  | { type: "heading"; level: 2 | 3; text: InlineToken[]; id: string }
  | { type: "paragraph"; text: InlineToken[] }
  | { type: "list"; ordered: boolean; items: InlineToken[][] };

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

/** Parses `**bold**` and `[label](href)` inline markdown into tokens. */
export function parseInline(text: string): InlineToken[] {
  const tokens: InlineToken[] = [];
  const regex = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({ type: "text", value: text.slice(lastIndex, match.index) });
    }
    if (match[1] !== undefined) {
      tokens.push({ type: "bold", value: match[1] });
    } else if (match[2] !== undefined) {
      tokens.push({ type: "link", label: match[2], href: match[3] });
    }
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    tokens.push({ type: "text", value: text.slice(lastIndex) });
  }

  return tokens;
}

export function parseMarkdownBlocks(markdown: string): ContentBlock[] {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks: ContentBlock[] = [];
  let paragraphBuffer: string[] = [];
  let i = 0;

  const flushParagraph = () => {
    if (paragraphBuffer.length > 0) {
      const text = paragraphBuffer.join(" ").trim();
      if (text) blocks.push({ type: "paragraph", text: parseInline(text) });
      paragraphBuffer = [];
    }
  };

  while (i < lines.length) {
    const line = lines[i];

    if (/^\s*$/.test(line)) {
      flushParagraph();
      i++;
      continue;
    }

    const h2 = line.match(/^##\s+(.*)/);
    if (h2) {
      flushParagraph();
      const text = h2[1].trim();
      blocks.push({
        type: "heading",
        level: 2,
        text: parseInline(text),
        id: slugifyHeading(text),
      });
      i++;
      continue;
    }

    const h3 = line.match(/^###\s+(.*)/);
    if (h3) {
      flushParagraph();
      const text = h3[1].trim();
      blocks.push({
        type: "heading",
        level: 3,
        text: parseInline(text),
        id: slugifyHeading(text),
      });
      i++;
      continue;
    }

    const bulletMatch = line.match(/^\s*[-*]\s+(.*)/);
    const orderedMatch = line.match(/^\s*\d+\.\s+(.*)/);
    if (bulletMatch || orderedMatch) {
      flushParagraph();
      const ordered = !!orderedMatch;
      const items: InlineToken[][] = [];
      while (i < lines.length) {
        const m = ordered
          ? lines[i].match(/^\s*\d+\.\s+(.*)/)
          : lines[i].match(/^\s*[-*]\s+(.*)/);
        if (!m) break;
        items.push(parseInline(m[1].trim()));
        i++;
      }
      blocks.push({ type: "list", ordered, items });
      continue;
    }

    paragraphBuffer.push(line.trim());
    i++;
  }

  flushParagraph();
  return blocks;
}

/** Plain-text rendering of blocks, used for excerpts/JSON-LD descriptions. */
export function blocksToPlainText(blocks: ContentBlock[]): string {
  return blocks
    .map((block) => {
      if (block.type === "paragraph" || block.type === "heading") {
        return block.text.map((t) => ("value" in t ? t.value : t.label)).join("");
      }
      return block.items
        .map((item) => item.map((t) => ("value" in t ? t.value : t.label)).join(""))
        .join(" ");
    })
    .join(" ");
}
