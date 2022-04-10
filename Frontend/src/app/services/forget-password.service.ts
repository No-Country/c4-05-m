import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from '../global';
import { Observable } from 'rxjs';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {

  public url: string;
  public body: {};


  constructor(private http: HttpClient) { 

    this.url = Global.url;
    this.body = {
      "email": ""
    }
  }

  forgotPassword(){
     return this.http.post(this.url + 'forgotPassword/', this.body)
  }

  resetPassword(token: string): Observable <any> {
    return this.http.post(this.url + 'resetpassword/', token)
 }

  newPassword(password: string, confirmPassword: string){
    const newPassword = { password, confirmPassword };
    return this.http.post(this.url + 'resetpassword/', newPassword)
  }

}
