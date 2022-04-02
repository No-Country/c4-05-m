import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpConfigService } from '../../services/http-config.service';
import { environment } from '../../../environments/environment';

const userData = new FormData();

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.scss'],
})
export class CrearCuentaComponent implements OnInit {

  firstName: any;
  lastName: any;
  username: any;
  email: any;
  password: any;
  passwordConfirm: any;
  userImg: any;

  constructor(
    private titleService: Title,
    private httpService: HttpConfigService
  ) {}

  ngOnInit(): void {
    // Cambia el title del sitio:
    this.titleService.setTitle('Fashion Hunter - Crear Cuenta');
  }

  // Carga el archivo a subir
  onFileSelected(event: any) {

    console.log(event.target.files);
    const archivoCapturado = event.target.files[0];
    this.userImg = archivoCapturado;
    return true;
  }

  crearCuenta() {

    userData.append("firstName", this.firstName);
    userData.append("lastName", this.lastName);
    userData.append("username", this.username);
    userData.append("email", this.email);
    userData.append("password", this.password);
    userData.append("passwordConfirm", this.passwordConfirm);
    userData.append("userImg", this.userImg);

    this.httpService
      .post(environment.crearCuentaUrl, userData)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
