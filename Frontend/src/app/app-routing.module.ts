import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCuentaComponent } from './components/crear-cuenta/crear-cuenta.component';
import { LoginComponent } from './components/login/login.component';
import { SessionGuard } from './guards/session.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/pages/pages.module').then((m) => m.PagesModule),
    canActivate: [SessionGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'crear-cuenta', component: CrearCuentaComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
