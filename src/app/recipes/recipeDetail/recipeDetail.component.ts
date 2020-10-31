import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipesService } from 'src/app/recipes.services';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipeDetail.component.html'
})
export class RecipeDetailComponent implements OnInit{
    recipe: Recipe;
    constructor(private recipeManager: RecipesService, private aRoute:ActivatedRoute){

    }

    ngOnInit(){
        this.aRoute.params.subscribe((params:Params)=> {
            this.recipe = this.recipeManager.getRecipeById(+params["id"]);
        });
    }

    sendToShoppingList(){
        this.recipeManager.AddToShoppingList(this.recipe.getIngredients());
    }
}