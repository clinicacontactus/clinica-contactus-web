import React, { useState } from "react";

const faqs = [
  {
    question: "Qual o valor da sessão?",
    answer:
      "Segundo o código de ética profissional, não podemos divulgar os valores. No entanto, você pode buscar essa informação no nosso WhatsApp.",
  },
  {
    question: "Qual a frequência dos atendimentos?",
    answer:
      "A frequência das sessões é personalizada de acordo com suas demandas. Frequentemente, as sessões acontecem de modo semanal, mas isso pode ser combinado entre você e o profissional escolhido.",
  },
  {
    question: "Atendem por planos de saúde?",
    answer:
      "Atualmente não atendemos diretamente por convênios, mas emitimos nota fiscal para que você possa solicitar reembolso junto ao seu plano de saúde. Além disso, trabalhamos com diferentes formas de pagamento e buscamos opções que se encaixem no seu orçamento.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="faq-container">
      <h2 className="faq-title">Perguntas Frequentes</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={faq.question} className={`faq-item ${openIndex === index ? "open" : ""}`}>
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
