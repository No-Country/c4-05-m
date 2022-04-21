import { Component, OnInit } from '@angular/core';
import { ForgetPasswordService } from '../../../services/forget-password.service';
import { MatDialog } from '@angular/material/dialog';
import { Dialog2Component } from 'src/app/modules/shared/dialog2/dialog2.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  password: string = '';
  passwordConfirm: string = '';

  constructor(
    private forgetPassService: ForgetPasswordService,
    private dialog: MatDialog,
    private _title: Title
  ) {
    this._title.setTitle('Fashion Hunter - Reset Password');
  }

  ngOnInit(): void {
  }

  onReset() {

    if (this.password === this.passwordConfirm) {

      const raw = {
        'password': this.password,
        'passwordConfirm': this.passwordConfirm
      };

      const strRaw = JSON.stringify(raw);

      this.forgetPassService.resetPassword(strRaw)
      .subscribe({
        next: (resp: any) => {
          this.dialog.open(Dialog2Component, {disableClose: true});

        },
        error: (error: any) => {},
        complete: () => {}
      });
    } else {}
  }

}
