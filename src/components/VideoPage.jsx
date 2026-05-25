import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { reportWhatsAppConversion, WHATSAPP_URL } from "../utils/ads";

export default function VideoPage() {
  return (
    <div id="video" style={{ padding: "60px 20px", textAlign: "center" }}>
      <h2 style={{ marginBottom: "20px" }}>Conheça nossa clínica</h2>

      <div
        style={{
          maxWidth: "350px",
          margin: "0 auto",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        <video
          src="https://res.cloudinary.com/dgl1r1pq6/video/upload/q_auto,f_auto,vc_auto/v1776193607/Institucional_consultorio_contactus_e1khhf.mp4"
          controls
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>

      <div className="botoes">
        <a href="#services" className="btn btn-custom btn-lg page-scroll">
          Conheça Nossos Serviços
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
  );
}
