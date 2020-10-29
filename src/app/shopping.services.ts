import { EventEmitter, Injectable, Output } from '@angular/core';
import { Ingredient } from './shared/ingredient.model';

@Injectable({providedIn: 'root'})
export class ShoppingService{
    
    @Output() listChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    AddIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.listChanged.emit(this.ingredients);
    }

    AddIngredients(newIngredients: Ingredient[]) {
        newIngredients.map(newIng => {
            var ing = this.ingredients.find(ing => ing.name === newIng.name);
            if(ing === undefined) this.ingredients.push(newIng);
            else    ing.amount += newIng.amount;
        });
        this.listChanged.emit(this.ingredients);
    }
}