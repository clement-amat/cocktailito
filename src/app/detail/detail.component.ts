import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Cocktail} from '../domain/cocktail.model';
import {Recipe} from '../domain/recipe.model';
import { Location } from '@angular/common';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @ViewChild('recipePanel') recipePanel: ElementRef;
  public recipe: Recipe;
  public fullscreen = false;
  public  animationState = 'out';

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
    this.recipe = {
      cocktail: {
        id: 3,
        title: 'Blackberry cider fizz',
        category: 'Long drink',
        family: 'Cocktail',
        imageUri: 'https://images.immediate.co.uk/production/volatile/sites/2/2016/08/25171.jpg',
        rate: 4.3,
        description: 'Craft cider is hot right now and it makes a great addition to cocktails like this. ' +
          'Here we\'ve paired it with a seasonal, fuss-free homemade cordial and William\'s Elegant Gin from Chase ' +
          'that\'s distilled from Herefordshire cider apples'
      },
      ingredients: []
    };
  }

  public back(): void {
    this.location.back();
  }

  public onPanUp(event) {
    this.fullscreen = true;
    this.animationState = 'in';
  }

  public onPanDown(event) {
    this.fullscreen = false;
    this.animationState = 'out';
  }

}
