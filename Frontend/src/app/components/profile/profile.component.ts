import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpConfigService } from '../../services/http-config.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['../../../../css/profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;
  ocupacion: string;
  biografia: string;

  constructor(
    private httpService: HttpConfigService,
    private loginService: LoginService) { 

      this.ocupacion = "Periodista de moda";
      this.biografia = "La moda no sólo existe en los vestidos.";

    }

  ngOnInit(): void {
    const userId = this.loginService.getUserId();

    this.httpService.get<any>(`${environment.apiUrl}/user/${userId}`, true)
    .subscribe({
      next: (resp: any) => {
        this.user = resp.data.user;
      },
      error: error => { },
      complete: () => { }
    })
  }

}
