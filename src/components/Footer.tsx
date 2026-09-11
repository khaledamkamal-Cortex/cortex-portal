import Link from "next/link";
import Image from "next/image";
import { asset } from "@/lib/asset";

export default function Footer() {
  return (
    <footer className="bg-primary">
      <div className="mx-auto max-w-[1240px] px-5 pt-[52px] pb-11 md:px-10">
        <div className="flex flex-wrap justify-between gap-10 border-b border-white/16 pb-[34px]">
          <div className="max-w-[34ch]">
            <div className="mb-[15px] flex items-center gap-3">
              <Image
                src={asset("/assets/cortex-mark-white.png")}
                alt="Cortex Innovative Solutions"
                width={30}
                height={30}
                className="block h-[30px] w-auto"
              />
              <span className="flex flex-col gap-[3px]">
                <span className="font-display text-base leading-none font-extrabold tracking-[.04em] text-white">
                  CORTEX
                </span>
                <span className="text-[8.8px] leading-none font-semibold tracking-[.2em] uppercase text-tertiary">
                  Innovative Solutions
                </span>
              </span>
            </div>
            <div className="text-[13px] leading-[1.65] text-white/70">
              Diagnostics, decision support and clinical training for oncology.
            </div>
          </div>
          <div className="flex flex-wrap gap-16">
            <div className="flex flex-col gap-[10px]">
              <div className="mb-[2px] text-[10.5px] font-semibold tracking-[.13em] uppercase text-tertiary">
                Products
              </div>
              <a
                href="https://syncdx.app/"
                className="text-[13px] font-medium text-white/80 hover:text-secondary"
              >
                SyncDx
              </a>
              <a
                href="https://www.oncotools.app/"
                className="text-[13px] font-medium text-white/80 hover:text-secondary"
              >
                OncoTools
              </a>
              <Link
                href="/patient-twins"
                className="text-[13px] font-medium text-white/80 hover:text-secondary"
              >
                Patient Twins
              </Link>
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="mb-[2px] text-[10.5px] font-semibold tracking-[.13em] uppercase text-tertiary">
                Company
              </div>
              <Link
                href="/#about"
                className="text-[13px] font-medium text-white/80 hover:text-secondary"
              >
                About
              </Link>
              <Link
                href="/#contact"
                className="text-[13px] font-medium text-white/80 hover:text-secondary"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="pt-[22px] text-xs text-white/55">
          © 2026 Cortex Innovative Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
