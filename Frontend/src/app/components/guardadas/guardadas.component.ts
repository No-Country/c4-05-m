import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-guardadas',
  templateUrl: './guardadas.component.html',
  styleUrls: ['./guardadas.component.css']
})
export class GuardadasComponent implements OnInit {

  constructor(
    private router: Router,
    private _title: Title
  ) { }

  ngOnInit(): void {
    this._title.setTitle('Fashion Hunter - Guardadas');
  }

  goHome() {
    this.router.navigate(['/home']);
  }

}
