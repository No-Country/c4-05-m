import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ForgetPasswordService } from 'src/app/services/forget-password.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['../../../../css/forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  
  public form: FormGroup;
  public body: string;

  constructor(
    private forgetPasswodService: ForgetPasswordService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      email: ['']
    });
    this.body = "";
  }

  ngOnInit(){
  }

  sendEmail() {
    return this.forgetPasswodService.forgotPassword(this.body).subscribe({
      next: () => console.log('Email enviado'),
      error: error => console.log(error)
    });
    };
  };