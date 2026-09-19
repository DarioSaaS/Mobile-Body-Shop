/**
 * Centralized business info so phone numbers, hours, and area copy
 * stay consistent across every page and component.
 */
export const siteConfig = {
  businessName: "Mobile Body Shop",
  siteUrl: "https://www.mobilebodyshop.example",
  tagline: "Mesa & Phoenix's Mobile Dent, Scratch & Paint Repair Specialists",
  phoneDisplay: "(480) 393-9469",
  phoneRaw: "+14803939469",
  phoneDisplay2: "(480) 843-8284",
  phoneRaw2: "+14808438284",
  smsRaw: "+14803939469",
  whatsappRaw: "14803939469",
  email: "quotes@mobilebodyshop.example",
  address: "Serving the Greater Phoenix Metro Area",
  priceRange: "$$",
  /** Representative photo used for social sharing and JSON-LD structured data. */
  image: "/images/gallery/bumper-scuff-after.jpg",
  hours: [
    { day: "Monday – Friday", time: "7:00 AM – 7:00 PM" },
    { day: "Saturday", time: "8:00 AM – 5:00 PM" },
    { day: "Sunday", time: "By Appointment Only" },
  ],
  serviceAreas: [
    "Mesa",
    "Phoenix",
    "Chandler",
    "Gilbert",
    "Tempe",
    "Scottsdale",
    "Queen Creek",
    "Apache Junction",
  ],
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    google: "https://google.com",
  },
};

/**
 * Schema.org `OpeningHoursSpecification` entries derived from `siteConfig.hours`,
 * ready to drop into any LocalBusiness / AutoRepair JSON-LD block.
 */
export const openingHoursSpecification = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ],
    opens: "07:00",
    closes: "19:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Saturday"],
    opens: "08:00",
    closes: "17:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Sunday"],
    description: "By appointment only",
  },
];

export const telHref = (phone: string) => `tel:${phone}`;
export const smsHref = (phone: string, body = "") =>
  `sms:${phone}${body ? `?&body=${encodeURIComponent(body)}` : ""}`;
export const whatsappHref = (phone: string, body = "") =>
  `https://wa.me/${phone}${body ? `?text=${encodeURIComponent(body)}` : ""}`;
