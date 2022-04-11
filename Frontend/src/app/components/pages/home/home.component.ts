import { environment } from './../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpConfigService } from '../../../services/http-config.service';
import { delay, of, tap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CrearPublicacionComponent } from '../components/crear-publicacion/crear-publicacion.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  suggestions = [];

  constructor(
    private _title: Title,
    private httpService: HttpConfigService,
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
  }

  ngOnInit(): void {}

  loadSuggestions(): void {
    this.httpService
      .get<any>(`${environment.apiUrl}/user/all-users`, true)
      .subscribe({
        next: (resp: any) => {
          const allUsers = resp.data.users;
          this.suggestions = allUsers.slice(allUsers.length - 5);
        },
        error: (error) => {},
        complete: () => {},
      });
  }

  crearPublicacion() {
    const dialogRef = this.dialog.open(CrearPublicacionComponent, {
      disableClose: false,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }
}
