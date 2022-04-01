import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.scss']
})
export class CrearCuentaComponent implements OnInit {

  crearCuentaForm = new FormGroup({
    firstName: new FormControl(null, [
      Validators.required
    ]),
    lastName: new FormControl(null, [
      Validators.required
    ]),
    username: new FormControl(null, [
      Validators.required
    ]),
    email: new FormControl(null, [
      Validators.required
    ]),
    password: new FormControl(null, [
      Validators.required
    ]),
    passwordConfirm: new FormControl(null, [
      Validators.required
    ]),
    userImg: new FormControl(null, [
      Validators.required
    ])
  })

  constructor(
    private titleService: Title
  ) { }

  ngOnInit(): void {
    // Cambia el title del sitio:
    this.titleService.setTitle("Fashion Hunter - Crear Cuenta");
  }

}
