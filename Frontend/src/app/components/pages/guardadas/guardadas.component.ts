import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { LoginService } from '../../../services/login.service';
import { HttpConfigService } from '../../../services/http-config.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-guardadas',
  templateUrl: './guardadas.component.html',
  styleUrls: ['./guardadas.component.css']
})
export class GuardadasComponent implements OnInit {
  currentUser: any;

  constructor(
    private router: Router,
    private _title: Title,
    private loginService: LoginService,
    private httpService: HttpConfigService
  ) {
    const userId = this.loginService.getUserId();
    this.httpService.get<any>(`${environment.apiUrl}/user/${userId}`, true)
      .subscribe({
        next: (resp: any) => {
          this.currentUser = resp.data.user;
        },
        error: error => { },
        complete: () => { }
      });
  }

  ngOnInit(): void {
    this._title.setTitle('Fashion Hunter - Guardadas');
  }

  goHome() {
    this.router.navigate(['/home']);
  }

}
