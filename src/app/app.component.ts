import { Component } from '@angular/core';
import {slideInAnimation} from './router.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent {
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
