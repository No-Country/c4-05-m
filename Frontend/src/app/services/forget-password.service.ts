import { Injectable } from '@angular/core';
import { HttpConfigService } from './http-config.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {

  public url: string;
  public body: {}

  constructor(private httpService: HttpConfigService) {

    this.url = `${environment.apiUrl}/user/`;
    this.body = {
      "email": ""
    }
  }

  forgotPassword(){
     return this.httpService.post(this.url + 'forgotPassword', this.body)
  }

  resetPassword(password: string, confirmPassword: string) { //ver confirm
    return this.httpService.post(this.url + 'resetpassword/', password)
 }
}
