import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping.services';

@Component({
    selector: 'app-shopping',
    templateUrl: './shopping.component.html'
})
export class ShoppingComponent implements OnInit {
    ingredients: Ingredient[];

    constructor(private shopping: ShoppingService) {
        
    }
    ngOnInit(){
        this.ingredients = this.shopping.getIngredients();
        this.shopping.listChanged.subscribe((ingredients:Ingredient[]) => { this.ingredients = ingredients; })
    }

   
}