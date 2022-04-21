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
import { NgxDropzoneModule } from 'ngx-dropzone';
import { DescartarPublicacionComponent } from './components/descartar-publicacion/descartar-publicacion.component';
import { CreandoPublicacionComponent } from './components/creando-publicacion/creando-publicacion.component';
import { MaterialModule } from '../../modules/material/material.module';
import { ProfileComponent } from './profile/profile.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { CambioContraComponent } from './cambio-contra/cambio-contra.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    GuardadasComponent,
    HeaderComponent,
    MensajesComponent,
    CrearPublicacionComponent,
    CrearPublicacion1Component,
    DescartarPublicacionComponent,
    CreandoPublicacionComponent,
    ProfileComponent,
    EditarPerfilComponent,
    CambioContraComponent,
    NotificacionesComponent,
    PrivacidadComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    PickerModule,
    FormsModule,
    NgxDropzoneModule,
    MaterialModule
  ],
  exports: []
})
export class PagesModule { }
