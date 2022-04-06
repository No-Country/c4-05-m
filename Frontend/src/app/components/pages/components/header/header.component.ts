import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { HttpConfigService } from '../../../../services/http-config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: any;

  constructor(
    private cookies: CookieService,
    private router: Router,
    private httpService: HttpConfigService
  ) {

    this.httpService.get(`${environment.apiUrl}/user/all-users`, true)
      .subscribe({
        next: (resp: any) => {
          const users = resp.data.users;
          this.user = users.filter((user: any) => user.username === this.cookies.get('username'));
        },
        error: error => { },
        complete: () => { }
      })
  }

  ngOnInit(): void {
  }

  goHome(): void {
    this.router.navigate(['/home']);
  }

  logOut(){
    this.cookies.delete('token');
    this.router.navigateByUrl('/login')
  }

}
