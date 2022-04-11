import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog2',
  templateUrl: './dialog2.component.html',
  styleUrls: ['./dialog2.component.css']
})
export class Dialog2Component implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goLogin() {
    this.router.navigate(['/login']);
  }

}
