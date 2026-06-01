import { hasAdsConsent } from "./consent";

export const WHATSAPP_NUMBER = "5585994098488";
export const WHATSAPP_DISPLAY_NUMBER = "+55 85 99409-8488";
export const WHATSAPP_MESSAGE = "Olá, gostaria de mais informações!";

const ATTRIBUTION_STORAGE_KEY = "contactus_ads_attribution_v1";
const LEAD_STORAGE_KEY = "contactus_lead_code_v1";
const RETENTION_MS = 90 * 24 * 60 * 60 * 1000;
const ATTRIBUTION_FIELDS = [
  "gclid",
  "gbraid",
  "wbraid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
];

const readStorage = (key) => {
  try {
    const stored = JSON.parse(window.localStorage.getItem(key));

    if (!stored || stored.expiresAt < Date.now()) {
      removeStorage(key);
      return null;
    }

    const { expiresAt, ...value } = stored;
    return value;
  } catch {
    return null;
  }
};

const removeStorage = (key) => {
  try {
    window.localStorage.removeItem(key);
  } catch {
    // Tracking must never prevent WhatsApp from opening.
  }
};

const writeStorage = (key, value) => {
  try {
    window.localStorage.setItem(
      key,
      JSON.stringify({ ...value, expiresAt: Date.now() + RETENTION_MS })
    );
  } catch {
    // Tracking must never prevent WhatsApp from opening.
  }
};

const getCurrentAttribution = () => {
  const searchParams = new URLSearchParams(window.location.search);

  return ATTRIBUTION_FIELDS.reduce((result, field) => {
    const value = searchParams.get(field);

    if (value) result[field] = value;

    return result;
  }, {});
};

const getAllowedAttribution = () => {
  if (!hasAdsConsent()) {
    removeStorage(ATTRIBUTION_STORAGE_KEY);
    return {};
  }

  const current = getCurrentAttribution();
  const stored = readStorage(ATTRIBUTION_STORAGE_KEY) || {};
  const attribution = { ...stored, ...current };

  if (Object.keys(attribution).length) {
    writeStorage(ATTRIBUTION_STORAGE_KEY, attribution);
  }

  return attribution;
};

const generateLeadCode = () => {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const bytes = new Uint8Array(6);

  if (window.crypto?.getRandomValues) {
    window.crypto.getRandomValues(bytes);
  } else {
    bytes.forEach((_, index) => {
      bytes[index] = Math.floor(Math.random() * 256);
    });
  }

  return `CT-${Array.from(bytes, (byte) => alphabet[byte % alphabet.length]).join(
    ""
  )}`;
};

const getLeadContext = () => {
  const attribution = getAllowedAttribution();
  const attributionKey = hasAdsConsent()
    ? ATTRIBUTION_FIELDS.map((field) => attribution[field] || "").join("|")
    : "organic";
  const storedLead = readStorage(LEAD_STORAGE_KEY);

  if (storedLead?.attributionKey === attributionKey) {
    return { code: storedLead.code, attribution };
  }

  const lead = {
    code: generateLeadCode(),
    attributionKey,
  };

  writeStorage(LEAD_STORAGE_KEY, lead);

  return { code: lead.code, attribution };
};

const buildWhatsAppUrl = (code) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `${WHATSAPP_MESSAGE} Código: ${code}`
  )}`;

const hasAdsIdentifier = (attribution) =>
  Boolean(attribution.gclid || attribution.gbraid || attribution.wbraid);

const sendTrackingRequest = (context, ctaPosition) => {
  const payload = {
    codigo: context.code,
    cta_position: ctaPosition,
    consent_ads: String(hasAdsConsent()),
    landing_page: `${window.location.origin}${window.location.pathname}`,
    ...context.attribution,
  };
  const body = JSON.stringify(payload);
  const endpoint = "/api/track-whatsapp";

  try {
    if (
      typeof navigator !== "undefined" &&
      typeof navigator.sendBeacon === "function" &&
      typeof Blob !== "undefined"
    ) {
      navigator.sendBeacon(
        endpoint,
        new Blob([body], { type: "application/json" })
      );
      return;
    }

    if (typeof fetch === "function") {
      fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
        keepalive: true,
        credentials: "same-origin",
      }).catch(() => {});
    }
  } catch {
    // Tracking must never prevent WhatsApp from opening.
  }
};

export const getWhatsAppUrl = () => buildWhatsAppUrl(getLeadContext().code);

export const reportWhatsAppClick = (ctaPosition, event) => {
  const context = getLeadContext();

  if (event?.currentTarget) {
    event.currentTarget.href = buildWhatsAppUrl(context.code);
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "contactus_whatsapp_click",
    cta_position: ctaPosition,
    has_ads_identifier: hasAdsIdentifier(context.attribution),
    lead_code: context.code,
  });

  sendTrackingRequest(context, ctaPosition);
};

if (typeof window !== "undefined") {
  getAllowedAttribution();
  window.addEventListener("contactus:consent-updated", getAllowedAttribution);
}
