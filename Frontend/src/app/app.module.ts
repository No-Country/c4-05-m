import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { CookieService } from 'ngx-cookie-service';
import { SharedModule } from './modules/shared/shared.module';
import { AngularFireModule} from '@angular/fire/compat';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { environment } from '../environments/environment';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = environment.firebaseConfig;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [Title, CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
