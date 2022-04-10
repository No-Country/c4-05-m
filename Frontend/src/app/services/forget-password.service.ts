import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {

  public email: " ";

  constructor() { 

    this.email = " ";
  }

    // Forgot password

    forgotPassword(email: "") {
     return this.email
  }
}
