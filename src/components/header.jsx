import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p className="p1">{props.data ? props.data.paragraph : "Loading"}</p>
                <p className="">{props.data ? props.data.paragraph2 : "Loading"}</p>
                <div className="botoes">
                  <a
                    href="#services"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Conheça Nossos Serviços
                  </a>{" "}
                  <a
                    href="https://api.whatsapp.com/send?phone=5585994098488&text=Olá, gostaria de mais informações!"
                    className="btn btn-whatsapp btn-lg"
                    target="_blank"
                    rel="noopener noreferrer"
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
