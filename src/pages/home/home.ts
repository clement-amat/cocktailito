import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListComponent } from '../../components/list/list';
import { DetailComponent } from '../../components/detail/detail';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public buttonColor : string;
  public showSearchBar : boolean;
  public searchTerm : string;

  constructor(public navCtrl: NavController) {
    this.buttonColor = "aucalme";
    this.showSearchBar = false;
  }

  public changeColor() {
    this.buttonColor = "danger";
  }

  public go() : void {
    this.navCtrl.push(DetailComponent);
  }

  public searchButtonClick() : void {
    this.navCtrl.push(SearchPage);
  }

  public onSearchCancel($event) : void{
    this.showSearchBar = false;
  }

  public onSearchInput($event) : void {
    console.log("search");
  }

}
