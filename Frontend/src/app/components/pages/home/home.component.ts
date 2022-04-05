import { environment } from './../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { HttpConfigService } from '../../../services/http-config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  miArray = new Array(5);
  suggestions = [];

  constructor(
    private cookies: CookieService,
    private router: Router,
    private _title: Title,
    private httpService: HttpConfigService
  ) { }

  ngOnInit(): void {
    this._title.setTitle('Fashion Hunter - Home');
    this.httpService.get(`${environment.apiUrl}/user/all-users`, true)
      .subscribe({
        next: (resp: any) => {
          this.suggestions = resp.data.users;
        },
        error: (error) => {
          console.log(error);

        },
        complete: () => {
          console.log('Complete');

        }
      })
  }

  logOut(){
    this.cookies.delete('token');
    this.router.navigateByUrl('/login')
  }

}
