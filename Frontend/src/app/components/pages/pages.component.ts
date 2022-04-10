import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { fadeInAnimation } from '../../modules/shared/animations/animations';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
  animations: [fadeInAnimation]
})
export class PagesComponent implements OnInit {

  constructor(private contexts: ChildrenOutletContexts) {}

  ngOnInit(): void {
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

}
