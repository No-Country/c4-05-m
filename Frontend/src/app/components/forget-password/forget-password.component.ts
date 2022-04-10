import { Component, OnInit } from '@angular/core';
import { ForgetPasswordService } from 'src/app/services/forget-password.service';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['../../../../css/forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  user = {
    username: ""
  }

  constructor(
    private forgetPasswodService: ForgetPasswordService
  ) { 

  }

  ngOnInit(): void {
  }

  sendEmail() {
    this.forgetPasswodService.forgotPassword('');
    console.log('Email enviado')
}
}
