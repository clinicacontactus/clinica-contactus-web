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
      whatsapp: 'https://api.whatsapp.com/send?phone=5585991518663&text=Olá, João! Gostaria de mais informações!',
      instagram: 'https://www.instagram.com/joaofreirepsi?igsh=MWI4YWR6MnkzcGV5Ng==',
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
      whatsapp: 'https://api.whatsapp.com/send?phone=5585981656607&text=Olá, Salinas! Gostaria de mais informações!',
      instagram: 'https://www.instagram.com/_psisalinasfreitas?igsh=MXF4YWh6N2dzbWJ0bg==',
      formacao: [
        'Psicóloga especializada em Terapia Cognitivo-Comportamental (TCC) e Análise do Comportamento Aplicada (ABA).',
        'Pós-graduanda em Neuropsicologia.',
        'Mestranda em Psicologia.'
      ],
      atuacao: 'Salinas Freitas é uma psicóloga especializada em Terapia Cognitivo-Comportamental (TCC) e Análise do Comportamento Aplicada (ABA), com foco no atendimento a crianças, adolescentes e adultos. Ela atua como supervisora ABA, dedicando-se especialmente ao trabalho com autismo, e possui formação avançada em Terapia Cognitivo-Comportamental. Atualmente, está ampliando seus conhecimentos como pós-graduanda em Neuropsicologia e mestranda em Psicologia, buscando integrar as mais recentes evidências científicas à sua prática clínica. Seu objetivo é oferecer um atendimento humanizado, ético e baseado em evidências, contribuindo para o desenvolvimento emocional, cognitivo e social dos seus pacientes. Seja para lidar com desafios do espectro autista, questões emocionais ou transtornos psicológicos, ela está comprometida em auxiliar no bem-estar psicológico de cada paciente.',
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
      whatsapp: 'https://api.whatsapp.com/send?phone=5585989828344&text=Olá, Mirella! Gostaria de mais informações!',
      instagram: 'https://www.instagram.com/psimirellaoliveira?igsh=OGs0YWplZHF2aDdj',
      formacao: [
        'Psicóloga Clínica, especialista em Análise do Comportamento Aplicada (ABA).',
        'Especialização em Gestalt-Terapia e Educação Inclusiva.'
      ],
      atuacao: ' Mirella Sousa é uma psicóloga apaixonada pelo processo de transformação e desenvolvimento humano. Possui especialização em Análise do Comportamento Aplicada, Gestalt-Terapia e Educação Inclusiva, e tem se dedicado a apoiar e orientar aqueles que buscam superar desafios e encontrar suporte emocional e mental. Atua como psicóloga clínica, atendendo crianças, adolescentes e adultos, oferecendo um espaço acolhedor para o autoconhecimento e o acompanhamento de diversas questões. Acredita em sua capacidade de se conectar com o outro de forma verdadeira e respeitosa, o que realmente a destaca. Além do trabalho clínico com psicoterapia e supervisão ABA, trabalha na área de Educação Inclusiva, reflexo do seu profundo interesse e compromisso com a promoção de um ambiente mais justo e acolhedor para todos. ',
      publicoAlvo: [
        'Crianças, adolescentes e adultos.',
        'Pacientes em busca de autoconhecimento e suporte emocional.'
      ]
    }
  ];

}
