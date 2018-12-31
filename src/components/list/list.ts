import { Component } from '@angular/core';

/**
 * Generated class for the ListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'list',
  templateUrl: 'list.html'
})
export class ListComponent {

  list : Array<String> = [];

  constructor() {
    console.log('Hello ListComponent Component');
    
    for (let i = 0 ; i < 10 ; i ++) {
      this.list.push("Item #" + i);
    }
  }

}
