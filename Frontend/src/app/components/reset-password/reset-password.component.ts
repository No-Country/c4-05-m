import { Component, OnInit } from '@angular/core';
import { ForgetPasswordService } from '../../services/forget-password.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['../../../../css/reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  public form: FormGroup;
  password: string;
  confirmPassword: string;
  token: string;

  constructor(
    private fb: FormBuilder,
    private forgetPasswordService: ForgetPasswordService,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) {
    this.password = "";
    this.confirmPassword = "";
    this.token = "";
    this.form = this.fb.group({
      password: [''],
      confirmPassword: [''],
    })
  }

  ngOnInit(){
    
    }
  
  onReset(): void{
    if(this.password !== this.confirmPassword){
      alert('Las contraseñas no coinciden')
      return;
    }
    this.token = this.activatedRoute.snapshot.params['token'];
    this.forgetPasswordService.newPassword(this.form.value.password, this.form.value.confirmPassword)
    .subscribe({
      next: () => {
        this.router.navigate(['/login'])
      },
      error: (error) => {console.log('hubo un error')}
    });
  }
}

