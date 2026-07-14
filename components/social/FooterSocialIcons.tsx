"use client";

import { getActiveSocialLinks } from "@/lib/social";
import { SocialPlatformIcon } from "@/components/social/SocialPlatformIcon";

/** Compact icon-only social row for Coming Soon footer brand block. */
export default function FooterSocialIcons() {
  const items = getActiveSocialLinks().filter((link) =>
    ["instagram", "tiktok", "youtube"].includes(link.id)
  );

  if (items.length === 0) return null;

  return (
    <ul className="mt-5 flex flex-wrap items-center gap-2.5">
      {items.map((item) => (
        <li key={item.id}>
          <a
            href={item.href!}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/12 bg-white/[0.03] text-white/55 transition hover:border-[#f5c451]/45 hover:text-[#f5c451] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5c451]"
          >
            <SocialPlatformIcon
              platform={item.id}
              className="h-4 w-4 shrink-0"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
