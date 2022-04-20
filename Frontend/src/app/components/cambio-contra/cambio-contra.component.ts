import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EditarService } from 'src/app/services/editar.service';

@Component({
  selector: 'app-cambio-contra',
  templateUrl: './cambio-contra.component.html',
  styleUrls: ['../../../../css/cambio-contra.component.css']
})
export class CambioContraComponent implements OnInit {

  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;

  _id: string;

  constructor( private editarService: EditarService) { 

      this.oldPassword = '';
      this.newPassword = '';
      this.confirmNewPassword = '';

      this._id = '';
  }

  ngOnInit(): void {
  }

  cambiar(){

    if (this.newPassword === this.confirmNewPassword) {

      const raw = {
        'oldPassword': this.oldPassword,
        'newPassword': this.newPassword,
        'confirmNewPassword': this.confirmNewPassword
      };

      const strRaw = JSON.stringify(raw);

    this.editarService.updatePassword(this._id, strRaw)
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

}
