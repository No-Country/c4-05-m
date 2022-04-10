import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SessionComponent } from './session.component';

const routes: Routes = [
  { path: '', component: SessionComponent },
  {
    path: 'login',
    component: LoginComponent,
    data: { animation: 'loginPage' },
  },
  {
    path: 'crear-cuenta',
    component: CrearCuentaComponent,
    data: { animation: 'crearCuentaPage' },
  },
  {
    path: 'forget-password',
    component: ForgetPasswordComponent,
    data: { animation: 'forgetPasswordPage' },
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
    data: { animation: 'resetPasswordPage' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionRoutingModule {}
