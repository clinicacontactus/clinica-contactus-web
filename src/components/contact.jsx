import { getWhatsAppUrl, reportWhatsAppClick } from "../utils/ads";

export const Contact = (props) => {
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Fale conosco</h2>
              </div>

              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Endereço
                  </span>
                  {props.data ? props.data.address : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Telefone
                  </span>{" "}
                  {props.data ? props.data.phone : "loading"}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item"></div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <p className="cnpj">CNPJ: 61.338.931/0001-99</p>

                <ul>
                  <li>
                    <a
                      href={props.data ? props.data.instagram : "/"}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram da Clínica Contactus"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp da Clínica Contactus"
                      onClick={(event) =>
                        reportWhatsAppClick("contact_footer", event)
                      }
                    >
                      <i className="fa fa-whatsapp"></i>
                    </a>
                  </li>
                </ul>
                <div className="contact-privacy-links">
                  <a href="/politica-de-privacidade.html">
                    Política de privacidade
                  </a>
                  <button
                    type="button"
                    onClick={() =>
                      window.dispatchEvent(
                        new Event("contactus:open-consent-preferences")
                      )
                    }
                  >
                    Gerenciar cookies
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
