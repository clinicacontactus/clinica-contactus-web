export const WHATSAPP_NUMBER = "5585994098488";
export const WHATSAPP_DISPLAY_NUMBER = "+55 85 99409-8488";
export const WHATSAPP_MESSAGE = "Olá, gostaria de mais informações!";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export const reportWhatsAppConversion = () => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  try {
    window.gtag("event", "conversion", {
      send_to: "AW-17045311975/A8K9CK79oM4aEOej678_",
      transport_type: "beacon",
    });
  } catch {
    // The WhatsApp link must still open even if a browser extension blocks gtag.
  }
};
