import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guardadas',
  templateUrl: './guardadas.component.html',
  styleUrls: ['./guardadas.component.css']
})
export class GuardadasComponent implements OnInit {

  constructor(
    private cookies: CookieService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logOut(){
    this.cookies.delete('token');
    this.router.navigateByUrl('/login')
  }

}
