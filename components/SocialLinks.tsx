"use client";

import { getActiveSocialLinks } from "@/lib/social";

/** Renders only social platforms with a verified non-empty URL. */
export default function SocialLinks({
  className = "",
}: {
  className?: string;
}) {
  const items = getActiveSocialLinks();
  if (items.length === 0) return null;

  return (
    <ul className={`flex flex-wrap gap-3 ${className}`.trim()}>
      {items.map((item) => (
        <li key={item.id}>
          <a
            href={item.href!}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-white/45 transition hover:text-[#f5b942] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5b942]"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
