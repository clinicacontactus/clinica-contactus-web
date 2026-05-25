import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaWhatsapp } from "react-icons/fa";

import {
  faUserMd,
  faChild,
  faBrain,
  faStethoscope,
  faUsers,
  faBuilding,
  faComments,
  faGraduationCap,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

import { reportWhatsAppConversion, WHATSAPP_URL } from "../utils/ads";

export const ICONS_MAP = {
  "fa fa-user-md": faUserMd,
  "fa fa-child": faChild,
  "fa fa-brain": faBrain,
  "fa fa-stethoscope": faStethoscope,
  "fa fa-users": faUsers,
  "fa fa-building": faBuilding,
  "fa fa-comments": faComments,
  "fa fa-graduation-cap": faGraduationCap,
  "fa fa-briefcase": faBriefcase,
};

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Nossos Serviços</h2>
        </div>

        <div className="services-grid">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="service-card">
                  <FontAwesomeIcon
                    icon={ICONS_MAP[d.icon]}
                    className="service-icon"
                    size="4x"
                    style={{
                      backgroundColor: "#A0BCB5",
                      color: "#fff",
                      padding: "20px",
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      marginBottom: "10px",
                    }}
                  />

                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>

        <h2 className="services-cta-title">
          Está buscando apoio profissional? Entre em contato conosco!
        </h2>
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
  );
};
