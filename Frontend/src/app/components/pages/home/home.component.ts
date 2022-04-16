import { environment } from './../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpConfigService } from '../../../services/http-config.service';
import { delay, of, tap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CrearPublicacionComponent } from '../components/crear-publicacion/crear-publicacion.component';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  suggestions = [];
  currentUser!: any;
  oculto = true;

  constructor(
    private _title: Title,
    private httpService: HttpConfigService,
    private loginService: LoginService,
    private dialog: MatDialog
  ) {
    this._title.setTitle('Fashion Hunter - Home');

    const observablePattern = of(true).pipe(
      delay(2000),
      tap(() => {
        if (this.suggestions.length === 0) {
          this.loadSuggestions();
        }
      })
    );

    observablePattern.subscribe({
      next: (resp) => {},
      error: (error) => {},
      complete: () => {},
    });

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

  ngOnInit(): void {}

  loadSuggestions(): void {
    this.httpService
      .get<any>(`${environment.apiUrl}/user/all-users`, true)
      .subscribe({
        next: (resp: any) => {
          const allUsers = resp.data.users;
          const resultSuggestion = allUsers.filter((user: any) => {
            return user.username !== this.currentUser.username;
          });
          if (resultSuggestion.length > 5) {
            this.suggestions = resultSuggestion.slice(resultSuggestion.length -5);
          } else {
            this.suggestions = resultSuggestion;
          }
        },
        error: (error) => {},
        complete: () => {},
      });
  }

  crearPublicacion() {
    const dialogRef = this.dialog.open(CrearPublicacionComponent, {
      disableClose: false,
      data: {user: this.currentUser}
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }
}
