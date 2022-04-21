import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-reset-password-token',
  templateUrl: './reset-password-token.component.html',
  styleUrls: ['./reset-password-token.component.css']
})
export class ResetPasswordTokenComponent implements OnInit {

  constructor(
    private actRoute: ActivatedRoute,
    private cookies: CookieService,
    private router: Router
  ) {
    this.actRoute.paramMap.subscribe({
      next: (resp: any) => {
        this.cookies.set('emailToken', resp['params']['emailToken']);
        this.router.navigateByUrl('/reset-password');
      },
      error: (error: any) => {},
      complete: () => {}
    })
  }

  ngOnInit(): void {
  }

}
