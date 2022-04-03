import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearCuentaComponent } from './components/crear-cuenta/crear-cuenta.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, CrearCuentaComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [Title],
  bootstrap: [AppComponent],
})
export class AppModule {}
