import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { GuardadasComponent } from './guardadas/guardadas.component';
import { HeaderComponent } from './components/header/header.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { FormsModule } from '@angular/forms';
import { CrearPublicacionComponent } from './components/crear-publicacion/crear-publicacion.component';
import { CrearPublicacion1Component } from './components/crear-publicacion1/crear-publicacion1.component';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    GuardadasComponent,
    HeaderComponent,
    MensajesComponent,
    CrearPublicacionComponent,
    CrearPublicacion1Component
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    PickerModule,
    FormsModule,
  ],
  exports: []
})
export class PagesModule { }
