import { FaWhatsapp } from "react-icons/fa";

function gtag_report_conversion(url) {
  let redirected = false;

  const callback = () => {
    if (redirected) return;
    redirected = true;
    window.open(url, "_blank");
  };

  // Fallback: Ads nunca pode travar o CTA
  setTimeout(callback, 700);

  if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: "AW-17045311975/A8K9CK79oM4aEOej678_",
      event_callback: callback,
    });
  } else {
    callback();
  }

  return false;
}

const WHATSAPP_NUMBER = "5585994098488";
const PRE_FILLED_MESSAGE = "Olá, gostaria de mais informações!";

const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    PRE_FILLED_MESSAGE
  )}`;

  const handleClick = (e) => {
    e.preventDefault();
    gtag_report_conversion(whatsappUrl);
  };

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
    >
      <FaWhatsapp style={{ marginRight: "8px" }} />
      Fale conosco
    </a>
  );
};

export default WhatsAppButton;
