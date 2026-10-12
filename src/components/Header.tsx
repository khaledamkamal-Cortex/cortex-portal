"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { asset } from "@/lib/asset";

const NAV_LINKS = [
  { label: "Products", href: "/#products" },
  { label: "Platform", href: "/#platform" },
  { label: "How it works", href: "/#how" },
  { label: "About", href: "/#about" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 border-b border-[rgba(29,53,87,.1)] bg-[rgba(255,255,255,.92)] backdrop-blur-[14px]">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-[18px] md:px-10">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Image
            src={asset("/assets/cortex-mark.png")}
            alt="Cortex Innovative Solutions"
            width={30}
            height={30}
            className="block h-[30px] w-auto"
            priority
          />
          <span className="flex flex-col gap-[2px]">
            <span className="font-display text-[16.5px] leading-none font-extrabold tracking-[.04em] text-ink">
              CORTEX
            </span>
            <span className="text-[8.8px] leading-none font-semibold tracking-[.2em] uppercase text-ink opacity-[.72]">
              Innovative Solutions
            </span>
          </span>
        </Link>

        {/* Desktop / tablet nav */}
        <nav className="hidden items-center gap-[30px] md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-display text-[13.5px] font-semibold text-ink opacity-[.85] hover:opacity-100"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/request-demo"
            aria-current={pathname === "/request-demo" ? "page" : undefined}
            className="font-display rounded-[7px] bg-secondary px-5 py-[11px] text-[13.5px] font-bold text-on-secondary transition-colors hover:bg-secondary-hover"
          >
            Request a Demo
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center md:hidden"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1D3557"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav className="flex flex-col gap-1 border-t border-[rgba(29,53,87,.1)] px-5 pt-3 pb-5 md:hidden">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display flex min-h-11 items-center text-[15px] font-semibold text-ink opacity-[.9]"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/request-demo"
            onClick={() => setOpen(false)}
            className="font-display mt-3 flex min-h-11 items-center justify-center rounded-[7px] bg-secondary px-5 text-[13.5px] font-bold text-on-secondary transition-colors hover:bg-secondary-hover"
          >
            Request a Demo
          </Link>
        </nav>
      )}
    </div>
  );
}
