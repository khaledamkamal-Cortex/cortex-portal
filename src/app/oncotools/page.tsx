import type { Metadata } from "next";
import ProductPage from "@/components/ProductPage";

export const metadata: Metadata = {
  title: "OncoTools — Cortex Innovative Solutions",
  description:
    "Protocols, dosing, calculators and radiotherapy guidance in one clinical reference.",
};

export default function OncoTools() {
  return (
    <ProductPage
      eyebrow="Clinical decision support"
      name="OncoTools"
      intro="Protocols, dosing, calculators and radiotherapy guidance in one reference — rendered at the moment of the order, not buried in a PDF folder. Built for the oncologist on a ward round, not the committee room."
      shots={[
        {
          src: "/assets/screenshots/oncotools.png",
          alt: "OncoTools clinician portal login",
          url: "oncotools.app",
          caption: "The clinician portal — one login to the whole reference.",
        },
      ]}
      features={[
        {
          title: "Treatment protocols",
          body: "Regimens with schedules, pre-medication and monitoring, kept to the departmental standard you actually use.",
          icon: (
            <>
              <path d="M5 7h5M5 12h9M5 17h6" />
              <circle cx="18" cy="7" r="2.4" />
              <circle cx="19" cy="17" r="2.4" />
            </>
          ),
        },
        {
          title: "Dosing & calculators",
          body: "BSA, renal dosing, dose modifications and toxicity adjustments — computed where the decision is made.",
          icon: (
            <>
              <rect x="5" y="3" width="14" height="18" rx="2" />
              <path d="M9 7h6M9 12h.01M12 12h.01M15 12h.01M9 16h.01M12 16h.01M15 16h.01" />
            </>
          ),
        },
        {
          title: "Radiotherapy guidance",
          body: "Fractionation and RT reference alongside the systemic options, so the whole plan is argued in one place.",
          icon: (
            <>
              <circle cx="12" cy="12" r="3.4" />
              <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
            </>
          ),
        },
        {
          title: "Always current",
          body: "One reference, centrally updated — no out-of-date pocket cards or forked spreadsheets on the ward.",
          icon: (
            <>
              <path d="M20 12a8 8 0 11-2.3-5.6" />
              <path d="M20 4v4h-4" />
            </>
          ),
        },
      ]}
      ctaHeading="Put the reference where the orders happen."
      ctaBody="Open the live platform, or book a 30-minute session and we will show OncoTools against your own protocols."
      ctaHref="https://www.oncotools.app/"
      ctaLabel="Open OncoTools →"
      secondaryCta={{ href: "/request-demo", label: "Request a demo" }}
    />
  );
}
