import { FaWhatsapp } from "react-icons/fa";
import { reportWhatsAppConversion, WHATSAPP_URL } from "../utils/ads";

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      onClick={reportWhatsAppConversion}
    >
      <FaWhatsapp style={{ marginRight: "8px" }} />
      Fale conosco
    </a>
  );
};

export default WhatsAppButton;
