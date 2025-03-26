import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  @Input() dados: { name: string; whatsapp: string; instagram: string; titulo: string; subtitulo: string; photoUrl: string; formacao: string[]; atuacao: string; publicoAlvo: string[] }[] = [];

  modalAberto: boolean = false;

  profissionalSelecionado: any = null;

  openModal(dado: any) {
    this.profissionalSelecionado = {
      nome: dado.name,
      titulo: dado.titulo,
      subtitulo: dado.subtitulo,
      imagem: dado.photoUrl,
      formacao: dado.formacao,
      atuacao: dado.atuacao,
      publicoAlvo: dado.publicoAlvo,

      whatsapp: dado.whatsapp,
      instagram: dado.instagram,
    };

    this.modalAberto = true;
    document.body.style.overflow = 'hidden';
    document.body.classList.add('no-scroll');

  }

  fecharModal() {
    this.modalAberto = false;
    document.body.style.overflow = '';
    document.body.classList.remove('no-scroll');
  }

}