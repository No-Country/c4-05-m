import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpConfigService } from '../../services/http-config.service';
import { LoginService } from '../../services/login.service';
import { EditarService } from 'src/app/services/editar.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['../../../../css/editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  user: any;
  userImg: any;

  _id: string;
  body: {
  firstName: '',
  lastName: '',
  occupation: '',
  email: '',
  biography: '',
  };

  constructor(
    private httpService: HttpConfigService,
    private loginService: LoginService,
    private editarService: EditarService
  ) {
  
    this._id = '';

    this.body = {
    firstName: "",
    lastName: "",
    occupation: "",
    email: "",
    biography: ""}


    const userId = this.loginService.getUserId();

    this.httpService.get<any>(`${environment.apiUrl}/user/${userId}`, true)
      .subscribe({
        next: (resp: any) => {
          this.user = resp.data.user;
        },
        error: error => { },
        complete: () => { }
      })
  }

  ngOnInit(): void {

  }


  guardar() {
    this.editarService.updateData(this._id, this.body)
      .subscribe({
        next: (resp) => { console.log(resp)},
        error: (error) => { },
        complete: () => {
          ;
        }
      });
    }

    eliminarCuenta(){

    }

  deleteUser(){
    this.editarService.deleteUser(this._id)
      .subscribe({
        next: (resp) => { console.log(resp)},
        error: (error) => { },
        complete: () => {
          ;
        }
      });
  }
}