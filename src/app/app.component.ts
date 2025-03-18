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
      question: 'O que é psicoterapia?',
      answer: 'A psicoterapia é um processo terapêutico conduzido por um profissional qualificado (psicólogo ou psiquiatra) que visa ajudar as pessoas a compreenderem e lidarem com questões emocionais, comportamentais, mentais ou relacionais. Através de diálogo e técnicas específicas, o terapeuta auxilia o paciente a explorar pensamentos, sentimentos e padrões de comportamento, promovendo autoconhecimento, mudanças positivas e bem-estar mental.',
    },
    {
      question: 'Quantas sessões de psicoterapia preciso fazer?',
      answer: 'Não podemos informar um período exato de tempo para obtenção dos resultados esperados, uma vez que isso depende da demanda, do vínculo terapêutico e outras variáveis presentes durante os atendimentos. Para mais informações, busque se informar com o profissional que escolher.',
    },
    {
      question: 'Qual o valor da sessão de psicoterapia?',
      answer: 'Segundo o código de ética profissional, não podemos divulgar os valores. No entanto, você pode buscar essa informação no nosso WhatsApp.',
    },
    {
      question: 'O que é terapia e supervisão ABA?',
      answer: 'A terapia ABA (Análise do Comportamento Aplicada, ou Applied Behavior Analysis) é uma abordagem terapêutica baseada em evidências científicas, focada no desenvolvimento de habilidades e na modificação de comportamentos em pessoas com autismo ou outros transtornos do desenvolvimento.',
    },
    {
      question: 'O que são grupos de estimulação cognitiva?',
      answer: 'Grupos de estimulação cognitiva são intervenções em grupo conduzidas por profissionais da saúde com o objetivo de manter ou melhorar as funções cognitivas, como memória, atenção, raciocínio e linguagem. Por meio de atividades estruturadas, jogos e interações sociais, os participantes exercitam suas habilidades mentais.',
    }
  ];

}
