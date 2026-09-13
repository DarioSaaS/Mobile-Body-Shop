import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.businessName}, including information on cookies, third-party advertising (Google AdSense), and data collection.`,
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="prose-article mx-auto max-w-3xl px-4 text-slate-800 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-brand-950">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: August 23, 2026</p>

        <p className="mt-8">
          This Privacy Policy describes how {siteConfig.businessName}{" "}
          (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses,
          and shares information when you visit our website, request a
          quote, or otherwise interact with us. By using this site, you agree
          to the terms described below.
        </p>

        <h2 className="mt-10 text-xl font-bold text-brand-950">
          Information We Collect
        </h2>
        <p>
          When you submit a quote request, we collect the information you
          voluntarily provide, such as your name, phone number, damage
          description, and any photos you choose to upload. We use this
          information solely to prepare and deliver your repair quote and to
          follow up regarding scheduling.
        </p>
        <p>
          Our website may also automatically collect standard technical
          information, such as your browser type, device type, general
          location (city/region), and pages visited, through cookies and
          similar technologies described below.
        </p>

        <h2 className="mt-10 text-xl font-bold text-brand-950">
          Cookies &amp; Advertising (Google AdSense)
        </h2>
        <p>
          We use Google AdSense to display advertisements on our blog
          articles. Google, as a third-party vendor, uses cookies to serve
          ads based on your prior visits to this and other websites. Google&apos;s
          use of advertising cookies enables it and its partners to serve ads
          based on your visit to our site and/or other sites on the internet.
        </p>
        <p>
          You may opt out of personalized advertising by visiting{" "}
          <a
            href="https://adssettings.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand-700 underline"
          >
            Google Ads Settings
          </a>
          . Alternatively, you can visit{" "}
          <a
            href="https://www.aboutads.info/choices/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand-700 underline"
          >
            www.aboutads.info
          </a>{" "}
          to opt out of third-party vendor use of cookies for personalized
          advertising.
        </p>

        <h2 className="mt-10 text-xl font-bold text-brand-950">
          How We Use Your Information
        </h2>
        <ul className="list-disc pl-6">
          <li>To respond to quote requests and schedule appointments.</li>
          <li>To improve our website, services, and customer experience.</li>
          <li>To send appointment confirmations or follow-up communications via call, text, or email.</li>
          <li>To display relevant advertising through third-party ad networks such as Google AdSense.</li>
        </ul>

        <h2 className="mt-10 text-xl font-bold text-brand-950">
          Sharing of Information
        </h2>
        <p>
          We do not sell your personal information. We may share limited
          information with trusted third-party service providers (such as
          scheduling or communication tools) solely to operate our business,
          and with advertising partners (such as Google) in the form of
          anonymized or cookie-based data as described above.
        </p>

        <h2 className="mt-10 text-xl font-bold text-brand-950">
          Your Choices
        </h2>
        <p>
          You may decline to provide personal information, though this may
          limit our ability to respond to your quote request. You may also
          disable cookies through your browser settings, though some site
          features may not function properly as a result.
        </p>

        <h2 className="mt-10 text-xl font-bold text-brand-950">
          Contact Us
        </h2>
        <p>
          If you have questions about this Privacy Policy, please contact us
          at {siteConfig.email} or call {siteConfig.phoneDisplay}.
        </p>
      </div>
    </section>
  );
}
