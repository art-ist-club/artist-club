"use client";

import { getActiveSocialLinks, type SocialPlatform } from "@/lib/social";
import { SocialPlatformIcon } from "@/components/social/SocialPlatformIcon";

const followPlatforms: SocialPlatform[] = ["instagram", "tiktok", "youtube"];

/** Premium icon + label buttons for Coming Soon follow section. */
export default function SocialFollowButtons() {
  const items = getActiveSocialLinks().filter((link) =>
    followPlatforms.includes(link.id)
  );

  if (items.length === 0) return null;

  return (
    <ul className="mx-auto flex w-full max-w-3xl flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
      {items.map((item) => (
        <li key={item.id} className="sm:min-w-[10.5rem] sm:flex-1 sm:max-w-[12rem]">
          <a
            href={item.href!}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="flex h-12 w-full items-center justify-center gap-2.5 rounded-xl border border-white/12 bg-white/[0.03] px-4 text-sm font-bold text-white/80 transition hover:border-[#f5c451]/45 hover:bg-[#f5c451]/10 hover:text-[#f5c451] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5c451]"
          >
            <SocialPlatformIcon platform={item.id} />
            <span>{item.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
