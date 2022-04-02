import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { HttpConfigService } from '../../services/http-config.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.scss'],
})
export class CrearCuentaComponent implements OnInit {
  crearCuentaForm = new FormGroup({
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    username: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    passwordConfirm: new FormControl(null, [Validators.required]),
    userImg: new FormControl(null, [Validators.required]),
  });

  imageFile: any;
  anImage!: any;

  archivos: any = [];

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
    this.archivos.push(archivoCapturado);

    this.crearCuentaForm.value.userImg = this.archivos;

      /* this.imageFile = { id: "0"};
      let reader = new FileReader();
      if (event.target.files && event.target.files.length > 0) {
        let file = event.target.files[0];

        if ( (file.type != "image/jpeg") && (file.type != "image/png")   )    {
          return false;
        }

        reader.readAsDataURL(file);

        reader.onload = () => {
          console.log(reader.result);

          this.anImage = "data:image/png;base64," + reader.result!.toString().split(',')[1];
          this.crearCuentaForm.value.userImg = this.anImage;
        };

      } */
      return true;
  }

  crearCuenta() {

    // console.log(this.crearCuentaForm);
    console.log(this.crearCuentaForm.value.userImg);

    const cuenta = {
      firstName: this.crearCuentaForm.value.firstName,
      lastName: this.crearCuentaForm.value.lastName,
      username: this.crearCuentaForm.value.username,
      email: this.crearCuentaForm.value.email,
      password: this.crearCuentaForm.value.password,
      passwordConfirm: this.crearCuentaForm.value.passwordConfirm,
      userImg: this.crearCuentaForm.value.userImg,
    };

    console.log(cuenta);

    this.httpService
      .post(environment.crearCuentaUrl, cuenta)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
