import { Component, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from 'src/app/shopping.services';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shoppingEdit.component.html'
})
export class ShoppingEditComponent{
    constructor(private shopping: ShoppingService){
    }
    OnClick(name, amount){
        this.shopping.AddIngredient(new Ingredient(name, amount));
    }

}