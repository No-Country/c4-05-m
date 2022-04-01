import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private cookies: CookieService

  ) { }

  // Login 
  login(user: any): Observable<any> {
    return this.http.post("https://reqres.in/api/login", user);
  }

  setToken(token: string) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }
 
  // Forgot password

  forgotPassword(email:string) {
    this.http.post("https://reqres.in/api", email)
  }
  
  // Email verification
  sendEmailForVerification(user: any){
    user.sendEmailForVerification().then((res: any) => {
 
    })
  }
}
