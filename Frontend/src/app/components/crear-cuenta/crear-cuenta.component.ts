import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { HttpConfigService } from '../../services/http-config.service';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

const userData = new FormData();

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css'],
})
export class CrearCuentaComponent implements OnInit {

  firstName: any;
  lastName: any;
  username: any;
  email: any;
  password: any;
  passwordConfirm: any;
  userImg: any;
  // predefinedImgs: any;
  previsualizacion: string;

  constructor(
    private _title: Title,
    private httpService: HttpConfigService,
    private router: Router,
    private sanitizer: DomSanitizer,
    public dialog: MatDialog
  ) {
    this.previsualizacion = "assets/images/avatar/guest-user.png";
  }

  ngOnInit(): void {
    // Cambia el title del sitio:
    this._title.setTitle('Fashion Hunter - Crear Cuenta');

    // Obtener imagenes preestablecidas
    /* this.httpService.get(environment.apiUrl + '/user/img')
      .subscribe({
        next: (resp: any) => {
          console.log(resp);
          this.predefinedImgs = resp.data.img;

        },
        error: (error) => {
          console.log(error);

        },
        complete: () => {
          console.log('Done');

        }
      }); */
  }

  // Carga el archivo a subir
  onFileSelected(event: any) {
    const archivoCapturado = event.target.files[0];
    this.extraerBase64(archivoCapturado).then((imagen: any) => {
      this.previsualizacion = imagen.base;
    })
    this.userImg = archivoCapturado;
    return true;
  }

  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };
      return true;
    } catch (e) {
      return null;
    }
  })

  crearCuenta() {

    userData.append("firstName", this.firstName);
    userData.append("lastName", this.lastName);
    userData.append("username", this.username);
    userData.append("email", this.email);
    userData.append("password", this.password);
    userData.append("passwordConfirm", this.passwordConfirm);
    userData.append("userImg", this.userImg);

    this.httpService
      .post(`${environment.apiUrl}/user/user`, userData)
      .subscribe({
        next: (resp) => {
          console.log(resp);

        },
        error: (error) => {
          console.log(error);

        },
        complete: () => {
          console.log('Done');
          this.openDialog();
          // this.router.navigate(['/login']);
        }
      });
  }

  openDialog() {
    this.dialog.open(DialogComponent, {disableClose: true});
  }
}
