import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListComponent } from '../../components/list/list';
import { DetailComponent } from '../../components/detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public buttonColor : string;

  constructor(public navCtrl: NavController) {
    this.buttonColor = "aucalme";
  }

  public changeColor() {
    this.buttonColor = "danger";
  }

  public go() : void {
    this.navCtrl.push(DetailComponent);
  }

}
