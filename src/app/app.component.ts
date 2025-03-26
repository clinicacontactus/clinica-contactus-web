import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clinica-contactus-web';

  // scrollToSection(sectionId: string) {
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 95; // Altura do header fixo
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }


  faqList = [
    {
      question: 'Atendem por planos de saúde?',
      answer: 'Não atendemos planos de saúde. Porém, aceitamos diversas formas de pagamento e podemos discutir opções de acompanhamento que cabem no seu orçamento.',
    },
    {
      question: "Quais os valores dos serviços?",
      answer: "Segundo o código de ética profissional, não podemos divulgar os valores. No entanto, você pode buscar essa informação no nosso WhatsApp."
    },
   
  ];

}
