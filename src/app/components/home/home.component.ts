import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imagens: { photoUrl: string }[] = [];
  quantidadeImagens: number = 4;  // Número de imagens

  imagemQuemSomosNos: { photoUrl: string }[] = [];


  async ngOnInit() {
    await this.carregarImagens(); 

    this.imagemQuemSomosNos.push({ photoUrl: 'assets/imgs/quem-somos.jpeg' });
  }

  async carregarImagens() {
    for (let i = 1; i <= this.quantidadeImagens; i++) {
      const nomeImagem = `${i}.jpeg`;
      const urlPrimaria = `assets/imgs/imgs-clinica/${nomeImagem}`;
      const urlSecundaria = `src/assets/imgs/imgs-clinica/${nomeImagem}`;

      const urlFinal = await this.verificarImagem(urlPrimaria) ? urlPrimaria : urlSecundaria;
      this.imagens.push({ photoUrl: urlFinal });
    }
  }

  verificarImagem(url: string): Promise<boolean> {
    return new Promise(resolve => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  }

  title: string = 'Quem somos';
  description: string = `Fundada por três psicólogos apaixonados pela profissão, a Contactus nasceu da crença no poder transformador da psicologia para promover qualidade de vida e bem-estar. Nosso trabalho é guiado pelas normas éticas da profissão e pelo conhecimento científico mais atualizado, aliado a recursos personalizados e de alta qualidade.  

Na Contactus, o foco está no acolhimento das dificuldades de cada paciente, oferecendo um espaço seguro e empático para o desenvolvimento pessoal. Acreditamos no trabalho conjunto, onde paciente e terapeuta caminham lado a lado em busca de resultados concretos e relevantes, sempre apresentados de forma clara e transparente.  

Seja para superar desafios emocionais, desenvolver autoconhecimento, alcançar uma vida mais equilibrada ou identificar um diagnóstico preciso, estamos aqui para ajudar você..`;

}
