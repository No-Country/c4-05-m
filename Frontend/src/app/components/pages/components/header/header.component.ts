import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private cookies: CookieService,
    private router: Router,
  ) { }

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
