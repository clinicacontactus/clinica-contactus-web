import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SliderComponent } from './components/slider/slider.component';
import { MapComponent } from './components/map/map.component';
import { CommonModule } from '@angular/common';
import { LocalidadeComponent } from './components/localidade/localidade.component';
import { ProfissionaisComponent } from './components/profissionais/profissionais.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { MatIconModule } from '@angular/material/icon';
import { FaqDropdownComponent } from './components/faq-dropdown/faq-dropdown.component';
import { ModalDetalhesComponent } from './modal-detalhes/modal-detalhes.component';

import { LightboxModule } from 'ngx-lightbox';
import { WelcomeModalComponent } from './components/welcome-modal/welcome-modal.component';
import { ModalProfissionalComponent } from './components/modal-profissional/modal-profissional.component';

import { MatDialogModule } from '@angular/material/dialog';
import { ModalServicoComponent } from './modal-servico/modal-servico.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    SliderComponent,
    MapComponent,
    LocalidadeComponent,
    ProfissionaisComponent,
    GaleriaComponent,
    FaqDropdownComponent,
    ModalDetalhesComponent,
    WelcomeModalComponent,
    ModalProfissionalComponent,
    ModalServicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    MatIconModule,
    LightboxModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
