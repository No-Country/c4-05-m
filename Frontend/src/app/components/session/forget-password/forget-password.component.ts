import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ForgetPasswordService } from 'src/app/services/forget-password.service';
import { MatDialog } from '@angular/material/dialog';
import { Dialog1Component } from '../../../modules/shared/dialog1/dialog1.component';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
})
export class ForgetPasswordComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private forgetPasswodService: ForgetPasswordService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog
  ) {
    this.form = this.formBuilder.group({
      email: [''],
    });
  }

  ngOnInit() {}

  sendEmail() {
    return this.forgetPasswodService.forgotPassword(this.form.value.email)
      .subscribe({
        next: () => {
          this.dialog.open(Dialog1Component, {disableClose: false});
        },
        error: (error) => { },
      });
  }
}
