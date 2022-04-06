import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { GuardadasComponent } from './guardadas/guardadas.component';

const routes: Routes = [
  { path: '', component: PagesComponent },
  { path: 'home', component: HomeComponent, data: {animation: 'homePage'} },
  { path: 'guardadas', component: GuardadasComponent, data: {animation: 'guardadasPage'} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
