import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipesService } from 'src/app/recipes.services';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipelist.component.html'
})
export class RecipeListComponent implements OnInit{
    recipes: Recipe[];

    constructor(private recipesManager: RecipesService) { }

    ngOnInit(){
        this.recipes = this.recipesManager.recipes;
    }
}