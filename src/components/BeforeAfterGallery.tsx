import Image from "next/image";

export type GalleryItem = {
  id: string;
  title: string;
  location: string;
  category: string;
  beforeLabel: string;
  afterLabel: string;
  /** Descriptive, keyword-rich alt text for the before/after photos (SEO + accessibility). */
  beforeAlt: string;
  afterAlt: string;
  /** Fallback gradient shown when no real photo is available yet. */
  beforeGradient: string;
  afterGradient: string;
  /** Real job photos, once available, take priority over the gradients. */
  beforeImage?: string;
  afterImage?: string;
};

/**
 * Illustrative before/after placeholders. Swap `beforeGradient` /
 * `afterGradient` for real job photos (e.g. Next.js <Image> sources)
 * as they become available — the side-by-side markup stays the same.
 */
export const galleryItems: GalleryItem[] = [
  {
    id: "bumper-scuff",
    title: "Rear Quarter Panel Paint & Blend Repair",
    location: "Mesa, AZ",
    category: "Panel Painting",
    beforeLabel: "Filler & primer stage",
    afterLabel: "Color-matched & like new",
    beforeAlt:
      "Rear quarter panel dent and scuffed paint before mobile repair in Mesa, AZ",
    afterAlt:
      "Rear quarter panel after color-matched paint blend repair, mobile auto body repair in Mesa, AZ",
    beforeGradient: "from-slate-500 via-slate-400 to-slate-600",
    afterGradient: "from-brand-700 via-brand-600 to-brand-800",
    beforeImage: "/images/gallery/bumper-scuff-before.jpg",
    afterImage: "/images/gallery/bumper-scuff-after.jpg",
  },
  {
    id: "deep-scratch",
    title: "Quarter Panel Scratch & Paint Repair",
    location: "Phoenix, AZ",
    category: "Scratch Touch-Up",
    beforeLabel: "Primed & masked for paint",
    afterLabel: "Blended, glossy factory finish",
    beforeAlt:
      "Deep scratch on car quarter panel before mobile scratch repair in Phoenix, AZ",
    afterAlt:
      "Quarter panel scratch repaired with blended, factory-matched paint in Phoenix, AZ",
    beforeGradient: "from-zinc-600 via-zinc-500 to-zinc-700",
    afterGradient: "from-brand-600 via-brand-500 to-brand-700",
    beforeImage: "/images/gallery/quarter-scratch-before.png",
    afterImage: "/images/gallery/quarter-scratch-after.png",
  },
  {
    id: "hail-dent",
    title: "Hail Dent Panel Restoration",
    location: "Chandler, AZ",
    category: "Panel Painting",
    beforeLabel: "Panel prepped for hail dent repair",
    afterLabel: "Restored, glossy factory finish",
    beforeAlt:
      "Hail-damaged car panel with multiple dents before mobile hail dent repair in Chandler, AZ",
    afterAlt:
      "Car panel after mobile hail dent repair and factory-matched paint restoration in Chandler, AZ",
    beforeGradient: "from-stone-500 via-stone-400 to-stone-600",
    afterGradient: "from-brand-800 via-brand-700 to-brand-900",
    beforeImage: "/images/gallery/hail-dent-before.png",
    afterImage: "/images/gallery/hail-dent-after.png",
  },
  {
    id: "quarter-panel",
    title: "Quarter Panel Crease Repair",
    location: "Gilbert, AZ",
    category: "Panel Painting",
    beforeLabel: "Deep crease in the bed side panel",
    afterLabel: "Seamless panel repair, factory finish",
    beforeAlt:
      "Deep crease dent in truck bed side panel before mobile dent repair in Gilbert, AZ",
    afterAlt:
      "Truck bed side panel after seamless crease repair and factory paint match in Gilbert, AZ",
    beforeGradient: "from-neutral-600 via-neutral-500 to-neutral-700",
    afterGradient: "from-brand-700 via-brand-600 to-brand-900",
    beforeImage: "/images/gallery/quarter-panel-before.png",
    afterImage: "/images/gallery/quarter-panel-after.png",
  },
];

/** A single standalone job photo (no before/after pairing). */
export type StandaloneGalleryItem = {
  id: string;
  title: string;
  image: string;
  /** Descriptive, keyword-rich alt text for the photo (SEO + accessibility). */
  alt: string;
};

export const standaloneGalleryItems: StandaloneGalleryItem[] = [
  {
    id: "rv-front-cap",
    title: "RV Front Cap Paint Prep",
    image: "/images/gallery/rv-front-cap.jpg",
    alt: "RV fiberglass front cap sanded and prepped for paint during mobile RV repair in Mesa, AZ",
  },
  {
    id: "rv-side-panel",
    title: "RV Side Panel & Decal Repair",
    image: "/images/gallery/rv-side-panel.jpg",
    alt: "RV side panel and decal repair completed by mobile technician in the Phoenix metro area",
  },
  {
    id: "rv-front-cap-refinish",
    title: "Motorhome Fiberglass Front Cap Refinish",
    image: "/images/gallery/rv-front-cap-refinish.jpg",
    alt: "Motorhome fiberglass front cap after mobile refinishing and gelcoat repair",
  },
  {
    id: "rv-front-cap-refinish-detail",
    title: "Fiberglass Front Cap Repair — Detail View",
    image: "/images/gallery/rv-front-cap-refinish-detail.jpg",
    alt: "Close-up detail of repaired RV fiberglass front cap showing seamless factory-matched finish",
  },
];

export default function BeforeAfterGallery() {
  return (
    <section id="gallery" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-700">
            Real Results
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
            Before &amp; After
          </p>
          <p className="mt-4 text-lg text-slate-600">
            Side-by-side photos from real repairs completed on location
            across the Phoenix metro area.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-8">
          {galleryItems.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>

        {standaloneGalleryItems.length > 0 && (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {standaloneGalleryItems.map((item) => (
              <StandaloneGalleryCard key={item.id} item={item} />
            ))}
          </div>
        )}

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-slate-400">
          Photos marked with real job locations are actual completed repairs.
          Remaining cards use illustrative placeholders until photos from
          those jobs are added.
        </p>
      </div>
    </section>
  );
}

export function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
      <div className="flex w-full">
        <GalleryPhoto
          image={item.beforeImage}
          gradient={item.beforeGradient}
          alt={item.beforeAlt}
          badge="BEFORE"
          badgeClassName="bg-slate-900/80"
          state="before"
        />
        <div className="w-0.5 shrink-0 bg-slate-200" aria-hidden="true" />
        <GalleryPhoto
          image={item.afterImage}
          gradient={item.afterGradient}
          alt={item.afterAlt}
          badge="RESULT"
          badgeClassName="bg-cta-500"
          state="after"
        />
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-700">
          <span>{item.category}</span>
          <span aria-hidden="true">·</span>
          <span className="text-slate-400">{item.location}</span>
        </div>
        <h3 className="mt-2 text-base font-bold text-brand-950">
          {item.title}
        </h3>
        <div className="mt-3 flex items-center justify-between gap-4 text-xs text-slate-500">
          <span>{item.beforeLabel}</span>
          <span className="text-right">{item.afterLabel}</span>
        </div>
      </div>
    </div>
  );
}

function GalleryPhoto({
  image,
  gradient,
  alt,
  badge,
  badgeClassName,
  state,
}: {
  image?: string;
  gradient: string;
  alt: string;
  badge: string;
  badgeClassName: string;
  state: "before" | "after";
}) {
  return (
    <div
      className={`relative aspect-[3/4] w-1/2 sm:aspect-[4/5] ${
        image ? "bg-slate-900" : `bg-gradient-to-br ${gradient}`
      }`}
    >
      {image ? (
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 608px, 50vw"
          quality={78}
          className="object-cover object-center"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <PlaceholderGlyph state={state} />
        </div>
      )}
      <span
        className={`absolute left-2 top-2 z-10 rounded-full ${badgeClassName} px-2.5 py-1 text-[10px] font-bold text-white shadow sm:left-3 sm:top-3 sm:text-xs`}
      >
        {badge}
      </span>
    </div>
  );
}

function StandaloneGalleryCard({ item }: { item: StandaloneGalleryItem }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
      <div className="relative aspect-[4/3] w-full bg-slate-900">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          sizes="(min-width: 1024px) 600px, (min-width: 640px) 50vw, 100vw"
          quality={78}
          className="object-cover object-center"
        />
      </div>
      <div className="p-5">
        <h3 className="text-base font-bold text-brand-950">{item.title}</h3>
      </div>
    </div>
  );
}

function PlaceholderGlyph({ state }: { state: "before" | "after" }) {
  return (
    <span
      className="text-4xl opacity-90"
      role="img"
      aria-label={state === "before" ? "Damaged panel" : "Repaired panel"}
    >
      {state === "before" ? "🔧" : "✨"}
    </span>
  );
}
