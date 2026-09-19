/**
 * Customer testimonials shown on the homepage and mirrored into the
 * homepage's `Review` / `AggregateRating` JSON-LD so the business is
 * eligible for star ratings in Google search results.
 */
export type Testimonial = {
  name: string;
  city: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
  /** ISO date the review was left, used for the Review schema's datePublished. */
  date: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Jessica M.",
    city: "Mesa, AZ",
    rating: 5,
    quote:
      "They came right to my office parking lot and color-matched the paint perfectly. You genuinely can't tell there was ever a dent there.",
    date: "2026-03-14",
  },
  {
    name: "Ryan T.",
    city: "Chandler, AZ",
    rating: 5,
    quote:
      "Got a hail-dent quote the same day a storm rolled through and had three cars in the family done in one afternoon. Incredibly convenient.",
    date: "2026-04-02",
  },
  {
    name: "Amanda K.",
    city: "Gilbert, AZ",
    rating: 5,
    quote:
      "Our HOA was on my case about a bumper scrape and these guys fixed it right in my driveway before the compliance deadline. Lifesavers.",
    date: "2026-02-21",
  },
  {
    name: "David P.",
    city: "Scottsdale, AZ",
    rating: 4,
    quote:
      "Great color match on a tricky metallic finish. Took a little longer than the original estimate, but the end result was worth the wait.",
    date: "2026-05-09",
  },
  {
    name: "Sarah L.",
    city: "Tempe, AZ",
    rating: 5,
    quote:
      "Fixed a nasty door ding at my apartment complex without me having to take a day off work or find a shop near campus. So easy.",
    date: "2026-01-18",
  },
];
