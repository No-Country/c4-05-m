import { Component, OnInit } from '@angular/core';
import { HttpConfigService } from 'src/app/services/http-config.service';
import { LoginService } from 'src/app/services/login.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  userImg: any;
  nombreComnpleto: any;
  lastName: any;
  email: any;
  user: any;

  constructor(
    private httpService: HttpConfigService,
    private loginService: LoginService
  ) {
    const userId = this.loginService.getUserId();

    this.httpService.get<any>(`${environment.apiUrl}/user/${userId}`, true)
      .subscribe({
        next: (resp: any) => {
          this.user = resp.data.user[0];
        },
        error: error => { },
        complete: () => { }
      })
  }

  ngOnInit(): void {
  }



  guardar() {/*
    userData.append("userImg", this.userImg);
    userData.append("firstName", this.firstName);
    userData.append("lastName", this.lastName);
    userData.append("username", this.username);
    userData.append("email", this.email);
    this.httpService
      .post(`${environment.apiUrl}/user/signup`, userData)
      .subscribe({
        next: (resp) => { },
        error: (error) => { },
        complete: () => {
          this.openDialog();
        }
      });
    */}

}
