import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private cookies: CookieService,
    private router: Router,
    private _title: Title
  ) { }

  ngOnInit(): void {
    this._title.setTitle('Fashion Hunter - Home');
  }

  logOut(){
    this.cookies.delete('token');
    this.router.navigateByUrl('/login')
  }

}
