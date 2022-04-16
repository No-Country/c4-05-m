import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { GuardadasComponent } from './guardadas/guardadas.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { CrearPublicacion1Component } from './components/crear-publicacion1/crear-publicacion1.component';

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
  // Provicional:
  {
    path: 'crear-publicacion1',
    component: CrearPublicacion1Component,
    data: { animation: 'CrearPublicacion1Page' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
