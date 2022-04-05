import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from '../global';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {

  public url: string;
  public body: {}

  constructor(private http: HttpClient) { 

    this.url = Global.url;
    this.body = {
      "email": ""
    }
  }

  forgotPassword(){
     return this.http.post(this.url + 'forgotPassword', this.body)
  }

  resetPassword(password: string, confirmPassword: string) { //ver confirm
    return this.http.post(this.url + 'resetpassword/', password)
 }
}
