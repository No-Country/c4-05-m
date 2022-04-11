import { Injectable } from '@angular/core';
import { HttpConfigService } from './http-config.service';
import { environment } from '../../environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class ForgetPasswordService {
  constructor(
    private httpService: HttpConfigService,
    private cookies: CookieService
  ) {}

  forgotPassword(email: string) {
    const theEmail = { email };
    return this.httpService.post(
      `${environment.apiUrl}/user/forgotPassword`,
      theEmail
    );
  }

  resetPassword(body: any) {
    return this.httpService.post(
      `${environment.apiUrl}/user/resetpassword/${this.cookies.get(
        'emailToken'
      )}`,
      body,
      true
    );
  }
}
