import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { reportWhatsAppConversion, WHATSAPP_URL } from "../utils/ads";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <p className="p1">{props.data ? props.data.title : "Loading"}</p>

                <h1>
                  {props.data ? props.data.paragraph : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph2 : "Loading"}</p>
                <div className="botoes">
                  <a href="#video" className="btn btn-custom btn-lg page-scroll">
                    Conheça Nossa Clínica
                  </a>{" "}

                  <a
                    href={WHATSAPP_URL}
                    className="btn btn-whatsapp btn-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={reportWhatsAppConversion}
                  >
                    <FaWhatsapp style={{ marginRight: "8px" }} />
                    Fale conosco
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
