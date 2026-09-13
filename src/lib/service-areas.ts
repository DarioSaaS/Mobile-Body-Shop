/**
 * Per-city content for the /service-area/[city] landing pages. Each entry
 * gives Google a unique, locally-relevant page to rank for "[service] in
 * [city]" searches instead of funneling every city into the homepage.
 *
 * Add a new city by adding an entry here — the route is generated
 * automatically via generateStaticParams.
 */
export function slugifyCity(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export type ServiceAreaCity = {
  slug: string;
  name: string;
  region: string;
  blurb: string;
  highlights: string[];
  /** Matches a `BeforeAfterGallery` item id when a real local job photo exists. */
  galleryItemId?: string;
};

export const serviceAreaCities: ServiceAreaCity[] = [
  {
    slug: "mesa",
    name: "Mesa",
    region: "East Valley, Maricopa County",
    blurb:
      "Mesa's spread-out neighborhoods, HOA communities, and busy commercial corridors mean a lot of parking-lot dings and driveway dents. Our mobile units cover Mesa end to end, from Downtown to Eastmark.",
    highlights: [
      "HOA-friendly, no-mess mobile repairs done in your driveway or garage",
      "Fast response for parking-lot dents near shopping and commercial corridors",
      "Same factory color-code matching used on late-model Mesa daily drivers",
    ],
    galleryItemId: "bumper-scuff",
  },
  {
    slug: "phoenix",
    name: "Phoenix",
    region: "Maricopa County",
    blurb:
      "Arizona's intense summer sun is hard on clear coat and paint across the Phoenix metro. We repair dents, scratches, and sun-faded panels wherever your car is parked — home, office, or job site.",
    highlights: [
      "Heat- and UV-aware paint matching for sun-faded Phoenix panels",
      "Covers North, Central, and East Phoenix neighborhoods",
      "Same-day and next-day mobile appointments available",
    ],
    galleryItemId: "deep-scratch",
  },
  {
    slug: "chandler",
    name: "Chandler",
    region: "East Valley, Maricopa County",
    blurb:
      "Chandler's master-planned communities and busy tech-corridor commuters keep our mobile techs on the road here often — especially after monsoon hail passes through in the summer.",
    highlights: [
      "Monsoon-season hail dent repair with insurance-friendly documentation",
      "On-site repairs at homes, apartments, and workplace parking lots",
      "Dust-controlled mobile spray booth for clean panel repaints",
    ],
    galleryItemId: "hail-dent",
  },
  {
    slug: "gilbert",
    name: "Gilbert",
    region: "East Valley, Maricopa County",
    blurb:
      "Gilbert is one of the fastest-growing suburbs in the Valley, with tight HOA cosmetic standards. We help residents get dents and creases fixed quickly, without the hassle of dropping the car off.",
    highlights: [
      "Meets strict HOA cosmetic standards with factory-matched finishes",
      "Mobile service across Gilbert's family neighborhoods and new builds",
      "Free photo-based quotes before we ever show up",
    ],
    galleryItemId: "quarter-panel",
  },
  {
    slug: "tempe",
    name: "Tempe",
    region: "East Valley, Maricopa County",
    blurb:
      "Between ASU students, dense apartment complexes, and tight street parking, Tempe vehicles pick up more than their share of door dings and curb scrapes. We come straight to your complex or campus lot.",
    highlights: [
      "Convenient for apartment and campus-area parking situations",
      "Fast turnarounds for common door-ding and curb-scrape repairs",
      "No shop drop-off required — we work around your class or work schedule",
    ],
  },
  {
    slug: "scottsdale",
    name: "Scottsdale",
    region: "Maricopa County",
    blurb:
      "Scottsdale drivers expect a flawless finish. Our mobile technicians bring shop-quality color matching and polishing to golf communities, resorts, and residential neighborhoods across the city.",
    highlights: [
      "Precision color-matching for late-model and luxury vehicles",
      "Discreet, on-location service at homes, resorts, and offices",
      "Machine polish and clear-coat correction for a showroom finish",
    ],
  },
  {
    slug: "queen-creek",
    name: "Queen Creek",
    region: "Far East Valley, Maricopa/Pinal County",
    blurb:
      "Queen Creek's newer master-planned neighborhoods are spread across a wide area. Rather than driving into Mesa or Chandler for a body shop, residents can get the same repair done right at home.",
    highlights: [
      "Covers Queen Creek's newer communities without a long drive to a shop",
      "Ideal for lease-return prep before turning in a vehicle",
      "Transparent, upfront pricing texted to you before any work starts",
    ],
  },
  {
    slug: "apache-junction",
    name: "Apache Junction",
    region: "East Valley, near the Superstition Mountains",
    blurb:
      "From daily commuters to weekend Superstition Mountains trips, Apache Junction vehicles see their fair share of trail dust, rock chips, and parking dings. We bring the repair to you.",
    highlights: [
      "Mobile repairs for daily drivers and weekend off-road vehicles alike",
      "Rock-chip and scratch touch-ups matched to your factory paint code",
      "Serves Apache Junction without the drive into central Phoenix or Mesa",
    ],
  },
];

export function getServiceAreaCity(slug: string): ServiceAreaCity | undefined {
  return serviceAreaCities.find((city) => city.slug === slug);
}
