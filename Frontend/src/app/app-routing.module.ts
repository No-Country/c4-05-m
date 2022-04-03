import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCuentaComponent } from './components/crear-cuenta/crear-cuenta.component';
import { DialogComponent } from './components/dialog/dialog.component';

const routes: Routes = [
  {path: 'crear-cuenta', component: CrearCuentaComponent},
  {path: 'md', component: DialogComponent}, /* --> TODO: Sólo para maquetar el componente. Quitar luego. */
  {path: '**', pathMatch: 'full', redirectTo: 'crear-cuenta'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
