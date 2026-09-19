import { homeFaq } from "@/lib/faq";

export default function FaqSection() {
  return (
    <section id="faq" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-700">
            FAQ
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
            Frequently Asked Questions
          </p>
          <p className="mt-4 text-lg text-slate-600">
            Everything you need to know about our mobile dent, scratch, and
            paint repair service.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4">
          {homeFaq.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-slate-200 bg-white p-5 open:shadow-sm sm:p-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-brand-950 marker:content-none">
                {item.question}
                <PlusMinusIcon className="h-5 w-5 flex-shrink-0 text-brand-700 transition-transform group-open:rotate-45" />
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlusMinusIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M10 4v12M4 10h12" />
    </svg>
  );
}
