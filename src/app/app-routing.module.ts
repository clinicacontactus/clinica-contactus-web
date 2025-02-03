import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { SliderComponent } from './components/slider/slider.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'servicos', component: ServicesComponent },
  { path: 'contato', component: ContactComponent },
  { path: 'profissionais', component: SliderComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }