import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecipesService } from 'src/app/recipes.services';
import { Recipe } from '../../recipe.model';

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipeItem.component.html'
})
export class RecipeItemComponent{
    @Input() recipe: Recipe;
    @Output() itemClicked = new EventEmitter();

    constructor(private recipeManager: RecipesService){

    }

    OnClick(){
        this.recipeManager.OnSelectingRecipe.emit(this.recipe);
    }
}