import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { LoginService } from './services/login.service';
import { CookieService } from 'ngx-cookie-service';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ForgetPasswordService } from './services/forget-password.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    LoginService,
    CookieService,
    ForgetPasswordService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
