// src/components/WhatsAppButton.jsx
import React from 'react';
// import './WhatsAppButton.css'; // Vamos criar este arquivo de estilos
import { FaWhatsapp } from "react-icons/fa";

// Você pode usar um ícone simples ou instalar uma biblioteca como 'react-icons'
// Para este exemplo, vou usar o ícone de SVG direto.
const WhatsAppIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        style={{ fill: 'white', width: '30px', height: '30px' }}
    >
        {/* Ícone do WhatsApp (SVG simplificado) */}
        <path
            d="M380.9 97.1C339.4 55.4 286.3 32 224 32c-121.5 0-220 98.5-220 220 0 39.1 10.3 77.4 30.1 111L1 480l118.9-35.3c32.7 17.8 69.1 27.1 106.1 27.1 121.5 0 220-98.5 220-220 0-57.8-22.3-112.5-62.1-153zM224 432c-31.5 0-61.9-9.9-88.8-28.4l-6.8-4.7-71.1 21.1 21.5-69.5-4.5-7.5c-19.4-32.6-29.6-70.1-29.6-109.1 0-101.4 82.5-183.9 183.9-183.9s183.9 82.5 183.9 183.9c0 101.4-82.5 183.9-183.9 183.9zm135.2-138.3c-4.9-2.4-29.5-14.7-34-16.3-4.5-1.7-7.8-2.5-11.1 2.5-3.3 5-12.2 16.3-15 19.6-2.8 3.3-5.6 3.7-10.4 1.2-4.9-2.5-20.7-7.6-39.6-24.3-14.7-13.4-24.6-30-27.5-34.9-2.8-5-0.3-7.8 2.2-10.2 2.2-2.2 4.9-5.7 7.3-8.5 2.5-2.8 3.3-5 5-8.5 1.7-3.5 0.8-6.5-0.9-9.8-1.7-3.3-15-36.5-20.5-49.8-5.4-13.3-10.9-11.5-14.7-11.7-3.5-0.2-7.8-0.2-12.2-0.2s-11.1 1.7-16.9 8.3c-5.8 6.6-22.2 21.9-22.2 53.6 0 31.7 22.7 62 25.6 66.7 2.9 4.7 44.7 72.4 108.7 98.9 16.6 6.8 29.7 10.9 39.9 13.9 10.2 3 16.5 2.5 22.7 1.5 7-1.1 22.2-9 25.3-17.7 3.1-8.7 3.1-16.1 2.2-17.7-0.9-1.7-3.5-2.7-7.3-4.7z"
        />
    </svg>
);

// Mude o número e a mensagem conforme necessário!
const WHATSAPP_NUMBER = "5585994098488";
const PRE_FILLED_MESSAGE = "Olá, gostaria de mais informações!";

const WhatsAppButton = () => {
    // ✅ Usando encodeURIComponent para formatar a mensagem
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(PRE_FILLED_MESSAGE)}`;
    return (
        // <a
        //     href={whatsappUrl}
        //     className="whatsapp-float"
        //     target="_blank"
        //     //   rel="noopener noreferrer"
        //     aria-label="Fale conosco pelo WhatsApp"
        // >
        //     <WhatsAppIcon />
        // </a>
        <a
            href="https://api.whatsapp.com/send?phone=5585994098488&text=Olá, gostaria de mais informações!"
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaWhatsapp style={{ marginRight: "8px" }} />
            Fale conosco
        </a>
    );
};

export default WhatsAppButton;