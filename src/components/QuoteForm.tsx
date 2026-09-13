"use client";

import { useState, type FormEvent } from "react";

type FormState = {
  name: string;
  phone: string;
  damage: string;
};

const initialState: FormState = { name: "", phone: "", damage: "" };

export default function QuoteForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [fileNames, setFileNames] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files ? Array.from(e.target.files) : [];
    setFileNames(files.map((file) => file.name));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    // Simulated submission — wire this up to your CRM, email API, or
    // form backend (e.g. Formspree, a serverless function) in production.
    setTimeout(() => {
      setStatus("success");
      setForm(initialState);
      setFileNames([]);
    }, 900);
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-cta-500/30 bg-cta-500/10 p-8 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cta-500 text-2xl text-white">
          ✓
        </span>
        <h3 className="text-xl font-bold text-white">Request received!</h3>
        <p className="max-w-sm text-sm text-slate-300">
          Thanks — a technician will text or call you shortly with your
          instant quote. For faster service, feel free to call or text us
          directly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-semibold text-cta-400 underline-offset-4 hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-sm sm:p-8"
    >
      <div>
        <h3 className="text-xl font-bold text-white">
          Get Your Free Instant Quote
        </h3>
        <p className="mt-1 text-sm text-slate-300">
          Tell us about the damage and we&apos;ll text you back with a price
          — usually within the hour.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className="w-full rounded-lg border border-white/15 bg-brand-950/60 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-cta-500 focus:outline-none focus:ring-2 focus:ring-cta-500/40"
          />
        </Field>

        <Field label="Phone Number" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="(480) 555-0192"
            className="w-full rounded-lg border border-white/15 bg-brand-950/60 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-cta-500 focus:outline-none focus:ring-2 focus:ring-cta-500/40"
          />
        </Field>
      </div>

      <Field label="Describe the Damage" htmlFor="damage">
        <textarea
          id="damage"
          name="damage"
          required
          rows={3}
          value={form.damage}
          onChange={handleChange}
          placeholder="e.g. Small dent on the rear passenger door, about the size of a golf ball."
          className="w-full resize-none rounded-lg border border-white/15 bg-brand-950/60 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-cta-500 focus:outline-none focus:ring-2 focus:ring-cta-500/40"
        />
      </Field>

      <Field label="Upload Photos (optional)" htmlFor="photos">
        <label
          htmlFor="photos"
          className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-white/20 bg-brand-950/40 px-4 py-6 text-center transition-colors hover:border-cta-500/60"
        >
          <UploadIcon className="h-6 w-6 text-slate-400" />
          <span className="text-sm font-medium text-slate-300">
            {fileNames.length > 0
              ? `${fileNames.length} file${fileNames.length > 1 ? "s" : ""} selected`
              : "Tap to upload photos of the damage"}
          </span>
          <span className="text-xs text-slate-500">JPG, PNG up to 10MB</span>
          <input
            id="photos"
            name="photos"
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            className="sr-only"
          />
        </label>
        {fileNames.length > 0 && (
          <ul className="mt-2 flex flex-wrap gap-2">
            {fileNames.map((name) => (
              <li
                key={name}
                className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300"
              >
                {name}
              </li>
            ))}
          </ul>
        )}
      </Field>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-cta-500 px-6 py-3.5 text-base font-bold text-white shadow-glow transition-colors hover:bg-cta-600 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Sending..." : "Get My Free Quote"}
      </button>
      <p className="text-center text-xs text-slate-500">
        No obligation. We typically respond within 30–60 minutes during
        business hours.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-slate-200">
        {label}
      </label>
      {children}
    </div>
  );
}

function UploadIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.5v1.5A2.25 2.25 0 0 0 5.25 20.25h13.5A2.25 2.25 0 0 0 21 18v-1.5M7.5 8.25 12 3.75l4.5 4.5M12 3.75v12.75"
      />
    </svg>
  );
}
