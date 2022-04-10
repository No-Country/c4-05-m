import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from '../global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {

  public url: string;


  constructor(private http: HttpClient) {

    this.url = Global.url;

  }

  forgotPassword(email: string) {
    const theEmail = { email };
    return this.http.post(this.url + 'forgotPassword/', theEmail)
  }

  resetPassword(token: string): Observable<any> {
    return this.http.post(this.url + 'resetpassword/', token)
  }
}

