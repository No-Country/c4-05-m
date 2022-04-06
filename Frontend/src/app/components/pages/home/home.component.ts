import { environment } from './../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpConfigService } from '../../../services/http-config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  suggestions = [];

  constructor(
    private _title: Title,
    private httpService: HttpConfigService
  ) {

    this._title.setTitle('Fashion Hunter - Home');

    setTimeout(() => {
      if (this.suggestions.length === 0) {
        this.loadSuggestions();
      }
    }, 2000);

  }

  ngOnInit(): void { }

  loadSuggestions(): void {

    this.httpService.get(`${environment.apiUrl}/user/all-users`, true)
      .subscribe({
        next: (resp: any) => {
          console.log(resp);

          this.suggestions = resp.data.users;
        },
        error: (error) => {
          console.log(error);

        },
        complete: () => {
          console.log('Complete');

        }
      });

  }
}
