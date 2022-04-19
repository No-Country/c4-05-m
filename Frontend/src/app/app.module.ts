// MÓDULOS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { AppRoutingModule } from './app-routing.module';
import { SessionModule } from './components/session/session.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// COMPONENTES
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GuardadasComponent } from './components/guardadas/guardadas.component' ;
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { EditarPerfilComponent } from './components/editar-perfil/editar-perfil.component';
import { CambioContraComponent } from './components/cambio-contra/cambio-contra.component';

// SERVICIOS
import { LoginService } from './services/login.service';
import { CookieService } from 'ngx-cookie-service';
import { ForgetPasswordService } from './services/forget-password.service';
import { EditarService } from './services/editar.service';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';
import { PrivacidadComponent } from './components/privacidad/privacidad.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HeaderComponent,
    GuardadasComponent,
    HomeComponent,
    MensajesComponent,
    EditarPerfilComponent,
    CambioContraComponent,
    NotificacionesComponent,
    PrivacidadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    PickerModule,
    SessionModule
  ],
  providers: [
    LoginService,
    CookieService,
    ForgetPasswordService,
    EditarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
