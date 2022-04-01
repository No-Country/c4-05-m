import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../../css/login.component.css']
})
export class LoginComponent implements OnInit {

  username = "";
  password = "";
  email = "";

  constructor(
    private loginService: LoginService,
    public router: Router
  ) { }

  ngOnInit(): void {

  }

  // Login clásico

  login() {
    const user = { username: this.username, password: this.password };
    this.loginService.login(user).subscribe((data: any) => {
      this.loginService.setToken(data.token);
      this.router.navigateByUrl('/');
    });
  }

  // Recuperar contraseña
  onReset() {
    this.loginService.forgotPassword(this.email);
    this.email = '';
  }

}
