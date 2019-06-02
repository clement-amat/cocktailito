import {Cocktail} from './cocktail.model';
import {Ingredient} from './ingredient.model';

export interface Recipe {
  cocktail: Cocktail;
  ingredients: Ingredient[];
}
