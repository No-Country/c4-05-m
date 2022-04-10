import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { LoginComponent } from './components/login/login.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full'},
  { path: 'forget-password', component: ForgetPasswordComponent, pathMatch: 'full'},
  { path: 'reset-password/:token', component: ResetPasswordComponent, pathMatch: 'full'}
=======
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
    path: '',
    loadChildren: () =>
      import('./components/session/session.module').then(
        (m) => m.SessionModule
      ), canActivate: [SessionGuard]
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
>>>>>>> 3914df6b958c6e2786cfd30ba68bff88257432b6
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
