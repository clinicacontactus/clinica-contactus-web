import React from "react";

export const Navigation = () => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <img
            src="img/imgs/new-logo.png"
            className="img-header"
            alt="Clínica Contactus"
          />{" "}

          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Abrir navegação</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#header" className="page-scroll">
                Início
              </a>
            </li>
            <li>
              <a href="#video" className="page-scroll">
                Institucional
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Serviços
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Profissionais
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Avaliações
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Onde nos encontrar
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
