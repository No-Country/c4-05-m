import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { GuardadasComponent } from './guardadas/guardadas.component';
import { HeaderComponent } from './components/header/header.component';
import { MensajesComponent } from './mensajes/mensajes.component';


@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    GuardadasComponent,
    HeaderComponent,
    MensajesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports: []
})
export class PagesModule { }
