"use client";

import Link from "next/link";
import { useState } from "react";

type Prompt = {
  id: string;
  label: string;
  reply: string;
  release?: { name: string; result: string };
};

// Illustrative demo content written for the prototype — not a real patient.
// In production the twin is an LLM agent constrained to answer only the asked
// question; real cases must be authored and signed off by clinical staff.
const SCRIPT: Prompt[] = [
  {
    id: "hpi",
    label: "Tell me about the cough",
    reply:
      "It started about three months ago. Dry at first, now there is a little blood-streaked sputum in the mornings.",
  },
  {
    id: "weight",
    label: "Any weight loss?",
    reply: "About 9 kilos since March. I did not change anything about how I eat.",
  },
  {
    id: "smoke",
    label: "Smoking history?",
    reply: "I smoked a pack a day from nineteen until two years ago.",
  },
  {
    id: "pain",
    label: "Any chest pain?",
    reply: "A dull ache on the right side when I take a deep breath. Not constant.",
  },
  {
    id: "ct",
    label: "Order chest CT",
    reply: "The scan has been done — the report is on the right.",
    release: {
      name: "CT chest with contrast",
      result:
        "3.8 cm spiculated mass, right upper lobe. Two enlarged hilar nodes.",
    },
  },
  {
    id: "cbc",
    label: "Order CBC",
    reply: "Bloods are back.",
    release: {
      name: "Complete blood count",
      result: "Hb 11.2 g/dL, WBC 8.4, platelets 268 — otherwise unremarkable.",
    },
  },
  {
    id: "fam",
    label: "Family history?",
    reply: "My father had lung cancer. He was sixty-six.",
  },
];

type Message = { who: "me" | "twin"; text: string };

export default function PatientTwins() {
  const [asked, setAsked] = useState<string[]>([]);
  const [messages, setMessages] = useState<Message[]>([
    { who: "twin", text: "Good morning, doctor. I was told to come in about my cough." },
  ]);

  const released = SCRIPT.filter(
    (x) => x.release && asked.includes(x.id)
  ).map((x) => x.release!);
  const prompts = SCRIPT.filter((x) => !asked.includes(x.id));
  const progress = Math.min(100, Math.round((asked.length / SCRIPT.length) * 100));

  function ask(item: Prompt) {
    if (asked.includes(item.id)) return;
    setAsked((a) => [...a, item.id]);
    setMessages((m) => [
      ...m,
      { who: "me", text: item.label },
      { who: "twin", text: item.reply },
    ]);
  }

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
            Patient Twins
          </h1>
          <span className="text-[11.5px] font-semibold tracking-[.1em] uppercase text-secondary">
            Educational preview
          </span>
        </div>
        <p className="mb-[34px] max-w-[64ch] text-base leading-[1.6] text-ink opacity-75">
          The twin answers only what you ask, and releases an investigation only
          when you order it — the way a real history unfolds.
        </p>
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
          {/* Chat panel */}
          <div className="overflow-hidden rounded-[14px] border border-[rgba(29,53,87,.1)] bg-surface shadow-card">
            <div className="flex items-center gap-3 bg-primary px-5 py-4">
              <div className="font-display grid h-[34px] w-[34px] place-items-center rounded-full bg-white/20 text-[13px] font-bold text-white">
                MH
              </div>
              <div>
                <div className="font-display text-sm font-bold text-white">
                  Case 07 · M. H., 58
                </div>
                <div className="text-[11.5px] font-medium text-white/70">
                  Referred with weight loss and cough
                </div>
              </div>
            </div>
            <div
              aria-live="polite"
              className="flex max-h-[440px] min-h-[380px] flex-col gap-[14px] overflow-y-auto p-5"
            >
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[78%] px-4 py-[13px] text-sm leading-[1.55] ${
                    m.who === "me"
                      ? "self-end rounded-[12px_12px_3px_12px] bg-primary text-white"
                      : "self-start rounded-[12px_12px_12px_3px] bg-surface-alt text-ink"
                  }`}
                >
                  {m.text}
                </div>
              ))}
            </div>
            <div className="border-t border-[rgba(29,53,87,.1)] px-5 py-4">
              <div className="mb-[11px] text-[10.5px] font-semibold tracking-[.11em] uppercase text-ink opacity-50">
                Ask the twin
              </div>
              <div className="flex flex-wrap gap-[9px]">
                {prompts.map((q) => (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => ask(q)}
                    className="cursor-pointer rounded-full border border-[rgba(0,119,139,.2)] bg-surface-alt px-[15px] py-[9px] text-[12.5px] font-semibold text-primary transition-colors hover:border-secondary hover:bg-secondary hover:text-white"
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Side rail */}
          <div className="flex flex-col gap-4">
            <div className="rounded-[14px] border border-[rgba(29,53,87,.1)] bg-surface p-[22px]">
              <div className="font-display mb-[14px] text-[14.5px] font-bold text-ink">
                Released investigations
              </div>
              {released.length === 0 && (
                <div className="text-[13px] leading-[1.6] text-ink opacity-55">
                  Nothing released yet. Order an investigation and only that
                  result appears.
                </div>
              )}
              <div className="flex flex-col gap-[10px]">
                {released.map((r) => (
                  <div
                    key={r.name}
                    className="rounded-lg bg-surface-alt px-[14px] py-3"
                  >
                    <div className="font-display mb-1 text-[12.5px] font-bold text-primary">
                      {r.name}
                    </div>
                    <div className="text-[12.5px] leading-[1.5] text-ink opacity-80">
                      {r.result}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[14px] bg-ink p-[22px]">
              <div className="font-display mb-[9px] text-[14.5px] font-bold text-white">
                Session score
              </div>
              <div className="mb-4 text-[12.5px] leading-[1.6] text-white/70">
                Questions asked: {asked.length} · Investigations ordered:{" "}
                {released.length}
              </div>
              <div className="h-[6px] overflow-hidden rounded-full bg-white/15">
                <div
                  className="h-full rounded-full bg-secondary transition-[width] duration-[400ms] ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
