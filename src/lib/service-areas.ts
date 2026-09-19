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
  /** Short 1–2 sentence summary used on the service-area index cards & meta description. */
  blurb: string;
  /** Longer, city-specific paragraphs shown in the page hero. */
  heroParagraphs: string[];
  highlights: string[];
  /** Nearby neighborhoods, landmarks, or corridors shown as chips. */
  neighborhoods: string[];
  /** Typical technician response/drive time copy for this city. */
  responseTime: string;
  /** Two paragraphs of unique local context for the "Local Expertise" section. */
  localExpertise: string[];
  /** Matches a `BeforeAfterGallery` item id when a real local job photo exists. */
  galleryItemId?: string;
  /** Slugs of 2-3 geographically nearby cities we serve, for the "Related Areas" section. */
  relatedCities: string[];
};

export const serviceAreaCities: ServiceAreaCity[] = [
  {
    slug: "mesa",
    name: "Mesa",
    region: "East Valley, Maricopa County",
    blurb:
      "Mesa's spread-out neighborhoods, HOA communities, and busy commercial corridors mean a lot of parking-lot dings and driveway dents. Our mobile units cover Mesa end to end, from Downtown to Eastmark.",
    heroParagraphs: [
      "Mesa is one of the largest cities in the Valley, stretching from the historic blocks of Downtown Mesa out to the newer master-planned streets of Eastmark and Signal Butte. That kind of sprawl means a lot of driveways, HOA-managed carports, and shopping-center parking lots — and plenty of opportunities for door dings, shopping-cart scuffs, and curb rash. Rather than asking you to drive across town to a body shop, we bring a fully stocked mobile unit straight to wherever your vehicle happens to be parked.",
      "Our technicians regularly work near Dana Park, Superstition Springs, and the Fiesta District, as well as residential pockets around Red Mountain and Las Sendas. Most appointments here get a technician on-site within 20–30 minutes of confirming a time, whether you're near Sloan Park during Cubs spring training season or tucked into a quiet Eastmark cul-de-sac.",
    ],
    highlights: [
      "HOA-friendly, no-mess mobile repairs done in your driveway or garage",
      "Fast response for parking-lot dents near Superstition Springs, Dana Park, and other shopping corridors",
      "Same factory color-code matching used on late-model daily drivers here",
    ],
    neighborhoods: [
      "Downtown Mesa",
      "Eastmark",
      "Dana Park",
      "Red Mountain",
      "Las Sendas",
      "Superstition Springs",
      "Fiesta District",
      "Signal Butte",
    ],
    responseTime: "Typical technician response time in Mesa: 20–30 minutes from booking.",
    localExpertise: [
      "Local drivers deal with a unique mix of conditions — long summer commutes on the US-60 and Loop 202, gravel lots near industrial parks, and tight HOA carports that make backing out without a scrape a daily challenge. We've built our mobile process specifically around those realities, carrying the tools and paint stock needed to fix the dings, scrapes, and sun-faded panels that show up most often on vehicles here.",
      "Because we're based right here in the East Valley, Mesa isn't a detour for us — it's home turf. Whether you're near the shops at Mesa Riverview, dropping kids off near a local school, or parked at an apartment complex off Baseline Road, a technician can usually reach you the same day. That local familiarity is a big reason so many homeowners and small businesses call us instead of scheduling a multi-day shop visit.",
    ],
    galleryItemId: "bumper-scuff",
    relatedCities: ["chandler", "gilbert", "apache-junction"],
  },
  {
    slug: "phoenix",
    name: "Phoenix",
    region: "Maricopa County",
    blurb:
      "Arizona's intense summer sun is hard on clear coat and paint across the Phoenix metro. We repair dents, scratches, and sun-faded panels wherever your car is parked — home, office, or job site.",
    heroParagraphs: [
      "Phoenix is a big, spread-out city, and your daily route probably touches more than one part of it — a downtown parking garage near Chase Field, a research campus close to Sky Harbor, or a driveway tucked into a quiet cul-de-sac near Desert Ridge. Wherever your commute takes you, our mobile technicians can meet your vehicle there instead of asking you to book a drop-off across town.",
      "We regularly repair vehicles near Arcadia, the Biltmore corridor, Ahwatukee, and the growing Desert Ridge / Deer Valley area up north, along with Central Phoenix apartment complexes where street parking makes door dings and mirror clips common. Response times across the Valley's largest city vary a bit more by neighborhood, but most appointments still see a technician within 30–45 minutes of confirming a time.",
    ],
    highlights: [
      "Heat- and UV-aware paint matching for sun-faded panels near Camelback and Papago",
      "Covers North Phoenix, Central Phoenix, Ahwatukee, and everywhere in between",
      "Same-day and next-day mobile appointments available across the metro",
    ],
    neighborhoods: [
      "Arcadia",
      "Biltmore Corridor",
      "Ahwatukee",
      "Desert Ridge",
      "Deer Valley",
      "Downtown Phoenix",
      "Camelback Corridor",
      "Sky Harbor area",
    ],
    responseTime: "Typical technician response time in Phoenix: 30–45 minutes, depending on the neighborhood.",
    localExpertise: [
      "Because Phoenix covers so much ground, we treat it differently than a single-neighborhood city — our scheduling accounts for whether you're closer to the airport, Central Phoenix, or the far north side near Desert Ridge so we can still hit tight arrival windows. The desert sun is also uniquely hard on paint jobs here; clear coat that looks fine in the showroom can fade and crack within a few summers, especially on dark-colored vehicles parked outside.",
      "That's why every repair in Phoenix starts with a color and finish assessment, not just a dent check. A scratch repaired with the wrong sheen will stand out under Arizona sunlight within weeks, so we match both the factory color code and the surrounding gloss level before we ever pick up a spray gun. It's a small extra step that keeps repairs invisible long after we've packed up the van.",
    ],
    galleryItemId: "deep-scratch",
    relatedCities: ["tempe", "scottsdale"],
  },
  {
    slug: "chandler",
    name: "Chandler",
    region: "East Valley, Maricopa County",
    blurb:
      "Chandler's master-planned communities and busy tech-corridor commuters keep our mobile techs on the road here often — especially after monsoon hail passes through in the summer.",
    heroParagraphs: [
      "Chandler has grown from a quiet farm town into one of the East Valley's biggest tech hubs, with Intel's campus and the Price Road corridor bringing thousands of commuters through the city every day. Between packed office parking structures, HOA-managed communities like Ocotillo and Fulton Ranch, and the retail lots around Chandler Fashion Center, local vehicles pick up their fair share of dings without ever leaving city limits.",
      "Summer monsoon storms add hail dents to that list most years, often all at once across an entire neighborhood. Our mobile units are set up to handle multi-vehicle hail jobs on-site, with insurance-friendly documentation, so an entire street near Downtown Chandler or the Sun Lakes border can get fixed without every resident booking a separate shop appointment.",
    ],
    highlights: [
      "Monsoon-season hail dent repair with insurance-friendly documentation",
      "On-site repairs at homes, Price Corridor offices, and Chandler Fashion Center-area lots",
      "Dust-controlled mobile spray booth for clean panel repaints",
    ],
    neighborhoods: [
      "Downtown Chandler",
      "Ocotillo",
      "Fulton Ranch",
      "Price Road Corridor",
      "Sun Lakes border",
      "Chandler Fashion Center area",
    ],
    responseTime: "Typical technician response time in Chandler: 20–30 minutes from booking.",
    localExpertise: [
      "A lot of our Chandler customers are tech-corridor commuters who don't have a spare afternoon to sit in a body shop waiting room. We schedule around that — early-morning and evening mobile appointments are common here, so a repair can happen while you're at your desk near Price Road instead of eating into your weekend.",
      "We also keep an eye on the local weather. When a monsoon cell drops hail on a Chandler subdivision, we can often get multiple vehicles on the same street handled in a single visit, walking each homeowner through the same insurance-ready photo documentation. It's one more way the mobile repair experience here looks different from a typical drop-off shop, and one more reason neighbors tend to pass our number along to each other after a storm.",
    ],
    galleryItemId: "hail-dent",
    relatedCities: ["gilbert", "mesa", "tempe"],
  },
  {
    slug: "gilbert",
    name: "Gilbert",
    region: "East Valley, Maricopa County",
    blurb:
      "Gilbert is one of the fastest-growing suburbs in the Valley, with tight HOA cosmetic standards. We help residents get dents and creases fixed quickly, without the hassle of dropping the car off.",
    heroParagraphs: [
      "Gilbert has turned from farmland into one of Arizona's fastest-growing suburbs, and new master-planned neighborhoods like Power Ranch, Val Vista Lakes, and Layton Lakes keep spreading the town further east every year. With that growth comes strict HOA cosmetic standards — a dented bumper or peeling clear coat can trigger a compliance notice faster here than almost anywhere else in the Valley.",
      "We help Gilbert homeowners stay ahead of those notices with fast, factory-matched repairs done right in the driveway, whether you're near the Heritage District's historic downtown or a newer build off Higley Road. Shoppers near SanTan Village and residents around Val Vista Lakes can usually get a technician out within a day of calling.",
    ],
    highlights: [
      "Meets strict HOA cosmetic standards with factory-matched finishes",
      "Mobile service across Power Ranch, Val Vista Lakes, and Gilbert's newer communities",
      "Free photo-based quotes before we ever show up",
    ],
    neighborhoods: [
      "Heritage District",
      "Power Ranch",
      "Val Vista Lakes",
      "Layton Lakes",
      "SanTan Village area",
      "Higley",
    ],
    responseTime: "Typical technician response time in Gilbert: 15–25 minutes from booking.",
    localExpertise: [
      "HOA compliance timelines move fast in Gilbert, and a notice about a damaged panel usually comes with a firm deadline. We prioritize appointments here accordingly, often getting a technician out within a day so homeowners near Power Ranch or Val Vista Lakes can resolve the issue before it becomes a bigger headache with their community association.",
      "Gilbert's newer subdivisions also mean a lot of shared driveways, tight guest parking, and community mailbox clusters — all common spots for the door dings and mirror scrapes we fix most often here. Because we work directly in your driveway or garage, there's no need to fight cross-town traffic to reach a shop; we bring the shop to you, usually the same day you call.",
    ],
    galleryItemId: "quarter-panel",
    relatedCities: ["chandler", "mesa", "queen-creek"],
  },
  {
    slug: "tempe",
    name: "Tempe",
    region: "East Valley, Maricopa County",
    blurb:
      "Between ASU students, dense apartment complexes, and tight street parking, Tempe vehicles pick up more than their share of door dings and curb scrapes. We come straight to your complex or campus lot.",
    heroParagraphs: [
      "Tempe is a compact, densely packed city built around Arizona State University, Mill Avenue, and Tempe Town Lake, which means tight street parking, shared apartment complex lots, and a lot of foot and bike traffic near parked cars. Door dings, curb scrapes, and shopping-cart dents picked up near Arizona Mills are some of the most common repairs we handle here.",
      "Because so much of Tempe living happens in apartments and condos rather than single-family driveways, we've adapted our mobile setup to work in shared parking garages and assigned spots near campus. Whether you're a student parked close to ASU or a resident near South Tempe's quieter streets, we can usually work around your class or work schedule instead of the other way around.",
    ],
    highlights: [
      "Convenient for apartment, condo, and campus-area parking situations",
      "Fast turnarounds for common door-ding and curb-scrape repairs near Mill Avenue and ASU",
      "No shop drop-off required — we work around your class or work schedule",
    ],
    neighborhoods: [
      "ASU campus area",
      "Mill Avenue",
      "Tempe Town Lake",
      "Arizona Mills area",
      "South Tempe",
      "Downtown Tempe",
    ],
    responseTime: "Typical technician response time in Tempe: 15–25 minutes from booking.",
    localExpertise: [
      "Student schedules and Tempe's dense housing mean a lot of our appointments here happen in the evening or between classes rather than during a typical 9-to-5 window. We've built flexible scheduling around that, so a repair doesn't mean missing a lecture or losing a parking spot you'll never get back near campus.",
      "Tempe's tight streets also mean paint matching has to be precise — with so many similar late-model sedans and crossovers parked bumper to bumper near Mill Avenue, an off-shade repair stands out immediately. We carry factory color-code references for the makes and models most common on these streets, so a repaired panel blends in rather than giving away where the damage used to be.",
    ],
    galleryItemId: "quarter-scratch",
    relatedCities: ["phoenix", "mesa", "scottsdale"],
  },
  {
    slug: "scottsdale",
    name: "Scottsdale",
    region: "Maricopa County",
    blurb:
      "Scottsdale drivers expect a flawless finish. Our mobile technicians bring shop-quality color matching and polishing to golf communities, resorts, and residential neighborhoods across the city.",
    heroParagraphs: [
      "Scottsdale is known for high expectations — from Old Town's boutique storefronts to the golf communities around DC Ranch and TPC Scottsdale, drivers here expect a flawless factory finish, not a visible patch job. Our mobile technicians bring the same precision color-matching and polishing equipment used in high-end shops directly to homes, resorts, and offices across the city.",
      "We regularly work near Kierland, Fashion Square, McCormick Ranch, and the resort corridors along Camelback and Scottsdale Roads, where late-model and luxury vehicles are common and an imperfect match is easy to spot. Most Scottsdale appointments are scheduled discreetly at a home, office, or resort valet area, with a technician on-site within about 30–40 minutes, so a repair never disrupts your day.",
    ],
    highlights: [
      "Precision color-matching for late-model and luxury vehicles near DC Ranch and Kierland",
      "Discreet, on-location service at homes, resorts, and offices across Scottsdale",
      "Machine polish and clear-coat correction for a showroom finish",
    ],
    neighborhoods: [
      "Old Town Scottsdale",
      "DC Ranch",
      "Kierland",
      "McCormick Ranch",
      "TPC Scottsdale area",
      "Fashion Square area",
    ],
    responseTime: "Typical technician response time in Scottsdale: 30–40 minutes from booking.",
    localExpertise: [
      "Scottsdale customers are often comparing our work to what they'd expect from a dealership body shop, so we hold ourselves to that standard on every visit. That means blending clear coat edges so they're invisible under direct sunlight, matching metallic and pearl finishes at the correct angle, and finishing with a machine polish rather than leaving a slightly duller repaired panel.",
      "We also understand discretion matters here — whether that's working quietly in a resort's valet area, a gated community near DC Ranch, or an office parking structure without disrupting anyone's day. Scottsdale clients can request a specific arrival window and we'll stick to it, so the only sign we were ever there is a perfectly matched repair and a car that looks like nothing ever happened.",
    ],
    relatedCities: ["phoenix", "tempe"],
  },
  {
    slug: "queen-creek",
    name: "Queen Creek",
    region: "Far East Valley, Maricopa/Pinal County",
    blurb:
      "Queen Creek's newer master-planned neighborhoods are spread across a wide area. Rather than driving into Mesa or Chandler for a body shop, residents can get the same repair done right at home.",
    heroParagraphs: [
      "Queen Creek has exploded in size over the last decade, with new master-planned communities stretching from San Tan Heights to Encanterra along the Ellsworth Road corridor. That growth has outpaced local body shop options, which usually means a 30-plus minute drive into Mesa or Chandler just to get an estimate. We flip that around by bringing the shop to you instead.",
      "Whether you're near the shops and restaurants of Downtown Queen Creek, a resident of Encanterra or San Tan Heights, or picking up produce at the Queen Creek Olive Mill, a mobile appointment means no long drive and no waiting room. Most visits here are scheduled within a day or two of the first call, and every quote is texted over before any work begins.",
    ],
    highlights: [
      "Covers Queen Creek's newer communities without a long drive to a shop",
      "Ideal for lease-return prep before turning in a vehicle",
      "Transparent, upfront pricing texted to you before any work starts",
    ],
    neighborhoods: [
      "Downtown Queen Creek",
      "San Tan Heights",
      "Encanterra",
      "Ellsworth Road corridor",
      "Queen Creek Olive Mill area",
    ],
    responseTime: "Typical technician response time in Queen Creek: 25–35 minutes from booking.",
    localExpertise: [
      "Because Queen Creek sits at the edge of the Valley's body shop network, residents are used to tacking an hour of driving onto any repair errand — thirty minutes each way to Mesa or Chandler and back. Cutting that out is one of the biggest reasons locals choose a mobile appointment over a traditional shop, especially with gas prices and traffic on the Ellsworth corridor factored in.",
      "New construction in Queen Creek also means a lot of shared driveways, tight garages, and community parking near recently built subdivisions, all handled the same way we'd handle a repair anywhere else in the Valley — on-site, with full color matching and no need to move your vehicle off your own property or take time off work to sit in a shop lobby.",
    ],
    relatedCities: ["gilbert", "mesa", "apache-junction"],
  },
  {
    slug: "apache-junction",
    name: "Apache Junction",
    region: "East Valley, near the Superstition Mountains",
    blurb:
      "From daily commuters to weekend Superstition Mountains trips, Apache Junction vehicles see their fair share of trail dust, rock chips, and parking dings. We bring the repair to you.",
    heroParagraphs: [
      "Apache Junction sits right at the base of the Superstition Mountains, which means a lot of local vehicles split their time between US-60 commutes and weekend trips out toward Lost Dutchman State Park or the Apache Trail. That combination of daily driving and off-road weekend use adds up to rock chips, trail dust scratches, and the occasional parking-lot ding around town.",
      "We regularly repair vehicles near Gold Canyon, the US-60 corridor, and residential streets close to the Superstition Mountains trailheads, matching factory paint codes so a repaired panel doesn't stand out on your next trip up the mountain. Appointments here typically get a technician on-site within 25–35 minutes of booking, with no need to drive into Phoenix or Mesa for the work.",
    ],
    highlights: [
      "Mobile repairs for daily commuters and weekend off-road vehicles alike",
      "Rock-chip and scratch touch-ups matched to your factory paint code",
      "Serves Apache Junction and Gold Canyon without the drive into central Phoenix or Mesa",
    ],
    neighborhoods: [
      "Gold Canyon",
      "US-60 corridor",
      "Superstition Mountains trailheads area",
      "Downtown Apache Junction",
    ],
    responseTime: "Typical technician response time in Apache Junction: 25–35 minutes from booking.",
    localExpertise: [
      "A lot of the damage we see in Apache Junction isn't from parking lots at all — it's rock chips and trail dust scratches picked up on the Apache Trail or a weekend run out toward Lost Dutchman State Park. We stock touch-up and full-panel paint matched to the factory codes most common on the trucks and SUVs registered here and in nearby Gold Canyon.",
      "Because the drive from Apache Junction into a Phoenix or Mesa body shop can eat up most of a morning, most residents here appreciate not having to make that trip at all. We bring the same color-matching and dent-repair equipment straight to a driveway near the US-60 or a Gold Canyon golf community, so your vehicle never has to leave home, and your weekend never has to include a shop waiting room.",
    ],
    relatedCities: ["mesa", "queen-creek"],
  },
];

export function getServiceAreaCity(slug: string): ServiceAreaCity | undefined {
  return serviceAreaCities.find((city) => city.slug === slug);
}
