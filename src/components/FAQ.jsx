import React, { useState } from "react";

const faqs = [
      {
        question: "Como funciona o atendimento?",
        answer:
          "O atendimento é feito por meio de sessões online ou presenciais, com duração média de 50 minutos.",
      },
    //   {
    //     question: "Posso remarcar uma sessão?",
    //     answer:
    //       "Sim! Basta avisar com pelo menos 24 horas de antecedência para reagendar sem custos.",
    //   },
    //   {
    //     question: "O que preciso para a sessão online?",
    //     answer:
    //       "Apenas um dispositivo com câmera e microfone e uma boa conexão de internet.",
    //   },
    // {
    //     question: "O que é a psicoterapia?",
    //     answer: "A psicoterapia é um processo terapêutico conduzido por um profissional qualificado (psicólogo ou psiquiatra) que visa ajudar as pessoas a compreenderem e lidarem com questões emocionais, comportamentais, mentais ou relacionais. Através de diálogo e técnicas específicas, o terapeuta auxilia o paciente a explorar pensamentos, sentimentos e padrões de comportamento, promovendo autoconhecimento, mudanças positivas e bem-estar mental. É um espaço seguro e confidencial para trabalhar desafios pessoais, traumas, ansiedade, depressão, entre outras questões."
    // },
    {
        question: "Quantas sessões preciso fazer?",
        answer: "Não podemos informar um período exato de tempo para obtenção dos resultados esperados, uma vez que isso depende da demanda, do vínculo terapêutico e outras variáveis presentes durante os atendimentos. Para mais informações, busque se informar com o profissional que escolher."
    },
    {
        question: "Qual o valor da sessão?",
        answer: "Segundo o código de ética profissional, não podemos divulgar os valores. No entanto, você pode buscar essa informação no nosso WhatsApp."
    },
    {
        question: "Qual a frequência dos atendimentos?",
        answer: "A frequência das sessões é personalizada de acordo com suas demandas. Frequentemente, as sessões acontecem de modo semanal, mas isso pode ser combinado entre você e o profissional escolhido."
    },
    // {
    //     question: "Quanto tempo dura cada sessão?",
    //     answer: "As sessões duram cerca de 50 minutos."
    // },
    {
        question: "Atendem por planos de saúde?",
        answer: "Não atendemos planos de saúde. Porém, aceitamos diversas formas de pagamento e podemos discutir opções de acompanhamento que cabem no seu orçamento."
    }
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

    return (
        <div className="faq-container">
            <h2 className="faq-title">Perguntas Frequentes</h2>
            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`faq-item ${openIndex === index ? "open" : ""}`}
                    >
                        <button className="faq-question" onClick={() => toggleFAQ(index)}>
                            {faq.question}
                            <span className="faq-arrow">
                                <svg
                                    className={`arrow-icon ${openIndex === index ? "rotate" : ""}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    width="20"
                                    height="20"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </span>
                        </button>
                        <div className="faq-answer">
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
