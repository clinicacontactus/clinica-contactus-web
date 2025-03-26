import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-servico',
  templateUrl: './modal-servico.component.html',
  styleUrls: ['./modal-servico.component.scss']
})
export class ModalServicoComponent {

  @Input() servico!: {
    titulo: string;
    subtitulo?: string;
    photoUrl: string;
    faqList: { question: string; answer: string }[];
  };

  @Output() fechar = new EventEmitter<void>();

  fecharModal() {
    this.fechar.emit();
  }
}
