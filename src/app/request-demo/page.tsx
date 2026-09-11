"use client";

import Link from "next/link";
import { useState } from "react";

const INTERESTS = ["SyncDx", "OncoTools", "Patient Twins", "AI & transformation"];

const inputClass =
  "rounded-lg border border-[rgba(29,53,87,.18)] px-[14px] py-3 text-sm text-ink outline-none placeholder:text-ink/40 focus:border-secondary";

export default function RequestDemo() {
  const [form, setForm] = useState({ name: "", email: "", org: "", note: "" });
  const [picked, setPicked] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const ready = Boolean(form.name && form.email && form.org);

  const set =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  function togglePick(label: string) {
    setPicked((p) =>
      p.includes(label) ? p.filter((x) => x !== label) : [...p, label]
    );
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    // TODO before launch: POST to a real endpoint with server-side validation
    // (email format, spam protection) and pending/error states.
    if (ready) {
      setSubmitted(true);
      window.scrollTo(0, 0);
    }
  }

  return (
    <div className="min-h-[calc(100vh-65px)] bg-surface-alt">
      <div className="mx-auto max-w-[820px] px-5 pt-14 pb-20 md:px-10">
        <Link
          href="/"
          className="mb-[26px] inline-block text-[13px] font-semibold text-primary hover:text-secondary"
        >
          ← Back to portal
        </Link>

        {submitted ? (
          <div className="rounded-2xl border border-[rgba(29,53,87,.1)] bg-surface px-6 py-14 text-center shadow-card md:px-11">
            <div className="mx-auto mb-[22px] grid h-[58px] w-[58px] place-items-center rounded-full bg-[rgba(58,183,149,.15)]">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3AB795"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 12.5l5 5L20 6.5" />
              </svg>
            </div>
            <h1 className="font-display mb-[14px] text-[30px] leading-[1.15] font-bold tracking-[-.02em] text-primary">
              Request received.
            </h1>
            <p className="mb-7 text-[15.5px] leading-[1.65] text-ink opacity-75">
              A member of the clinical team will reply within one working day to
              schedule your session.
            </p>
            <Link
              href="/"
              className="font-display inline-block rounded-lg bg-secondary px-[26px] py-[14px] text-[14.5px] font-bold text-on-secondary transition-colors hover:bg-secondary-hover"
            >
              Back to portal
            </Link>
          </div>
        ) : (
          <div>
            <h1 className="font-display mb-[14px] text-[34px] leading-[1.08] font-extrabold tracking-[-.03em] text-primary md:text-[42px]">
              Request a demo
            </h1>
            <p className="mb-[34px] max-w-[56ch] text-base leading-[1.6] text-ink opacity-75">
              Tell us where you sit and which part of the suite matters most. We
              will bring the relevant clinical lead.
            </p>
            <form
              onSubmit={submit}
              noValidate
              className="flex flex-col gap-5 rounded-2xl border border-[rgba(29,53,87,.1)] bg-surface p-6 shadow-card md:p-[34px]"
            >
              <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2">
                <div className="flex flex-col gap-[7px]">
                  <label
                    htmlFor="name"
                    className="text-[12.5px] font-semibold text-ink"
                  >
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    required
                    value={form.name}
                    onChange={set("name")}
                    placeholder="Dr. Jane Doe"
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-[7px]">
                  <label
                    htmlFor="email"
                    className="text-[12.5px] font-semibold text-ink"
                  >
                    Work email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={set("email")}
                    placeholder="name@hospital.org"
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[7px]">
                <label
                  htmlFor="org"
                  className="text-[12.5px] font-semibold text-ink"
                >
                  Organisation
                </label>
                <input
                  id="org"
                  name="organisation"
                  autoComplete="organization"
                  required
                  value={form.org}
                  onChange={set("org")}
                  placeholder="Institution or company"
                  className={inputClass}
                />
              </div>
              <fieldset className="flex flex-col gap-[10px] border-0 p-0">
                <legend className="mb-[10px] p-0 text-[12.5px] font-semibold text-ink">
                  Interested in
                </legend>
                <div className="flex flex-wrap gap-[9px]">
                  {INTERESTS.map((label) => {
                    const on = picked.includes(label);
                    return (
                      <button
                        key={label}
                        type="button"
                        aria-pressed={on}
                        onClick={() => togglePick(label)}
                        className={`cursor-pointer rounded-full border px-4 py-[9px] text-[12.5px] font-semibold transition-colors ${
                          on
                            ? "border-secondary bg-secondary text-white"
                            : "border-[rgba(0,119,139,.2)] bg-surface-alt text-primary"
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </fieldset>
              <div className="flex flex-col gap-[7px]">
                <label
                  htmlFor="note"
                  className="text-[12.5px] font-semibold text-ink"
                >
                  What would you like to see?
                </label>
                <textarea
                  id="note"
                  name="note"
                  rows={4}
                  value={form.note}
                  onChange={set("note")}
                  placeholder="A pathway, a bottleneck, a training need…"
                  className={`${inputClass} resize-y leading-[1.55]`}
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-5">
                <span className="max-w-[38ch] text-xs leading-[1.5] text-ink opacity-55">
                  {ready
                    ? "We reply within one working day."
                    : "Name, email and organisation are required."}
                </span>
                <button
                  type="submit"
                  className="font-display cursor-pointer rounded-lg px-[30px] py-[15px] text-[15px] font-bold text-on-secondary transition-colors"
                  style={{
                    background: ready ? "#3AB795" : "rgba(58,183,149,.45)",
                  }}
                >
                  Send request
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
