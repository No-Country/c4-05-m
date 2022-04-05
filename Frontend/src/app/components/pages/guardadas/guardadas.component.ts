import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-guardadas',
  templateUrl: './guardadas.component.html',
  styleUrls: ['./guardadas.component.css']
})
export class GuardadasComponent implements OnInit {

  constructor(
    private cookies: CookieService,
    private router: Router,
    private _title: Title
  ) { }

  ngOnInit(): void {
    this._title.setTitle('Fashion Hunter - Guardadas');
  }

  logOut(){
    this.cookies.delete('token');
    this.router.navigateByUrl('/login')
  }

}
