const REQUIRED_ENV_VARS = [
  "CONTACTUS_APPS_SCRIPT_URL",
  "CONTACTUS_APPS_SCRIPT_SOURCE_KEY",
];

const ALLOWED_CTA_POSITIONS = new Set([
  "header",
  "institutional_video",
  "services",
  "contact_footer",
  "floating_button",
]);

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

const JSON_HEADERS = {
  "content-type": "application/json; charset=utf-8",
  "cache-control": "no-store",
};

const json = (payload, status = 200) =>
  new Response(JSON.stringify(payload), {
    status,
    headers: JSON_HEADERS,
  });

const isAllowedOrigin = (request) => {
  const origin = request.headers.get("origin");

  if (!origin) return false;

  try {
    const { hostname, protocol } = new URL(origin);

    if (protocol !== "https:" && !hostname.match(/^(localhost|127\.0\.0\.1)$/)) {
      return false;
    }

    return (
      hostname === "clinicacontactus.com" ||
      hostname === "www.clinicacontactus.com" ||
      hostname.endsWith(".vercel.app") ||
      hostname === "localhost" ||
      hostname === "127.0.0.1"
    );
  } catch {
    return false;
  }
};

const pickString = (payload, field, maxLength) => {
  const value = payload[field];

  if (value === null || value === undefined) return "";

  return String(value).replace(/[\r\n\t]/g, " ").trim().slice(0, maxLength);
};

const buildForwardPayload = (payload) => {
  const codigo = pickString(payload, "codigo", 32).toUpperCase();
  const ctaPosition = pickString(payload, "cta_position", 80);

  if (!/^CT-[A-Z0-9]{6}$/.test(codigo)) {
    return { error: "invalid_code" };
  }

  if (!ALLOWED_CTA_POSITIONS.has(ctaPosition)) {
    return { error: "invalid_cta_position" };
  }

  const consentAds = payload.consent_ads === true || payload.consent_ads === "true";
  const forwardPayload = {
    key: process.env.CONTACTUS_APPS_SCRIPT_SOURCE_KEY,
    codigo,
    cta_position: ctaPosition,
    consent_ads: String(consentAds),
    landing_page: pickString(payload, "landing_page", 360),
  };

  for (const field of ATTRIBUTION_FIELDS) {
    const value = consentAds ? pickString(payload, field, 260) : "";
    if (value) forwardPayload[field] = value;
  }

  return { payload: forwardPayload };
};

const forwardToAppsScript = async (payload) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  try {
    const response = await fetch(process.env.CONTACTUS_APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    return response.ok;
  } finally {
    clearTimeout(timeout);
  }
};

export default {
  async fetch(request) {
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: JSON_HEADERS });
    }

    if (request.method !== "POST") {
      return json({ ok: false, error: "method_not_allowed" }, 405);
    }

    const missingEnvVars = REQUIRED_ENV_VARS.filter((key) => !process.env[key]);
    if (missingEnvVars.length) {
      return json({ ok: false, error: "tracking_not_configured" }, 500);
    }

    if (!isAllowedOrigin(request)) {
      return json({ ok: false, error: "origin_not_allowed" }, 403);
    }

    let payload;

    try {
      payload = await request.json();
    } catch {
      return json({ ok: false, error: "invalid_json" }, 400);
    }

    const result = buildForwardPayload(payload);
    if (result.error) {
      return json({ ok: false, error: result.error }, 400);
    }

    try {
      const ok = await forwardToAppsScript(result.payload);

      if (!ok) {
        return json({ ok: false, error: "collector_unavailable" }, 502);
      }

      return json({ ok: true }, 202);
    } catch {
      return json({ ok: false, error: "collector_unavailable" }, 502);
    }
  },
};
