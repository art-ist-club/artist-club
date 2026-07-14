"use client";

import {
  createContext,
  useContext,
  type ReactNode,
} from "react";
import {
  SOFT_LAUNCH_DESTINATION,
  isSoftLaunchBlockedPath,
} from "@/lib/launch";

const SoftLaunchContext = createContext(false);

export function SoftLaunchProvider({
  value,
  children,
}: {
  value: boolean;
  children: ReactNode;
}) {
  return (
    <SoftLaunchContext.Provider value={value}>
      {children}
    </SoftLaunchContext.Provider>
  );
}

export function useSoftLaunch(): boolean {
  return useContext(SoftLaunchContext);
}

/** Client-safe CTA helper; soft flag comes from server via provider. */
export function useLaunchAwareHref(): (href: string) => string {
  const softLaunch = useSoftLaunch();
  return (href: string) => {
    if (!softLaunch) return href;
    const path = href.split("?")[0] || href;
    if (isSoftLaunchBlockedPath(path)) return SOFT_LAUNCH_DESTINATION;
    return href;
  };
}
