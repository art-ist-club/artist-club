/** Central social link config. Only entries with a non-empty URL are rendered. */
export type SocialPlatform =
  | "instagram"
  | "tiktok"
  | "youtube"
  | "linkedin"
  | "x"
  | "facebook";

export type SocialLink = {
  id: SocialPlatform;
  label: string;
  /** Leave empty/null until a verified public URL is available. */
  href: string | null;
};

export const socialLinks: SocialLink[] = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/art.ist.club/",
  },
  {
    id: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@art_ist_club",
  },
  {
    id: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@art_ist_club",
  },
  { id: "linkedin", label: "LinkedIn", href: null },
  { id: "x", label: "X", href: null },
  { id: "facebook", label: "Facebook", href: null },
];

export function getActiveSocialLinks(): SocialLink[] {
  return socialLinks.filter((link) => Boolean(link.href?.trim()));
}
