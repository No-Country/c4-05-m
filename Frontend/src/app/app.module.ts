import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { HeaderComponent } from './components/header/header.component';
import { GuardadasComponent } from './components/guardadas/guardadas.component' ;

import { LoginService } from './services/login.service';
import { CookieService } from 'ngx-cookie-service';
import { ForgetPasswordService } from './services/forget-password.service';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    ProfileComponent,
    HeaderComponent,
    GuardadasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    LoginService,
    CookieService,
    ForgetPasswordService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
