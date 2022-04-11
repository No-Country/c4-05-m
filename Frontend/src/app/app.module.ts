import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
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
import { HomeComponent } from './components/home/home.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    ProfileComponent,
    HeaderComponent,
    GuardadasComponent,
    HomeComponent,
    MensajesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    PickerModule
  ],
  providers: [
    LoginService,
    CookieService,
    ForgetPasswordService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
