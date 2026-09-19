/**
 * Shared service catalog used by the homepage and every city landing page,
 * so pricing/copy only needs to be updated in one place.
 */
export type Service = {
  /** Stable id used to build in-page anchors, e.g. `/#service-panel-painting`. */
  slug: string;
  icon: string;
  title: string;
  description: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "panel-painting",
    icon: "🎨",
    title: "Panel Painting",
    description:
      "Full-panel repaints with precise factory color-code matching, done on-site with a dust-controlled mobile spray booth for a seamless blend.",
    points: ["Factory color-code matching", "Dust-controlled mobile booth", "From $350 per panel"],
  },
  {
    slug: "bumper-repair",
    icon: "🚗",
    title: "Bumper Repair",
    description:
      "Cracks, scrapes, and scuffs on plastic bumper covers repaired and color-matched on-site, often at a fraction of replacement cost.",
    points: ["Plastic welding available", "Factory color-code matching", "From $250"],
  },
  {
    slug: "scratch-touchups",
    icon: "✨",
    title: "Scratch Touch-Ups & Polishing",
    description:
      "Clear-coat scratches, faded panels, and minor chips corrected with professional-grade polishing and precision touch-up paint.",
    points: ["Machine polish & buff", "Multi-layer clear coat", "From $175"],
  },
];
