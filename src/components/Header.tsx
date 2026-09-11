"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Products", href: "/#products" },
  { label: "Platform", href: "/#platform" },
  { label: "How it works", href: "/#how" },
  { label: "About", href: "/#about" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);

  const navInk = isHome ? "#ffffff" : "#1D3557";

  return (
    <div
      className="sticky top-0 z-50 border-b backdrop-blur-[14px] transition-[background] duration-300 ease-in-out"
      style={{
        background: isHome ? "rgba(0,119,139,.88)" : "rgba(255,255,255,.92)",
        borderColor: isHome ? "rgba(255,255,255,.14)" : "rgba(29,53,87,.1)",
      }}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-[18px] md:px-10">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Image
            src={
              isHome ? "/assets/cortex-mark-white.png" : "/assets/cortex-mark.png"
            }
            alt="Cortex Innovative Solutions"
            width={30}
            height={30}
            className="block h-[30px] w-auto"
            priority
          />
          <span className="flex flex-col gap-[2px]">
            <span
              className="font-display text-[16.5px] leading-none font-extrabold tracking-[.04em]"
              style={{ color: navInk }}
            >
              CORTEX
            </span>
            <span
              className="text-[8.8px] leading-none font-semibold tracking-[.2em] uppercase opacity-[.72]"
              style={{ color: navInk }}
            >
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
              className="font-display text-[13.5px] font-semibold opacity-[.85] hover:opacity-100"
              style={{ color: navInk }}
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
            stroke={navInk}
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
        <nav
          className="flex flex-col gap-1 border-t px-5 pt-3 pb-5 md:hidden"
          style={{
            borderColor: isHome ? "rgba(255,255,255,.14)" : "rgba(29,53,87,.1)",
          }}
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display flex min-h-11 items-center text-[15px] font-semibold opacity-[.9]"
              style={{ color: navInk }}
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
