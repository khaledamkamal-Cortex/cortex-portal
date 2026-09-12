import type { Metadata } from "next";
import ProductPage from "@/components/ProductPage";

export const metadata: Metadata = {
  title: "CasesAlive — Cortex Innovative Solutions",
  description:
    "A teaching clinic of simulated oncology patients: consult, commit to a plan, and get a blinded case review.",
};

export default function CasesAlive() {
  return (
    <ProductPage
      eyebrow="Clinical training"
      name="CasesAlive"
      intro="A teaching clinic that never closes. Trainees consult simulated oncology patients — take the history, examine, order investigations and read the results as real documents — then commit to a plan against the clock. A blinded reviewer scores the consultation and hands back a case review."
      shots={[
        {
          src: "/assets/screenshots/casesalive.png",
          alt: "CasesAlive teaching clinic landing page",
          url: "digital-twin-three-kappa.vercel.app",
          caption:
            "The clinic that never closes — waiting room, consultation room, case review.",
        },
      ]}
      features={[
        {
          title: "Waiting room",
          body: "Assigned patients and a running view of how the trainee's clinic is going across the rotation.",
          icon: (
            <>
              <circle cx="9" cy="9" r="3.2" />
              <circle cx="17" cy="16" r="3.2" />
              <path d="M11.4 11.4l3.2 3.2M4 20c1-2.6 3-3.8 5-3.8" />
            </>
          ),
        },
        {
          title: "Consultation room",
          body: "History, examination and investigations that unfold only as they are asked for — with a plan committed against the clock.",
          icon: (
            <>
              <path d="M9 18h6M10 21h4" />
              <path d="M12 3a6 6 0 00-3.5 10.9V15h7v-1.1A6 6 0 0012 3z" />
            </>
          ),
        },
        {
          title: "Results as real documents",
          body: "Reports read the way they arrive in practice — as documents to interpret, not multiple-choice stems.",
          icon: (
            <>
              <path d="M7 3h7l4 4v14H7z" />
              <path d="M14 3v4h4M10 12h5M10 16h5" />
            </>
          ),
        },
        {
          title: "Blinded case review",
          body: "A blinded reviewer scores each consultation: what went well, what was missed, and what to do differently.",
          icon: (
            <>
              <path d="M3 8l9-4 9 4-9 4-9-4z" />
              <path d="M7 11v5c0 1.4 2.2 3 5 3s5-1.6 5-3v-5" />
            </>
          ),
        },
      ]}
      ctaHeading="Step into the clinic."
      ctaBody="Enter the live teaching clinic, or try the two-minute Patient Twins preview right here in the portal."
      ctaHref="https://digital-twin-three-kappa.vercel.app/"
      ctaLabel="Enter the clinic →"
      secondaryCta={{ href: "/patient-twins", label: "Try the preview" }}
      footnote="Educational simulation with fictional patients — not clinical guidance."
    />
  );
}
