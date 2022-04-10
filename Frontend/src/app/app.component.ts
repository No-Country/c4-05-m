import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { fadeInAnimation } from './modules/shared/animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../../css/login.component.css'],
  animations: [fadeInAnimation]

})
export class AppComponent {
  constructor(private contexts: ChildrenOutletContexts) {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
