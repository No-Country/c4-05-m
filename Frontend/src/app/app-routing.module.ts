import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { GuardadasComponent } from './components/guardadas/guardadas.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { EditarPerfilComponent } from './components/editar-perfil/editar-perfil.component';
import { CambioContraComponent } from './components/cambio-contra/cambio-contra.component';


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'home', component: HomeComponent, data: { animation: 'homePage' } },
  { path: 'user/:id', component: ProfileComponent, pathMatch: 'full'},
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
    path: 'editar-perfil',
    component: EditarPerfilComponent,
  },
  {
    path: 'cambiar-contra',
    component: CambioContraComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
