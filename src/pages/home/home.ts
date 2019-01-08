import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailComponent } from '../../components/detail/detail';
import { SearchPage } from '../search/search';
import { CocktailItem } from '../../models/cocktail.model';
import { CocktailServiceProvider } from '../../providers/cocktail-service/cocktail-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public slideCocktails : CocktailItem[] = [];
  public buttonColor : string;
  public showSearchBar : boolean;
  public searchTerm : string;

  constructor(
    public navCtrl: NavController,
    public cocktailService : CocktailServiceProvider) {
    this.buttonColor = "aucalme";
    this.showSearchBar = false;
  }

  public changeColor() {
    this.buttonColor = "danger";
  }

  public ionViewDidLoad() {
    this.cocktailService.getSlideCocktails().subscribe(c => this.slideCocktails = c);
  }

  public go() : void {
    this.navCtrl.push(DetailComponent);
  }

  public searchButtonClick() : void {
    this.navCtrl.push(SearchPage);
  }

}
