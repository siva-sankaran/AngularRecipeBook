import { EventEmitter, Injectable, Output } from '@angular/core';
import { Recipe } from './recipes/recipe.model';
import { Ingredient } from './shared/ingredient.model';
import { ShoppingService } from './shopping.services';

@Injectable({providedIn: 'root'})
export class RecipesService{

    constructor(private shoppingManager: ShoppingService){

    }
    recipes: Recipe[] = [
        new Recipe(1, 'Dosai', 
        'a tasty breakfast', 
        'https://www.jeyashriskitchen.com/wp-content/uploads/2016/02/mysore-masala-dosai.jpg',
        [new Ingredient("Rice", 2) , new Ingredient("Urad Dal", 4)]),
        new Recipe(2, 'Idly', 
        'another tasty breakfast', 
        'https://4.bp.blogspot.com/-quw-Ozl-WD8/T7BxQ4wxrlI/AAAAAAAAPmI/w-8czP8jfRg/s1600/idly+middle.jpg',
        [new Ingredient("Rice", 2) , new Ingredient("Urad Dal", 4)])
    ];

    AddToShoppingList(ingredients:Ingredient[]){
        this.shoppingManager.AddIngredients(ingredients);
    }

    getRecipeById(id:number){
        return this.recipes.find(r => r.id == id);
    }
}