import { Component, OnInit } from '@angular/core';
import { ForgetPasswordService } from '../../../services/forget-password.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  password: string = '';
  passwordConfirm: string = '';

  constructor(
    private forgetPassService: ForgetPasswordService
  ) { }

  ngOnInit(): void {
  }

  onReset() {
    const raw = {
      'password': this.password,
      'passwordConfirm': this.passwordConfirm
    };

    const strRaw = JSON.stringify(raw);

    this.forgetPassService.resetPassword(strRaw)
      .subscribe({
        next: (resp: any) => {
          console.log(resp);

        },
        error: (error: any) => {
          console.log(error);

        },
        complete: () => {
          console.log('complete');

        }
      });
  }

}
