import { Component } from '@angular/core';

/**
 * Generated class for the DetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'detail',
  templateUrl: 'detail.html'
})
export class DetailComponent {

  recipeClass : string;
  illustrationClass : string;
  fabClass : string;
  state : string; // TODO ENUM
  

  constructor() {
    this.state = "recipe-down";
    this.recipeClass = "recipe recipe-down"
    this.fabClass = "fab-down";
    this.illustrationClass = "illustration illustration-down";
  }

  showMore() {
    if (this.state == "recipe-down") {
      this.state = "recipe-up";
      this.fabClass = "fab-up";
      this.recipeClass = "recipe recipe-up";
      this.illustrationClass = "illustration illustration-up";
    } else {
      this.state = "recipe-down";
      this.recipeClass = "recipe recipe-down"
      this.fabClass = "fab-down";
      this.illustrationClass = "illustration illustration-down";
    }
    
    
  }

}
