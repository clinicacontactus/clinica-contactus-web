import { useEffect, useState } from "react";
import {
  applyConsentPreferences,
  getConsentPreferences,
  rejectOptionalCookies,
} from "../utils/consent";

const EMPTY_PREFERENCES = {
  analytics: false,
  ads: false,
};

const CookieConsent = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(
    () => !getConsentPreferences()
  );
  const [isPreferencesVisible, setIsPreferencesVisible] = useState(false);
  const [preferences, setPreferences] = useState(
    () => getConsentPreferences() || EMPTY_PREFERENCES
  );

  useEffect(() => {
    const openPreferences = () => {
      setPreferences(getConsentPreferences() || EMPTY_PREFERENCES);
      setIsPreferencesVisible(true);
    };

    window.addEventListener(
      "contactus:open-consent-preferences",
      openPreferences
    );

    return () => {
      window.removeEventListener(
        "contactus:open-consent-preferences",
        openPreferences
      );
    };
  }, []);

  const acceptAll = () => {
    applyConsentPreferences({ analytics: true, ads: true });
    setIsBannerVisible(false);
  };

  const rejectOptional = () => {
    rejectOptionalCookies();
    setIsBannerVisible(false);
  };

  const savePreferences = () => {
    applyConsentPreferences(preferences);
    setIsBannerVisible(false);
    setIsPreferencesVisible(false);
  };

  return (
    <>
      {isBannerVisible && (
        <section
          className="cookie-consent-banner"
          aria-label="Preferências de cookies"
        >
          <div className="cookie-consent-copy">
            <span className="cookie-consent-kicker">Sua privacidade</span>
            <h2>Ajude a Contactus a melhorar sua experiência</h2>
            <p>
              Com sua autorização, usamos cookies opcionais para entender o
              uso do site, medir campanhas e melhorar sua experiência.
            </p>
            <div className="cookie-consent-meta">
              <a href="/politica-de-privacidade.html">
                Política de privacidade
              </a>
              <span>Você pode alterar sua escolha a qualquer momento.</span>
            </div>
          </div>
          <div className="cookie-consent-actions">
            <button
              type="button"
              className="btn cookie-secondary-button"
              onClick={() => setIsPreferencesVisible(true)}
            >
              Personalizar
            </button>
            <button
              type="button"
              className="btn cookie-secondary-button"
              onClick={rejectOptional}
            >
              Rejeitar opcionais
            </button>
            <button
              type="button"
              className="btn cookie-primary-button"
              onClick={acceptAll}
            >
              Aceitar todos
            </button>
          </div>
        </section>
      )}

      {isPreferencesVisible && (
        <div className="cookie-consent-backdrop">
          <section
            className="cookie-consent-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-preferences-title"
          >
            <h2 id="cookie-preferences-title">Gerenciar cookies</h2>
            <p>Escolha quais categorias opcionais podem ser usadas.</p>

            <label className="cookie-preference-row">
              <span>
                <strong>Necessários</strong>
                <small>Sempre ativos para o funcionamento básico.</small>
              </span>
              <input type="checkbox" checked disabled />
            </label>

            <label className="cookie-preference-row">
              <span>
                <strong>Analytics</strong>
                <small>Ajuda a entender visitas e navegação.</small>
              </span>
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(event) =>
                  setPreferences((current) => ({
                    ...current,
                    analytics: event.target.checked,
                  }))
                }
              />
            </label>

            <label className="cookie-preference-row">
              <span>
                <strong>Publicidade</strong>
                <small>Permite medir anúncios e registrar identificadores.</small>
              </span>
              <input
                type="checkbox"
                checked={preferences.ads}
                onChange={(event) =>
                  setPreferences((current) => ({
                    ...current,
                    ads: event.target.checked,
                  }))
                }
              />
            </label>

            <div className="cookie-modal-actions">
              <button
                type="button"
                className="btn cookie-secondary-button"
                onClick={() => setIsPreferencesVisible(false)}
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn cookie-primary-button"
                onClick={savePreferences}
              >
                Salvar preferências
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
