import Image from "next/image";
import { asset } from "@/lib/asset";

export default function BrowserFrame({
  src,
  alt,
  url,
  caption,
}: {
  src: string;
  alt: string;
  url: string;
  caption?: string;
}) {
  return (
    <figure className="m-0">
      <div className="overflow-hidden rounded-[14px] border border-[rgba(29,53,87,.1)] bg-surface shadow-card">
        <div className="flex items-center gap-3 border-b border-[rgba(29,53,87,.09)] bg-surface px-4 py-[10px]">
          <span className="flex gap-[6px]">
            <span className="h-[10px] w-[10px] rounded-full bg-tertiary" />
            <span className="h-[10px] w-[10px] rounded-full bg-secondary" />
            <span className="h-[10px] w-[10px] rounded-full bg-primary" />
          </span>
          <span className="rounded-md bg-surface-alt px-3 py-1 font-mono text-[11.5px] text-ink opacity-70">
            {url}
          </span>
        </div>
        <Image
          src={asset(src)}
          alt={alt}
          width={1600}
          height={1000}
          className="block w-full"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-[12.5px] leading-[1.5] text-ink opacity-55">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
