const STORAGE_KEY = "amzselfpub-ppc";

const PPC_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_id",
  "utm_term",
  "utm_content",
  "gclid",
  "gbraid",
  "wbraid",
  "fbclid",
  "msclkid",
  "gad_source",
] as const;

export type PpcDetails = Record<string, string>;

export function capturePpc() {
  if (typeof window === "undefined") return {};

  const stored = readStored();
  const params = new URLSearchParams(window.location.search);
  const incoming: PpcDetails = {};

  for (const key of PPC_KEYS) {
    const value = params.get(key);
    if (value) incoming[key] = value;
  }

  const merged = { ...stored, ...incoming };
  if (!merged.landingPage) {
    merged.landingPage = window.location.href;
  }
  if (!merged.referrer && document.referrer) {
    merged.referrer = document.referrer;
  }

  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
  return merged;
}

export function getPpcDetails(): PpcDetails {
  const stored = capturePpc();
  return {
    ...stored,
    pageUrl: window.location.href,
    pagePath: window.location.pathname,
  };
}

function readStored(): PpcDetails {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as PpcDetails) : {};
  } catch {
    return {};
  }
}
