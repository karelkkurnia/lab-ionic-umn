import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes:Recipe[]=[
    {
      id:'r1',
      title:'Gado-gado',
      imageUrl:'https://www.bbcgoodfood.com/sites/default/files/recipe/recipe-image/2016/05/gado-gado-salad.jpg',
      ingredients:['Lontong','Sawi','Bumbu Kecap','Tauge']
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
      ingredients: ['Flour', 'Instant Yeast', 'Sugar', 
      'Salt', 'Warm Water', 'Olive Oil', 'Tomato Ketchup', 'Mozzarella Cheese', 'Basil Leaves']
    },
  ];
  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }
  getRecipe(recipeId:string){
    return{
      ...this.recipes.find(recipe=>{
        return recipe.id===recipeId;
      })
    };
  }

  deleteRecipe(recipeId:string){
    this.recipes=this.recipes.filter(
      recipe=>{
        return recipe.id!==recipeId;
      }
    );
  }
}
