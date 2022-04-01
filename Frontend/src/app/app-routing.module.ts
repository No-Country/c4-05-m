import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCuentaComponent } from './components/crear-cuenta/crear-cuenta.component';

const routes: Routes = [
  {path: 'crear-cuenta', component: CrearCuentaComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'crear-cuenta'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
