import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { GuardadasComponent } from './components/guardadas/guardadas.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'home', component: HomeComponent, data: { animation: 'homePage' } },
  { path: 'login', component: LoginComponent, pathMatch: 'full'},
  { path: 'forget-password', component: ForgetPasswordComponent, pathMatch: 'full'},
  { path: 'resetpassword/:token', component: ResetPasswordComponent, pathMatch: 'full'},
  { path: 'profile/:id', component: ProfileComponent, pathMatch: 'full'},
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
