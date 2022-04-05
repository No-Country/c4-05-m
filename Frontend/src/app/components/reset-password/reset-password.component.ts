import { Component, OnInit } from '@angular/core';
import { ForgetPasswordService } from '../../services/forget-password.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['../../../../css/reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetForm!: FormGroup;
  errors = null;
  successMsg = null;

  constructor(
    public fb: FormBuilder,
    public forgetPasswordService: ForgetPasswordService
  ) {
    
  }

  ngOnInit(): void {
  }

  onReset(){
    
  }

}
