import { Injectable } from '@angular/core';
import { HttpConfigService } from './http-config.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {

  public url: string;

  constructor(private httpService: HttpConfigService) {

    this.url = `${environment.apiUrl}/user/`;
  }

  forgotPassword(email: string){
    const theEmail = {email};
    return this.httpService.post(this.url + 'forgotPassword', theEmail)
  }

  resetPassword(password: string, confirmPassword: string) { //ver confirm
    return this.httpService.post(this.url + 'resetpassword/', password)
 }
}
