import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCuentaComponent } from './components/crear-cuenta/crear-cuenta.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { LoginComponent } from './components/login/login.component';
import { NavigationGuard } from './guards/navigation.guard';
import { SessionGuard } from './guards/session.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/pages/pages.module').then((m) => m.PagesModule),
    canActivate: [NavigationGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [SessionGuard],
    data: { animation: 'loginPage' },
  },
  {
    path: 'crear-cuenta',
    component: CrearCuentaComponent,
    canActivate: [SessionGuard],
    data: { animation: 'crearCuentaPage' },
  },
  {
    path: 'forget-password',
    component: ForgetPasswordComponent,
    canActivate: [SessionGuard],
    data: { animation: 'forgetPasswordPage' },
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
