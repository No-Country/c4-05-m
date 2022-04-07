import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Title } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = {
    username: '',
    password: '',
  };

  constructor(
    private loginService: LoginService,
    public router: Router,
    private _title: Title,
    private cookies: CookieService
  ) {}

  ngOnInit(): void {
    this._title.setTitle('Fashion Hunter - Login');
  }

  // Login clásico

  login() {
    this.loginService.login(this.user)
      .subscribe({
        next: (resp: any) => {
          console.log(resp);

          this.loginService.setToken(resp.token);
          this.cookies.set('username', this.user.username);
          this.router.navigateByUrl('/home');
        }
      });
  }
}
