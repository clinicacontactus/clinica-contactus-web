import { Component } from '@angular/core';

@Component({
  selector: 'app-profissionais',
  templateUrl: './profissionais.component.html',
  styleUrls: ['./profissionais.component.css']
})
export class ProfissionaisComponent {

  dadosParaSlider = [
    {
      name: 'João Pedro Oliveira Freire',
      titulo: 'Neuropsicólogo Clínico e Psicoterapeuta',
      subtitulo: 'CRP 11/18847',
      photoUrl: 'assets/imgs/especialistas/Jp.jpeg',
      formacao: [
        'Graduado em Psicologia.',
        'Especialista em Neuropsicologia pela UNICHRISTUS.',
        'Mestrando em Medicina Translacional pela UFC.'
      ],
      atuacao: 'João Pedro é um psicólogo dedicado ao cuidado integral da saúde mental, com foco em psicoterapia analítico-comportamental e avaliação neuropsicológica. Seu trabalho é voltado para o manejo de questões como ansiedade, depressão, regulação emocional, desenvolvimento do autoconhecimento, aprimoramento de habilidades sociais e capacitação para resolução de problemas. Como neuropsicólogo, utiliza instrumentos e testes modernos, cientificamente validados, para realizar avaliações precisas e descritivas, contribuindo para diagnósticos confiáveis e intervenções personalizadas.',
      publicoAlvo: [
        'Psicoterapia: Adolescentes, adultos e idosos.',
        'Avaliação Neuropsicológica: Pessoas a partir de 6 anos.'
      ]
    },
    {
      name: 'Salinas Aerolineas Moisés Rocha Freitas',
      titulo: 'Psicóloga Clínica e Supervisora ABA',
      subtitulo: 'CRP 11/18942',
      photoUrl: 'assets/imgs/especialistas/Salinas.jpeg',
      formacao: [
        'Psicóloga especializada em Terapia Cognitivo-Comportamental (TCC) e Análise do Comportamento Aplicada (ABA).',
        'Pós-graduanda em Neuropsicologia.',
        'Mestranda em Psicologia.'
      ],
      atuacao: 'Sou psicóloga especializada em Terapia Cognitivo-Comportamental (TCC) e Análise do Comportamento Aplicada (ABA), com foco no atendimento a crianças, adolescentes e adultos. Atuo como supervisora ABA, dedicando-me especialmente ao trabalho com autismo, e possuo formação avançada em Terapia Cognitivo-Comportamental. Atualmente, estou ampliando meus conhecimentos como pós-graduanda em Neuropsicologia e mestranda em Psicologia, buscando integrar as mais recentes evidências científicas à minha prática clínica. Meu objetivo é oferecer um atendimento humanizado, ético e baseado em evidências, contribuindo para o desenvolvimento emocional, cognitivo e social dos meus pacientes.',
      publicoAlvo: [
        'Crianças, adolescentes e adultos.',
        'Pacientes com desafios do espectro autista e transtornos psicológicos.'
      ]
    },
    {
      name: 'Mirella de Sousa Oliveira',
      titulo: 'Psicóloga Clínica e Supervisora ABA',
      subtitulo: 'CRP 11/19015',
      photoUrl: 'assets/imgs/especialistas/Mirella.jpeg',
      formacao: [
        'Psicóloga Clínica, especialista em Análise do Comportamento Aplicada (ABA).',
        'Especialização em Gestalt-Terapia e Educação Inclusiva.'
      ],
      atuacao: 'Sou uma psicóloga apaixonada pelo processo de transformação e desenvolvimento humano. Possuo especialização em Análise do Comportamento Aplicada, Gestalt-Terapia e Educação Inclusiva, dedicando-me a apoiar e orientar aqueles que buscam superar desafios e encontrar um suporte emocional e mental. Atuo como psicóloga clínica, atendendo crianças, adolescentes e adultos, oferecendo um espaço acolhedor para o autoconhecimento e o acompanhamento de diversas questões. Além do trabalho clínico com psicoterapia e supervisão ABA, trabalho na área de Educação Inclusiva, refletindo meu profundo interesse e compromisso com a promoção de um ambiente mais justo e acolhedor para todos.',
      publicoAlvo: [
        'Crianças, adolescentes e adultos.',
        'Pacientes em busca de autoconhecimento e suporte emocional.'
      ]
    }
  ];

}
