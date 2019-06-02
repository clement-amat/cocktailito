import { Component, OnInit } from '@angular/core';
import {Cocktail} from '../domain/cocktail.model';
import {Recipe} from '../domain/recipe.model';
import { Location } from '@angular/common';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public recipe: Recipe;

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
    this.recipe = {
      cocktail: {id: 3, title: 'Blackberry Mojito', category: 'Long drink', family: 'Cocktail',
        imageUri: 'https://www.gogogogourmet.com/wp-content/uploads/2018/05/Blackberry-Mojito-5.jpg', rate: 4.3},
      ingredients: []
    };
  }

  public back(): void {
    this.location.back();
  }

}
