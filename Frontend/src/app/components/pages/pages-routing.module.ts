import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { GuardadasComponent } from './guardadas/guardadas.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { ProfileComponent } from './profile/profile.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { CambioContraComponent } from './cambio-contra/cambio-contra.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';

const routes: Routes = [
  { path: '', component: PagesComponent },
  { path: 'home', component: HomeComponent, data: { animation: 'homePage' } },
  {
    path: 'guardadas',
    component: GuardadasComponent,
    data: { animation: 'guardadasPage' },
  },
  {
    path: 'mensajes',
    component: MensajesComponent,
    data: { animation: 'MensajesPage' },
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: { animation: 'ProfilePage' },
  },
  {
    path: 'editar-perfil',
    component: EditarPerfilComponent,
    data: { animation: 'EditarPerfilPage' },
  },
  {
    path: 'cambiar-contra',
    component: CambioContraComponent,
    data: { animation: 'CambiarContraPage' },
  },
  {
    path: 'notificaciones',
    component: NotificacionesComponent,
    data: { animation: 'NotificacionesPage' },
  },
  {
    path: 'privacidad',
    component: PrivacidadComponent,
    data: { animation: 'PrivacidadPage' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
