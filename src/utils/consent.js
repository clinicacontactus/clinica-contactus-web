export const CONSENT_STORAGE_KEY = "contactus_cookie_consent_v1";

const DEFAULT_PREFERENCES = {
  analytics: false,
  ads: false,
};

const readStoredPreferences = () => {
  if (typeof window === "undefined") return null;

  try {
    const stored = JSON.parse(window.localStorage.getItem(CONSENT_STORAGE_KEY));

    if (!stored || typeof stored !== "object") return null;

    return {
      analytics: stored.analytics === true,
      ads: stored.ads === true,
    };
  } catch {
    return null;
  }
};

export const getConsentPreferences = () => readStoredPreferences();

export const hasAdsConsent = () => readStoredPreferences()?.ads === true;

export const applyConsentPreferences = (preferences) => {
  if (typeof window === "undefined") return;

  const normalized = {
    analytics: preferences?.analytics === true,
    ads: preferences?.ads === true,
  };

  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(normalized));
  window.dataLayer = window.dataLayer || [];

  const consentUpdate = {
    analytics_storage: normalized.analytics ? "granted" : "denied",
    ad_storage: normalized.ads ? "granted" : "denied",
    ad_user_data: normalized.ads ? "granted" : "denied",
    ad_personalization: normalized.ads ? "granted" : "denied",
  };

  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", consentUpdate);
  } else {
    window.dataLayer.push(["consent", "update", consentUpdate]);
  }

  window.dataLayer.push({
    event: "contactus_consent_update",
    consent_analytics: normalized.analytics,
    consent_ads: normalized.ads,
  });

  window.dispatchEvent(
    new CustomEvent("contactus:consent-updated", { detail: normalized })
  );
};

export const rejectOptionalCookies = () =>
  applyConsentPreferences(DEFAULT_PREFERENCES);

