import * as ads from "./ads";

describe("WhatsApp tracking", () => {
  beforeEach(() => {
    window.localStorage.clear();
    window.dataLayer = [];
    window.history.replaceState({}, "", "/?gclid=TEST-GCLID&utm_source=google");
    Object.defineProperty(window.navigator, "sendBeacon", {
      value: undefined,
      configurable: true,
    });
    global.fetch = jest.fn(() => Promise.resolve({ ok: true }));
  });

  test("builds a WhatsApp URL with a Contactus lead code", () => {
    expect(typeof ads.getWhatsAppUrl).toBe("function");

    const url = new URL(ads.getWhatsAppUrl());

    expect(url.hostname).toBe("wa.me");
    expect(url.pathname).toBe("/5585994098488");
    expect(url.searchParams.get("text")).toMatch(
      /^Olá, gostaria de mais informações! Código: CT-[A-Z0-9]{6}$/
    );
  });

  test("pushes the CTA position and lead code to the data layer", () => {
    expect(typeof ads.reportWhatsAppClick).toBe("function");

    ads.reportWhatsAppClick("header");

    expect(window.dataLayer).toContainEqual(
      expect.objectContaining({
        event: "contactus_whatsapp_click",
        cta_position: "header",
        lead_code: expect.stringMatching(/^CT-[A-Z0-9]{6}$/),
      })
    );
  });

  test("does not expose an Ads identifier before advertising consent", () => {
    ads.reportWhatsAppClick("services");

    expect(window.dataLayer).toContainEqual(
      expect.objectContaining({
        event: "contactus_whatsapp_click",
        has_ads_identifier: false,
      })
    );
    expect(window.localStorage.getItem("contactus_ads_attribution_v1")).toBeNull();
  });

  test("persists and reports an Ads identifier after advertising consent", () => {
    window.localStorage.setItem(
      "contactus_cookie_consent_v1",
      JSON.stringify({ analytics: true, ads: true })
    );

    ads.reportWhatsAppClick("floating_button");

    expect(window.dataLayer).toContainEqual(
      expect.objectContaining({
        event: "contactus_whatsapp_click",
        cta_position: "floating_button",
        has_ads_identifier: true,
      })
    );
    expect(
      JSON.parse(
        window.localStorage.getItem("contactus_ads_attribution_v1")
      ).gclid
    ).toBe("TEST-GCLID");
  });

  test("sends tracking through the same-origin Vercel API without a source key", () => {
    window.localStorage.setItem(
      "contactus_cookie_consent_v1",
      JSON.stringify({ analytics: true, ads: true })
    );

    ads.reportWhatsAppClick("header");

    expect(global.fetch).toHaveBeenCalledWith(
      "/api/track-whatsapp",
      expect.objectContaining({
        method: "POST",
        credentials: "same-origin",
      })
    );

    const [, options] = global.fetch.mock.calls[0];
    const payload = JSON.parse(options.body);

    expect(payload).toMatchObject({
      codigo: expect.stringMatching(/^CT-[A-Z0-9]{6}$/),
      cta_position: "header",
      consent_ads: "true",
      gclid: "TEST-GCLID",
      utm_source: "google",
    });
    expect(payload.key).toBeUndefined();
  });
});
