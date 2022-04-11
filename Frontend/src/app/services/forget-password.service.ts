import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from '../global';
import { Observable } from 'rxjs';
import { ChangePasswordDto } from '../models/change-password-dto';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {

  public url: string;

  constructor(private http: HttpClient) {

    this.url = Global.url;

  }

  forgotPassword(body: string){
     return this.http.post(this.url + 'forgotPassword/',body)
  }

  resetPassword(dto: ChangePasswordDto): Observable <any>{
    return this.http.post(this.url + 'resetpassword/', dto)
  }
}

