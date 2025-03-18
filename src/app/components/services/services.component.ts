import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  mostrarModal = false;

  servico: {
    titulo: string;
    subtitulo?: string;
    photoUrl: string;
    faqList: { question: string; answer: string }[];
  } | null = null;

  abrirModal(servicoSelecionado: {
    titulo: string;
    photoUrl: string;
    faqList: { question: string; answer: string }[];
  }) {
    this.servico = servicoSelecionado;
    document.body.style.overflow = 'hidden';
    document.body.classList.add('no-scroll');
    this.mostrarModal = true;
  }

  fecharModal() {
    this.mostrarModal = false;
    document.body.style.overflow = '';
    document.body.classList.remove('no-scroll');
  }

  dados = [
    {
      titulo: 'Psicoterapia',
      photoUrl: 'assets/imgs/psicoterapia.png',
      faqList: [
        {
          question: "O que é a psicoterapia?",
          answer: "A psicoterapia é um processo terapêutico conduzido por um profissional qualificado (psicólogo ou psiquiatra) que visa ajudar as pessoas a compreenderem e lidarem com questões emocionais, comportamentais, mentais ou relacionais. Através de diálogo e técnicas específicas, o terapeuta auxilia o paciente a explorar pensamentos, sentimentos e padrões de comportamento, promovendo autoconhecimento, mudanças positivas e bem-estar mental. É um espaço seguro e confidencial para trabalhar desafios pessoais, traumas, ansiedade, depressão, entre outras questões."
        },
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
        {
          question: "Quanto tempo dura cada sessão?",
          answer: "As sessões duram cerca de 50 minutos."
        },
        {
          question: "Atendem por planos de saúde?",
          answer: "Não atendemos planos de saúde. Porém, aceitamos diversas formas de pagamento e podemos discutir opções de acompanhamento que cabem no seu orçamento."
        }
      ]


    },
    {
      titulo: 'Terapia ABA',
      photoUrl: 'assets/imgs/aba.png',
      faqList: [
        {
          question: "O que é a Terapia ABA?",
          answer: "A terapia ABA (Análise do Comportamento Aplicada, ou *Applied Behavior Analysis*) é uma abordagem terapêutica baseada em evidências científicas, focada no desenvolvimento de habilidades e na modificação de comportamentos em pessoas com autismo ou outros transtornos do desenvolvimento. Utiliza técnicas para reforçar comportamentos positivos, reduzir comportamentos inadequados e promover a aprendizagem de novas habilidades, como comunicação, interação social e autonomia. A terapia é individualizada, com objetivos claros e mensuráveis, e envolve a coleta de dados para monitorar o progresso. É amplamente reconhecida por sua eficácia no apoio ao desenvolvimento infantil."
        },
        {
          question: "Qual o valor da sessão?",
          answer: "Segundo o código de ética profissional, não podemos divulgar os valores. No entanto, você pode buscar essa informação no nosso WhatsApp."
        },
        {
          question: "Atendem por planos de saúde?",
          answer: "Não atendemos planos de saúde. Porém, aceitamos diversas formas de pagamento e podemos discutir opções de acompanhamento que cabem no seu orçamento."
        }
      ]
    },
    {
      titulo: 'Avaliação Neuropsicológica',
      photoUrl: 'assets/imgs/neuropsicologia.png',
      faqList: [
        {
          question: "O que é a avaliação neuropsicológica?",
          answer: "A avaliação neuropsicológica é um processo detalhado e científico que investiga as funções cognitivas, emocionais e comportamentais, relacionando-as ao funcionamento do cérebro. Por meio de testes e instrumentos validados, o neuropsicólogo avalia habilidades como memória, atenção, linguagem, raciocínio, funções executivas e processamento emocional. Esse tipo de avaliação serve para identificar possíveis alterações cognitivas ou comportamentais, auxiliando no diagnóstico de condições como transtornos de aprendizagem, déficits de atenção, demências, lesões cerebrais, entre outros. Além disso, fornece informações precisas para a elaboração de intervenções personalizadas, reabilitação cognitiva e planejamento de estratégias que promovam a melhoria da qualidade de vida do paciente."
        },
        {
          question: "Quantas sessões preciso fazer?",
          answer: "Não há um número exato definido, mas o processo de avaliação neuropsicológica costuma durar entre 5 a 10 sessões. A quantidade de sessões irá depender da demanda e especificidade de cada caso."
        },
        {
          question: "Qual o valor da sessão?",
          answer: "Segundo o código de ética profissional, não podemos divulgar os valores. No entanto, você pode buscar essa informação no nosso WhatsApp."
        },
        {
          question: "Qual a frequência dos atendimentos?",
          answer: "A frequência das sessões é personalizada de acordo com suas demandas. Frequentemente, as sessões acontecem de modo semanal, mas isso pode ser combinado entre você e o profissional escolhido."
        },
        {
          question: "Quanto tempo dura cada sessão?",
          answer: "As sessões duram cerca de 50 minutos."
        },
        {
          question: "Atendem por planos de saúde?",
          answer: "Não atendemos planos de saúde. Porém, aceitamos diversas formas de pagamento e podemos discutir opções de acompanhamento que cabem no seu orçamento."
        }
      ]

    },
    {
      titulo: 'Avaliação Psicológica para Cirurgias',
      photoUrl: 'assets/imgs/av-cirurgias.png',
      faqList: [
        {
          question: "O que é a avaliação psicológica para cirurgias?",
          answer: "A avaliação psicológica para cirurgia é um processo realizado por um psicólogo para avaliar a saúde mental e emocional de um paciente antes de uma intervenção cirúrgica. O objetivo é identificar fatores psicológicos que possam influenciar no preparo, na recuperação ou na adaptação pós-cirúrgica, como ansiedade, expectativas, suporte emocional e capacidade de lidar com mudanças. O psicólogo emite um laudo que auxilia a equipe médica a garantir que o paciente esteja emocionalmente preparado para o procedimento e para o pós-operatório, contribuindo para o sucesso global do tratamento."
        },
        {
          question: "Quantas sessões preciso fazer?",
          answer: "Não há um número exato definido, mas o processo de avaliação psicológica costuma durar entre 5 a 10 sessões. A quantidade de sessões irá depender da demanda e especificidade de cada caso."
        },
        {
          question: "Qual o valor da sessão?",
          answer: "Segundo o código de ética profissional, não podemos divulgar os valores. No entanto, você pode buscar essa informação no nosso WhatsApp."
        },
        {
          question: "Qual a frequência dos atendimentos?",
          answer: "A frequência das sessões é personalizada de acordo com suas demandas. Frequentemente, as sessões acontecem de modo semanal, mas isso pode ser combinado entre você e o profissional escolhido."
        },
        {
          question: "Quanto tempo dura cada sessão?",
          answer: "As sessões duram cerca de 50 minutos."
        },
        {
          question: "Atendem por planos de saúde?",
          answer: "Não atendemos planos de saúde. Porém, aceitamos diversas formas de pagamento e podemos discutir opções de acompanhamento que cabem no seu orçamento."
        }
      ]

    }
  ];

}
