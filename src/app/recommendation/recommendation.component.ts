import { Component, OnInit } from '@angular/core';
import {Cocktail} from '../domain/cocktail.model';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent implements OnInit {

  recommendations: Cocktail[];

  constructor() { }

  ngOnInit() {
    this.recommendations = [
      {id: 1, title: 'Strawberry Daiquiri', category: 'Long drink', family: 'Cocktail', imageUri: 'https://www.thespruceeats.com/thmb/8cOz3_xeqtXmkWfmtKCtzvM0fmo=/1823x1367/smart/filters:no_upscale()/strawberry-daiquiri-recipes-759821_13_preview1-5b05f448ba61770036fbae90.jpeg', rate: 3.9},
      {id: 2, title: 'Piña Colada', category: 'Long drink', family: 'Coladas', imageUri: 'https://assets.afcdn.com/recipe/20180605/79412_w1024h768c1cx2000cy3000cxt0cyt0cxb4000cyb6000.jpg', rate: 4.3},
      {id: 3, title: 'Blackberry Mojito', category: 'Long drink', family: 'Cocktail', imageUri: 'https://www.gogogogourmet.com/wp-content/uploads/2018/05/Blackberry-Mojito-5.jpg', rate: 4.3}
    ];
  }

}
