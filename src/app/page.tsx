import Link from "next/link";
import Image from "next/image";

const CAPABILITIES = [
  {
    title: "Data integration",
    body: "HL7 and FHIR interfaces into LIS, EMR and PACS, with reconciliation instead of re-entry.",
    icon: (
      <>
        <path d="M6 3v7a4 4 0 004 4h4" />
        <path d="M14 10l3 4-3 4" />
      </>
    ),
  },
  {
    title: "AI diagnostics support",
    body: "Variant tiering, protocol matching and flagging — always surfaced with its evidence.",
    icon: (
      <>
        <circle cx="12" cy="12" r="3.4" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      </>
    ),
  },
  {
    title: "Decision support",
    body: "Regimens, dose modifications and RT guidance rendered at the moment of the order.",
    icon: (
      <>
        <path d="M9 18h6M10 21h4" />
        <path d="M12 3a6 6 0 00-3.5 10.9V15h7v-1.1A6 6 0 0012 3z" />
      </>
    ),
  },
  {
    title: "Telehealth-ready",
    body: "Remote review, second opinion and tumour-board workflows on the same record.",
    icon: (
      <>
        <rect x="3" y="5" width="12" height="14" rx="2" />
        <path d="M15 10l6-3v10l-6-3" />
      </>
    ),
  },
  {
    title: "Clinical training",
    body: "Digital twins and case libraries that build reasoning, scored against real pathways.",
    icon: (
      <>
        <path d="M3 8l9-4 9 4-9 4-9-4z" />
        <path d="M7 11v5c0 1.4 2.2 3 5 3s5-1.6 5-3v-5" />
      </>
    ),
  },
  {
    title: "Governance & audit",
    body: "Role-based access, immutable audit trail, on-premise or cloud deployment.",
    icon: (
      <>
        <path d="M12 3l7 3v6c0 4.2-3 7.6-7 9-4-1.4-7-4.8-7-9V6l7-3z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
];

const STEPS = [
  {
    num: "01",
    title: "Map the pathway",
    body: "We sit with your team and trace one real diagnostic pathway end to end, marking every handoff where information is lost.",
  },
  {
    num: "02",
    title: "Deploy and integrate",
    body: "SyncDx and OncoTools go live against your interfaces. Nothing is re-keyed; nothing leaves your governance boundary.",
  },
  {
    num: "03",
    title: "Train and extend",
    body: "Clinicians and trainees onboard through Patient Twins, and we build the transformation roadmap from what the data shows.",
  },
];

// Values are em-dashes on purpose: no performance figures were supplied and
// none may be invented. Fill from real pilot data or cut the band.
const MEASURES = [
  {
    value: "—",
    label: "Diagnostic turnaround",
    note: "Requisition to actionable report, before vs. after.",
  },
  {
    value: "—",
    label: "Protocol adherence",
    note: "Orders matching the departmental standard.",
  },
  {
    value: "—",
    label: "Data completeness",
    note: "Structured fields captured at first pass.",
  },
  {
    value: "—",
    label: "Trainee case volume",
    note: "Twin sessions completed per rotation.",
  },
];

// Placeholder names/photos pending confirmation from the client.
const TEAM = [
  { name: "Name to confirm", role: "Clinical lead, oncology" },
  { name: "Name to confirm", role: "Head of engineering" },
  { name: "Name to confirm", role: "Informatics & integration" },
  { name: "Name to confirm", role: "Medical education" },
];

const CHIPS = ["HL7 / FHIR", "Role-based access", "Full audit trail", "On-prem or cloud"];

function NodeIcon({
  stroke,
  children,
}: {
  stroke: string;
  children: React.ReactNode;
}) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="1.7"
      strokeLinecap="round"
    >
      {children}
    </svg>
  );
}

export default function Home() {
  return (
    <div id="top">
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary">
        <div className="pointer-events-none absolute inset-0 opacity-50">
          <div className="animate-drift-17 absolute -top-[170px] -right-[100px] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(58,183,149,.85),rgba(58,183,149,0)_68%)]" />
          <div className="animate-drift-23 absolute -bottom-[180px] -left-[130px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_55%_45%,rgba(163,198,185,.7),rgba(163,198,185,0)_68%)]" />
          <div className="animate-drift-29 absolute top-[54%] left-[46%] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,.26),rgba(255,255,255,0)_66%)]" />
        </div>
        <Image
          src="/assets/cortex-mark-white.png"
          alt=""
          width={720}
          height={720}
          className="pointer-events-none absolute -right-[100px] -bottom-[170px] w-[720px] opacity-[.13]"
        />
        <div className="relative mx-auto max-w-[1240px] px-5 pt-[104px] pb-[116px] md:px-10">
          <div className="animate-rise max-w-[860px]">
            <div className="mb-[26px] text-[11.5px] leading-none font-semibold tracking-[.16em] uppercase text-tertiary">
              Cortex Innovative Solutions
            </div>
            <h1 className="font-display mb-[26px] text-4xl leading-[1.02] font-extrabold tracking-[-.03em] text-white md:text-5xl lg:text-[72px]">
              One connected nervous system for cancer care.
            </h1>
            <p className="mb-10 max-w-[54ch] text-[19.5px] leading-[1.6] text-white/84">
              Diagnostics, decisions and clinical training stop being separate
              tools. Cortex links them into a single ecosystem — so the signal
              reaches the clinician while it still matters.
            </p>
            <div className="flex flex-wrap items-center gap-[14px]">
              <Link
                href="/request-demo"
                className="font-display rounded-lg bg-secondary px-[30px] py-4 text-[15px] font-bold text-on-secondary transition-colors hover:bg-secondary-hover"
              >
                Request a Demo
              </Link>
              <Link
                href="/patient-twins"
                className="font-display rounded-lg border-[1.5px] border-white/42 bg-transparent px-7 py-[15px] text-[15px] font-bold text-white transition-colors hover:border-white"
              >
                Try Patient Twins →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem / product suite */}
      <section
        id="products"
        className="mx-auto max-w-[1240px] scroll-mt-[76px] px-5 pt-[84px] pb-[88px] md:px-10"
      >
        <h2 className="font-display mb-[6px] text-[34px] leading-[1.12] font-bold tracking-[-.025em] text-primary">
          The ecosystem
        </h2>
        <p className="mb-[46px] text-[15px] text-ink opacity-65">
          Each node feeds the next.
        </p>
        <div className="relative">
          <div className="absolute top-[34px] right-[8%] left-[8%] hidden h-[2px] bg-[linear-gradient(90deg,#00778B,#3AB795,#A3C6B9,#1D3557)] lg:block" />
          <div className="relative grid grid-cols-1 gap-[26px] md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-5 grid h-[70px] w-[70px] place-items-center rounded-full bg-primary shadow-[0_0_0_8px_#fff]">
                <NodeIcon stroke="#ffffff">
                  <path d="M5 7h5M5 12h9M5 17h6" />
                  <circle cx="18" cy="7" r="2.4" />
                  <circle cx="19" cy="17" r="2.4" />
                </NodeIcon>
              </div>
              <div className="font-display mb-[9px] text-lg font-bold text-ink">
                SyncDx
              </div>
              <div className="mb-[14px] text-[13.5px] leading-[1.62] text-ink opacity-[.74]">
                Precision diagnostic ordering, tracked from requisition to
                report.
              </div>
              <a
                href="https://syncdx.app/"
                className="font-display text-[12.5px] font-bold text-secondary hover:text-secondary-hover"
              >
                Open platform →
              </a>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-5 grid h-[70px] w-[70px] place-items-center rounded-full bg-secondary shadow-[0_0_0_8px_#fff]">
                <NodeIcon stroke="#ffffff">
                  <path d="M4 19V5m0 14h16" />
                  <path d="M8 15l3.5-5 3 3L20 7" />
                </NodeIcon>
              </div>
              <div className="font-display mb-[9px] text-lg font-bold text-ink">
                OncoTools
              </div>
              <div className="mb-[14px] text-[13.5px] leading-[1.62] text-ink opacity-[.74]">
                Protocols, dosing, calculators and radiotherapy guidance in one
                reference.
              </div>
              <a
                href="https://www.oncotools.app/"
                className="font-display text-[12.5px] font-bold text-secondary hover:text-secondary-hover"
              >
                Open platform →
              </a>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-5 grid h-[70px] w-[70px] place-items-center rounded-full bg-tertiary shadow-[0_0_0_8px_#fff]">
                <NodeIcon stroke="#1D3557">
                  <circle cx="9" cy="9" r="3.2" />
                  <circle cx="17" cy="16" r="3.2" />
                  <path d="M11.4 11.4l3.2 3.2M4 20c1-2.6 3-3.8 5-3.8" />
                </NodeIcon>
              </div>
              <div className="font-display mb-[9px] text-lg font-bold text-ink">
                Patient Twins
              </div>
              <div className="mb-[14px] text-[13.5px] leading-[1.62] text-ink opacity-[.74]">
                A digital patient the trainee interviews — it reveals only what
                is asked.
              </div>
              <Link
                href="/patient-twins"
                className="font-display text-[12.5px] font-bold text-secondary hover:text-secondary-hover"
              >
                Try the preview →
              </Link>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-5 grid h-[70px] w-[70px] place-items-center rounded-full bg-ink shadow-[0_0_0_8px_#fff]">
                <NodeIcon stroke="#ffffff">
                  <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
                  <circle cx="12" cy="12" r="4" />
                </NodeIcon>
              </div>
              <div className="font-display mb-[9px] text-lg font-bold text-ink">
                AI &amp; Transformation
              </div>
              <div className="mb-[14px] text-[13.5px] leading-[1.62] text-ink opacity-[.74]">
                We design and build the data foundation the rest of it stands
                on.
              </div>
              <Link
                href="/#contact"
                className="font-display text-[12.5px] font-bold text-secondary hover:text-secondary-hover"
              >
                Talk to us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Platform capabilities */}
      <section id="platform" className="scroll-mt-[76px] bg-surface-alt">
        <div className="mx-auto max-w-[1240px] px-5 pt-[84px] pb-[92px] md:px-10">
          <div className="grid grid-cols-1 items-start gap-[60px] lg:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)]">
            <div>
              <h2 className="font-display mb-[18px] text-[34px] leading-[1.12] font-bold tracking-[-.025em] text-primary">
                A platform, not a folder of tools.
              </h2>
              <p className="mb-[26px] text-[16.5px] leading-[1.65] text-ink opacity-[.78]">
                Every Cortex product sits on shared foundations: one identity
                model, one clinical data layer, one audit trail. That is what
                makes the suite behave like a single system in a real
                department.
              </p>
              <div className="flex flex-wrap gap-2">
                {CHIPS.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-md bg-[rgba(0,119,139,.09)] px-[13px] py-2 text-xs font-semibold text-primary"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2">
              {CAPABILITIES.map((cap) => (
                <div
                  key={cap.title}
                  className="rounded-xl border border-[rgba(29,53,87,.09)] bg-surface p-6 transition-[border-color,transform] duration-200 hover:-translate-y-[2px] hover:border-secondary"
                >
                  <div className="mb-[15px] grid h-9 w-9 place-items-center rounded-[10px] bg-[rgba(58,183,149,.14)]">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00778B"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {cap.icon}
                    </svg>
                  </div>
                  <div className="font-display mb-[7px] text-[15.5px] font-bold text-ink">
                    {cap.title}
                  </div>
                  <div className="text-[13px] leading-[1.58] text-ink opacity-[.72]">
                    {cap.body}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how"
        className="mx-auto max-w-[1240px] scroll-mt-[76px] px-5 pt-[88px] pb-[90px] md:px-10"
      >
        <h2 className="font-display mb-[46px] text-[34px] leading-[1.12] font-bold tracking-[-.025em] text-primary">
          How we work with you
        </h2>
        <div className="grid grid-cols-1 gap-[34px] md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.num} className="border-t-2 border-tertiary pt-6">
              <div className="mb-[14px] font-mono text-[13px] font-bold text-secondary">
                {s.num}
              </div>
              <div className="font-display mb-[11px] text-[21px] leading-[1.25] font-bold tracking-[-.015em] text-ink">
                {s.title}
              </div>
              <div className="text-[14.5px] leading-[1.65] text-ink opacity-[.74]">
                {s.body}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Measures band */}
      <section className="relative overflow-hidden bg-ink">
        <Image
          src="/assets/cortex-mark-white.png"
          alt=""
          width={520}
          height={520}
          className="pointer-events-none absolute -top-[90px] -left-[120px] w-[520px] opacity-[.09]"
        />
        <div className="relative mx-auto max-w-[1240px] px-5 pt-[76px] pb-20 md:px-10">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-10">
            <h2 className="font-display m-0 text-[32px] leading-[1.15] font-bold tracking-[-.02em] text-white">
              What we measure with partners
            </h2>
            <p className="m-0 max-w-[34ch] text-[13px] leading-[1.6] text-white/55">
              Figures are filled from each deployment&apos;s own baseline — we
              publish nothing we have not measured.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {MEASURES.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-white/12 bg-white/6 p-6"
              >
                <div className="font-display mb-[14px] text-[40px] leading-none font-extrabold text-secondary">
                  {m.value}
                </div>
                <div className="font-display mb-[6px] text-sm font-bold text-white">
                  {m.label}
                </div>
                <div className="text-[12.5px] leading-[1.55] text-white/60">
                  {m.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="mx-auto max-w-[1240px] scroll-mt-[76px] px-5 pt-[88px] pb-[90px] md:px-10"
      >
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <h2 className="font-display mb-5 text-[34px] leading-[1.12] font-bold tracking-[-.025em] text-primary">
              Built by clinicians and engineers, in the same room.
            </h2>
            <p className="mb-[18px] text-[16.5px] leading-[1.68] text-ink opacity-[.78]">
              Cortex exists because oncology software is usually designed at a
              distance from the clinic. Our products are specified on ward
              rounds and in tumour boards, then engineered to hospital-grade
              standards.
            </p>
            <p className="mb-[30px] text-[16.5px] leading-[1.68] text-ink opacity-[.78]">
              We work with departments, labs and health systems across
              diagnostics, decision support, and clinical education.
            </p>
            <Link
              href="/#contact"
              className="font-display border-b-2 border-secondary pb-[3px] text-[14.5px] font-bold text-primary hover:text-secondary"
            >
              Talk to the team
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {TEAM.map((t) => (
              <div key={t.role} className="rounded-xl bg-surface-alt p-5">
                {/* Photo slot — replace with a real image before launch */}
                <div className="mb-[14px] grid h-16 w-16 place-items-center rounded-full border border-dashed border-[rgba(29,53,87,.25)] text-[10px] font-semibold text-ink/40">
                  Photo
                </div>
                <div className="font-display mb-1 text-[14.5px] font-bold text-ink">
                  {t.name}
                </div>
                <div className="text-[12.5px] leading-[1.45] font-medium text-primary">
                  {t.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-[76px] bg-surface-alt">
        <div className="mx-auto max-w-[1240px] px-5 pt-20 pb-[88px] md:px-10">
          <div className="grid grid-cols-1 items-center gap-[60px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div>
              <h2 className="font-display mb-[18px] text-[34px] leading-[1.12] font-bold tracking-[-.025em] text-primary">
                See the suite against your own workflow.
              </h2>
              <p className="mb-7 text-[16.5px] leading-[1.65] text-ink opacity-[.78]">
                A 30-minute session: we walk one of your real diagnostic
                pathways through SyncDx and OncoTools, and show where the
                handoffs currently leak.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-[11px] text-sm font-medium text-ink">
                  <span className="block h-[6px] w-[6px] rounded-full bg-secondary" />
                  No integration work required for the demo
                </div>
                <div className="flex items-center gap-[11px] text-sm font-medium text-ink">
                  <span className="block h-[6px] w-[6px] rounded-full bg-secondary" />
                  Clinical and technical leads both welcome
                </div>
              </div>
            </div>
            <div className="rounded-[14px] border border-[rgba(29,53,87,.1)] bg-surface p-[30px] shadow-card">
              <Link
                href="/request-demo"
                className="font-display mb-4 block w-full rounded-lg bg-secondary p-4 text-center text-[15px] font-bold text-on-secondary transition-colors hover:bg-secondary-hover"
              >
                Open the demo request form
              </Link>
              <div className="text-center text-[12.5px] leading-[1.6] text-ink opacity-60">
                Or email{" "}
                {/* Placeholder address — confirm the real contact email before launch */}
                <a
                  href="mailto:hello@cortex-solutions.com"
                  className="text-primary hover:text-secondary"
                >
                  hello@cortex-solutions.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
