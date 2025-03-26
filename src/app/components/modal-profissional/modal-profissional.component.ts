import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-profissional',
  templateUrl: './modal-profissional.component.html',
  styleUrls: ['./modal-profissional.component.scss']
})
export class ModalProfissionalComponent {

  @Input() profissional: any;
  @Input() isOpen: boolean = false;
  @Output() closeModal = new EventEmitter<void>();

  fecharModal() {
    this.closeModal.emit();
  }
}