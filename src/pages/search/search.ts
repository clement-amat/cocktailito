import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Keyboard } from "@ionic-native/keyboard";
import {CocktailItem} from "../../models/cocktail.model";
import { DetailComponent } from '../../components/detail/detail';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  searchTerm : string;
  cocktails : CocktailItem[] = [];
  loading : boolean;

  @ViewChild('searchInput') searchInput;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private keyboard : Keyboard) {
  }

  ionViewDidLoad() {
    this.loading = false;
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.searchInput.setFocus();
      this.keyboard.show();
    }, 150);
  }

  onSearchInput() {
    // trigger search
    if (this.searchTerm) {
      this.cocktails.push({name: "Mojito", 
        description : "A on way salsa dance",
        evaluation : 4.2,
        picturePath: "../../assets/imgs/1.png"
      } as CocktailItem);
    } else {
      this.cocktails = [];
    }
  }

  go() {
    this.navCtrl.push(DetailComponent);
  }

}
