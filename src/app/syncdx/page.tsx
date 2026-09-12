import type { Metadata } from "next";
import ProductPage from "@/components/ProductPage";

export const metadata: Metadata = {
  title: "SyncDx — Cortex Innovative Solutions",
  description:
    "Precision diagnostic ordering, tracked from requisition to report.",
};

export default function SyncDx() {
  return (
    <ProductPage
      eyebrow="Precision diagnostics"
      name="SyncDx"
      intro="Precision diagnostic ordering, tracked from requisition to report. Doctors order, labs process, and results come back onto the same record — no fax, no re-keying, no lost requisitions."
      shots={[
        {
          src: "/assets/screenshots/syncdx.png",
          alt: "SyncDx doctor portal sign-in",
          url: "syncdx.app",
          caption: "The doctor portal — sign in to manage patients and orders.",
        },
        {
          src: "/assets/screenshots/syncdx-safety.png",
          alt: "SyncDx patient safety and privacy commitments",
          url: "syncdx.app/safety",
          caption:
            "Patient safety and privacy commitments, published in plain language.",
        },
      ]}
      features={[
        {
          title: "Requisition to report",
          body: "Every order is tracked through collection, processing and reporting, so nothing goes quiet without someone seeing it.",
          icon: (
            <>
              <path d="M6 3v7a4 4 0 004 4h4" />
              <path d="M14 10l3 4-3 4" />
            </>
          ),
        },
        {
          title: "Role-based portals",
          body: "Doctors, laboratories, administrators and patients each see exactly what their role needs — nothing more.",
          icon: (
            <>
              <circle cx="9" cy="8" r="3.2" />
              <path d="M3.5 20c1-3 3.2-4.5 5.5-4.5s4.5 1.5 5.5 4.5" />
              <path d="M16 8h5M16 12h5" />
            </>
          ),
        },
        {
          title: "Safeguards against misidentification",
          body: "Software that supports — never replaces — professional judgment, with checks against misidentification and data loss.",
          icon: (
            <>
              <path d="M12 3l7 3v6c0 4.2-3 7.6-7 9-4-1.4-7-4.8-7-9V6l7-3z" />
              <path d="M9 12l2 2 4-4" />
            </>
          ),
        },
        {
          title: "Security & accountability",
          body: "Encryption, strong authentication, row-level access control and tamper-evident audit logging across the platform.",
          icon: (
            <>
              <rect x="5" y="10" width="14" height="10" rx="2" />
              <path d="M8 10V7a4 4 0 018 0v3" />
            </>
          ),
        },
      ]}
      ctaHeading="See SyncDx against your own pathway."
      ctaBody="Open the live platform, or book a 30-minute session and we will walk one of your real diagnostic pathways through it."
      ctaHref="https://syncdx.app/"
      ctaLabel="Open SyncDx →"
      secondaryCta={{ href: "/request-demo", label: "Request a demo" }}
    />
  );
}
