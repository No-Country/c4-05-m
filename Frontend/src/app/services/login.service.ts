import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";
import { Global } from '../global';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public url: string;

  constructor(
    private http: HttpClient,
    private cookies: CookieService,
    private router: Router
  ) {
    this.url = Global.url;
   }

  // Login
  login(user: any): Observable<any> {
    return this.http.post(this.url + '/user/login', user);
  }

  logOut() {
    this.cookies.delete('token');
    this.cookies.delete('userId');
    this.router.navigateByUrl('/login')
  }

  setToken(token: string) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }

  setUserId(id: string) {
    this.cookies.set('userId', id);
  }

  getUserId() {
    return this.cookies.get('userId');
  }

}
