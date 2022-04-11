import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog1',
  templateUrl: './dialog1.component.html',
  styleUrls: ['./dialog1.component.css']
})
export class Dialog1Component implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goLogin() {
    this.router.navigate(['/login']);
  }

}
