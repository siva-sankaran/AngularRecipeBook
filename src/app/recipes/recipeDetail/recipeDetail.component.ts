import { Component, Input, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/recipes.services';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipeDetail.component.html'
})
export class RecipeDetailComponent implements OnInit{
    @Input() recipe: Recipe;
    constructor(private recipeManager: RecipesService){

    }

    ngOnInit(){
        this.recipeManager.OnSelectingRecipe
        .subscribe(
            (recipe:Recipe) => {
                this.recipe = recipe;
            }
        );
    }

    sendToShoppingList(){
        this.recipeManager.AddToShoppingList(this.recipe.getIngredients());
    }
}