import { testimonials } from "@/lib/testimonials";

export default function Testimonials() {
  const average =
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;

  return (
    <section id="testimonials" className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-700">
            Customer Reviews
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
            What Our Customers Are Saying
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <StarRating rating={average} />
            <span className="text-sm font-semibold text-slate-700">
              {average.toFixed(1)} out of 5
            </span>
            <span className="text-sm text-slate-400">
              ({testimonials.length} reviews)
            </span>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={`${testimonial.name}-${testimonial.date}`}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <StarRating rating={testimonial.rating} />
              <blockquote className="mt-4 flex-1 text-sm leading-6 text-slate-600">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-semibold text-brand-950">
                  {testimonial.name}
                </span>
                <span className="text-slate-400"> — {testimonial.city}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function StarRating({ rating }: { rating: number }) {
  const rounded = Math.round(rating);
  return (
    <div
      className="flex items-center gap-0.5"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} filled={i < rounded} />
      ))}
    </div>
  );
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`h-4 w-4 ${filled ? "text-cta-500" : "text-slate-300"}`}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1 1 5.79L10 14.9l-5.21 2.74 1-5.79-4.21-4.1 5.82-.85L10 1.5z" />
    </svg>
  );
}
