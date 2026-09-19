/**
 * Homepage FAQ content, also emitted as `FAQPage` JSON-LD so the questions
 * are eligible for rich results (expandable Q&A) in Google search.
 */
export type FaqItem = {
  question: string;
  answer: string;
};

export const homeFaq: FaqItem[] = [
  {
    question: "How much does mobile dent and paint repair cost?",
    answer:
      "Most jobs range from $175 for a scratch touch-up, $250+ for bumper repair, to $350+ per panel for a full repaint — exact pricing depends on the size and severity of the damage. Text us a photo and we'll give you an honest, no-obligation quote before any work starts.",
  },
  {
    question: "Do you come to my home or office?",
    answer:
      "Yes — that's the whole point of a mobile body shop. Our fully-equipped van comes straight to your driveway, office parking lot, apartment complex, or job site anywhere in our service area, so you never have to drop your vehicle off or arrange a rental car.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve the greater Phoenix metro area, including Mesa, Phoenix, Chandler, Gilbert, Tempe, Scottsdale, Queen Creek, and Apache Junction. If you're nearby but don't see your city listed, give us a call — we regularly cover the surrounding area too.",
  },
  {
    question: "How long does a repair take?",
    answer:
      "Most dent, scratch, and bumper repairs are completed on-site in a few hours, not days. Full panel repaints may take a little longer to allow the paint and clear coat to cure properly, but you'll know the estimated timeline upfront when you book.",
  },
  {
    question: "Will the paint actually match my car's factory color?",
    answer:
      "Yes. We use your vehicle's factory color code to mix a precise match, then blend the edges so the repair is invisible next to the surrounding panels — the same approach a dealership body shop would use, just done in your driveway.",
  },
  {
    question: "Do you repair RV and motorhome fiberglass panels?",
    answer:
      "Yes — in addition to standard auto body work, we repair RV and motorhome fiberglass panels and components, from cracks and stress fractures to full gelcoat refinishing, restoring both structural integrity and a seamless factory-matched finish.",
  },
  {
    question: "What are your hours?",
    answer:
      "We're available Monday through Friday from 7:00 AM to 7:00 PM and Saturday from 8:00 AM to 5:00 PM. Sunday appointments are available on request. Same-day and next-day openings are common, so don't hesitate to reach out.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "The fastest way is to text a photo of the damage to our number and we'll follow up with pricing, usually within the hour. You can also call us directly or fill out the quote form on this page and we'll reach out to schedule a time.",
  },
];
