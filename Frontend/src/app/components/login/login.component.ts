import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../../css/login.component.css']
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
    this.loginService.login(this.user).subscribe((data: any) => {
      this.loginService.setToken(data.token);
      this.router.navigateByUrl('/');
    });
  }

  // Probando LogOut
  logOut(){
    console.log("delete cookies")
  };
}
