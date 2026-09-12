import Link from "next/link";
import BrowserFrame from "@/components/BrowserFrame";

export type ProductShot = {
  src: string;
  alt: string;
  url: string;
  caption?: string;
};

export type ProductFeature = {
  title: string;
  body: string;
  icon: React.ReactNode;
};

export default function ProductPage({
  eyebrow,
  name,
  intro,
  shots,
  features,
  ctaHeading,
  ctaBody,
  ctaHref,
  ctaLabel,
  secondaryCta,
  footnote,
}: {
  eyebrow: string;
  name: string;
  intro: string;
  shots: ProductShot[];
  features: ProductFeature[];
  ctaHeading: string;
  ctaBody: string;
  ctaHref: string;
  ctaLabel: string;
  secondaryCta?: { href: string; label: string };
  footnote?: string;
}) {
  return (
    <div className="min-h-[calc(100vh-65px)] bg-surface-alt">
      <div className="mx-auto max-w-[1100px] px-5 pt-[52px] pb-[70px] md:px-10">
        <Link
          href="/"
          className="mb-[26px] inline-block text-[13px] font-semibold text-primary hover:text-secondary"
        >
          ← Back to portal
        </Link>
        <div className="mb-2 flex flex-wrap items-end justify-between gap-[30px]">
          <h1 className="font-display m-0 text-[32px] leading-[1.08] font-extrabold tracking-[-.03em] text-primary md:text-[40px]">
            {name}
          </h1>
          <span className="text-[11.5px] font-semibold tracking-[.1em] uppercase text-secondary">
            {eyebrow}
          </span>
        </div>
        <p className="mb-[34px] max-w-[64ch] text-base leading-[1.6] text-ink opacity-75">
          {intro}
        </p>

        <div
          className={`mb-12 grid grid-cols-1 gap-6 ${
            shots.length > 1 ? "lg:grid-cols-2" : ""
          }`}
        >
          {shots.map((s) => (
            <BrowserFrame key={s.src} {...s} />
          ))}
        </div>

        <div className="mb-12 grid grid-cols-1 gap-[18px] md:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
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
                  {f.icon}
                </svg>
              </div>
              <div className="font-display mb-[7px] text-[15.5px] font-bold text-ink">
                {f.title}
              </div>
              <div className="text-[13px] leading-[1.58] text-ink opacity-[.72]">
                {f.body}
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-[14px] border border-[rgba(29,53,87,.1)] bg-surface p-[30px] shadow-card">
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[minmax(0,1fr)_auto]">
            <div>
              <div className="font-display mb-2 text-[21px] leading-[1.25] font-bold tracking-[-.015em] text-ink">
                {ctaHeading}
              </div>
              <p className="m-0 max-w-[58ch] text-sm leading-[1.6] text-ink opacity-70">
                {ctaBody}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-[14px]">
              <a
                href={ctaHref}
                className="font-display rounded-lg bg-secondary px-[26px] py-[14px] text-[14.5px] font-bold text-on-secondary transition-colors hover:bg-secondary-hover"
              >
                {ctaLabel}
              </a>
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="font-display rounded-lg border-[1.5px] border-[rgba(29,53,87,.25)] px-6 py-[13px] text-[14.5px] font-bold text-ink transition-colors hover:border-secondary hover:text-primary"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          </div>
        </div>

        {footnote && (
          <p className="mt-6 mb-0 text-[12.5px] leading-[1.6] text-ink opacity-55">
            {footnote}
          </p>
        )}
      </div>
    </div>
  );
}
