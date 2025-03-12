import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-modal',
  templateUrl: './welcome-modal.component.html',
  styleUrls: ['./welcome-modal.component.scss']
})
export class WelcomeModalComponent implements OnInit {
  showModal: boolean = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showModal = false;
    }, 3500);
  }

  fecharModal() {
    this.showModal = false;
  }
}
