import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { reportWhatsAppConversion } from "../utils/ads";

const WHATSAPP_NUMBER = "5585994098488";
const MESSAGE = "Olá, gostaria de mais informações!";
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`;

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
                <p className="">{props.data ? props.data.paragraph2 : "Loading"}</p>
                <div className="botoes">
                  <a
                    href="#video"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Conheça Nossa Clínica
                  </a>{" "}


                  <button
                    type="button"
                    className="btn btn-whatsapp btn-lg"
                    onClick={() => reportWhatsAppConversion(whatsappUrl)}
                  >
                    <FaWhatsapp style={{ marginRight: "8px" }} />
                    Fale conosco
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
