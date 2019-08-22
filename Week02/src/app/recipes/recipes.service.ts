import { Injectable } from '@angular/core';
import {Recipe} from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Gado-gado',
      imageUrl: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/05/gado-gado-salad.jpg?itok=MTTSriC8',
      ingredients: ['Lontong', 'Sawi', 'Bumbu Kecap', 'Tauge']
    },
    {
      id: 'r2',
      title: 'Ketupat',
      imageUrl: 'https://craftlog.com/m/i/5135432=s1280=h960',
      ingredients: ['Rice', 'Mineral Water', 'Salt', 'Pandan Leaves']
    },
    {
      id: 'r3',
      title: 'Pizza Margerita',
      imageUrl: 'https://www.williams-sonoma.com/wsimgs/ab/images/dp/recipe/201842/0001/img9l.jpg',
      ingredients: ['Flour', 'Instant Yeast', 'Sugar', 'Salt', 'Warm Water', 'Olive Oil', 'Tomato Ketchup', 'Mozzarella Cheese', 'Basil Leaves']
    },
  ];
  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(){
  }

  deleteRecipe(recipeId:string){
    let rec=this.recipes.filter(recipe=>{
      return recipe.id.toLowerCase().indexOf(recipeId.toLowerCase()) >= 0;
    })
    let index = this.recipes.indexOf(rec[0]);

    if(index >= 0){
      this.recipes.splice(index, 1);
    }
  }
}
