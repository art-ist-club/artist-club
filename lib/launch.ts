/**
 * Soft launch gate — server / middleware only.
 * Controlled by SOFT_LAUNCH env (not NEXT_PUBLIC_*).
 *
 * truthy: 1 | true | yes | on  (case-insensitive)
 * everything else / unset: soft launch OFF
 */

export const SOFT_LAUNCH_DESTINATION = "/coming-soon";

/** Path prefixes blocked while soft launch is active. */
export const SOFT_LAUNCH_BLOCKED_PREFIXES = [
  "/discover",
  "/login",
  "/register",
  "/profile",
  "/dashboard",
  "/artist",
  "/test",
] as const;

export function isSoftLaunch(): boolean {
  const raw = process.env.SOFT_LAUNCH?.trim().toLowerCase();
  if (!raw) return false;
  return raw === "1" || raw === "true" || raw === "yes" || raw === "on";
}

export function isSoftLaunchBlockedPath(pathname: string): boolean {
  const path = pathname.split("?")[0] || pathname;
  if (path === SOFT_LAUNCH_DESTINATION || path.startsWith(`${SOFT_LAUNCH_DESTINATION}/`)) {
    return false;
  }
  return SOFT_LAUNCH_BLOCKED_PREFIXES.some(
    (prefix) => path === prefix || path.startsWith(`${prefix}/`)
  );
}

/** Map product CTAs to coming-soon while soft launch is on. */
export function launchAwareHref(
  href: string,
  softLaunch: boolean = isSoftLaunch()
): string {
  if (!softLaunch) return href;
  const path = href.split("?")[0] || href;
  if (isSoftLaunchBlockedPath(path)) return SOFT_LAUNCH_DESTINATION;
  return href;
}
