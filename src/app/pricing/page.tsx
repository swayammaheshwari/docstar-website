import { Metadata } from "next";

type Plan = {
  title: string;
  price: string;
  originalPrice?: string;
  priceNote?: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
};

const plans: Plan[] = [
  {
    title: "Free Plan",
    originalPrice: "$50/month",
    price: "$0",
    priceNote: "Free forever",
    description:
      "Sign up now and publish knowledge bases, blogs, and API documentation without limits under our fair usage policy.",
    features: [
      "Block-based editor with integrations",
      "Spaces & Collection: Unlimited",
      "API playground",
      "Custom Domain",
      "Redirect management",
      "Site Customization",
      "User feedback & site insights",
      "Built in SEO",
      "Published Versions History",
      "Real Time Collaboration",
      "Import/Export",
      "Members: 1",
      "Pages: Unlimited",
      "Trash",
      "Full text search",
      "Articles bulk actions",
      "Inbuilt AI",
    ],
    ctaLabel: "Sign up now",
    ctaHref: "https://app.docstar.io/login",
    secondaryCtaLabel: "Learn more",
    secondaryCtaHref: "/support",
  },
  {
    title: "Pro Plan",
    price: "$25",
    priceNote: "Per month · All features",
    description: "Members: 10 included. Add more teammates anytime for $5 per user.",
    features: [
      "Everything in the Free Plan",
      "Members: 10 included",
      "Add more users for $5/user",
    ],
    ctaLabel: "Upgrade to Pro",
    ctaHref: "https://app.docstar.io/login",
  },
];

// Optional metadata for SEO
export const metadata: Metadata = {
  title: "Pricing - Docstar",
  description:
    "Documentation without barriers. Publish knowledge bases, blogs, and API docs freely with Docstar pricing.",
};

export default function PricingPage() {
  return (
    <div className="pricing-page bg-white py-20 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-5xl border border-neutral-900 bg-white px-6 py-10 sm:px-10 sm:py-14">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900">
            Documentation Without Barriers
          </h2>
          <p className="mt-3 text-base text-neutral-600">
            Limits slowing you down? Not here. With Docstar, you can publish knowledge bases, blogs, and API documentation freely.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-5">
          {plans.map((plan, index) => (
            <article
              key={index}
              className={`flex h-full flex-col justify-between border border-neutral-900 bg-white p-6 sm:p-8 transition-shadow duration-200 hover:shadow-md ${
                index === 0 ? "md:col-span-3" : "md:col-span-2"
              }`}
            >
              <div>
                <h3 className="text-2xl font-semibold text-neutral-900">
                  {plan.title}
                </h3>
                <div className="mt-2 flex items-baseline gap-2 text-neutral-800">
                  {plan.originalPrice && (
                    <span className="text-sm font-medium text-neutral-500 line-through">
                      {plan.originalPrice}
                    </span>
                  )}
                  <span className="text-3xl font-bold text-neutral-900">{plan.price}</span>
                  {plan.priceNote && (
                  <span className="text-sm text-neutral-500">{plan.priceNote}</span>
                  )}
                </div>
                <p className="mt-3 text-sm text-neutral-600">{plan.description}</p>

                <div className="mt-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-800">
                    What's Included
                  </h4>
                  <ul
                    className={`mt-4 ${
                      index === 0
                        ? "grid grid-cols-1 gap-3 text-sm text-neutral-700 sm:grid-cols-2"
                        : "space-y-2 text-sm text-neutral-600"
                    }`}
                  >
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1 h-2.5 w-2.5 rounded-sm bg-neutral-900" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={plan.ctaHref}
                  className="rounded-md bg-neutral-900 px-5 py-2 text-sm font-semibold text-white transition-colors duration-150 hover:bg-neutral-800"
                >
                  {plan.ctaLabel}
                </a>
                {plan.secondaryCtaLabel && plan.secondaryCtaHref && (
                  <a
                    href={plan.secondaryCtaHref}
                    className="rounded-md border border-neutral-900 px-5 py-2 text-sm font-semibold text-neutral-900 transition-colors duration-150 hover:bg-neutral-900 hover:text-white"
                  >
                    {plan.secondaryCtaLabel}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
