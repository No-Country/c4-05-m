import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
