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
    this.mostrarModal = true;
  }


  fecharModal() {
    this.mostrarModal = false;
  }

  dados = [
    {
      titulo: 'Psicoterapia',
      photoUrl: 'assets/imgs/psicoterapia.png',
      faqList: [
        { question: 'Como funciona a Psicoterapia?', answer: 'A psicoterapia é um processo conduzido por um profissional para ajudar no desenvolvimento emocional e na resolução de problemas.' },
        { question: 'Qual a duração da sessão?', answer: 'Cada sessão dura em média 50 minutos.' }
      ]
    },
    {
      titulo: 'Terapia ABA',
      photoUrl: 'assets/imgs/aba.png',
      faqList: [
        { question: 'O que é Terapia ABA?', answer: 'A Análise do Comportamento Aplicada (ABA) é uma abordagem baseada em evidências para trabalhar com pessoas com autismo e outros transtornos.' },
        { question: 'Quais os benefícios da ABA?', answer: 'Melhora na comunicação, comportamento social e habilidades adaptativas.' }
      ]
    },
    {
      titulo: 'Avaliação Neuropsicológica',
      photoUrl: 'assets/imgs/neuropsicologia.png',
      faqList: [
        { question: 'Para quem é indicada?', answer: 'A avaliação neuropsicológica é recomendada para pessoas com dificuldades cognitivas, de aprendizagem ou comportamentais.' },
        { question: 'Quanto tempo dura?', answer: 'O processo pode levar de 2 a 5 sessões, dependendo da complexidade.' }
      ]
    },
    {
      titulo: 'Avaliação Psicológica para Cirurgias',
      photoUrl: 'assets/imgs/av-cirurgias.png',
      faqList: [
        { question: 'Qual a importância dessa avaliação?', answer: 'Ela ajuda a identificar fatores psicológicos que podem influenciar no sucesso da cirurgia.' },
        { question: 'É obrigatória?', answer: 'Para algumas cirurgias, sim, como a bariátrica.' }
      ]
    }
  ];

}
