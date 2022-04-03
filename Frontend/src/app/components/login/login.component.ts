import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    username: "",
    password: ""
  }

  constructor(
    private loginService: LoginService,
    public router: Router) {

  }

  ngOnInit(): void {

  }

  // Login clásico

  login() {
    this.loginService.login(this.user)
      .subscribe((data: any) => {
        this.loginService.setToken(data.token);
        this.router.navigateByUrl('/');
      });
  }

}
