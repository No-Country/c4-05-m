import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { HttpConfigService } from '../../../../services/http-config.service';
import { LoginService } from '../../../../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() user: any;

  constructor(
    private router: Router,
    private httpService: HttpConfigService,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  goHome(): void {
    this.router.navigate(['/home']);
  }

  logOut(){
    this.loginService.logOut();
  }

}
