import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpConfigService } from 'src/app/services/http-config.service';
import { LoginService } from 'src/app/services/login.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;

  constructor(private cookies: CookieService,
    private router: Router,
    private httpService: HttpConfigService,
    private loginService: LoginService) {

    }

  ngOnInit(): void {
    const userId = this.loginService.getUserId();

    this.httpService.get<any>(`${environment.apiUrl}/user/${userId}`, true)
    .subscribe({
      next: (resp: any) => {
        this.user = resp.data.user[0];
      },
      error: error => { },
      complete: () => { }
    })
  }

  goBack() {
    window.history.back();
  }

}
