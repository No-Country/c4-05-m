import { Component, OnInit } from '@angular/core';
import { ForgetPasswordService } from '../../services/forget-password.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ChangePasswordDto } from 'src/app/models/change-password-dto';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['../../../../css/reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  password: string;
  passwordConfirm: string;
  token: string;

  dto: ChangePasswordDto;

  constructor(
    private forgetPasswordService: ForgetPasswordService,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) {
    this.password = "";
    this.passwordConfirm = "";
    this.token = "";
    this.dto = new ChangePasswordDto('', '')
  }

  ngOnInit(){ }
  
  onReset(): void{
    if(this.password !== this.passwordConfirm){
      alert('Las contraseñas no coinciden')
      return;
    }
    this.token = this.activatedRoute.snapshot.params['token'];
    this.dto = new ChangePasswordDto(this.password, this.passwordConfirm)
    this.forgetPasswordService.resetPassword(this.dto)
    .subscribe({
      next: () => {
        this.router.navigate(['/login'])
      },
      error: (error) => {console.log('hubo un error')}
    });
  }
}