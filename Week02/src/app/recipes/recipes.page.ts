import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model'
import {RecipesService} from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[];
  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
  }

  update(recipeId:string){
    this.recipesService.deleteRecipe(recipeId);
    this.ngOnInit();
  }

  getRecipe(recipeId:string){
    console.log( {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    });
  }

}
