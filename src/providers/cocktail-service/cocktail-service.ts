import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CocktailItem } from '../../models/cocktail.model';

@Injectable()
export class CocktailServiceProvider {

  readonly api = "https://lit-sea-59302.herokuapp.com/cocktails"; // TODO use env

  constructor(public http: HttpClient) {
    console.log('Hello CocktailServiceProvider Provider');
  }

  getSlideCocktails() : Observable<CocktailItem[]> {
    return this.http.get<CocktailItem[]>(this.api + "/slide");
  }


}
