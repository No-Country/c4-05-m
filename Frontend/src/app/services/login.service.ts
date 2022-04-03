import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpConfigService } from './http-config.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpService: HttpConfigService,
    private cookies: CookieService,
    private router: Router

  ) { }

  // Login
  login(user: any): Observable<any> {
    return this.httpService.post(environment.apiUrl + '/user/login', user);
  }

  setToken(token: string) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }

  logOut(){ // Éste método va en el Home
    this.cookies.delete('token');
    this.router.navigateByUrl('/login')
  }
}
