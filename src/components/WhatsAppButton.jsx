import { FaWhatsapp } from "react-icons/fa";
import { getWhatsAppUrl, reportWhatsAppClick } from "../utils/ads";

const WhatsAppButton = () => {
  return (
    <a
      href={getWhatsAppUrl()}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      onClick={(event) => reportWhatsAppClick("floating_button", event)}
    >
      <FaWhatsapp style={{ marginRight: "8px" }} />
      Fale conosco
    </a>
  );
};

export default WhatsAppButton;
