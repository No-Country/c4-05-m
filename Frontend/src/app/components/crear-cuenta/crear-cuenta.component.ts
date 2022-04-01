import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { HttpConfigService } from '../../services/http-config.service';

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
    const file = event.target.files[0];
    if (file) {
        this.crearCuentaForm.value.userImg = file;
    }
  }

  crearCuenta() {

    console.log(this.crearCuentaForm);

    const cuenta = {
      firstName: this.crearCuentaForm.value.firstName,
      lastName: this.crearCuentaForm.value.lastName,
      username: this.crearCuentaForm.value.username,
      email: this.crearCuentaForm.value.email,
      password: this.crearCuentaForm.value.password,
      passwordConfirm: this.crearCuentaForm.value.passwordConfirm,
      userImg: this.crearCuentaForm.value.userImg,
    }

    console.log(cuenta);


    this.httpService.post('http://localhost:3000/api/v1/user/user', cuenta)
      .subscribe(res => {
        console.log(res);

      })

  }
}
