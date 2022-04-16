import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../../../css/login.component.css'],
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
  ) { }

  ngOnInit(): void {
    this._title.setTitle('Fashion Hunter - Login');
  }

  // Login clásico

  login() {
    this.loginService.login(this.user)
      .subscribe({
        next: (resp: any) => {
          this.loginService.setToken(resp.token);
          this.loginService.setUserId(resp.userId);
          this.router.navigateByUrl('/home');
        }
      });
  }
}
